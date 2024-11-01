import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LayoutComponent } from "./components/layout/LayoutComponent";
import { HeroPG } from "./one-way-pages/hero-page/HeroPG";
import { LogInPage } from "./one-way-pages/log-in-page/LogInPage";
import { SignUpPage } from "./one-way-pages/sign-up-page/SignUpPage";
import { CreatePswPage } from "./one-way-pages/create-psw-page/CreatePswPage";
import { PwdEntryPage } from "./one-way-pages/create-psw-page/PwdEntryPage";
import { MainPage } from "./func-pages/main-page/MainPage";
import { AuthPage } from "./one-way-pages/auth-page/AuthPage";
import { BindCardPage } from "./one-way-pages/bind-card-page/BindCardPage";
import { BuyCryptoPage } from "./func-pages/buy-page/BuyCryptoPage";
import { TransActionPage } from "./one-way-pages/tansaction-approvedORrejected-page/TranSactionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route
            path="/"
            element={<HeroPG waypoint={"/sign-up"} spareWaypoint={"/login"} />}
          />
          <Route
            path="/login"
            element={<LogInPage waypoint="/auth" spareWaypoint="/sign-up" />}
          ></Route>
          <Route
            path="/sign-up"
            element={<SignUpPage waypoint="/auth" spareWaypoint="/login" />}
          ></Route>
          <Route
            path="/auth"
            element={<AuthPage waypoint="/psw-create" />}
          ></Route>
          <Route
            path="/psw-create"
            element={<CreatePswPage waypoint="/psw-enter" />}
          ></Route>
          <Route
            path="/psw-enter"
            element={<PwdEntryPage waypoint="/home" />}
          ></Route>
          <Route path="/home" element={<MainPage />}></Route>
          <Route
            path="/bind-card"
            element={<BindCardPage waypoint="/buy" spareWaypoint="/home" />}
          ></Route>
          <Route
            path="/buy"
            element={
              <BuyCryptoPage waypoint="/confirm" spareWaypoint="/home" />
            }
          ></Route>
          <Route
            path="/confirm"
            element={<AuthPage waypoint="/transaction" spareWaypoint="/buy" />}
          ></Route>
          <Route
            path="/transaction"
            element={<TransActionPage waypoint="/home" />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
