import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";

const Login = ({ setIsSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white px-6 py-8 text-black flex flex-col w-full max-w-md  rounded-lg shadow-lg shadow-gray-500/50">
      {/* Logo */}
      <div className="flex justify-center mb-3">
        <img src={logo} alt="Logo" className="h-16 w-16" />
      </div>
      {/* Login form */}
      <h1 className="text-3xl font-bold text-center mb-1">Welcome Back</h1>
      <h3 className="text-md  text-center mb-4">Sign in to continue</h3>
      <div>
        <div className="mb-2">
          <label className="block text-gray-700 font-medium mb-2 text-sm">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#fce48c] text-sm"
            placeholder="Enter Email"
          />
          <small className="text-gray-700 font-medium text-[10px]">
            We will never share your email with anyone else.
          </small>
        </div>
        <div className="mb-2">
          <label className="text-gray-700 font-medium mb-2 block text-sm">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:outline-none focus:border-[#fce48c] text-sm"
              placeholder="Enter Password"
            />
            <span
              className="absolute  top-1/2 right-3 transform -translate-y-1/2 text-gray-800 cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="flex justify-end py-2 mr-1 hover:cursor-pointer hover:text-gray-600 font-semibold">
            <span className="capitalize text-[10px]">Forgot password</span>
          </div>
        </div>
        <button type="button" className="primary-btn">
          Log In
        </button>
        <div className="flex justify-center mt-3">
          <p className="text-xs" onClick={() => setIsSignUp(true)}>
            Dont have an account?{" "}
            <span className="capitalize hover:cursor-pointer text-blue-600">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  setIsSignUp: PropTypes.func.isRequired,
};

export default Login;
