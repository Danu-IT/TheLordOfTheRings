import { styled } from "styled-components";

interface ButtonStyleProps {
    variant: string;
    color: string;
    disabled: boolean;
    size: string | undefined;
}

export const Container = styled.button<ButtonStyleProps>`
    color: ${({ color }) => color};
    position: relative;
    background-color: ${({ variant, disabled }) =>
        !disabled ? variant : "gray"};
    padding: 10px 20px;
    border-radius: 15px;
    border: ${({ variant }) =>
        variant === "white" ? "1px solid black" : "none"};
    cursor: pointer;
    outline: none;
    z-index: 5;
    width: ${({ size }) => size};
    &:hover {
      opacity: ${({ disabled }) => (disabled ? "1" : "0.8")};
    }
    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`;