import { styled } from "styled-components";

import loader from "../../assets/loader.png";

const Loader = () => {
  return (
    <Container>
      <Image src={loader}></Image>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 47%;
`;

const Image = styled.img`
  position: relative;
  width: 200px;
  z-index: 100;
  object-fit: cover;
  animation: 1s linear 0s normal none infinite running rot;
  -webkit-animation: 2s linear 0s normal none infinite running rot;
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
