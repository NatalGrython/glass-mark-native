import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CreatePage from "./pages/CreatePage";
import MainPage from "./pages/MainPage";
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
      </Route>
    </Routes>
  );
}

export default App;
