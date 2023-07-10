import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerPage = styled.div`
  max-width: 1350px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;
export const ListHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  width: 60%;
`;
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  & > div > span {
    font-style: italic;
    color: yellow;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LinkCustom = styled(Link)`
  color: yellow;
`;


export const Remove = styled.div`
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;