import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, userSelector } from "./redux/movieSlice";

function App() {
  const user = useSelector(userSelector);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <BrowserRouter>
      {!user ? (
        <LoginPage />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
