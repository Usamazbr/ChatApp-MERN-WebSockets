import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import Sidebar from "../components/Sidebar";

const appRoutes = () => {
  return (
    <div className="flex flex-row m-auto pages">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chats />} />
      </Routes>
    </div>
  );
};

export default appRoutes;
