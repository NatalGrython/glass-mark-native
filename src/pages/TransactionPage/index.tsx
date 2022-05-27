import React, { FC } from "react";
import Transaction from "../../components/Transaction";
import classNames from "./index.module.scss";
interface TransactionPageProps {}

const TransactionPage: FC<TransactionPageProps> = () => {
  return (
    <div className={classNames.transaction}>
      <div className="container">
        <div className={classNames.transaction__content}>
          <div className={classNames.transaction__transactions}>
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

export default TransactionPage;
