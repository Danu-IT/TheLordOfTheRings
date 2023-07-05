import { styled } from "styled-components";
import { IRoute } from "../../routes";
import NavbarItem from "./components/NavbarItem";

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

const Container = styled.div`
  display: flex;
  gap: 25px;
`;

export default Navbar;
