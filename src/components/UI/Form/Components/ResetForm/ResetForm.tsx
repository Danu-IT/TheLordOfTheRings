import { UseFormRegister, FieldErrors } from "react-hook-form";
import Input from "../../../Input";
import MessageError from "../../../../MessageError";
import { AiOutlineMail } from "react-icons/ai";
import { styled } from "styled-components";
import Button from "../../../Button";
import { ButtonCustom, ContainerInput } from "./style";

interface ResetFormProps {
  register: UseFormRegister<FormRegistrasion>;
  errors: FieldErrors<FormRegistrasion>;
  isValid: boolean;
}

const ResetForm = ({ errors, isValid, register }: ResetFormProps) => {
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
      <ButtonCustom
        variant="white"
        color="black"
        disabled={!isValid}>
        Сбросить пароль
      </ButtonCustom>
    </>
  );
};

export default ResetForm;
