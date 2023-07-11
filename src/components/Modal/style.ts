import { styled } from "styled-components";

export interface ModalContainerStyleProps {
    visibleModal: boolean;
    onClick: () => void;
    color?: string;
}

export const ModalContainer = styled.div<ModalContainerStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: ${(p) => p.color};
  display: ${(p) => (p.visibleModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  margin: 15px;
  padding: 15px;
  background: #808080;
  border-radius: 10px;
  min-width: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 3px solid white;
`;