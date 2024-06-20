import { FC } from "react";
import { ISvgProps } from "./types";

const AuthIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      stroke='#F8F8F8'
      fill='transparent'
      {...props}
    >
      <path
        d='M21.25 3.217H11.133A1.284 1.284 0 0 0 9.85 4.5v4.17m4.162 9.305h-2.879A1.284 1.284 0 0 1 9.85 16.69v-4.17'
        strokeWidth='.833'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m21.25 17.975-6.34 2.755a.642.642 0 0 1-.898-.588V7.204a1.285 1.285 0 0 1 .772-1.177l6.466-2.81v14.758ZM4.792 12.637a2.042 2.042 0 1 0 0-4.083 2.042 2.042 0 0 0 0 4.083Z'
        strokeWidth='.833'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.562 12.636v-2.04H6.83m4.391 1.177v-1.178'
        strokeWidth='.833'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default AuthIcon;
