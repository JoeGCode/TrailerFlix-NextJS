"use client";

import React, { useState } from "react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`py-2 px-4 font-medium text-sm text-gray-500 border-b-2 ${
              activeTab === "login"
                ? "border-blue-500 text-blue-500"
                : "border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm text-gray-500 border-b-2 ${
              activeTab === "register"
                ? "border-blue-500 text-blue-500"
                : "border-transparent hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "login" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Login</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          )}

          {activeTab === "register" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Register</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="register-confirm-password"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="register-confirm-password"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
