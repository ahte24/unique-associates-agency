"use client";
import endpoint from "@/utills/endpoint";
import React, { useState } from "react";
import axios from "axios";

const ForgotPass = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setSuccess(null);
		try {
			const response = await axios.post(
				`${endpoint}user/api/send-otp/`,
				{
					email,
				},
				{
					headers: {
						"Content-Type": "application/json", // Ensure the server expects this
					},
				}
			);
			setSuccess("OTP sent successfully!");
			console.log("OTP sent successfully:", response.data);
		} catch (error) {
			setError("Failed to send OTP. Please try again.");
			console.error(
				"Error sending OTP:",
				error.response ? error.response.data : error.message
			);
		}
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
					<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Forgot Password
					</h2>
					<form
						onSubmit={handleSubmit}
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
				</div>
			</div>
		</section>
	);
};

export default ForgotPass;

{
	/* <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
    <div>
        <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            New Password
        </label>
        <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
        />
    </div>
    <div>
        <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
            Confirm password
        </label>
        <input
            type="confirm-password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
        />
    </div>
    <button
        type="submit"
        class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
        Reset passwod
    </button>
</form> */
}
