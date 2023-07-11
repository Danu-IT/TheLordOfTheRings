import React, { FC } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

import { Container, ContainerForm } from "./style";

interface FormProps {
  handleSubmit: UseFormHandleSubmit<Forms>;
  handlerSubmitCustom: (data: Forms) => void;
  children: React.ReactNode;
}

const Form: FC<FormProps> = ({
  handleSubmit,
  handlerSubmitCustom,
  children,
}) => {
  return (
    <Container onSubmit={handleSubmit(handlerSubmitCustom)}>
      <ContainerForm>{children}</ContainerForm>
    </Container>
  );
};

export default Form;
