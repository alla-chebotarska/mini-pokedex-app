/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ERROR, WHITE } from "../../colors";

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  const messageContainer = css({
    padding: "20px",
    backgroundColor: ERROR,
    color: WHITE,
    textAlign: "center",
    borderRadius: "4px",
    maxWidth: "300px",
    margin: "20px auto",
  });
  return <div css={messageContainer}>{message}</div>;
};

export default ErrorMessage;
