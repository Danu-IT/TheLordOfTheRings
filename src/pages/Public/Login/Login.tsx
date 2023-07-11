import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

import { auth } from "../../../firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { changeAuth } from "../../../store/slices/auth";
import Form from "../../../components/UI/Form/Form";
import LoginForm from "../../../components/UI/Form/Components/LoginForm/LoginForm";
import { ContainerPage } from "../../../styles/layout";
import { Quest, Sign } from "./style";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormAuthorisation>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const handlerLogin = async (data: FormAuthorisation) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch(changeAuth(true));
    } catch (e) {
    } finally {
      navigate("/");
    }
    reset();
  };

  const handlerRegisterGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      dispatch(changeAuth(true));
    } catch (e) {
    } finally {
      navigate("/");
    }
  };

  return (
    <ContainerPage>
      <Form
        handleSubmit={handleSubmit}
        handlerSubmitCustom={handlerLogin}>
        <LoginForm
          register={register}
          errors={errors}
          isValid={isValid}></LoginForm>
        <Sign>
          or
          <FcGoogle
            onClick={handlerRegisterGoogle}
            size={20}
          />
          <BsFacebook size={20} />
          <AiFillGithub size={20} />
        </Sign>
        <Quest onClick={() => navigate("/register")}>Создать аккаунт</Quest>
      </Form>
    </ContainerPage>
  );
};

export default Login;
