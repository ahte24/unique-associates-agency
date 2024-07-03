import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="bg-[#215585] h-[40px] flex items-center ">
			<div className="container w-[80%] mx-auto flex  items-center">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.2499 14.93V18.23C20.2499 19.46 19.1599 20.4 17.9399 20.23C10.5999 19.21 4.78991 13.4 3.76991 6.06C3.59991 4.84 4.53991 3.75 5.76991 3.75H9.06991C9.55991 3.75 9.97991 4.1 10.0599 4.58L10.4499 6.77C10.5899 7.54 10.2699 8.32 9.62991 8.77L7.77991 10.36C9.20991 12.77 11.2399 14.78 13.6599 16.2L15.2299 14.38C15.6799 13.74 16.4599 13.42 17.2299 13.56L19.4199 13.95C19.8999 14.04 20.2499 14.45 20.2499 14.94V14.93Z"
						fill="#121331"
						stroke="#121331"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M20.1198 10.0299C20.1198 6.65992 17.3898 3.91992 14.0098 3.91992"
						stroke="#121331"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M16.6798 10.0299C16.6798 8.54986 15.4798 7.35986 14.0098 7.35986"
						stroke="#121331"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M20.2499 14.93V18.23C20.2499 19.46 19.1599 20.4 17.9399 20.23C10.5999 19.21 4.78991 13.4 3.76991 6.06C3.59991 4.84 4.53991 3.75 5.76991 3.75H9.06991C9.55991 3.75 9.97991 4.1 10.0599 4.58L10.4499 6.77C10.5899 7.54 10.2699 8.32 9.62991 8.77L7.77991 10.36C9.20991 12.77 11.2399 14.78 13.6599 16.2L15.2299 14.38C15.6799 13.74 16.4599 13.42 17.2299 13.56L19.4199 13.95C19.8999 14.04 20.2499 14.45 20.2499 14.94V14.93Z"
						fill="#121331"
						stroke="#121331"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
				<Link href={"tel:+919114111987"}>+91 911 411 1987</Link>
			</div>
		</div>
	);
};

export default Navbar;
