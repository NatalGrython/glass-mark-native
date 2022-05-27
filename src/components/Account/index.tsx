import React, { FC } from "react";
import classNames from "./index.module.scss";

interface AccountProps {
  address: string;
  balls: number;
}

const Account: FC<AccountProps> = ({ address, balls }) => {
  return (
    <div className={classNames.account}>
      <div className={classNames.account__container}>
        <span className={classNames.account__title}>Адрес пользователя</span>
        <span className={classNames.account__name}>{address}</span>
      </div>
      <div className={classNames.account__container}>
        <span className={classNames.account__title}>Баллы</span>
        <span className={classNames.account__name}>{balls}</span>
      </div>
    </div>
  );
};

export default Account;
