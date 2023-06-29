import { FC } from "react";
import { styled } from "styled-components";
import { BiError } from "react-icons/bi";

interface MessageErrorProps {
  message: string;
}

const MessageError: FC<MessageErrorProps> = ({ message }) => {
  return (
    <div>
      <Message>
        <BiError />
        {message}
      </Message>
    </div>
  );
};

const Message = styled.div`
  color: red;
  position: absolute;
  top: 60px;
  left: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export default MessageError;
