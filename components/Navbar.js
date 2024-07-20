"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import call from "@/public/call.svg";
import mail from "@/public/mail.svg";
import logo from "@/public/logo.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => setIsOpen(!isOpen);

	return (
		<>
			<div className="bg-[#215585] h-[40px] sm:flex items-center hidden ">
				<div className="container w-[80%] mx-auto flex items-center justify-between">
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
						className="text-black px-4 py-2 hover:bg-gray-200 bg-white rounded-md text-xs"
					>
						Log In
					</Link>
				</div>
			</div>
			<div className="h-20 flex items-center">
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
			</div>
		</>
	);
};

export default Navbar;
