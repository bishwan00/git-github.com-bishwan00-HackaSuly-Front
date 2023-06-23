import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login, { data, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
  };
  useEffect(() => {
    if (!isError && data) {
      localStorage.setItem("access_token", data?.token);
      dispatch(getUser(data?.user));
    }
  }, [data]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex-col flex items-center ">
      <div className="shadow-sm w-[90%]  mt-10 rounded-md  flex flex-col items-center justify-center bg-gray-50 py-12 px-4 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold ">
              Log in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none   w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-kgreen-500 focus:border-agreen-500 sm:text-sm"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-kgreen-500 focus:border-agreen-500  sm:text-sm"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center justify-between">
              <div>
                <button
                  type="submit"
                  className=" text-white py-1 rounded px-2 bg-agreen-600 hover:bg-agreen-500"
                >
                  Log in
                </button>
              </div>
              <div className="">
                Don&apos;t have an account? &nbsp;
                <Link
                  to="/signup"
                  className=" text-agreen-600  hover:text-agreen-500"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
