import { FC } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

import { useAppSelector } from "../../hooks/redux";
import { sliceEmail } from "../../utils";
import { Container, Image, UserFull } from "./style";

interface UserProps {
  onClick: () => void;
}

const User: FC<UserProps> = ({ onClick }) => {
  const { isAuth, user } = useAppSelector((state) => ({
    isAuth: state.auth.isAuth,
    user: state.auth.user,
  }));

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
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
    </motion.div>
  );
};

export default User;
