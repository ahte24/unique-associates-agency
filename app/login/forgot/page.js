"use client";
import endpoint from "@/utills/endpoint";
import React, { useState } from "react";
import axios from "axios";

const ForgotPass = () => {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	const [otpSent, setOtpSent] = useState(false); // Track if OTP was sent successfully

	// Handle sending OTP
	const handleSubmitEmail = async (e) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);
		try {
			const response = await axios.post(
				`${endpoint}user/send-otp/`,
				{
					email,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setSuccess("OTP sent successfully!");
			setOtpSent(true); // Set OTP sent to true to show the next form
			console.log("OTP sent successfully:", response.data);
		} catch (error) {
			setError("Failed to send OTP. Please try again.");
			console.error(
				"Error sending OTP:",
				error.response ? error.response.data : error.message
			);
		}
	};

	// Handle OTP and password reset
	const handleSubmitResetPassword = async (e) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		// Validate that newPassword and confirmPassword match
		if (newPassword !== confirmPassword) {
			setError("New password and confirm password do not match.");
			return;
		}

		// Make API call to reset password
		try {
			const response = await axios.post(
				`${endpoint}user/password_reset/`,
				{
					email, // Send the email
					entered_otp: otp, // Send the entered OTP
					new_password: newPassword, // Send the new password
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			setSuccess("Password reset successfully!");
			setOtpSent(false); // Reset OTP sent status after successful password reset
			console.log("Password reset successful:", response.data);
		} catch (error) {
			setError(
				"Failed to reset password. Please check your details and try again."
			);
			console.error(
				"Error resetting password:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-[500px] lg:py-0">
				<div className="flex w-full justify-center">
					<div className="md:w-1/2 container mx-auto p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
						<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Forgot Password
						</h2>

						{/* First Form: Email Submission */}
						{!otpSent ? (
							<form
								onSubmit={handleSubmitEmail}
								className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
							>
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@company.com"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								{error && <p className="text-red-500">{error}</p>}
								{success && <p className="text-green-500">{success}</p>}
								<button
									type="submit"
									className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Send OTP
								</button>
							</form>
						) : (
							/* Second Form: OTP and Password Reset */
							<form
								onSubmit={handleSubmitResetPassword}
								className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
							>
								<div>
									<label
										htmlFor="otp"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Otp:
									</label>
									<input
										type="password"
										name="otp"
										id="otp"
										placeholder="Enter OTP"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
										value={otp}
										onChange={(e) => setOtp(e.target.value)}
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
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ForgotPass;
