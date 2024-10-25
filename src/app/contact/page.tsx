import ContactInfo from "./ContactInfo";

const ContactPage = () => {
  return (
    <div className="h-full py-20 bg-[#F6F5F2] ">
      <h1 className=" text-center font-bold text-2xl md:text-4xl ">CONTACT</h1>

      <div className="  mx-auto px-5 md:px-0 md:p-10">
        <h2 className="text-2xl font-semibold text-center  md:px-10 bg-yellow-600 text-white p-2 w-fit mx-auto">
          Are You Looking For Highly Rated Home Remodeling Contractors Near You?
        </h2>
        <p className="text-xl font-semibold leading-9 px-5 md:px-0 md:w-[60rem] mx-auto pt-10 ">
          We offer a wide range of services. Our Home Remodeling services is
          exactly what you&apos;re looking for.
          <span className=" text-yellow-600 font-extrabold ml-1  ">
            Reach out to us today to bring your vision to life with out expert
            craftsmanship and personalized service.
          </span>{" "}
        </p>
      </div>

      <div className="relative pt-5">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
