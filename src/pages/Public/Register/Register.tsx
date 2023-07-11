import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../firebase";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/Components/RegisterForm";
import { ContainerPage } from "../../../styles/layout";
import { Quest, QuestList } from "./style";
import { toast } from "react-toastify";
import { toastInfo } from "../../../utils/data";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormRegistrasion>({
    defaultValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    mode: "onBlur",
  });

  const handlerRegister = async (data: FormRegistrasion) => {
    if (data.cpassword !== data.password) {
      return;
    }
    if (!data.password) return;
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Вы успешно зарегистрировались!", toastInfo);
      navigate("/login");
    } catch (e) {
      toast.success("Ошибка регистрация!", toastInfo);
    }
    reset();
  };

  return (
    <ContainerPage>
      <Form
        handleSubmit={handleSubmit}
        handlerSubmitCustom={handlerRegister}>
        <RegisterForm
          register={register}
          errors={errors}
          isValid={isValid}
        />
        <QuestList>
          <Quest onClick={() => navigate("/login")}>Аккаунт уже создан?</Quest>
          <Quest onClick={() => navigate("/reset")}>Забыли пароль?</Quest>
        </QuestList>
      </Form>
    </ContainerPage>
  );
};

export default Register;
