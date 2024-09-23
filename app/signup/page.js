"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import { useRouter } from "next/navigation";

const SignupPage = () => {
	const router = useRouter();
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
				router.push("/login");
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
		<section className="md:py-8 bg-gray-200 text-black py-14">
			<div className="flex flex-col md:min-h-screen items-center justify-center px-6 mx-auto lg:py-0">
				<div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-[40vw] xl:p-0 bg-gray-300">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
							Sign in to your account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							method="POST"
							onSubmit={handleSubmit}
						>
							<div>
								<label
									htmlFor="login"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
									className="block mb-2 text-sm font-medium text-gray-900"
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
								Sign Up
							</button>

							<p className="text-sm font-light text-black">
								Already have an account?{" "}
								<Link
									href="/login"
									className="font-medium text-[#215585] hover:underline"
								>
									Login
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignupPage;
