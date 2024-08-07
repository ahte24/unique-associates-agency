"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import Cors from "cors";

const page = () => {
	const [responseMessage, setResponseMessage] = useState(null);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validation logic
		if (formData.password !== formData.confirmPassword) {
			setResponseMessage("Passwords do not match.");
			console.log("Passwords do not match");
			return;
		}

		const payload = {
			email: formData.email,
			password: formData.password,
			first_name: formData.firstName, // Ensure field names match backend expectations
			last_name: formData.lastName,
			phone_number: formData.phoneNumber,
		};

		try {
			const response = await axios.post(`${endpoint}user/signup/`, payload, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			// Checking for successful responses (200 or 201)
			if (response.status === 200 || response.status === 201) {
				setResponseMessage("Successfully signed up!");
				console.log("Response", response.data);
			}
		} catch (error) {
			console.error("Error", error);

			if (error.response) {
				// Extract error message safely
				const errorMsg =
					error.response.data.message || "An error occurred during signup.";
				setResponseMessage(`Error: ${errorMsg}`);
			} else if (error.request) {
				// The request was made but no response was received
				setResponseMessage(
					"No response received from the server. Please try again later."
				);
			} else {
				// Something happened in setting up the request that triggered an error
				setResponseMessage("Something went wrong. Please try again later.");
			}
		}
	};

	return (
		<section className=" md:py-8 bg-gray-200 text-black py-14">
			<div className="flex flex-col md:min-h-screen items-center justify-center px-6 mx-auto  lg:py-0">
				<div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:">
							Sign in to your account
						</h1>

						<form id="connect-google-button" method="post" action="">
							<button
								className="w-full inline-flex items-center justify-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 "
								type="submit"
							>
								<svg
									className="w-5 h-5 mr-2"
									viewBox="0 0 21 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_13183_10121)">
										<path
											d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
											fill="#3F83F8"
										></path>
										<path
											d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
											fill="#34A853"
										></path>
										<path
											d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
											fill="#FBBC04"
										></path>
										<path
											d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
											fill="#EA4335"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_13183_10121">
											<rect
												width="20"
												height="20"
												fill="white"
												transform="translate(0.5)"
											></rect>
										</clipPath>
									</defs>
								</svg>
								Sign in with Google
							</button>
						</form>

						<div className="flex items-center">
							<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
							<div className="px-5 text-center text-gray-500 dark:text-gray-400">
								or
							</div>
							<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
						</div>

						<form
							className="space-y-4 md:space-y-6"
							method="POST"
							onSubmit={handleSubmit}
						>
							<div>
								<label
									htmlFor="login"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									Your mobile or email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									placeholder="name@company.com"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									Password
								</label>
								<input
									autoComplete="true"
									type="password"
									name="password"
									id="password"
									value={formData.password}
									onChange={handleChange}
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="confirmPassword"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									Confirm Password
								</label>
								<input
									autoComplete="true"
									type="password"
									name="confirmPassword"
									id="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="firstName"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									id="first-name"
									value={formData.firstName}
									onChange={handleChange}
									placeholder="First Name"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="last-name"
									value={formData.lastName}
									onChange={handleChange}
									placeholder="Last name"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="phoneNumber"
									className="block mb-2 text-sm font-medium text-gray-900 dark:"
								>
									Phone Number
								</label>
								<input
									type="tel"
									name="phoneNumber"
									id="phone-number"
									value={formData.phoneNumber}
									onChange={handleChange}
									placeholder="+91 12345 67890"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg outline-none block w-full p-2.5"
									required
								/>
							</div>

							<button
								type="submit"
								className="bg-[#215585] hover:bg-[#25415c] text-white py-1.5 px-4 rounded font-bold w-full"
							>
								Sign in
							</button>

							<p className="text-sm font-light text-black ">
								Already have an account?{" "}
								<a
									href="/login"
									className="font-medium text-[#215585] hover:underline"
								>
									Login
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
