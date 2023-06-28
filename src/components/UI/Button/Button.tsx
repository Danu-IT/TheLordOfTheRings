import React, { FC } from "react";
import { styled } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  bg: string;
  color: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, bg, color, onClick }) => {
  return (
    <Container
      bg={bg}
      color={color}>
      {children}
    </Container>
  );
};

interface ButtonStyleProps {
  bg: string;
  color: string;
}

const Container = styled.div<ButtonStyleProps>`
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
