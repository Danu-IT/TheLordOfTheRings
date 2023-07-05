import { auth } from "../../../../../firebase";

import { signOut } from "@firebase/auth";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { publish } from "../../../../../events";

const SignOut = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      publish("zeroingout");
    } catch (e: any) {}
  };

  return <Container onClick={logout}>Sign out</Container>;
};

const Container = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.3;
    transition: all 0.5s;
  }
`;

export default SignOut;
