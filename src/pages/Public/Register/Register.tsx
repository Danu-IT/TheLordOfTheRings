import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/Components/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<formRegistrasion>({
    defaultValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    mode: "onBlur",
  });

  const handlerSubmit = async (data: formRegistrasion) => {
    if (data.cpassword !== data.password) {
      return false;
    }
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (e: any) {
    } finally {
      navigate("/login");
    }
    reset();
  };
  return (
    <Form
      handleSubmit={handleSubmit}
      handlerSubmitCustom={handlerSubmit}>
      <RegisterForm
        register={register}
        errors={errors}
        isValid={isValid}></RegisterForm>
    </Form>
  );
};

export default Register;
