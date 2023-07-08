import { signOut } from "@firebase/auth";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

import { auth } from "../../../../../firebase";
import { useAppDispatch } from "../../../../../hooks/redux";
import { userLoggedOut } from "../../../../../store/slices/auth";

const SignOut = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      dispatch(userLoggedOut());
    } catch (e) {}
  };

  return <Container onClick={handleLogout}>Sign out</Container>;
};

const Container = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.3;
    transition: all 0.5s;
  }
`;

export default SignOut;
