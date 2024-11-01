"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SelectInput from "./SelectInput";
import SuccessModal from "./SuccessModal";

//  COMPONENTS type.
type ContactFormProps = {
  showTextInput?: boolean;
  showSelectOption?: boolean;
  checkBox?: boolean;
};

const ContactForm: React.FC<ContactFormProps> = ({
  showTextInput = false,
  showSelectOption = false,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      })
      .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, {
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
    },
  });

  // Define a submit handler.
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log("Form Values:", value);

    setSubmitting(true);
    setSubmitError("");

    try {
      // Direct validation in submit handler
      const isValid = await form.trigger();
      if (!isValid) {
        setSubmitting(false);
        setSubmitError("Please fill out all required fields.");
        return;
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with status ${response.status}: ${errorText}`
        );
      }

      console.log("Email sent successfully");
      form.reset();
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("Error sending email. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full  z-10 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8   ">
          <div className="grid grid-cols-2 pb-3 gap-5  xl:px-32 m-0 max-w-md lg:max-w-4xl mx-auto md:w-full  z-10 ">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className=" ">
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
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
                      type="tel"
                      placeholder="Phone Number"
                      {...field}
                      pattern="\d*" // Only allows numeric values
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/\D/g, ""); // Only allow numeric characters
                        field.onChange(target.value); // Updates the form state
                      }}
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
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="City" {...field} />
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
                  <FormItem className=" md:col-span-2 ">
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
              className={` rounded-none w-full relative xs:text-sm lg:text-base z-0 bg-yellow-500 hover:bg-yellow-600 ${
                showTextInput ? "col-span-2 h-12" : "col-span-1 h-10"
              } `}
              disabled={submitting}
            >
              {/* LOADING ICON */}
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
              {submitting ? "Sending..." : "Submit"}
            </Button>
          </div>

          {/* Success Modal Component */}
          {showSuccessModal && (
            <>
              <SuccessModal
                setShowSuccessModal={setShowSuccessModal}
                message="    Your form has been submitted successfully. We will contact you
            shortly!"
              />
            </>
          )}

          {submitError && (
            <div className="text-red-500  text-center">{submitError}</div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
