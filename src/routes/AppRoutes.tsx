import { Routes, Route, Navigate } from "react-router";
import Layout from "../pages/layout/Layout";
import Main from "../pages/Main/Main";
import UserPage from "../pages/UserPage/UserPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='user/'>
          <Route path=':id' element={<UserPage />} />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
