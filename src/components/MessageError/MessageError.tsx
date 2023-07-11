import { FC } from "react";
import { BiError } from "react-icons/bi";

import { Message } from "./style";

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

export default MessageError;
