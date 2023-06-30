import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../hooks/redux";
import { changeUser } from "../../../store/slices/auth";
import { auth } from "../../../firebase";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(changeUser(user));
    });
  }, []);

  return <Container></Container>;
};

const Container = styled.div``;

export default Home;
