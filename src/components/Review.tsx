import LinkButton from "./LinkButton";
import Rating from "@mui/material/Rating";
import { IoPersonCircleOutline } from "react-icons/io5";
import { REVIEW } from "@/constant/review";

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
      <div className={`flex ${mainContainer}  mx-auto w-full  gap-20`}>
        {arrayData && (
          <div className={`flex  ${containerReview}  px-5 gap-10`}>
            {REVIEW.map((review, index) => (
              <div
                className={`xl:w-[40rem]  gap-5  flex  border-yellow-500 border p-5 ${reviewBox}  justify-center items-center`}
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
