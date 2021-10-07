import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  const messageContainer = css({
    padding: "20px",
    backgroundColor: "#f44336",
    color: "white",
    textAlign: "center",
    borderRadius: "4px",
  });
  return <div css={messageContainer}>{message}</div>;
};

export default ErrorMessage;
