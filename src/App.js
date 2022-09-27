import logo from "./logo.svg";
import "./App.css";
import { NavbarComponent } from "./components/NavbarComponent";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { PrivateRoute } from "./components/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AnnouncementsPage } from "./pages/AnnouncementsPage/AnnouncementsPage";
import { MessagesPage } from "./pages/MessagesPage/MessagesPage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./store/auth";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const credientals = useSelector((state) => state.auth.value);

  const doLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  return (
     <div>  
       {credientals.isLoggedIn &&  <NavbarComponent doLogout={doLogout} credientals={credientals}/>} 
        <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage credientals={credientals} />} />
          <Route path="/messages" element={<MessagesPage credientals={credientals} />} />
          <Route path="/announcements" element={<AnnouncementsPage credientals={credientals}  />} />
          <Route path="/settings" element={<HomePage  credientals={credientals} />} />
          {/* <Route path="/addresses/details/:id" element={<DetailPage />} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes></div>
  );
}

export default App;
