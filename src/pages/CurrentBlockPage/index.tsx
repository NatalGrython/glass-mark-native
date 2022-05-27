import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Transaction from "../../components/Transaction";
import { Arrow } from "../../icons";
import { useBlockTransactions } from "./hooks/useBlockTransaction";
import classNames from "./index.module.scss";

interface CurrentBlockPageProps {}

const CurrentBlockPage: FC<CurrentBlockPageProps> = () => {
  const transactions = useBlockTransactions();
  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  return (
    <div className={classNames["current-block"]}>
      <div className="container">
        <div className={classNames["current-block__header"]}>
          <div className={classNames["current-block__header__container"]}>
            <button
              onClick={onClickBack}
              className={classNames["current-block__header__button"]}
            >
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
            {transactions.map((item) => (
              <Transaction
                key={item.randomBytes}
                hash={item.currentHash}
                balls={item.value}
                numberBlock={1}
                reason={item.reason}
                addressSender={item.sender}
                addressRecipient={item.receiver}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBlockPage;
