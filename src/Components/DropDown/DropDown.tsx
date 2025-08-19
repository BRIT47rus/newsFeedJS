import React, { FC, HTMLAttributes, ReactNode, RefObject, useEffect, useState } from 'react';
import './DropDown.css';
import { createPortal } from 'react-dom';
interface DropDownProps extends HTMLAttributes<HTMLElement> {
  targetRef: RefObject<HTMLElement | null>;
  children?: ReactNode;
}
const calcCoords = (targetElement: HTMLElement) => {
  const rect = targetElement.getBoundingClientRect();
  return { top: window.scrollY + rect.bottom, right: window.innerWidth - rect.right - window.scrollX };
};

export const DropDown: FC<DropDownProps> = ({ targetRef, children }: DropDownProps) => {
  const [coords, setCoords] = useState({ top: 0, right: 0 });

  useEffect(() => {
    setCoords(calcCoords(targetRef.current as HTMLElement));
  }, []);
  return createPortal(
    <div className="dropdown" style={{ ...coords }}>
      {children}
    </div>,
    document.getElementById('overlay') as HTMLElement,
  );
};
