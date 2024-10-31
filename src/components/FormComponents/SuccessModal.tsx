import React from "react";

type SuccessModalProps = {
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
};

const SuccessModal: React.FC<SuccessModalProps> = ({
  setShowSuccessModal,
  message,
}) => {
  return (
    <>
      <div className="fixed w-full h-full top-0 -translate-y-3 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999999]">
        <div className="flex flex-col bg-white p-8 py-14 gap-5 rounded shadow-lg max-w-lg mx-4 mt-0">
          <div className="flex flex-col justify-center items-center gap-3">
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
                stroke="#a7af55"
                strokeWidth="6"
                strokeMiterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                className="path check"
                fill="none"
                stroke="#a7af55"
                strokeWidth="6"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
              />
            </svg>
            <h2 className=" w-full  text-xl font-bold mb-4 text-center text-[#a7af55]">
              Thank you!
            </h2>
          </div>

          <p className=" font-semibold text-[#a7af55] w-[25rem] text-center">
            {message}
          </p>
          <button
            className="w-2/4 mx-auto mt-4 px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600"
            onClick={() => setShowSuccessModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
