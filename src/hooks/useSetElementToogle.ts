import { useState, useEffect, useRef, RefObject } from 'react'

export const useElementToogle = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
  const elementRef = useRef() as RefObject<HTMLElement>;

  useEffect(() => {
    const chechClickOutside = (e: MouseEvent) => {
		if (
        isOpen &&
        elementRef.current &&
        !elementRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const checkEsc = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", chechClickOutside);
    document.addEventListener("keydown", checkEsc);

    return () => {
      document.removeEventListener("mousedown", chechClickOutside);
      document.removeEventListener("keydown", checkEsc);
    };
	}, [isOpen]);
	
	return {isOpen, setOpen, elementRef}
}