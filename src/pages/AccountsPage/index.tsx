import React, { FC } from "react";
import Account from "../../components/Account";
import classNames from "./index.module.scss";

interface AccountsPageProps {}

const AccountsPage: FC<AccountsPageProps> = () => {
  return (
    <div className={classNames.accounts}>
      <div className="container">
        <div className={classNames.accounts__content}>
          <div className={classNames.accounts__accounts}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Account
                key={item}
                address="0×03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4"
                balls={78}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
