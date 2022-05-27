import React, { FC } from "react";
import { useSelector } from "react-redux";
import Account from "../../components/Account";
import { addressSelector } from "../../store/selectors/workspace";
import classNames from "./index.module.scss";

interface AccountsPageProps {}

const AccountsPage: FC<AccountsPageProps> = () => {
  const addresses = useSelector(addressSelector);
  return (
    <div className={classNames.accounts}>
      <div className="container">
        <div className={classNames.accounts__content}>
          <div className={classNames.accounts__accounts}>
            {addresses.map((item) => (
              <Account
                key={item.address}
                address={item.address}
                balls={item.balance}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
