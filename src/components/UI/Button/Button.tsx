import React, { FC } from "react";
import { styled } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  bg: string;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  bg,
  color,
  onClick,
  disabled,
}) => {
  return (
    <Container
      onClick={onClick}
      bg={bg}
      color={color}
      disabled={!!disabled}>
      {children}
    </Container>
  );
};

interface ButtonStyleProps {
  bg: string;
  color: string;
  disabled: boolean;
}

const Container = styled.button<ButtonStyleProps>`
  color: ${({ color }) => color};
  position: relative;
  background-color: ${({ bg, disabled }) => (!disabled ? bg : "gray")};
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 5;
  &:hover {
    opacity: ${({ disabled }) => (!disabled ? "0.8" : "1.0")};
  }
`;

export default Button;
