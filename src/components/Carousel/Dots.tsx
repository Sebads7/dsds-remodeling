type Props = {
  activeIndex: number;
  index: number;
  elmPerPge: number;
  handleDotClick: (index: number) => void;
};

const Dots: React.FC<Props> = ({
  activeIndex,
  index,
  elmPerPge,
  handleDotClick,
}) => {
  return (
    <>
      <div
        className={` rounded-full cursor-pointer ${
          activeIndex === index * elmPerPge
            ? "bg-yellow-600 w-8 h-4"
            : "bg-gray-300 w-6 h-3"
        }`}
        onClick={() => handleDotClick(index)}
      ></div>
    </>
  );
};

export default Dots;
