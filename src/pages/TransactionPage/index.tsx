import React, { FC } from "react";
import { useSelector } from "react-redux";
import Transaction from "../../components/Transaction";
import { transactionSelector } from "../../store/selectors/workspace";
import classNames from "./index.module.scss";
interface TransactionPageProps {}

const TransactionPage: FC<TransactionPageProps> = () => {
  const { transactions } = useSelector(transactionSelector);
  return (
    <div className={classNames.transaction}>
      <div className="container">
        <div className={classNames.transaction__content}>
          <div className={classNames.transaction__transactions}>
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

export default TransactionPage;
