import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import React from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const HoverList = "py-2 px-3 hover:bg-stone-200 cursor-pointer";

interface SelectInputProps {
  value: string | number | null;
  onChange: (value: string | number | null) => void;
  options: { value: string | number; label: React.ReactNode }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | number>(value || "");
  const selectRef = useRef<HTMLDivElement>(null);
  // console.log(selected);

  useEffect(() => {
    setSelected(value || "");
  }, [value]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelect = (option: {
    value: string | number;
    label: React.ReactNode;
  }) => {
    setSelected(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <motion.div
      className={`flex w-full bg-white border    border-neutral-500 focus-visible:ring-stone-400 focus-visible:ring-[1px] focus-visible:outline-none   text-sm  text-neutral-700 h-[2.5rem]  `}
      whileTap={{ scale: 0.97 }}
      ref={selectRef}
    >
      <motion.div
        className=" w-full transition z-50 "
        initial={true}
        animate={isOpen ? "open" : "closed"}
      >
        {isOpen && (
          <div className=" relative top-10 mobile:translate-y-0  tablet:translate-y-[-14.4rem] z-[2] ">
            <motion.div
              className="absolute w-full  mt-1 border bg-white border-neutral-500  shadow-2xl  "
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.ul
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                className="  cursor-pointer  "
              >
                {options.map((option, index) => (
                  <motion.li
                    variants={itemVariants}
                    key={option.value}
                    className={
                      index === 0
                        ? `  ${HoverList}`
                        : index === options.length - 1
                        ? `  ${HoverList}`
                        : HoverList
                    }
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        )}

        <motion.div
          className="relative flex items-center w-full h-full  px-2.5 cursor-pointer focus:border-neutral-600 focus:border-2    "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-full border-none ring-white z-50   ${
              selected ? "text-black" : " text-slate-500"
            }`}
          >
            {selected
              ? options.find((option) => option.value === selected)?.label
              : "Select a rating"}
          </div>
          <motion.div
            className="cursor-pointer z-50"
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SelectInput;
