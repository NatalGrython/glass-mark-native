import { useLocation, useNavigate, useParams } from "react-router-dom";

export const useTabs = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const { id } = useParams();
  const splitedPath = location.pathname.split("/");
  const currentTab = splitedPath[splitedPath.length - 1];

  const onChangeTab = (tab: string) => () => {
    navigation(`/workspace/${id}/${tab}`);
  };

  return {
    currentTab,
    onChangeTab,
  };
};
