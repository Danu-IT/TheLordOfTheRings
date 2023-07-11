import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../firebase";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/Components/RegisterForm";
import { ContainerPage } from "../../../styles/layout";
import { Quest } from "./style";

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

  const handlerSubmit = async (data: FormRegistrasion) => {
    if (data.cpassword !== data.password) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (e) {
    } finally {
      navigate("/login");
    }
    reset();
  };

  return (
    <ContainerPage>
      <Form
        handleSubmit={handleSubmit}
        handlerSubmitCustom={handlerSubmit}>
        <RegisterForm
          register={register}
          errors={errors}
          isValid={isValid}
        />
        <Quest onClick={() => navigate("/login")}>Аккаунт уже создан?</Quest>
      </Form>
    </ContainerPage>
  );
};

export default Register;
