import { styled } from "styled-components";

interface NavbarItemStyleProps {
    view: boolean;
}

export const Container = styled.div<NavbarItemStyleProps>`
    color: ${({ view }) => (view ? "yellow" : "white")};
    cursor: pointer;
    &:hover {
      opacity: 0.7;
}`;