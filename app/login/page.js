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
	const [accessToken, setAccessToken] = useState(
		Cookies.get("accessToken") || ""
	);
	const [refreshToken, setRefreshToken] = useState(
		Cookies.get("refreshToken") || ""
	);

	// Handle input changes for login credentials
	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value,
		}));
	};

	// Function to set a cookie
	const setCookie = (name, value, hours) => {
		const date = new Date();
		date.setTime(date.getTime() + hours * 60 * 60 * 1000);
		const expires = "expires=" + date.toUTCString();
		document.cookie = `${name}=${value};${expires};path=/;Secure;SameSite=Strict`;
	};

	// Handle form submission for login
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

				// Store tokens in cookies
				setCookie("accessToken", token.access, 12);
				setCookie("refreshToken", token.refresh, 12);

				setResponseMessage("Successfully authenticated!");
				router.push("/");
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
			console.error("Error:", error);
		}
	};

	// Function to refresh the access token using the refresh token
	const refreshAccessToken = async (refreshToken) => {
		try {
			const response = await axios.post(
				`${endpoint}token/refresh/`,
				{
					refresh: refreshToken,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.status === 200) {
				const { access } = response.data;
				setAccessToken(access);

				// Update the access token in the cookie
				setCookie("accessToken", access, 12);

				console.log("Access token refreshed:", access);
			}
		} catch (error) {
			console.error("Error refreshing access token:", error);
			if (error.response && error.response.status === 401) {
				setResponseMessage("Session expired, please log in again.");
				router.push("/login"); // Redirect to login page
			}
		}
	};

	// Function to check for the refresh token and refresh it after 4.9 minutes
	const setupTokenRefresh = () => {
		const token = Cookies.get("refreshToken");
		if (token) {
			setTimeout(() => {
				refreshAccessToken(token);
			}, 2000); // Wait 4.9 minutes (4.9 * 60 * 1000 ms)
		} else {
			console.log("Refresh token not found, skipping refresh.");
		}
	};

	// Use effect to set up the token refresh on mount
	useEffect(() => {
		if (refreshToken) {
			setupTokenRefresh(); // Set up the refresh to happen once after 4.9 minutes
		}
	}, [refreshToken]);
	return (
		<section className=" md:py-8 bg-gray-200 text-black py-14 min-h-screen flex  justify-center">
			<div className="flex flex-col items-center justify-center w-full px-6 mx-auto lg:py-0">
				<div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:">
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

							<p className="text-red-500 mt-4">{responseMessage}</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;
