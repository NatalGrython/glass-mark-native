import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Block from "../../components/Block";
import classNames from "./index.module.scss";

interface BlocksPageProps {}

const BlocksPage: FC<BlocksPageProps> = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const onClickBlock = (address: string) => () => {
    navigation(`/workspace/${id}/blocks/${address}`);
  };

  return (
    <div className={classNames.blocks}>
      <div className="container">
        <div className={classNames.blocks__content}>
          <div className={classNames.blocks}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <Block
                key={item}
                index={index}
                timestamp={"12.03.2022 | 04:01:10"}
                address="0×7953623c8b388b4459e13f978d7c846f4"
                countTransactions={16}
                onClick={onClickBlock("0×7953623c8b388b4459e13f978d7c846f4")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlocksPage;
