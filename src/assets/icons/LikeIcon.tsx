import { FC } from "react";
import { ISvgProps } from "./types";

const LikeIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='14'
      stroke='#151317'
			fill='none'
			{...props}
    >
      <path
        d='M4.85 1A3.848 3.848 0 0 0 1 4.845C1 8.691 5.55 12.187 8 13c2.45-.813 7-4.309 7-8.155A3.848 3.848 0 0 0 11.15 1 3.847 3.847 0 0 0 8 2.634 3.844 3.844 0 0 0 4.85 1Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default LikeIcon;
