import React, { FC } from "react";
import Button from "../../components/UI/Button";
import classNames from "./index.module.scss";

interface CreatePageProps {}

const CreatePage: FC<CreatePageProps> = () => {
  return (
    <div className={classNames["create-page"]}>
      <div className="container">
        <div className={classNames["create-page__content"]}>
          <div className={classNames["create-page__buttons"]}>
            <div className={classNames.button_container}>
              <Button type="danger">Отменить</Button>
            </div>
            <div className={classNames.button_container}>
              <Button>Сохранить</Button>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
