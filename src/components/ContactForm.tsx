"use client";
import React, { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "./ui/checkbox";
import { z } from "zod";
import SelectInput from "./SelectInput";

const apiUrl = "http://localhost:3000/api/contact";

//  COMPONENTS type.
type ContactFormProps = {
  showTextInput?: boolean;
  showSelectOption?: boolean;
  modalButton?: boolean;
  secondButton?: boolean;
  checkBox?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  showTextInput = false,
  showSelectOption = false,
  modalButton = false,
  secondButton = false,
  checkBox = false,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const formSchema = z.object({
    fullname: z.string().min(2, {
      message: "Please enter your full name.",
    }),
    phonenumber: z
      .string()
      .min(10, {
        message: "Please enter a valid phone number.",
      })
      .max(14, {
        message: "Please enter a valid phone number.",
      }),
    city: z.string().min(2, {
      message: "Please enter your city.",
    }),
    emailAddress: z.string().email({
      message: "Please enter a valid email address.",
    }),
    ...(showSelectOption && {
      selectOption: z.string().min(1, {
        message: "Please select an option.",
      }),
    }),
    ...(showTextInput && {
      textarea: z.string().min(2, {
        message: "Please enter your message.",
      }),
    }),

    ...(checkBox && {
      checkbox: z
        .boolean()
        .refine((val) => val === true, "You must agree to the terms."),
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phonenumber: "",
      city: "",
      emailAddress: "",
      ...(showSelectOption && { selectOption: "" }),
      ...(showTextInput && { textarea: "" }),
      ...(checkBox && { checkbox: false }),
    },
  });

  // Define a submit handler.
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    // console.log(value);
    // console.log(form.getValues());
    // Send the data.
    setSubmitting(true);

    const isValid = await form.trigger();

    console.log(isValid);

    if (!isValid) {
      console.log(form.formState.errors);
      setSubmitting(false);
      // setSubmitError("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      if (response.ok) {
        console.log("Email sent successfully");
        setShowSuccessModal(true);
        form.reset();
        setSubmitting(false);
      } else {
        throw new Error("Server is not responding");
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      form.reset();
      // console.log(form.getValues());
      // console.log(error);
      setSubmitError("Error sending email");
    }
  };

  return (
    <div className=" w-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8   ">
          <div className="grid grid-cols-2 mobile:flex tablet:flex-col pb-3 gap-5 px-10 m-0 w-full   ">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      className="mobile:text-xs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="City"
                      {...field}
                      className="mobile:text-xs"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {showTextInput && (
              <FormField
                control={form.control}
                name="textarea"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormControl>
                      <Textarea
                        placeholder="Please, enter your message"
                        className="h-[200px] mobile:text-xs"
                        {...field}
                        value={field.value as string} // explicitly set the type of the value property to string
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {showSelectOption && (
              <FormField
                control={form.control}
                name="selectOption"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SelectInput
                        value={field.value as string}
                        onChange={field.onChange}
                        options={[
                          "Carpentry",
                          "Painting",
                          "Bathroom Remodeling",
                          "Kitchen Remodeling",
                          " General Remodeling",
                        ]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <Button
              type="submit"
              className={` ${
                secondButton
                  ? "bg-red-600 hover:bg-red-800 rounded-none"
                  : modalButton
                  ? ""
                  : "h-[50px] col-span-2 relative"
              } ${submitting ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={submitting}
            >
              {submitting && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              {submitting
                ? "Sending..."
                : secondButton
                ? "Start Saving Today"
                : "Submit"}
            </Button>
          </div>

          {checkBox && (
            <div className="flex justify-center  w-full px-10 mt-10 ">
              <FormField
                control={form.control}
                name="checkbox"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        className=" mr-2 w-[1rem] h-[1rem]"
                        required
                        onCheckedChange={onChange}
                        checked={value as boolean}
                      />
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
              <a
                className=" hidden tablet:flex mobile:text-xs underline "
                onClick={openModal}
              >
                Click to check agreement
              </a>
              <label
                htmlFor="checkbox"
                className=" text-xs tablet:hidden flex "
              >
                I’m interested in learning more about ABJ Remodeling and its
                services. By checking this box, I consent and authorize ABJ
                Remodeling to contact me via phone call or text message. ABJ
                Remodeling may use any of the telephone numbers I have provided
                for these communications.
              </label>
            </div>
          )}

          {/* Modal Component */}
          {isModalOpen && (
            <div className="fixed w-full translate-y-[-2rem] h-full top-0 inset-0 mt-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-8 rounded shadow-lg max-w-lg mx-4 mt-0">
                <h2 className="text-xl font-bold mb-4">Agreement</h2>
                <p>
                  I’m interested in learning more about ABJ Remodeling and its
                  services. By checking this box, I consent and authorize ABJ
                  Remodeling to contact me via phone call or text message. ABJ
                  Remodeling may use any of the telephone numbers I have
                  provided for these communications.
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-950 text-white rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Success Modal Component */}
          {showSuccessModal && (
            <div className="fixed w-full h-full top-0 -translate-y-3 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="flex flex-col bg-white p-8 py-14 gap-5 rounded shadow-lg max-w-lg mx-4 mt-0">
                <div className="flex flex-col justify-center items-center gap-3">
                  {" "}
                  <svg
                    width="60px"
                    height="60px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 130.2 130.2"
                  >
                    <circle
                      className="path circle"
                      fill="none"
                      stroke="#73AF55"
                      stroke-width="6"
                      stroke-miterlimit="10"
                      cx="65.1"
                      cy="65.1"
                      r="62.1"
                    />
                    <polyline
                      className="path check"
                      fill="none"
                      stroke="#73AF55"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="100.2,40.2 51.5,88.8 29.8,67.5 "
                    />
                  </svg>
                  <h2 className="text-xl font-bold mb-4 text-center text-[#73AF55]">
                    Thank you!
                  </h2>
                </div>

                <p className="text-center">
                  Your form has been submitted successfully. We will contact you
                  shortly!
                </p>
                <button
                  className="w-2/4 mx-auto mt-4 px-4 py-2 text-white rounded bg-black"
                  onClick={() => setShowSuccessModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {submitError && <div className="text-red-500">{submitError}</div>}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
