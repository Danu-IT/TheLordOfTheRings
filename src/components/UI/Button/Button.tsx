import React, { FC } from "react";

import { Container } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  color: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  onClick,
  size,
  disabled,
}) => {
  return (
    <Container
      onClick={onClick}
      size={size}
      variant={variant}
      color={color}
      disabled={!!disabled}>
      {children}
    </Container>
  );
};

export default Button;
