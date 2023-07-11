import { styled } from "styled-components";

export const Container = styled.div`
  background-color: white;
  border: 15px solid white;
  border-radius: 10px;
  position: absolute;
  top: -10px;
  left: -15px;
  width: 105%;
  height: 200px;
  z-index: 2;
  color: black;
`;

export const Title = styled.h2``;
export const ListSagest = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 15px;
`;

export const Content = styled.div`
  background-color: white;
  margin-top: 40px;
  height: 160px;
`;

export const Sagest = styled.span`
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 3;
  &:hover {
    opacity: 0.5;
  }
`;
