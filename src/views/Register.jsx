import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Replace with your desired logic for handling the form submission
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
                Name
              </label>
              <input
                className="appearance-none rounded-md   w-full px-3 py-2 border border-gray-300 placeholder-gray-500   focus:outline-none focus:ring-agreen-500 focus:border-agreen-500 sm:text-sm"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
                required
              />
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
