import { styled } from "styled-components";
import { ContainerPage } from "../../../styles/layout";

interface HomeStyleProps {
    view?: boolean;
}

export const ContainerCustom = styled(ContainerPage)`
    display: flex;
    flex-direction: column;
`;

export const Cards = styled.div<HomeStyleProps>`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    gap: ${({ view }) => (view ? "10px" : "20px")};
    margin: 40px 30px;
`;

export const UserControl = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Center = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Title = styled.h2``;