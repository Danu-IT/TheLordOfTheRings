import Logo from "../Logo";
import User from "../User";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import AuthButtons from "../AuthButtons/AuthButtons";
import DropDown from "../UI/DropDown";
import SignOut from "../UI/DropDown/components/SignOut";
import { changeIsDropDownSignOut } from "../../store/slices/interfaceСhange";

import { styled } from "styled-components";
import Navbar from "../Navbar";
import { navbarRoutes } from "../../routes";

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const isDropDownSignOut = useAppSelector(
    (state) => state.interfaceСhange.isDropDownSignOut
  );

  const dispatch = useAppDispatch();

  return (
    <Container>
      <Logo />
      <Right>
        {isAuth ? <Navbar list={navbarRoutes} /> : <AuthButtons />}
        <User
          onClick={() => dispatch(changeIsDropDownSignOut(!isDropDownSignOut))}
        />
        {isDropDownSignOut && <DropDown Content={SignOut} />}
      </Right>
    </Container>
  );
};

const Container = styled.header`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
`;

export default Header;
