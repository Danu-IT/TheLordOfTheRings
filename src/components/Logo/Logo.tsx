import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import LogoPng from "../../assets/logo.png";
import { Container, LogoPic } from "./style";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <motion.div whileTap={{ color: "yellow", scale: 0.95 }}>
      <Container onClick={handleClick}>
        <div>Ring Info</div>
        <LogoPic src={LogoPng} />
      </Container>
    </motion.div>
  );
};

export default Logo;
