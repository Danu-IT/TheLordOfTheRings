import React, { Dispatch, FC, SetStateAction, MouseEvent } from "react";

import { ModalContainer, ModalContent } from "./style";

export interface ModalProps {
  children: React.ReactNode;
  visibleModal: boolean;
  setVisibleModal: Dispatch<SetStateAction<boolean>>;
  color?: string;
}

const Modal: FC<ModalProps> = ({
  children,
  visibleModal,
  setVisibleModal,
  color,
}) => {
  return (
    <ModalContainer
      color={color}
      visibleModal={visibleModal}
      onClick={() => setVisibleModal(false)}>
      <ModalContent
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
