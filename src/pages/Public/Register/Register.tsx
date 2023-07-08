import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/Components/RegisterForm";
import { styled } from "styled-components";

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
        isValid={isValid}
      />
      <Quest onClick={() => navigate("/login")}>Аккаунт уже создан?</Quest>
    </Form>
  );
};

const Quest = styled.div`
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export default Register;
