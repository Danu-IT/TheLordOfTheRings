import { FC } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { MdPassword } from "react-icons/md";

import Input from "../../../Input";
import MessageError from "../../../../MessageError";
import { ButtonCustom, ContainerInput } from "./style";

interface RegisterFormProps {
  register: UseFormRegister<FormRegistrasion>;
  errors: FieldErrors<FormRegistrasion>;
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
      <ContainerInput>
        <Input
          placeholder="confirm password"
          Icon={MdPassword}
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
          <MessageError message={errors.password.message || "Error"} />
        )}
      </ContainerInput>
      <ButtonCustom
        variant="white"
        color="black"
        disabled={!isValid}>
        Зарегистрироваться
      </ButtonCustom>
    </>
  );
};

export default RegisterForm;
