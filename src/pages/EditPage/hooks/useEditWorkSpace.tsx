import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { number, object, string } from "yup";
import { currentWorkspaceSelector } from "../../../store/selectors/workspace";
import {
  createWorkspaceAction,
  updateWorkspaceAction,
} from "../../../store/workspace/action";

export const useEditWorkSpace = () => {
  const dispatch = useDispatch();
  const currentWorkSpace = useSelector(currentWorkspaceSelector);
  return useFormik({
    initialValues: {
      name: currentWorkSpace?.name ?? "",
      port: currentWorkSpace?.port ?? 0,
      host: currentWorkSpace?.host ?? "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(
        updateWorkspaceAction({ ...values, _id: currentWorkSpace?._id ?? "" })
      );

      resetForm();
    },
    validationSchema: object({
      name: string().required("Поле обязательно").trim("Поле обязательно"),
      port: number()
        .required("Поле обязательно")
        .positive("Порт должен быть положительным числом")
        .max(65536, "Максимальное количество портов 65536")
        .typeError("Порт должен быть числом"),

      host: string()
        .required("Поле обязательно")
        .trim("Поле обязательно")
        .matches(
          /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})$|^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]))$/,
          "Порт должен быть или IP-адресом или доменным именем"
        ),
    }),
  });
};
