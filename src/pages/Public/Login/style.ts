import styled from "styled-components";

export const Sign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & > * {
    cursor: pointer;
  }
`;

export const Quest = styled.div`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export const QuestList = styled.div`
  display: flex;
  gap: 15px;
`;