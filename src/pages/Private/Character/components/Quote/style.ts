import { styled } from "styled-components";

interface QuoteStyleProps {
    view: boolean;
}

export const Container = styled.div<QuoteStyleProps>`
    border: 1px solid white;
    border-radius: 7px;
    padding: 7px;
    cursor: pointer;
`;

export const Add = styled.div<QuoteStyleProps>`
    opacity: ${({ view }) => (view ? "1" : "0")};
    transition: opacity 0.9s;
    & > span {
      font-weight: bold;
    }
`;