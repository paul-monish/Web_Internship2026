import { useState } from "react";
import authService from "../services/AuthService";

const LoginPage = ({ onLogin }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [loginResponse, setLoginResponse] = useState(null);

  const handleChange = (e) => {
    setLoginInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(loginInfo)
      .then((res) => {
        onLogin(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex bg-slate-50 justify-center items-center h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {JSON.stringify(loginInfo)}
        <h5 className="text-2xl font-bold mb-6 text-heading">Login</h5>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginInfo.email}
              onChange={handleChange}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={loginInfo.password}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-green-400 box-border border border-transparent hover:bg-green-500 focus:ring-4 focus:ring-green-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
