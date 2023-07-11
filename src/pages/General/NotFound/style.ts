import { styled } from "styled-components";
import { ContainerPage } from "../../../styles/layout";

export const Container = styled(ContainerPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export const Text = styled.div`
  font-size: 50px;
`;

export const Link = styled.div`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;