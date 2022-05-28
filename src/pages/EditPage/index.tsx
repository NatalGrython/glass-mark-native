import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Cancel, Save } from "../../icons";
import { currentWorkspaceSelector } from "../../store/selectors/workspace";
import { deleteWorkspaceAction } from "../../store/workspace/action";
import { useEditWorkSpace } from "./hooks/useEditWorkSpace";
import classNames from "./index.module.scss";

interface EditPageProps {}

const EditPage: FC<EditPageProps> = () => {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, errors } = useEditWorkSpace();
  const dispatch = useDispatch();
  const currentWorkSpace = useSelector(currentWorkspaceSelector);
  const onDelete = () => {
    dispatch(deleteWorkspaceAction(currentWorkSpace));
  };
  const onCancel = () => {
    navigate(-1);
  };

  return (
    <div className={classNames["create-page"]}>
      <div className="container">
        <div className={classNames["create-page__content"]}>
          <div className={classNames["create-page__buttons"]}>
            <div className={classNames.button_container}>
              <Button
                onClick={onCancel}
                textSize="big"
                type="danger"
                icon={Cancel}
              >
                Отменить
              </Button>
            </div>
            <div className={classNames.button_container}>
              <Button onClick={() => handleSubmit()} textSize="big" icon={Save}>
                Сохранить
              </Button>
            </div>
            <div className={classNames.button_container}>
              <Button type="danger" onClick={onDelete} textSize="big">
                Удалить
              </Button>
            </div>
          </div>
          <div className={classNames["create-page__work"]}>
            <h2 className={classNames["create-page__work__title"]}>
              Рабочая область
            </h2>
            <div className={classNames["create-page__work__input_container"]}>
              <div
                className={
                  classNames["create-page__work__input_container__input"]
                }
              >
                <Input
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  error={errors.name}
                  label="Имя рабочей области"
                />
              </div>
              <span
                className={
                  classNames["create-page__work__input_container__title"]
                }
              >
                A friendly name for this workspace.
              </span>
            </div>
          </div>
          <div className={classNames["create-page__server"]}>
            <h2 className={classNames["create-page__server__title"]}>Сервер</h2>
            <div className={classNames["create-page__server__containers"]}>
              <div
                className={classNames["create-page__server__input_container"]}
              >
                <div
                  className={
                    classNames["create-page__server__input_container__input"]
                  }
                >
                  <Input
                    value={values.host}
                    onChange={handleChange}
                    name="host"
                    error={errors.host}
                    label="Имя хоста"
                  />
                </div>
                <span
                  className={
                    classNames["create-page__server__input_container__title"]
                  }
                >
                  The server will accept RPC connections on the following host
                  and port.
                </span>
              </div>
              <div
                className={classNames["create-page__server__input_container"]}
              >
                <div
                  className={
                    classNames["create-page__server__input_container__input"]
                  }
                >
                  <Input
                    value={values.port}
                    onChange={handleChange}
                    name="port"
                    error={errors.port}
                    label="Номер порта"
                  />
                </div>
                <span
                  className={
                    classNames["create-page__server__input_container__title"]
                  }
                >
                  A friendly name for this workspace.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
