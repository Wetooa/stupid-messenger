import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="flex justify-between bg-blue-300 mb-2 p-2">
      <button
        className="p-2 bg-slate-300 rounded-md"
        onClick={() => navigate("/")}
      >
        STUPID MESSENGER
      </button>
      <div className="flex gap-2 ">
        <button
          className="p-2 bg-slate-400 rounded-sm"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="p-2 bg-slate-400 rounded-sm"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
