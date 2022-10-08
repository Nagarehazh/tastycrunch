import React from 'react';
import {
  Overlay,
  ModalContainer,
  EncabezadoModal,
  ButtonClose,
} from './ModalStyles';

interface ModalProps {
    modal: boolean;
    setModal: (modal: boolean) => void;
    children: React.ReactNode;
}

function Modal({ children, modal, setModal } : ModalProps) {
    
  return (
    <>
      {modal
        && (
        <Overlay>
          <ModalContainer>
            <EncabezadoModal>
              <h3>TastyCrunch.</h3>
            </EncabezadoModal>
            <ButtonClose onClick={() => setModal(!modal)}>X</ButtonClose>
            {children}
          </ModalContainer>
        </Overlay>
        )}
    </>
  );
}

export default Modal;
