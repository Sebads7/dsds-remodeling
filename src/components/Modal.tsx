import { IoMdClose } from "react-icons/io";
import ContactForm from "./FormComponents/ContactForm";
import { useBodyOverflow } from "@/hooks/useBodyOverflow";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  useBodyOverflow(true);
  return (
    <div
      className=" w-svw h-svh flex justify-center md:items-center bg-black/80"
      onClick={closeModal}
    >
      <div
        className=" relative   flex flex-col md:justify-center items-center gap-5 shadow-2xl bg-white w-full h-[40rem] max-w-2xl rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          title="Close Modal"
          type="button"
          onClick={closeModal}
          className=" absolute top-10 right-20 text-black hover:text-yellow-500"
        >
          <IoMdClose size={30} />
        </button>
        <h1 className="font-bold text-4xl ">
          Get a <strong className="text-orange-500">Free Quote</strong>
        </h1>
        <h2 className="text-lg max-w-lg">
          Ready to start your home renovation project? Contact us today for a
          free, detailed estimate. You can call us at (404) 641-2994 or fill out
          the form below.
        </h2>
        <div className="w-full ">
          <ContactForm showSelectOption={true} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
