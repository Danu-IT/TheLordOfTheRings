import { styled } from "styled-components";

export interface CardStyleProps {
    isModalHelp?: boolean | undefined;
    view?: boolean;
}

export const Container = styled.div<CardStyleProps>`
    box-shadow: 0px 10px 15px 0px #000000;
    border-radius: 10px;
    border: 1px solid white;
    width: ${({ view }) => (view ? "250px" : "517px")};
    padding: 25px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    overflow: auto;
    position: relative;
  `;

export const Block = styled.div`
    & > span {
      color: white;
      font-weight: bold;
      font-style: italic;
    }
  `;
export const Info = styled.div``;

export const ButtonCard = styled.div<CardStyleProps>`
    align-self: center;
    position: relative;
    z-index: ${({ isModalHelp }) => (isModalHelp ? "-2" : "")};
  `;