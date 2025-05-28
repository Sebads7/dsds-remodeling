import { BANNER } from "@/constant/banner";
import { Scale_1 } from "@/constant/framer_effects";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className=" shadow-2xl bg-orange-50  z-[10] text-stone-600 py-2 text-center font-bold text-base md:text-xl overflow-hidden ">
        <motion.div variants={Scale_1} initial="initial" animate="animate">
          <div className=" flex gap-[20rem]  whitespace-nowrap animate-mobilemarque md:animate-marque hover:pause ">
            {BANNER.map((banner, index) => (
              <div key={index} className="flex  ">
                <p>{banner.title}</p>
                <Link href="contact" className="underline px-2 text-orange-500">
                  {banner.contact}
                </Link>
                <p>{banner.more}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
