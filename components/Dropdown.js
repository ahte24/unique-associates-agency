"use client";
import "@/app/globals.css";
import Link from "next/link";
import { useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdownClick = () => setIsOpen(!isOpen);

	return (
		<div className="relative">
			<button
				onClick={toggleDropdownClick}
				className="transition-all font-medium hover:bg-gray-300 text-sm py-2 px-4 rounded inline-flex items-center"
			>
				<span>Services</span>
				<svg
					className={`fill-current h-4 w-4 ml-2 transform ${
						isOpen ? "rotate-180" : ""
					} transition-transform duration-300`}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path d="M10 12l-6-6h12z" />
				</svg>
			</button>
			<div
				onClick={toggleDropdownClick}
				className={`absolute mt-2  w-[75vw] left-[-61vw] z-30 bg-white border rounded shadow-md shadow-gray-700 transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">
							BUSINESS REGISTRATION
						</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Private Limited Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Public Limited Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									LLP Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									One Person Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Partnership Firm Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Sole Proprietorship Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Indian Subsidiary Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Nidhi Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Producer Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="http://www.google.com"
									target="_blank"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Startup India Registration
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">
							GOVERNMENT REGISTRATION
						</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Trademark Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									IEC Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									ESI Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									EPF Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									MSME Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Shop and Establishment Registration
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">BIS & CDSCO</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									BIS Certification
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									BIS FMCS Certification
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									BIS CRS Certification
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									ISI Mark Certification
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									CDSCO Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Medical Device Registration
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">ENVIRONMENTAL</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									EPR Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									PRO Authorization
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Plastic Waste Authorization
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Environmental Clearance
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									EPR Authorization E-Waste
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">
							CHANGE IN BUSINESS
						</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Change In Directors
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Change in Registered Office
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Increase in Authorized Share Capital
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Winding Up of a Company
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">COMPLIANCES</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Annual Compliance of LLP
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Annual Compliance For Private Limited
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Nidhi Company Annual Compliance
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">NGO</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Section 8 Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									Trust Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									NGO Registration
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-semibold h-8 text-gray-700 ">FSSAI</h3>
						<ul>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI State License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI Central License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm block py-1 hover:text-black font-medium text-gray-700"
								>
									FPO Mark Certification
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-center">
					<Link
						href={"/services"}
						scroll={false}
						className="rounded-lg mb-5 font-medium py-2 px-4 transition-all text-white hover:text-black bg-[#215585] hover:bg-gray-300 text-sm"
					>
						Services
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
