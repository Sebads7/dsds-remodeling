import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import React from "react";
import ContactForm from "@/components/FormComponents/ContactForm";
import { AnimationControls, motion } from "framer-motion";
import { LeftLoading, RightLoading } from "@/constant/framer_effects";
import { Clock, Map, Phone } from "lucide-react";

interface ContactInfoProps {
  contactControls: AnimationControls;
}

const ContactData = [
  {
    icon: <Phone className="size-6 text-amber-600" />,
    label: "Phone",
    value: "404-641-2994",
  },
  {
    icon: <MdEmail className="size-6 text-amber-600" />,
    label: "Email",
    value: "dsdsatlanta@gmail.com",
  },
  {
    icon: <Map className="size-6 text-amber-600" />,
    label: "Service Area",
    value: "Atlanta, GA",
  },
  {
    icon: <Clock className="size-6 text-amber-600" />,
    label: "Business Hours",
    value: "Monday - Friday: 9am - 5pm",
  },
];

const ContactInfo: React.FC<ContactInfoProps> = ({ contactControls }) => {
  return (
    <>
      <div className="lg:grid grid-cols-2 lg:pt-20 xl:pl-20 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <motion.div
          className=" text-banner-color  z-10 px-3   md:w-9/12 mx-auto "
          variants={LeftLoading}
          initial="initial"
          animate={contactControls}
        >
          <div className="flex flex-col  justify-center max-w-md  ml-8 mx-auto lg:ml-0 mt-2  gap-5   lg:w-full  lg:pt-10 ">
            <p className="pb-1 font-bold text-xl text-banner-color">
              Contact Information
            </p>
            {ContactData.map((data, i) => (
              <div className="flex items-center gap-2" key={i}>
                <div className="bg-orange-50 rounded-full p-3">{data.icon}</div>
                <p className="flex flex-col font-semibold">
                  {data.label}
                  <span className="text-amber-600">{data.value}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="border bg-amber-50 rounded-sm p-2 mt-8 max-w-md mx-auto">
            <p className="text-sm md:text-base text-neutral-600">
              If you have any questions or would like to schedule a
              consultation, please fill out the form on the right or contact us
              directly at the phone number or email provided.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="!z-[50] pt-10 lg:pt-0  "
          variants={RightLoading}
          initial="initial"
          animate={contactControls}
        >
          <ContactForm showTextInput={true} />
        </motion.div>
      </div>
    </>
  );
};

export default ContactInfo;
