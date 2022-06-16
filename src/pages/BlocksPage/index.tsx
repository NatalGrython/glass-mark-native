import { format } from "date-fns";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Block from "../../components/Block";
import { blocksSelector } from "../../store/selectors/workspace";
import classNames from "./index.module.scss";

interface BlocksPageProps {}

const BlocksPage: FC<BlocksPageProps> = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const blocks = useSelector(blocksSelector);

  const onClickBlock = (hash: string) => () => {
    navigation(`/workspace/${id}/blocks/${hash}`);
  };

  return (
    <div className={classNames.blocks}>
      <div className="container">
        <div className={classNames.blocks__content}>
          <div className={classNames.blocks}>
            {blocks.map((item, index) => (
              <Block
                key={item.currentHash}
                index={index}
                timestamp={
                  item.timestamp
                    ? format(new Date(item.timestamp), "dd.MM.yyyy | kk.mm.ss")
                    : "GENESIS"
                }
                address={item.currentHash}
                countTransactions={
                  item.transactions.filter(
                    (tx) => tx.sender !== "STORAGE_CHAIN"
                  ).length
                }
                onClick={onClickBlock(item.currentHash)}
                genesis={item.previousHash === "GENESIS_BLOCK"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocksPage;
