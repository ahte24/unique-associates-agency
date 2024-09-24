"use client";
import endpoint from "@/utills/endpoint";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie to retrieve access token

const ForgotPass = () => {
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	// Retrieve accessToken from cookies
	const getAccessTokenFromCookies = () => {
		return Cookies.get("accessToken"); // Assuming accessToken is stored under this key
	};

	const handleSubmitResetPassword = async (e) => {
		e.preventDefault();

		// Validate password match
		if (newPassword !== confirmPassword) {
			setError("New password and confirm password do not match");
			return;
		}

		// Get token from cookies
		const token = getAccessTokenFromCookies();
		if (!token) {
			setError("Authorization token not found.");
			return;
		}

		try {
			// Log the request data
			console.log("Sending request with:", {
				current_password: currentPassword,
				new_password: newPassword,
			});

			// Make the POST request to the API
			const response = await axios.post(
				`${endpoint}user/change-password/`, // Ensure the URL is correct
				{
					current_password: currentPassword,
					new_password: newPassword,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`, // Authorization header with Bearer token
					},
				}
			);

			console.log("API Response:", response);

			if (response.status === 200) {
				setSuccess("Password successfully changed");
				setError(null);
			}
		} catch (err) {
			// Log full error details
			console.error("API Error:", err.response?.data || err.message);
			console.log("Full error details:", err.response); // Log full error response for debugging

			// Set the error message from response or fallback to a generic message
			setError(err.response?.data?.message || "Failed to change password");
			setSuccess(null);
		}
	};

	return (
		<section className="bg-gray-50 ">
			<div className="flex flex-col items-center justify-center  px-6 py-8 mx-auto h-[500px] lg:py-0">
				<div className="flex w-full justify-center">
					<div className="md:w-1/2 container mx-auto p-6 bg-white rounded-lg shadow dark:border sm:max-w-md  sm:p-8">
						<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Reset Password
						</h2>
						<form
							onSubmit={handleSubmitResetPassword}
							className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
						>
							<div>
								<label
									htmlFor="Current Password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Current Password
								</label>
								<input
									type="password"
									name="Current Password"
									id="Current Password"
									placeholder="Current Password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									value={currentPassword}
									onChange={(e) => setCurrentPassword(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									New Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="New Password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									value={newPassword}
									onChange={(e) => setNewPassword(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="confirm-password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Confirm Password
								</label>
								<input
									type="password"
									name="confirm-password"
									id="confirm-password"
									placeholder="Confirm Password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
							</div>
							{error && <p className="text-red-500">{error}</p>}
							{success && <p className="text-green-500">{success}</p>}
							<button
								type="submit"
								className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								Reset Password
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPass;
