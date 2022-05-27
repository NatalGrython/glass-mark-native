import React, { FC } from "react";

interface TransactionProps {
  color?: "primary" | "black";
}
const mapColors = {
  primary: "#109CF1",
  black: "#05324D",
};
const Transaction: FC<TransactionProps> = ({ color = "primary" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 5H5L5 19H19V5ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
        fill={mapColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 17.4142L6.58579 13H17V15H11V17.4142Z"
        fill={mapColors[color]}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 6.58582L17.4142 11H7V9.00003H13V6.58582Z"
        fill={mapColors[color]}
      />
    </svg>
  );
};

export default Transaction;
