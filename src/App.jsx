import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import RadioIcon from "@mui/icons-material/Radio";

const App = () => {
  return (
    <div className="app ">
      <div className="icon d-flex justify-content-center mx-auto p-2 border-bottom border-secondary-subtle">
        <RadioIcon sx={{ fontSize: 70 }} />
        <h2 className="mt-3">music app</h2>
      </div>
      <Routes>
        <Route path="/" element={<h2>home page</h2>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
