import React, { FC } from "react";
import { styled } from "styled-components";
import { UseFormHandleSubmit } from "react-hook-form";

interface FormProps {
  handleSubmit: UseFormHandleSubmit<any>;
  handlerSubmitCustom: (data: any) => void;
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

const Container = styled.div``;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 100px;
`;

export default Form;
