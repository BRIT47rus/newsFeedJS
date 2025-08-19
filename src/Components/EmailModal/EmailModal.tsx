import React, { FC } from 'react';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import './EmailModal.css';
import { Button } from '../Button/Button';
interface EmailModalPops {
  onClose: VoidFunction;
}
export const EmailModal: FC<EmailModalPops> = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="email-modal">
        <h2 className="email-modal__title">Хотите получить последнюю информацию?</h2>
        <p className="email-modal__text">Оставьте свой Email и будем на связи!</p>
        <form className="email-modal__form">
          <input type="email" className="email-modal__input" />
          <Button type="submit" loading>
            Подписаться
          </Button>
          <button className="email-modal__close" onClick={onClose}>
            ❌
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};
