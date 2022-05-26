import React, { FC } from "react";
import classNames from "./index.module.scss";

interface ButtonProps {
  children: string;
  icon?: FC;
  type: "";
}

const Button: FC<ButtonProps> = ({ children, icon }) => {
  const Icon = icon;
  return (
    <button className={classNames.button}>
      <div className={classNames.button__container}>
        <span>{children}</span>
        {Icon && <Icon />}
      </div>
    </button>
  );
};

export default Button;
