import { Route, Routes } from "react-router-dom";
import Main from "../view/Main.tsx";
import Error from "../view/Error.tsx";
import Login from "../view/Login.tsx";

export default function router() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}