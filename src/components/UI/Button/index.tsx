import React, { FC, MouseEvent } from "react";
import classNames from "./index.module.scss";

interface ButtonProps {
  children: string;
  icon?: FC;
  type?: "danger" | "success";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  icon,
  type = "success",
  onClick,
}) => {
  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={
        type === "success" ? classNames.button : classNames["button-danger"]
      }
    >
      <div className={classNames.button__container}>
        <span>{children}</span>
        {Icon && <Icon />}
      </div>
    </button>
  );
};

export default Button;
