import React, { FC, useState } from 'react';
import { ModalWrapper } from '../ModalWrapper/ModalWrapper';
import './EmailModal.css';
import { Button } from '../Button/Button';
interface EmailModalProps {
  onClose: VoidFunction;
}

export const EmailModal: FC<EmailModalProps> = ({ onClose }: EmailModalProps) => {
  const [sending, setSendig] = useState(false);
  const _onClose = () => {
    if (!sending) {
      onClose();
    }
  };
  return (
    <ModalWrapper onClose={_onClose}>
      <div className="email-modal">
        <h2 className="email-modal__title">Хотите получить последнюю информацию?</h2>
        <p className="email-modal__text">Оставьте свой Email и будем на связи!</p>
        <form
          className="email-modal__form"
          onSubmit={(e) => {
            e.preventDefault();
            setSendig(true);

            setTimeout(() => {
              setSendig(false);
              _onClose();
            }, 1000);
          }}
        >
          <input type="text" required className="email-modal__input" />
          <Button type="submit" loading={sending}>
            Подписаться
          </Button>
          <button className="email-modal__close" onClick={_onClose}>
            ❌
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};
