import logo from "./logo.svg";
import "./App.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />

          {/* <Route path="/addresses/details/:id" element={<DetailPage />} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
