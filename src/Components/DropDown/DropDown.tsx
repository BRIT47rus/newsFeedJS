import React, { FC, HTMLAttributes, RefObject, useEffect, useState } from 'react';
import './DropDown.css';
import { createPortal } from 'react-dom';
import throttle from 'lodash.throttle';
import classNames from 'classnames';
interface DropDownProps extends HTMLAttributes<HTMLElement> {
  targetRef: RefObject<HTMLElement | null>;

  shown: boolean;
  onShownChange: (shown: boolean) => void;
}
const calcCoords = (targetElement: HTMLElement) => {
  const rect = targetElement.getBoundingClientRect();
  return { top: window.scrollY + rect.bottom + 12, right: window.innerWidth - rect.right - window.scrollX };
};

export const DropDown: FC<DropDownProps> = ({
  targetRef,
  children,
  shown,
  onShownChange,
  className,
  style,
  ...restProps
}: DropDownProps) => {
  const [coords, setCoords] = useState({ top: 0, right: 0 });

  useEffect(() => {
    setCoords(calcCoords(targetRef.current as HTMLElement));
  }, []);
  useEffect(() => {
    onShownChange(shown);
  }, [shown, onShownChange]);

  useEffect(() => {
    const documentClickedList = () => {
      onShownChange(false);
    };
    const windowResizeList = throttle(() => {
      setCoords(calcCoords(targetRef.current as HTMLElement));
    }, 100);

    if (shown) {
      document.addEventListener('click', documentClickedList);
      window.addEventListener('resize', windowResizeList);
    }
    return () => {
      document.removeEventListener('click', documentClickedList);
      window.removeEventListener('resize', windowResizeList);
    };
  }, [onShownChange, shown]);

  return shown
    ? createPortal(
      <div className={classNames('dropdown', className)} style={{ ...style, ...coords }} {...restProps}>
        {children}
      </div>,
        document.getElementById('overlay') as HTMLElement
    )
    : null;
};
