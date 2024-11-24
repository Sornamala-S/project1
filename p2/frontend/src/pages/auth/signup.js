import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { MdOutlineMail, MdPassword, MdDriveFileRenameOutline } from "react-icons/md";
import { FaUser, FaSmileWink } from "react-icons/fa";
import { baseURL } from '../../constant/url.js';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        fullName: "",
        password: ""
    });

    const { mutate: signup, isPending, isError, error } = useMutation({
        mutationFn: async ({ email, username, fullName, password }) => {
            try {
                const res = await fetch(`${baseURL}/api/auth/signup`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ email, username, fullName, password })
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error || "Something went wrong");
                }
                console.log(data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        },
        onSuccess: () => {
            console.log("User created successfully");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="text-center mb-6">
                    <div className="flex justify-center text-4xl text-indigo-500">
                        <FaSmileWink />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-700 mt-2">Event ZZZ</h1>
                    <p className="text-gray-500">Join us today and explore more!</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-indigo-500 text-white">
                                <MdOutlineMail />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-indigo-500 text-white">
                                <FaUser />
                            </span>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-indigo-500 text-white">
                                <MdDriveFileRenameOutline />
                            </span>
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-indigo-500 text-white">
                                <MdPassword />
                            </span>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        {isPending ? "Loading..." : "Sign Up"}
                    </button>
                    {isError && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link to="/login">
                        <button className="btn btn-outline btn-primary w-full mt-2">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
