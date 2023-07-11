import { styled } from "styled-components";

export const Container = styled.div`
  position: absolute;
  right: 5px;
  top: 2px;
  cursor: pointer;
  transition: transform 0.25s ease;
  &:hover{
    transform: scale(1.2);
  }
`;