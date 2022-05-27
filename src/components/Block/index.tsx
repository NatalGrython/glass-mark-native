import React, { FC } from "react";
import Button from "../UI/Button";
import classNames from "./index.module.scss";

interface BlockProps {
  index: number;
  timestamp: string;
  address: string;
  countTransactions: number;
  onClick: () => void;
}

const Block: FC<BlockProps> = ({
  index,
  timestamp,
  address,
  countTransactions,
  onClick,
}) => {
  return (
    <div className={classNames.block}>
      <div className={classNames.block_container}>
        <span className={classNames.block__title}>Блок</span>
        <span className={classNames.block__title}>№ {index}</span>
      </div>
      <div className={classNames.block_container}>
        <span className={classNames.block__name}>Дата создания</span>
        <span className={classNames.block__value}>{timestamp}</span>
      </div>
      <div className={classNames.block_container}>
        <span className={classNames.block__name}>Адрес блока</span>
        <span className={classNames.block__value}>{address}</span>
      </div>
      <div className={classNames.block_container}>
        <span className={classNames.block__name}>Кол-во транзакий</span>
        <span className={classNames.block__value}>{countTransactions}</span>
      </div>
      <div className={classNames.button_container}>
        <Button onClick={onClick}>Посмотреть транзакции</Button>
      </div>
    </div>
  );
};

export default Block;
