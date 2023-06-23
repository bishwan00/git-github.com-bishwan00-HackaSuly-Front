import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSignupMutation } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../api/globalSlices/user.slics";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    phoneNumber: "",
    password: "",
    gender: "",
  });
  const [signUp, { data: response, isError }] = useSignupMutation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleInpute = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.confirmPassword !== data.password) {
      setErrors([...errors, "passwords didn't match"]);
      return;
    }

    signUp(data);
  };
  useEffect(() => {
    if (!isError || response) {
      localStorage.setItem("access_token", response?.data.token);
      dispatch(getUser(response?.data.user));
    }
  }, [response]);
  if (user) return <Navigate to="/" replace />;

  return (
    <div>
      {" "}
      <div className="mt-10 md:mt-0 flex-col flex items-center  ">
        <div className=" flex justify-center w-full md:w-96 items-center">
          <form
            onSubmit={handleSubmit}
            className="w-10/12 md:w-full max-w-md p-6 bg-gray-50 rounded-md shadow-sm"
          >
            <h2 className="mt-2 text-center text-3xl font-extrabold ">
              Register
            </h2>{" "}
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                First Name
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Your first name"
                value={data.name}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2" htmlFor="name">
                Last Name
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Your last name"
                value={data.name}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-2" htmlFor="email">
                User Name
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="userName"
                name="userName"
                type="text"
                placeholder="userName"
                value={data.userName}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={data.email}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-4">
              <select
                name="gender"
                onChange={handleInpute}
                value={data.gender}
                className="bg-transparent  border-b-2 w-full md:w-96 rounded-sm outline-none text-daisy-bush-900 placeholder:text-daisy-bush-900 pl-4"
              >
                <option className="bg-transparent" value="gender">
                  Gender
                </option>
                <option className="bg-transparent" value="MALE">
                  Male
                </option>
                <option className="bg-transparent" value="FEMALE">
                  Female
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="password"
                name="password"
                type="password"
                placeholder="********"
                value={data.password}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm  mb-2" htmlFor="confirmPassword">
                Confirm password
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="********"
                value={data.confirmPassword}
                onChange={handleInpute}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm  mb-2" htmlFor="phone">
                Phone number
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="phone"
                name="phone"
                type="tel"
                placeholder="770-123-4567"
                value={data.phone}
                onChange={handleInpute}
                required
              />
            </div>
            <div className=" flex flex-col items-center">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent  rounded-md text-white bg-agreen-600 hover:bg-agreen-500 focus:outline-none focus:ringfocus:ring-agreen-500 focus:ring-offset-2 focus:ring-2"
              >
                Register
              </button>{" "}
              <Link
                to="/login"
                className="mt-3  text-agreen-600 hover:text-agreen-500"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
