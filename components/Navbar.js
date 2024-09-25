"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import call from "@/public/call.svg";
import mail from "@/public/mail.svg";
import logo from "@/public/logo.svg";
import Dropdown from "./Dropdown";
import hamburger from "@/public/hamburger.svg";
import close from "@/public/close.svg";
import Cookies from "js-cookie";
import endpoint from "@/utills/endpoint";

// Function to fetch user profile from API
const fetchUserProfile = async () => {
	const token = Cookies.get("accessToken");

	if (!token) {
		throw new Error("No access token found");
	}

	const response = await fetch(`${endpoint}user/profile/`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		Cookies.remove("accessToken");
		Cookies.remove("refreshToken");

		// Redirect to the login page
		// window.location.href = "/login"; // Adjust the path according to your routing setup
		throw new Error(`Error: ${response.status}`);
	}

	const data = await response.json();
	return data;
};

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(true);
	const [hasAccessToken, setHasAccessToken] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const [userProfile, setUserProfile] = useState(null);
	const [error, setError] = useState(null);

	const toggleVisibility = () => {
		setIsHidden(!isHidden);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const toggleDropdown1 = () => {
		setIsOpen1(!isOpen1);
	};

	// Function to check for the access token and update state accordingly
	const checkAccessToken = () => {
		const token = Cookies.get("accessToken");
		setHasAccessToken(!!token); // Sets true if token exists, false otherwise
	};

	useEffect(() => {
		const loadUserProfile = async () => {
			try {
				const profile = await fetchUserProfile();
				setUserProfile(profile);
			} catch (err) {
				setError(err.message);
			}
		};

		loadUserProfile();

		// Check access token every 1 second
		const intervalId = setInterval(() => {
			checkAccessToken();
		}, 1000);

		// Cleanup interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	const handleSignOut = () => {
		Cookies.remove("accessToken"); // Remove the access token cookie
		Cookies.remove("refreshToken"); // Remove the access token cookie

		setHasAccessToken(false); // Update the state to reflect the user is logged out
		setIsOpen(false); // Close the dropdown
		setIsOpen1(false); // Close the dropdown
	};

	return (
		<>
			<nav>
				<div className="bg-[#215585] h-[40px] sm:flex items-center hidden ">
					<div className="container w-[95%] mx-auto flex items-center justify-between">
						<div className="flex items-center gap-4">
							<Link
								className="text-sm flex items-center gap-2 text-white"
								href={"tel:+919114111987"}
							>
								<Image src={call} width={20} height={20} alt="" />
								+91 911 411 1987
							</Link>
							<Link
								className="text-sm flex items-center gap-2 text-white"
								href={"mailto:zaman.dev26@gmail.com"}
							>
								<Image src={mail} width={20} height={20} alt="" />
								zaman.dev26@gmail.com
							</Link>
						</div>

						<div className="relative inline-block text-left z-50">
							{hasAccessToken ? (
								<>
									<button
										id="dropdownDefaultButton"
										onClick={toggleDropdown}
										className="text-black justify-evenly px-2 py-[5px] w-44 font-bold hover:bg-gray-200 bg-white rounded-md text-xs flex items-center"
										type="button"
									>
										{userProfile && userProfile.user
											? `Welcome ${userProfile.user.first_name}`
											: "Loading..."}
										<svg
											className="w-2.5 h-2.5 ms-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</button>

									{isOpen && (
										<div
											onClick={toggleDropdown}
											id="dropdown"
											className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 top-7 "
										>
											<ul
												className="py-2 text-sm text-gray-700 dark:text-gray-200 space-y-2"
												aria-labelledby="dropdownDefaultButton"
											>
												<li>
													<Link
														href="/orders"
														className="block px-4 py-2 hover:bg-gray-100 "
													>
														Orders
													</Link>
												</li>

												<li>
													<Link
														href={"/resetPassword"}
														className=" block px-4 py-2 hover:bg-gray-100 "
													>
														Change Password
													</Link>
												</li>
												<button
													onClick={handleSignOut}
													className="bg-red-500 w-fit ml-3 text-left px-2 py-1 rounded-lg text-white hover:bg-red-800"
												>
													Sign out
												</button>
											</ul>
										</div>
									)}
								</>
							) : (
								<>
									<Link
										href={"/login"}
										className="text-black px-4 py-[5px]  font-bold hover:bg-gray-200 bg-white rounded-md text-xs"
									>
										Login or Signup
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
				<div className="h-20 flex items-center relative w-full bg-[#e1e5ec] z-30">
					<div className="w-full  h-full md:px-5 px-2 flex items-center justify-between">
						<Link
							href={"/"}
							className="md:w-[300px] w-[150px] h-full flex items-center"
						>
							{/* <Image src={logo} width={500} height={500} alt="" /> */}
							<span className="text-3xl  text-[#215585] font-bold">
								MultiTaxIn
							</span>
						</Link>
						<div className="min-w-[300px] h-full sm:flex justify-center hidden">
							<ul className="flex gap-2 items-center">
								<Link
									href={"/"}
									className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
								>
									Home
								</Link>

								<Dropdown />

								<Link
									href={"/about"}
									className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
								>
									About
								</Link>
								<Link
									href={"/contactUs"}
									className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
								>
									Contact Us
								</Link>
							</ul>
						</div>
					</div>
					<button
						className={`md:hidden absolute right-[40px]  top-[28px]  ${
							isHidden ? "opacity-100 h-auto" : "opacity-0 h-0"
						} transition-opacity duration-1000`}
						onClick={toggleVisibility}
					>
						<Image
							width={30}
							height={30}
							className="invert"
							src={hamburger}
							alt=""
						/>
					</button>
					<button
						className={`md:hidden absolute  right-[40px] top-[28px] z-20 ${
							isHidden ? "opacity-0 h-0" : "opacity-100 h-auto"
						} transition-opacity duration-1000`}
						onClick={toggleVisibility}
					>
						<Image
							width={30}
							height={30}
							className="invert"
							src={close}
							alt=""
						/>
					</button>
				</div>
				<div
					className={`w-full left-0 transition-all border-b z-10 bg-white absolute ${
						isHidden
							? " transition-all  duration-1000 transform-y-full"
							: "transition-all top-[80px] duration-500 transform-y-0"
					} top-[-260px]`}
				>
					<div>
						<ul className=" gap-[10px] p-4 flex flex-col items-center justify-center ">
							<Link
								onClick={toggleVisibility}
								href="/"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Home
							</Link>
							<Link
								onClick={toggleVisibility}
								href="/services"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Services
							</Link>

							<Link
								onClick={toggleVisibility}
								href="/about"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								About Us
							</Link>

							<Link
								onClick={toggleVisibility}
								href="/contactUs"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Contact Us
							</Link>
							{hasAccessToken ? (
								<>
									<button
										id="dropdownDefaultButton"
										onClick={toggleDropdown1}
										className="text-black justify-evenly px-2 py-[5px] w-44 font-bold hover:bg-gray-300 bg-gray-200 rounded-md text-xs flex items-center md:hidden "
										type="button"
									>
										{userProfile && userProfile.user
											? `Welcome ${userProfile.user.first_name}`
											: "Loading..."}
										<svg
											className="w-2.5 h-2.5 ms-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 10 6"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 1 4 4 4-4"
											/>
										</svg>
									</button>

									{isOpen1 && (
										<div
											onClick={toggleDropdown1}
											id="dropdown"
											className="z-10 absolute w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 bottom-[-120px]"
										>
											<ul
												className="py-2 text-sm text-gray-700 dark:text-gray-200 space-y-3"
												aria-labelledby="dropdownDefaultButton"
											>
												<li onClick={toggleVisibility}>
													<Link
														href="/orders"
														className="block px-4 py-2 hover:bg-gray-100 "
													>
														Orders
													</Link>
												</li>
												<li onClick={toggleVisibility}>
													<Link
														href={"/resetPassword"}
														className="w-full text-left px-4 py-2 hover:bg-gray-100 "
													>
														Change Password
													</Link>
												</li>
												<li onClick={toggleVisibility}>
													<button
														onClick={handleSignOut}
														className="bg-red-500 w-fit ml-3 text-left px-2 py-1 rounded-lg text-white hover:bg-red-800"
													>
														Sign out
													</button>
												</li>
											</ul>
										</div>
									)}
								</>
							) : (
								<>
									<Link
										href={"/login"}
										onClick={toggleVisibility}
										className="text-black px-4 py-[5px]  font-bold hover:bg-gray-300 bg-gray-200 rounded-md text-xs"
									>
										Login or Signup
									</Link>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
