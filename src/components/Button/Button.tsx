import React from "react";

interface IButtonProps{
    onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export  const Button: React.FC<IButtonProps> = (props) => {
  return <button onClick={props.onButtonClick}>Go</button>;
}
