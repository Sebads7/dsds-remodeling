import ContactInfo from "./ContactInfo";

import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="h-full pt-10 bg-[#F6F5F2] ">
      <div className=" ml-[15rem] mr-[10rem] relative  pt-10 pb-20 ">
        <div className="w-[35rem] h-full absolute top-0 left-0 -z-0 bg-yellow-600/70 "></div>
        <div className="flex flex-col justify-center w-[35rem] px-10 h-full  z-10 ">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl pb-20 z-10 text-center  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]   ">
            CONTACT
          </h1>
          <h2 className="text-3xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]   leading-[3.5rem]  text-white z-10 pl-5">
            Are You Looking For Highly Rated Home Remodeling Contractor Near
            You?
          </h2>
        </div>

        <div className="absolute top-0 right-[5.5rem] opacity-25">
          <Image
            src="/images/remo-contractor.jpg"
            width={450}
            height={550}
            alt="image"
            className="border-[1rem] rounded-tr-[10rem]  border-gray-200 w-[30rem] h-[20rem]"
          />
        </div>
        <div className="flex justify-center items-center w-full h-full py-20 z-10  ">
          <div className="w-2/4 h-full flex justify-end z-10  ">
            <Image
              src="/images/contractor.jpeg"
              width={300}
              height={800}
              alt="hero-background"
              className="w-[35rem] rounded-bl-[10rem] h-[28rem] border-[1rem] border-gray-200"
            />
          </div>
          <div className="w-[30rem] h-[28rem] pl-5 pr-10 bg-gray-200 flex justify-center items-center ">
            <p className="text-2xl font-light leading-[3rem]   bg-gray-200">
              We offer a wide range of services. Our Home Remodeling services is
              exactly what you&apos;re looking for.
              <span className=" text-yellow-600 font-extrabold ml-1  ">
                Reach out to us today to bring your vision to life with out
                expert craftsmanship and personalized service.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative pt-5 h-[40rem]">
        <div className="absolute top-0 h-[2rem] w-full bg-yellow-600/90 z-[2]"></div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
