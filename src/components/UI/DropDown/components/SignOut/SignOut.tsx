import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";

import { auth } from "../../../../../firebase";
import { useAppDispatch } from "../../../../../hooks/redux";
import { userLoggedOut } from "../../../../../store/slices/auth";
import { Container } from "./style";

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

export default SignOut;
