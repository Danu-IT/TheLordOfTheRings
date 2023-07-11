import { styled } from "styled-components";

interface SortStyleProps {
    view: boolean;
}

export const Container = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 20px;
  `;

export const SortList = styled.div`
    display: flex;
    gap: 5px;
`;

export const Title = styled.div``;

export const SortElement = styled.div<SortStyleProps>`
    cursor: pointer;
    color: ${({ view }) => (view ? "white" : "yellow")};
    text-decoration: ${({ view }) => (view ? "none" : "underline")};
`;