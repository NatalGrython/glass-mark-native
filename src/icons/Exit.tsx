import React, { FC } from "react";

interface ExitProps {}

const Exit: FC<ExitProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.835 2.5H4.16835C3.24918 2.5 2.50168 3.2475 2.50168 4.16667V7.5H4.16835V4.16667H15.835V15.8333H4.16835V12.5H2.50168V15.8333C2.50168 16.7525 3.24918 17.5 4.16835 17.5H15.835C16.7542 17.5 17.5017 16.7525 17.5017 15.8333V4.16667C17.5017 3.2475 16.7533 2.5 15.835 2.5Z"
        fill="white"
      />
      <path
        d="M9.16667 13.3333L13.3333 10L9.16667 6.66667V9.1675H2.5V10.8342H9.16667V13.3333Z"
        fill="white"
      />
    </svg>
  );
};

export default Exit;
