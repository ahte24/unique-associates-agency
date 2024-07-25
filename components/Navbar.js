"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import call from "@/public/call.svg";
import mail from "@/public/mail.svg";
import logo from "@/public/logo.svg";
import Dropdown from "./Dropdown";
import hamburger from "@/public/hamburger.svg";
import close from "@/public/close.svg";

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(true);
	const toggleVisibility = () => {
		setIsHidden(!isHidden);
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
						<Link
							href={"/login"}
							className="text-black px-2 py-[5px] font-bold hover:bg-gray-200 bg-white rounded-md text-xs"
						>
							Login & Signup
						</Link>
					</div>
				</div>
				<div className="h-20 flex items-center relative w-full bg-white">
					<div className="w-full  h-full px-5 flex items-center justify-between">
						<Link
							href={"/"}
							className="md:w-[300px] w-[150px] h-full flex items-center"
						>
							<Image src={logo} width={500} height={500} alt="" />
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
									href={"/contact"}
									className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
								>
									Contact
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
					onClick={toggleVisibility}
					className={`w-full left-0 transition-all border-b z-10 bg-white absolute ${
						isHidden
							? " transition-all  duration-1000 transform-y-full"
							: "transition-all top-[80px] duration-500 transform-y-0"
					} top-[-260px]`}
				>
					<div>
						<ul className=" gap-[10px] p-4 flex flex-col items-center justify-center ">
							<Link
								href="/"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Home
							</Link>
							<Link
								href="/services"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Services
							</Link>

							<Link
								href="/about"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								About Us
							</Link>

							<Link
								href="/contact"
								scroll={false}
								className="rounded-lg font-medium py-2 px-4 transition-all hover:bg-gray-300 text-sm"
							>
								Contact Us
							</Link>
							<Link
								href="/login"
								scroll={false}
								className="text-white font-bold px-4 py-2 hover:bg-[#143452] bg-[#215585] rounded-md text-xs"
							>
								Login & Signup
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
