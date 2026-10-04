import { Fragment, useEffect, useState } from "react";
import { UserDetailPage } from "./pages/UserDetailPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [loginResponse, setLoginResponse] = useState({
    token: "",
    userId: "",
    email: "",
    isAuthenticated: false,
  });
  const onLogin = (response) => {
    setLoginResponse((prev) => ({
      ...prev,
      token: response.token,
      userId: response.user.id,
      email: response.user.email,
      isAuthenticated: response.token ? true : false,
    }));

    sessionStorage.setItem("token", response.token);
    sessionStorage.setItem("isAuthenticated", response.token ? true : false);
  };

  const checkAuthentication = () => {
    const token = sessionStorage.getItem("token");
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (token && isAuthenticated) {
      setLoginResponse((prev) => ({
        ...prev,
        token: token,
        isAuthenticated: isAuthenticated === "true",
      }));
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (!loginResponse.isAuthenticated) {
    return (
      <Fragment>
        APP:{JSON.stringify(loginResponse)}
        <LoginPage onLogin={onLogin} />
      </Fragment>
    );
  }

  return <UserDetailPage loginResponse={loginResponse} />;
}
