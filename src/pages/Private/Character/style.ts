import { styled } from "styled-components";
import { ContainerPage } from "../../../styles/layout";

export const Container = styled(ContainerPage)`
  position: relative;
`;
export const Content = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 20px;
`;
export const Name = styled.div`
  font-size: 50px;
  text-align: center;
`;
export const Left = styled.div`
  width: 70%;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 10px;
`;
export const Title = styled.h3`
  text-decoration: underline;
`;
export const Param = styled.div`
  display: flex;
  gap: 20px;
`;

export const ParamTitle = styled.div`
  font-weight: bold;
  width: 70px;
`;
export const Info = styled.div`
  align-self: center;
`;