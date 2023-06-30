import { useAppSelector } from "../../hooks/redux";
import { sliceEmail } from "../../utils";

import { styled } from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { FC } from "react";

interface UserProps {
  onClick: () => void;
}

const User: FC<UserProps> = ({ onClick }) => {
  const { isAuth, user } = useAppSelector((state) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
  }));

  return (
    <Container>
      {isAuth ? (
        <UserFull onClick={onClick}>
          {user.photoURL ? (
            <Image src={user.photoURL && user.photoURL} />
          ) : (
            <FaRegUserCircle size={30} />
          )}
          <div>{user.email && sliceEmail(user.email)}</div>
        </UserFull>
      ) : (
        <UserFull>
          <FaRegUserCircle size={30} />
          Войти
        </UserFull>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-right: 100px;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 50px;
`;
const UserFull = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default User;
