import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CreatePage from "./pages/CreatePage";
import MainPage from "./pages/MainPage";
import "./styles/global.scss";

function App() {
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
