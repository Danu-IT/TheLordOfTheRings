import React, { FC, useState } from "react";
import { IconType } from "react-icons/lib";
import { styled } from "styled-components";
import { IoEyeSharp } from "react-icons/io5";
import { HiEyeSlash } from "react-icons/hi2";

interface InputProps {
  value?: string;
  config: any;
  placeholder: string;
  Icon: IconType;
  type: string;
}

const Input: FC<InputProps> = ({ placeholder, Icon, value, type, config }) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <IconInput>
        <Icon />
      </IconInput>
      <InputTag
        {...config}
        id={type}
        type={visible ? type : "text"}
        placeholder={placeholder}
        value={value}></InputTag>
      {type === "password" && (
        <IconVisible onClick={() => setVisible((prev) => !prev)}>
          {visible ? <HiEyeSlash></HiEyeSlash> : <IoEyeSharp></IoEyeSharp>}
        </IconVisible>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0);
  position: relative;
`;

const InputTag = styled.input`
  display: block;
  width: 100%;
  height: calc(0.25rem + 2px);
  padding: 25px 0px 25px 60px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 67px;
  z-index: -1;
  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border: 1px solid #bdbdbd;
  }
`;
const IconVisible = styled.div`
  position: absolute;
  top: 21px;
  left: 320px;
  cursor: pointer;
  z-index: 10;
  color: black;
`;

const IconInput = styled.div`
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;
  color: black;
`;

export default Input;
