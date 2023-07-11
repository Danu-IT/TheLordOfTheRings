import Logo from "../Logo";
import User from "../User";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import AuthButtons from "../AuthButtons/AuthButtons";
import DropDown from "../UI/DropDown";
import SignOut from "../UI/DropDown/components/SignOut";
import { changeIsDropDownSignOut } from "../../store/slices/interfaceСhange";
import Navbar from "../Navbar";
import { navbarRoutes } from "../../routes";
import { Container, Content, Right } from "./style";

const Header = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const isDropDownSignOut = useAppSelector(
    (state) => state.interfaceСhange.isDropDownSignOut
  );
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Content>
        <Logo />
        <Right>
          {isAuth ? <Navbar list={navbarRoutes} /> : <AuthButtons />}
          <User
            onClick={() =>
              dispatch(changeIsDropDownSignOut(!isDropDownSignOut))
            }
          />
          {isDropDownSignOut && <DropDown Content={SignOut} />}
        </Right>
      </Content>
    </Container>
  );
};

export default Header;
