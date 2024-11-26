import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(" form Submitted ho gyaa");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center  justify-center   ">
      <div className=" border-2 rounded-xl border-emerald-600 p-20 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex  flex-col items-center justify-center   "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="em"
            type="email"
            placeholder="Enter your email"
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 "
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="pa"
            type="password"
            placeholder="Enter your Password"
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400 "
          />
          <button
            className=" mt-5  text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg px-8 py-2 w-full rounded-full placeholder:text-white "
            type="Submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
