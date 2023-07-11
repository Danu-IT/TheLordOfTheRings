import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { MdPassword } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import Input from "../../../Input/Input";
import MessageError from "../../../../MessageError";
import { ButtonCustom, ContainerInput } from "./style";

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
          Icon={MdPassword}
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
        variant="white"
        color="black"
        disabled={!isValid}>
        Авторизоваться
      </ButtonCustom>
    </>
  );
};

export default LoginForm;
