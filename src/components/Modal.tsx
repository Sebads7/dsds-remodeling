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
      className=" w-svw  h-svh flex justify-center items-center  bg-black/75 backdrop-filter backdrop-brightness-75 backdrop-blur-md"
      onClick={closeModal}
    >
      <button
        title="Close Modal"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="absolute top-20 right-20 text-white"
      >
        <IoMdClose size={30} />
      </button>
      <div
        className="w-2/4 py-20 flex flex-col justify-center items-center bg-white "
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="font-bold text-3xl pb-20">Contact Us</h1>
        <div>
          <ContactForm showSelectOption={true} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
