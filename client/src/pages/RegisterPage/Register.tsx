import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleOnChange = (e: any) => {
    const currField = e.target.name;
    const newValue = e.target.value;
    setNewUser({ ...newUser, [currField]: newValue });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(newUser);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        { newUser }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    setNewUser({
      username: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="flex flex-col justify-center text-center items-center m-10 pb-10 shadow-xl bg-slate-50">
      <div className="text-center w-6/12 bg-white p-10">
        <h1 className="text-3xl font-bold m-8">REGISTER</h1>
        <div className="text-start">
          <div className="my-6 ">
            <p className="text-lg m-1">Enter Username</p>
            <input
              type="text"
              className="bg-gray-100 rounded-lg p-2 w-full"
              name="username"
              value={newUser.username}
              onChange={handleOnChange}
            />
          </div>
          <div className="my-6">
            <p className="text-lg m-1">Enter Email</p>
            <input
              type="text"
              className="bg-gray-100 rounded-lg p-2 w-full"
              name="email"
              value={newUser.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="my-6">
            <p className="text-lg m-1">Enter Password</p>
            <input
              type="password"
              className="bg-gray-100 rounded-lg p-2 w-full"
              name="password"
              value={newUser.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="my-6">
            <p className="text-lg m-1">Retype Password</p>
            <input
              type="password"
              className="bg-gray-100 rounded-lg p-2 w-full"
              name="password2"
              value={newUser.password2}
              onChange={handleOnChange}
            />
          </div>
          <button
            type="submit"
            className="bg-green-200 w-full p-2 rounded-md mt-3 text-xl"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
