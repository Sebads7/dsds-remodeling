import Rating from "@mui/material/Rating";
import { REVIEW } from "@/constant/review";
import LinkButton from "../LinkButton";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  linkButton?: boolean;
  containerReview?: string;
  mainContainer?: string;
  reviewBox?: string;
  fetchedData?: boolean;
  arrayData?: boolean;
};

const Review = ({
  linkButton,
  containerReview,
  mainContainer,
  reviewBox,
  arrayData,
}: Props) => {
  return (
    <>
      <div
        className={`flex ${mainContainer}  mx-auto w-full gap-5  md:gap-20 px-5 md:px-10`}
      >
        {arrayData && (
          <div className={`flex  ${containerReview}   md:gap-10`}>
            {/* {REVIEW.map((review, index) => (
              <div
                className={` md:max-w-xl  xl:max-w-2xl  md:gap-5  flex flex-col lg:flex-row  bg-neutral-50 shadow-2xl rounded-lg md:border p-2 md:p-5 ${reviewBox}  justify-center items-center`}
                key={index}
              >
                <ul className="text-center   p-3">
                  <li className="font-bold flex flex-col  items-center gap-2   ">
                    <span>
                      <Image
                        className="size-10  [filter:drop-shadow(2px_-2px_2px_rgba(155,155,155,0.3))]"
                        width={1200}
                        height={1200}
                        src="/reviews/rating2.png"
                        loading="eager"
                        color="black"
                        alt="user-icon"
                      />
                    </span>
                    {review.name}
                    <Rating
                      name="read-only"
                      value={5}
                      readOnly
                      precision={0.5}
                      className="text-amber-500"
                    />
                  </li>
                  <li className="text-muted-foreground text-left text-sm md:text-base">
                    {review.description}
                  </li>
                </ul>
              </div>
            ))} */}
            <Carousel
              className="w-full "
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
            >
              <CarouselContent className="px-10 py-5 w-full gap-5 max-w-lg lg:max-w-3xl">
                {REVIEW.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className={`shadow-md max-w-sm md:max-w-lg lg:max-w-none rounded-lg  lg:w-[30rem] bg-neutral-50 md:border p-2 md:p-5 ${reviewBox} `}
                  >
                    <ul className="text-center   p-3">
                      <li className="font-bold flex flex-col  items-center gap-2   ">
                        <span>
                          <Image
                            className="size-10  [filter:drop-shadow(2px_-2px_2px_rgba(155,155,155,0.3))]"
                            width={1200}
                            height={1200}
                            src="/reviews/rating2.png"
                            loading="eager"
                            color="black"
                            alt="user-icon"
                          />
                        </span>
                        {review.name}
                        <Rating
                          name="read-only"
                          value={5}
                          readOnly
                          precision={0.5}
                          className="text-amber-600  -translate-y-1"
                        />
                      </li>
                      <li className="text-muted-foreground text-left text-sm md:text-base pt-2">
                        {review.description}
                      </li>
                    </ul>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-4">
                <CarouselDots />
              </div>
            </Carousel>
          </div>
        )}

        {linkButton && (
          <LinkButton
            href="/testimonials"
            name="Read More Reviews"
            className="bg-amber-600 hover:bg-amber-600/90 hover:shadow-lg text-white"
          />
        )}
      </div>
    </>
  );
};

export default Review;
