import Rating from "@mui/material/Rating";
import { IoPersonCircleOutline } from "react-icons/io5";
import { REVIEW } from "@/constant/review";
import LinkButton from "../LinkButton";

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
  fetchedData,
  arrayData,
}: Props) => {
  return (
    <>
      <div className={`flex ${mainContainer}  mx-auto w-full gap-5  md:gap-20`}>
        {arrayData && (
          <div className={`flex  ${containerReview}   md:gap-10`}>
            {REVIEW.map((review, index) => (
              <div
                className={`xl:w-[40rem]  md:gap-5  flex flex-col md:flex-row  border-yellow-500 md:border p-2 md:p-5 ${reviewBox}  justify-center items-center`}
                key={index}
              >
                <ul className="text-center   p-5">
                  <li className="font-bold flex items-center gap-2   ">
                    <span>
                      <IoPersonCircleOutline size={30} />
                    </span>
                    {review.name}
                    <Rating name="read-only" value={5} readOnly className="" />
                  </li>
                  <li className="text-muted-foreground text-left text-sm md:text-base">
                    {review.description}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {linkButton && (
          <LinkButton href="/testimonials" name="View All Our Testimonials" />
        )}

        {fetchedData && <div></div>}
      </div>
    </>
  );
};

export default Review;
