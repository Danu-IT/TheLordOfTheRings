import { useLocation, useNavigate } from "react-router-dom";
import { IRoute } from "../../../../routes";
import { styled } from "styled-components";

interface NavbarItemProps {
  item: IRoute;
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  const locate = useLocation();
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(item.path)}
      view={locate.pathname === item.path}>
      {item.type}
    </Container>
  );
};

interface NavbarItemStyleProps {
  view: boolean;
}

const Container = styled.div<NavbarItemStyleProps>`
  color: ${({ view }) => (view ? "yellow" : "white")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export default NavbarItem;
