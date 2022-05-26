import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import WorkSpaceButton from "../../components/WorkSpaceButton";
import AddWorkSpace from "../../icons/AddWorkSpace";
import classNames from "./index.module.scss";
import Logo from "./Logo";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => {
  const navigation = useNavigate();

  const onClickCreate = () => {
    navigation("/create");
  };

  return (
    <div className={classNames.main}>
      <div className={classNames.main__container}>
        <div className={classNames.main__content}>
          <div>
            <Logo />
          </div>
          <div className={classNames.main__button__container}>
            <div className={classNames.main__buttons}>
              <span className={classNames.main__text_button}>
                Рабочие области
              </span>
              <div className={classNames["button-add"]}>
                <Button onClick={onClickCreate} icon={AddWorkSpace}>
                  Создать новый
                </Button>
              </div>
            </div>
            <div className={classNames["main__work-spaces"]}>
              {[1, 2, 3].map((item) => (
                <WorkSpaceButton key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
