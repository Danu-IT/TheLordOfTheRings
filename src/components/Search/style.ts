import { styled } from "styled-components";

interface SearchStyleProps {
    view: boolean;
}

export const Container = styled.div<SearchStyleProps>`
    position: relative;
  `;
export const Input = styled.input<SearchStyleProps>`
    background: ${({ view }) => (view ? "white" : "inherit")};
    outline: none;
    border: none;
    color: ${({ view }) => (view ? "black" : "white")};
    border-bottom: 1px solid white;
    width: 300px;
    font-size: 25px;
    padding: 5px 0;
    position: relative;
    z-index: 3;
`;
