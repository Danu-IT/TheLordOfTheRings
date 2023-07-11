import { IRoute } from "../../routes";
import NavbarItem from "./components/NavbarItem";
import { Container } from "./style";

interface NavbarProps {
  list: IRoute[];
}

const Navbar = ({ list }: NavbarProps) => {
  return (
    <Container>
      {list.map((el) => (
        <NavbarItem item={el} />
      ))}
    </Container>
  );
};

export default Navbar;
