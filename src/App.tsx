import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import WorkSpaceLayout from "./components/WorkSpaceLayout";
import AccountsPage from "./pages/AccountsPage";
import BlocksPage from "./pages/BlocksPage";
import CreatePage from "./pages/CreatePage";
import CurrentBlockPage from "./pages/CurrentBlockPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
import TransactionPage from "./pages/TransactionPage";
import { uploadWorkspaceAction } from "./store/workspace/action";
import "./styles/global.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadWorkspaceAction());
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/workspace/:id" element={<WorkSpaceLayout />}>
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="blocks">
            <Route index element={<BlocksPage />} />
            <Route path=":blockAddress" element={<CurrentBlockPage />} />
          </Route>
          <Route path="transactions" element={<TransactionPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
