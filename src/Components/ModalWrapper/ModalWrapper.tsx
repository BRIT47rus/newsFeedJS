import { createPortal } from 'react-dom';
import './ModalWrapper.css';
import React, { FC, HTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';
interface ModalProps extends HTMLAttributes<HTMLElement> {
  alignX?: 'start' | 'end' | 'center';
  alignY?: 'start' | 'end' | 'center';
  onClose: () => void;
}
export const ModalWrapper: FC<ModalProps> = ({
  children,
  alignX = 'center',
  alignY = 'center',
  className,
  onClose,
  ...restProps
}) => {
  useEffect(() => {
    document.documentElement.classList.add('--prevent-scroll');

    return () => {
      document.documentElement.classList.remove('--prevent-scroll');
    };
  }, []);
  useEffect(() => {
    const documentGetDownListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', documentGetDownListener);
    return () => {
      document.removeEventListener('keydown', documentGetDownListener);
    };
  }, [onClose]);
  return createPortal(
    <div
      {...restProps}
      className={classNames(
        'modal-wrapper',
        `modal--wrapper-alignX-${alignX}`,
        `modal--wrapper-alignY-${alignY}`,
        className,
      )}
      onClick={onClose}
    >
      <div
        className="modal-wrapper__children"
        onKeyDown={(e) => e.stopPropagation()}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('overlay') as HTMLElement,
  );
};

// 3.2 15/19
