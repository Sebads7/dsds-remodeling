import { motion } from "framer-motion";
import ServicesGrid from "@/components/ServicesGrid";
import { SERVICES_DATA } from "@/constant/services-data";
import useInViewAnimation from "@/hooks/useView";
import { Scale_1, Scale_2 } from "@/constant/framer_effects";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";

const Services = () => {
  const { ref: gridRef, mainControls: gridControls } = useInViewAnimation();
  return (
    <>
      <section className=" w-full h-full  bg-light-bg py-10 md:py-32  z-[10] text-main-dark">
        <h3 className="text-center font-bold text-3xl md:text-5xl mb-5 ">
          OUR SERVICES
        </h3>
        <p className="text-center  text-base md:text-lg px-10 pb-10 md:pb-20 max-w-3xl mx-auto">
          From small repairs to complete home renovations, we provide
          comprehensive services to meet all your home improvement needs.
        </p>

        <div className="px-10 lg:px-20  flex flex-col w-full ">
          <motion.div
            className="h-full  justify-center gap-10 hidden xl:flex w-full"
            ref={gridRef}
            variants={Scale_1}
            initial="initial"
            animate={gridControls}
          >
            {SERVICES_DATA.map((service, index) => (
              <ServicesGrid
                service={service}
                key={index}
                imageTitle={true}
                imageSrc={service.image}
              />
            ))}
          </motion.div>
          <div className="xl:hidden  md:flex md:justify-center ">
            <Carousel>
              <CarouselContent>
                {SERVICES_DATA.map((service, i) => (
                  <CarouselItem
                    key={i}
                    className="max-w-sm md:max-w-md  md:px-5 py-10"
                  >
                    <ServicesGrid
                      service={service}
                      imageTitle={true}
                      imageSrc={service.image}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div>
                <CarouselDots />
              </div>
            </Carousel>
          </div>

          <motion.div
            className=" border  z-10  rounded-md w-full lg:max-w-[101rem] mx-auto mt-10 shadow-xl h-[20rem]   bg-white overflow-hidden text-main-dark "
            ref={gridRef}
            variants={Scale_2}
            initial="initial"
            animate={gridControls}
          >
            <div className="flex h-full z-10   items-center">
              <div className="flex flex-col items-center py-5 md:py-0 gap-3 lg:gap-5 w-full  text-center  text-main-dark ">
                <div className="flex flex-col lg:flex-row items-center gap-3">
                  <Image
                    className="size-14 "
                    src="/images/services/calculator_4308053.png"
                    alt="image-1"
                    width={1000}
                    height={1200}
                  />
                  <h3 className="text-center text-xl md:text-3xl font-bold ">
                    GET A FREE ESTIMATE
                  </h3>
                </div>

                <p className="px-5 md:px-20 max-w-md lg:max-w-xl  text-md md:text-base">
                  Call us today at{" "}
                  <strong className="text-orange-500"> 404-641-2994</strong> for
                  a free consultation! We&apos;ll work with you to create a plan
                  that fits your budget and timeline.
                </p>
                <div className="mt-2 lg:mt-0 gap-5">
                  <LinkButton
                    href="ourservices"
                    name=" Learn More About Our Services"
                    className="bg-amber-500 text-white hover:bg-amber-500/90 hover:shadow-md"
                  />
                </div>
              </div>
              <Image
                className="lg:w-full hidden lg:block right-0 hover:scale-[1.01] image-hover bg-black hover:opacity-90 "
                src="/images/home-remo/home-rem1.jpg"
                alt="image-1"
                width={1000}
                height={1200}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
