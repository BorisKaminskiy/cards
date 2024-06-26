import { FC } from "react";
import { ISvgProps } from "./types";

const PhoneIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      stroke='#512689'
			fill='none'
			{...props}
    >
      <path
        d='M10.554 6.24 7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088 14.556 14.556 0 0 1-5.36-5.367.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465v.001Z'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default PhoneIcon;
