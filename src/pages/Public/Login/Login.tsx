import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../../firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { changeAuth } from "../../../store/slices/authSlice";
import Form from "../../../components/UI/Form/Form";
import LoginForm from "../../../components/UI/Form/Components/LoginForm/LoginForm";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

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
      navigate("/");
    } catch (e: any) {
    } finally {
    }
    reset();
  };

  const handlerRegisterGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      dispatch(changeAuth(true));
    } catch (e: any) {
    } finally {
      navigate("/");
    }
  };

  return (
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
          size={20}></FcGoogle>
        <BsFacebook size={20}></BsFacebook>
        <AiFillGithub size={20}></AiFillGithub>
      </Sign>
    </Form>
  );
};

const Sign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & > * {
    cursor: pointer;
  }
`;

export default Login;
