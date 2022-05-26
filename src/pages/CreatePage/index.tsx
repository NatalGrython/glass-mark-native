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
            <Button>Отменить</Button>
            <Button>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
