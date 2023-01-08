import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";

const appRoutes = () => {
  return (
    <div className="m-auto pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chats />} />
      </Routes>
    </div>
  );
};

export default appRoutes;
