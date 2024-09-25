"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
	const router = useRouter();
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	const [responseMessage, setResponseMessage] = useState("");
	const [responseStatus, setResponseStatus] = useState(null); // State to track success/failure status
	const [accessToken, setAccessToken] = useState(
		Cookies.get("accessToken") || ""
	);
	const [refreshToken, setRefreshToken] = useState(
		Cookies.get("refreshToken") || ""
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value,
		}));
	};

	const setCookie = (name, value, hours) => {
		const date = new Date();
		date.setTime(date.getTime() + hours * 60 * 60 * 1000);
		const expires = "expires=" + date.toUTCString();
		document.cookie = `${name}=${value};${expires};path=/;Secure;SameSite=Strict`;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${endpoint}token/`,
				{
					username: credentials.email,
					password: credentials.password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				const token = response.data;
				setAccessToken(token.access);
				setRefreshToken(token.refresh);

				setCookie("accessToken", token.access, 12);
				setCookie("refreshToken", token.refresh, 12);

				setResponseMessage("Successfully authenticated!");
				setResponseStatus("success"); // Set status to success

				window.location.reload();
			}
		} catch (error) {
			if (error.response) {
				setResponseMessage(
					`Error: ${error.response.data.message || "Invalid credentials"}`
				);
			} else if (error.request) {
				setResponseMessage(
					"No response received from the server. Please try again later."
				);
			} else {
				setResponseMessage("Something went wrong. Please try again later.");
			}
			setResponseStatus("error"); // Set status to error
		}
	};

	useEffect(() => {
		if (refreshToken) {
			setupTokenRefresh();
		}
	}, [refreshToken]);

	return (
		<section className="md:py-8 bg-gray-200 text-black py-14 min-h-screen flex justify-center">
			<div className="flex flex-col items-center justify-center w-full px-6 mx-auto lg:py-0">
				<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							Sign in to your account
						</h1>
						<form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									onChange={handleChange}
									value={credentials.email}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									onChange={handleChange}
									value={credentials.password}
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
									autoComplete="true"
								/>
							</div>
							<div className="flex items-center justify-between">
								<Link
									href="login/forgot"
									className="text-sm font-medium text-[#215585] hover:underline"
								>
									Forgot password?
								</Link>
							</div>

							<button
								type="submit"
								className="bg-[#215585] hover:bg-[#25415c] text-white py-1.5 px-4 rounded font-bold w-full"
							>
								Sign in
							</button>

							<p className="text-sm font-light text-black">
								Don’t have an account yet?{" "}
								<Link
									href="signup"
									className="font-medium text-[#215585] hover:underline"
								>
									Sign up
								</Link>
							</p>

							{/* Conditional class for response message */}
							<p
								className={`${
									responseStatus === "success"
										? "text-green-500"
										: "text-red-500"
								} mt-4`}
							>
								{responseMessage}
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;
