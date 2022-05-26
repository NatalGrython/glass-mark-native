import React, { FC } from "react";

interface CancelProps {}

const Cancel: FC<CancelProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10ZM4.16667 10C4.16667 13.2217 6.77834 15.8333 10 15.8333C11.3103 15.8333 12.5197 15.4013 13.4935 14.672L5.32802 6.50651C4.59867 7.48033 4.16667 8.68971 4.16667 10ZM15.8333 10C15.8333 6.77834 13.2217 4.16667 10 4.16667C8.68973 4.16667 7.48035 4.59867 6.50654 5.328L14.672 13.4935C15.4013 12.5196 15.8333 11.3103 15.8333 10Z"
        fill="white"
      />
    </svg>
  );
};

export default Cancel;
