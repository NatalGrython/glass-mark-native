import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Accounts, Blocks, Exit, Setting, Transaction } from "../../icons";
import Button from "../UI/Button";
import { useTabs } from "./hooks/useTabs";
import classNames from "./index.module.scss";

interface WorkSpaceLayoutProps {}

const WorkSpaceLayout: FC<WorkSpaceLayoutProps> = () => {
  const { currentTab, onChangeTab } = useTabs();
  return (
    <>
      <div className={classNames["work-space-layout"]}>
        <div className="container">
          <div className={classNames["work-space-layout__content"]}>
            <div className={classNames["work-space-layout_names"]}>
              <div className={classNames["work-space-layout__text_container"]}>
                <span className={classNames["work-space-layout__text__title"]}>
                  Рабочая область
                </span>
                <span className={classNames["work-space-layout__text__name"]}>
                  Рабочая область №1
                </span>
              </div>
              <div className={classNames["work-space-layout__text_container"]}>
                <span className={classNames["work-space-layout__text__title"]}>
                  Количевсто блоков
                </span>
                <span className={classNames["work-space-layout__text__name"]}>
                  8
                </span>
              </div>
              <div className={classNames["work-space-layout__text_container"]}>
                <span className={classNames["work-space-layout__text__title"]}>
                  WS сервер
                </span>
                <span className={classNames["work-space-layout__text__name"]}>
                  http://127.0.01:7545
                </span>
              </div>
              <div
                className={classNames["work-space-layout__button_container"]}
              >
                <div
                  className={classNames["work-space-layout__setting_button"]}
                >
                  <Button icon={Setting} />
                </div>
                <div className={classNames["work-space-layout__exit_button"]}>
                  <Button textSize="big" icon={Exit}>
                    Выйти
                  </Button>
                </div>
              </div>
            </div>
            <div className={classNames["work-space-layout__links"]}>
              <div className={classNames["work-space-layout__account"]}>
                <button
                  onClick={onChangeTab("accounts")}
                  className={
                    currentTab === "accounts"
                      ? classNames["work-space-layout__link__active"]
                      : classNames["work-space-layout__link"]
                  }
                >
                  <Accounts
                    color={currentTab === "accounts" ? "primary" : "black"}
                  />
                  <span>Аккаунты</span>
                </button>
              </div>
              <div className={classNames["work-space-layout__blocks"]}>
                <button
                  onClick={onChangeTab("blocks")}
                  className={
                    currentTab === "blocks"
                      ? classNames["work-space-layout__link__active"]
                      : classNames["work-space-layout__link"]
                  }
                >
                  <Blocks
                    color={currentTab === "blocks" ? "primary" : "black"}
                  />
                  <span>Блоки</span>
                </button>
              </div>
              <div className={classNames["work-space-layout__transaction"]}>
                <button
                  onClick={onChangeTab("transactions")}
                  className={
                    currentTab === "transactions"
                      ? classNames["work-space-layout__link__active"]
                      : classNames["work-space-layout__link"]
                  }
                >
                  <Transaction
                    color={currentTab === "transactions" ? "primary" : "black"}
                  />
                  <span>Транзакции</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default WorkSpaceLayout;
