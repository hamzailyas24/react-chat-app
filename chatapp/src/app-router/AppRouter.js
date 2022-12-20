import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route
          path="/:userID"
          element={<AdminProtectedRoutes Cmp={UserTasks} />}
        /> */}
      </Routes>
    </>
  );
};

export default AppRouter;