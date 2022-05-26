import React, { FC } from "react";
import { WorkSpace } from "../../icons";
import classNames from "./index.module.scss";

interface WorkSpaceButtonProps {
  name: string;
}

const WorkSpaceButton: FC<WorkSpaceButtonProps> = ({ name }) => {
  return (
    <div className={classNames["workspace-button"]}>
      <div className={classNames["workspace-button__container"]}>
        <div className={classNames["workspace-button__content"]}>
          <span className={classNames["workspace-button__title"]}>
            Рабочая область
          </span>
          <WorkSpace />
          <span className={classNames["workspace-button__name"]}>“{name}”</span>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceButton;
