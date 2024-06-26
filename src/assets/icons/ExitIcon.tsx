import { FC } from "react";
import { ISvgProps } from "./types";

const ExitIcon: FC<ISvgProps> = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
			fill='#F8F8F8'
			{...props}
    >
      <path d='M7.79 13.29c.39.39 1.02.39 1.41 0l3.59-3.59a.995.995 0 0 0 0-1.41L9.2 4.7a.997.997 0 1 0-1.41 1.41L9.67 8H1c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41ZM16 0H2a2 2 0 0 0-2 2v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Z' />
    </svg>
  );
};

export default ExitIcon;
