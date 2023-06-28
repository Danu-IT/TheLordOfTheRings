import { FC } from "react";
import { styled } from "styled-components";
import { BiError } from "react-icons/bi";

interface MessageErrorProps {
  message: string;
  error: any;
}

const MessageError: FC<MessageErrorProps> = ({ error, message }) => {
  return (
    <div>
      <Message>
        <BiError></BiError>
        {message || "Error"}
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
