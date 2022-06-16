import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { blocksSelector } from "../../../store/selectors/workspace";

export const useBlockTransactions = () => {
  const { blockAddress } = useParams();
  const blocks = useSelector(blocksSelector);

  const currentBlock = blocks.find((item) => item.currentHash === blockAddress);

  return (
    currentBlock?.transactions.filter((tx) => tx.sender !== "STORAGE_CHAIN") ??
    []
  );
};
