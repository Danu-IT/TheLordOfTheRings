import { styled } from "styled-components";
import Logo from "../Logo";
import User from "../User";
import { useAppSelector } from "../../hooks/redux";

const Header = () => {
  const isAuth = useAppSelector((state) => state.isAuthSlice.isAuth);

  return (
    <Container>
      <Logo></Logo>
      {isAuth ? <></> : <></>}
      <User></User>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

export default Header;
