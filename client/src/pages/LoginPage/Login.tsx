import React, { FormEvent } from "react";

function Login() {
  const handleSubmit = (e: any) => {
    e.preventdeafault();
  };

  return (
    <div className="flex flex-col justify-center text-center items-center m-10 pb-10 shadow-xl bg-slate-50">
      <form className="text-center w-6/12 bg-white p-10">
        <h1 className="text-3xl font-bold m-8">LOGIN</h1>
        <div className="text-start">
          <div className="my-6">
            <p className="text-lg m-1">Enter Email</p>
            <input type="text" className="bg-gray-100 rounded-lg p-2 w-full" />
          </div>
          <div className="my-6">
            <p className="text-lg m-1">Enter Password</p>
            <input
              type="password"
              className="bg-gray-100 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <button
          className="bg-green-200 w-full p-2 rounded-md mt-3 text-xl"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
