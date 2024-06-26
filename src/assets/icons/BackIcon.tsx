import { FC } from "react";
import { ISvgProps } from "./types";

const BackIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='7'
      height='14'
			fill='#F8F8F8'
			{...props}
    >
      <path d='M5.837 14.001a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1-.78 1.64Z' />
    </svg>
  );
};

export default BackIcon;
