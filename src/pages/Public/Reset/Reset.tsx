import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ContainerPage } from "../../../styles/layout";
import { auth } from "../../../firebase";
import { toastInfo } from "../../../utils/data";
import Form from "../../../components/UI/Form";
import ResetForm from "../../../components/UI/Form/Components/ResetForm";
import { Quest, QuestList } from "./style";
import { FormReset } from "../../../type/form";

const Reset = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormReset>({
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const handlerReset = async (data: FormReset) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      toast.success(
        "Ссылка со сбросом пароля отправлена вам на почту!",
        toastInfo
      );
      navigate("/login");
    } catch (e) {
      toast.error("Ошибка смены пароля", toastInfo);
    }
  };

  return (
    <ContainerPage>
      <Form
        handleSubmit={handleSubmit}
        handlerSubmitCustom={handlerReset}>
        <ResetForm
          errors={errors}
          isValid={isValid}
          register={register}></ResetForm>
        <QuestList>
          <Quest onClick={() => navigate("/login")}>Аккаунт уже создан?</Quest>
          <Quest onClick={() => navigate("/register")}>Создать аккаунт!</Quest>
        </QuestList>
      </Form>
    </ContainerPage>
  );
};

export default Reset;
