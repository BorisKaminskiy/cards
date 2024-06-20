import { FC } from "react";
import { ISvgProps } from "./types";

const EmailIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='#512689'
      {...props}
    >
      <path d='M21 4.5H3A1.5 1.5 0 0 0 1.5 6v12A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 21 4.5ZM19.35 6 12 11.085 4.65 6h14.7ZM3 18V6.683l8.572 5.932a.75.75 0 0 0 .856 0L21 6.682V18H3Z' />
    </svg>
  );
};

export default EmailIcon;
