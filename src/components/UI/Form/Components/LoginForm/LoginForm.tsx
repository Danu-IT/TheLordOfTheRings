import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { styled } from "styled-components";
import Input from "../../../Input/Input";
import { AiOutlineMail } from "react-icons/ai";
import MessageError from "../../../../MessageError";
import Button from "../../../Button";

interface LoginFormProps {
  register: UseFormRegister<FormAuthorisation>;
  errors: FieldErrors<FormAuthorisation>;
  isValid: boolean;
}

const LoginForm: FC<LoginFormProps> = ({ errors, isValid, register }) => {
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
          <MessageError message={errors.email.message || "Error"} />
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
          <MessageError message={errors.password.message || "Error"} />
        )}
      </ContainerInput>
      <ButtonCustom
        bg="white"
        color="black"
        disabled={!isValid}>
        Авторизоваться
      </ButtonCustom>
    </>
  );
};

const ContainerInput = styled.div`
  position: relative;
  width: 340px;
`;
const ButtonCustom = styled(Button)`
  margin-left: 145px;
`;
export default LoginForm;
