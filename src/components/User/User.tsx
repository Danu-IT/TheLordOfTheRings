import { useAppSelector } from "../../hooks/redux";

import { styled } from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";

const User = () => {
  const { isAuth, user } = useAppSelector((state) => ({
    isAuth: state.isAuthSlice.isAuth,
    user: state.isAuthSlice.user,
  }));

  return (
    <Container>
      {isAuth ? (
        <UserFull>
          {user.photoURL && <img src={user.photoURL && user.photoURL}></img>}
          <div>{user.displayName}</div>
        </UserFull>
      ) : (
        <Guest>
          <FaRegUserCircle size={30}></FaRegUserCircle>
          Войти
        </Guest>
      )}
    </Container>
  );
};

const Container = styled.div``;
const UserFull = styled.div``;
const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 50px;
`;

export default User;
