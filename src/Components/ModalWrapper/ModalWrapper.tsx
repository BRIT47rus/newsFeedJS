import { createPortal } from 'react-dom';
import './ModalWrapper.css';
import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
interface ModalProps extends HTMLAttributes<HTMLElement> {
  alignX: 'start' | 'end' | 'center';
  alignY: 'start' | 'end' | 'center';
}
export const ModalWrapper: FC<ModalProps> = ({ children, alignX, alignY, className, ...restProps }) => {
  return createPortal(
    <div
      {...restProps}
      className={classNames(
        'modal-wrapper',
        `modal--wrapper-alignX-${alignX}`,
        `modal--wrapper-alignY-${alignY}`,
        className,
      )}
    >
      <div className="modal-wrapper__children">{children}</div>
    </div>,
    document.getElementById('overlay') as HTMLElement,
  );
};
