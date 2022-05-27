import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { number, object, string } from "yup";
import { createWorkspaceAction } from "../../../store/workspace/action";

export const useCreateWorkSpace = () => {
  const dispatch = useDispatch();
  return useFormik({
    initialValues: {
      name: "",
      port: 0,
      host: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createWorkspaceAction(values));

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
