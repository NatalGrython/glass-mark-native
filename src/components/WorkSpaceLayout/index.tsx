import React, { FC } from "react";
import { Accounts, Blocks, Exit, Setting, Transaction } from "../../icons";
import Button from "../UI/Button";
import classNames from "./index.module.scss";

interface WorkSpaceLayoutProps {}

const WorkSpaceLayout: FC<WorkSpaceLayoutProps> = () => {
  return (
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
            <div className={classNames["work-space-layout__button_container"]}>
              <div className={classNames["work-space-layout__setting_button"]}>
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
              <button className={classNames["work-space-layout__link__active"]}>
                <Accounts />
                <span>Аккаунты</span>
              </button>
            </div>
            <div className={classNames["work-space-layout__blocks"]}>
              <button className={classNames["work-space-layout__link"]}>
                <Blocks />
                <span>Блоки</span>
              </button>
            </div>
            <div className={classNames["work-space-layout__transaction"]}>
              <button className={classNames["work-space-layout__link"]}>
                <Transaction />
                <span>Транзакции</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceLayout;
