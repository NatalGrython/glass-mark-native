import React, { FC } from "react";
import classNames from "./index.module.scss";

interface TransactionProps {
  hash: string;
  addressSender: string;
  addressRecipient: string;
  reason: string;
  numberBlock: number;
  balls: number;
}

const Transaction: FC<TransactionProps> = ({
  hash,
  addressSender,
  addressRecipient,
  reason,
  numberBlock,
  balls,
}) => {
  return (
    <div className={classNames.transaction}>
      <div className={classNames.transaction__title_container}>
        <span className={classNames.title}>Хэш транзакции</span>
        <span className={classNames.value}>{hash}</span>
      </div>
      <div className={classNames.info__container}>
        <div className={classNames.text_container}>
          <span className={classNames.text__title}>Адрес отправителя</span>
          <div className={classNames.text__address_container}>
            <span className={classNames.text__address_value}>
              {addressSender}
            </span>
          </div>
        </div>
        <div className={classNames.text_container}>
          <span className={classNames.text__title}>Адрес получателя</span>
          <div className={classNames.text__address_container}>
            <span className={classNames.text__address_value}>
              {addressRecipient}
            </span>
          </div>
        </div>
        <div className={classNames.text_container}>
          <span className={classNames.text__title}>Причина</span>
          <span className={classNames.text__value}>{reason}</span>
        </div>
        <div className={classNames.text_container}>
          <span className={classNames.text__title}>Номер блока</span>
          <span className={classNames.text__value}>{numberBlock}</span>
        </div>
        <div className={classNames.text_container}>
          <span className={classNames.text__title}>Кол-во баллов</span>
          <span className={classNames.text__value}>{balls}</span>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
