import { useLocation, useNavigate } from "react-router-dom";

import { IRoute } from "../../../../routes";
import { Container } from "./style";

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
export default NavbarItem;
