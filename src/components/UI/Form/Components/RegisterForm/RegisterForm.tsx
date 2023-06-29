import { FC } from "react";
import { styled } from "styled-components";
import Input from "../../../Input";
import { AiOutlineMail } from "react-icons/ai";
import MessageError from "../../../../MessageError";
import Button from "../../../Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface RegisterFormProps {
  register: UseFormRegister<formRegistrasion>;
  errors: FieldErrors<formRegistrasion>;
  isValid: boolean;
}

const RegisterForm: FC<RegisterFormProps> = ({ register, errors, isValid }) => {
  return (
    <>
      <ContainerInput>
        <Input
          placeholder="email"
          Icon={AiOutlineMail}
          type="email"
          config={{
            ...register("email", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            }),
          }}
        />
        {errors.email && (
          <MessageError
            error={errors.email}
            message={errors.email.message || "Error"}></MessageError>
        )}
      </ContainerInput>
      <ContainerInput>
        <Input
          placeholder="password"
          Icon={AiOutlineMail}
          type="password"
          config={{
            ...register("password", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            }),
          }}
        />
        {errors.password && (
          <MessageError
            error={errors.password}
            message={errors.password.message || "Error"}></MessageError>
        )}
      </ContainerInput>
      <ContainerInput>
        <Input
          placeholder="confirm password"
          Icon={AiOutlineMail}
          type="password"
          config={{
            ...register("cpassword", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            }),
          }}
        />
        {errors.password && (
          <MessageError
            error={errors.password}
            message={errors.password.message || "Error"}></MessageError>
        )}
      </ContainerInput>
      <ButtonCustom
        bg="white"
        color="black"
        disabled={!isValid}>
        Зарегистрироваться
      </ButtonCustom>
    </>
  );
};

const ContainerInput = styled.div`
  position: relative;
  width: 340px;
`;

const ButtonCustom = styled(Button)`
  margin-left: 45px;
`;

export default RegisterForm;
