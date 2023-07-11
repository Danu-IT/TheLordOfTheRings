import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;

export const ContainerPages = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export const Arrow = styled.div`
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;