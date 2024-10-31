import ContactInfo from "./ContactInfo";

import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="h-full pt-10 bg-[#F6F5F2] ">
      <div className=" ml-[15rem] h-full  grid grid-cols-2   ">
        <div className="flex flex-col pt-10  w-[35rem] px-10 h-full  z-10 bg-yellow-600 ">
          <h1 className="text-white font-extrabold text-2xl md:text-4xl pb-10 z-10 text-center  drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)]   ">
            CONTACT
          </h1>
          <h2 className="text-3xl font-semibold drop-shadow-[0_.2px_.6px_rgba(0,0,0,0.8)]   leading-[3.5rem]  text-white z-10 pl-5">
            Are You Looking For Highly Rated Home Remodeling Contractor Near
            You?
          </h2>
        </div>

        <div className="absolute top-[33rem] left-[10rem]  z-10 ">
          <Image
            src="/images/remo-contractor.jpg"
            width={450}
            height={550}
            alt="image"
            className="border-[1rem] rounded-bl-[10rem]  border-gray-200 w-[33rem] h-[22rem]"
          />
        </div>

        <div className="h-full py-20 px-20  z-10  -translate-x-20 ">
          <Image
            src="/images/contractor.jpeg"
            width={300}
            height={800}
            alt="hero-background"
            className="w-full h-[25rem] border-[1rem] border-gray-200 rounded-tr-[10rem]"
          />
          <div className=" px-10 py-5 bg-gray-200 ">
            <p className="text-2xl font-extralight leading-[2.8rem]   bg-gray-200">
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
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
