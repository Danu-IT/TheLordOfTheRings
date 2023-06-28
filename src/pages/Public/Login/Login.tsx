import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../../hooks/redux";
import { changeAuth } from "../../../store/slices/authSlice";
import Form from "../../../components/UI/Form/Form";
import LoginForm from "../../../components/UI/Form/Components/LoginForm/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<formAuthorisation>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const handlerLogin = async (data: formAuthorisation) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      dispatch(changeAuth(true));
      navigate("/");
    } catch (e: any) {
    } finally {
    }
    reset();
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handlerSubmitCustom={handlerLogin}>
      <LoginForm
        register={register}
        errors={errors}
        isValid={isValid}></LoginForm>
    </Form>
  );
};

export default Login;
