import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { baseURL } from '../../constant/url';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const queryClient = useQueryClient();

  const login = async() => {
	try {
        const res = await fetch(`${baseURL}/api/auth/login`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.Error || "Something went wrong");
        }
      } catch (err) {
        throw err;
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-300 via-blue-300 to-purple-400">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label text-gray-600 flex items-center gap-2">
              <FaUser className="text-lg" />
              Username
            </label>
            <input
              type="text"
              name="username"
              className="input input-bordered w-full"
              placeholder="Enter your username"
              onChange={handleInputChange}
              value={formData.username}
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-600 flex items-center gap-2">
              <MdPassword className="text-lg" />
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
              onChange={handleInputChange}
              value={formData.password}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-white"
          >
            {isPending ? <LoadingSpinner /> : "Login"}
          </button>
          {isError && (
            <p className="text-red-500 text-sm mt-2">{error.message}</p>
          )}
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
