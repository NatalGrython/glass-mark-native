import React, { FC } from "react";
import Transaction from "../../components/Transaction";
import { Arrow } from "../../icons";
import classNames from "./index.module.scss";

interface CurrentBlockPageProps {}

const CurrentBlockPage: FC<CurrentBlockPageProps> = () => {
  return (
    <div className={classNames["current-block"]}>
      <div className="container">
        <div className={classNames["current-block__header"]}>
          <div className={classNames["current-block__header__container"]}>
            <button className={classNames["current-block__header__button"]}>
              <Arrow />
            </button>
            <span className={classNames["current-block__header__title"]}>
              «Блок №2»
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={classNames["current-block__content"]}>
          <div className={classNames["current-block__transactions"]}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Transaction
                hash="0×03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
                balls={10}
                numberBlock={1}
                reason="Контрольная работа"
                addressSender="0×03ac674216f3e15c761ee1a5e255f06"
                addressRecipient={"0×03ac674216f3e15c761ee1a5e255f06"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBlockPage;
