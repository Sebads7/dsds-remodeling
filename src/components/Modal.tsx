import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import ContactForm from "./ContactForm";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div
      className=" w-svw  h-svh flex justify-center items-center bg-black/20"
      onClick={closeModal}
    >
      <div
        className=" relative w-2/4 px-20 py-40 flex flex-col justify-center items-center gap-10 shadow-2xl bg-white "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          title="Close Modal"
          type="button"
          onClick={closeModal}
          className=" absolute top-20 right-20 text-black hover:text-yellow-500"
        >
          <IoMdClose size={30} />
        </button>
        <h1 className="font-bold text-3xl ">
          Get a <strong className="text-yellow-500">Free</strong> Quote
        </h1>
        <h2 className="text-lg">
          Call us at
          <strong className="text-white bg-yellow-500 py-1 px-2 ml-1">
            (404) 641-2994
          </strong>{" "}
          or fill out the form below
        </h2>
        <div className="w-full ">
          <ContactForm showSelectOption={true} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
