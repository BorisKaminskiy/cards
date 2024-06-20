import { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Image.module.scss";

interface IImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
	isRounded?: boolean;
	isCovered?: boolean
	
}

const Image: FC<IImageProps> = ({ src, alt, isRounded, isCovered, ...props }) => {
  return (
    <>
      <img
        style={{
          borderRadius: isRounded ? "50%" : "none",
					objectFit: isCovered ? "cover" : "contain",
					
        }}
        src={src}
        className={cn(styles.root)}
        alt={alt}
        {...props}
      />
    </>
  );
};

export default Image;
