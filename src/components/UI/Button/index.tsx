import React, { FC, MouseEvent } from "react";
import classNames from "./index.module.scss";

interface ButtonProps {
  children: string;
  icon?: FC;
  type?: "danger" | "success";
  textSize?: "small" | "big";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const mapButtonType = {
  "success&small": classNames.button,
  "success&big": classNames["button-big"],
  "danger&small": classNames["button-danger"],
  "danger&big": classNames["button-danger-big"],
};

const Button: FC<ButtonProps> = ({
  children,
  icon,
  type = "success",
  textSize = "small",
  onClick,
}) => {
  const Icon = icon;
  return (
    <button onClick={onClick} className={mapButtonType[`${type}&${textSize}`]}>
      <div className={classNames.button__container}>
        <span>{children}</span>
        {Icon && <Icon />}
      </div>
    </button>
  );
};

export default Button;
