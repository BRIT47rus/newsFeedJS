import React, { FC } from 'react';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
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
          <button type="submit" className="email-modal__button">
            Добавить
          </button>
          <button>❌</button>
        </form>
      </div>
    </ModalWrapper>
  );
};
