import { FC, useState } from "react";
import { IconType } from "react-icons/lib";
import { IoEyeSharp } from "react-icons/io5";
import { HiEyeSlash } from "react-icons/hi2";

import { Container, IconInput, IconVisible, InputTag } from "./style";

interface InputProps {
  value?: string;
  config?: any;
  placeholder: string;
  Icon?: IconType;
  type: string;
}

const Input: FC<InputProps> = ({ placeholder, Icon, value, type, config }) => {
  const [visible, setVisible] = useState(true);
  return (
    <Container>
      <IconInput>{Icon && <Icon />}</IconInput>
      <InputTag
        {...config}
        id={type}
        type={visible ? type : "text"}
        placeholder={placeholder}
        value={value}
      />
      {type === "password" && (
        <IconVisible onClick={() => setVisible((prev) => !prev)}>
          {visible ? <HiEyeSlash /> : <IoEyeSharp />}
        </IconVisible>
      )}
    </Container>
  );
};

export default Input;
