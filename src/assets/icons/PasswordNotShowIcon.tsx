import { FC } from "react";
import { ISvgProps } from "./types";

const PasswordNotShowIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      stroke='#808185'
      fill='transparent'
      {...props}
    >
      <path
        d='M10.73 5.073A10.96 10.96 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.595 11.595 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52M9.88 9.88a3 3 0 1 0 4.243 4.243'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='m4 4 16 16' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  );
};

export default PasswordNotShowIcon;
