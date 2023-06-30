import { auth } from "../../../../../firebase";
import { changeIsDropDownSignOut } from "../../../../../store/slices/interfaceСhange";
import { useAppDispatch } from "../../../../../hooks/redux";
import { changeAuth } from "../../../../../store/slices/auth";

import { signOut } from "@firebase/auth";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

const SignOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(changeAuth(false));
      dispatch(changeIsDropDownSignOut(false));
      navigate("/login");
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
