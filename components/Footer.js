import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="text-gray-600 body-font bg-[#f3f4f6] ">
			<div className="container sm:gap-0 gap-14 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 text-4xl">
						Logo
					</a>
					<p className="mt-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatum.
					</p>
				</div>
				<div className="flex-grow flex flex-wrap  md:gap-0 gap-8 -my-10 md:text-left text-center order-first">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
							BUSINESS REGISTRATION
						</h2>

						<ul>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Private Limited Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Public Limited Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									LLP Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									One Person Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Partnership Firm Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Sole Proprietorship Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Indian Subsidiary Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Nidhi Company Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Producer Company Registration
								</Link>
							</li>
							<li>
								<Link
									href={"http://www.google.com"}
									target="_blank"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Startup India Registration
								</Link>
							</li>
						</ul>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
							GOVERNMENT REGISTRATION
						</h2>
						<ul>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Trademark Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									IEC Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									ESI Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									EPF Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									MSME Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Shop and Establishment Registration
								</Link>
							</li>
						</ul>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
							ENVIRONMENTAL
						</h2>
						<ul>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									EPR Registration
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									PRO Authorization
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Plastic Waste Authorization
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									Environmental Clearance
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									EPR Authorization E-Waste
								</Link>
							</li>
						</ul>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
							FSSAI
						</h2>
						<ul>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI State License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									FSSAI Central License
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-[12px] block py-1 hover:text-black font-medium text-gray-700"
								>
									FPO Mark Certification
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-gray-300">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-500 text-sm text-center sm:text-left">
						© 2024 UniqueAssociates —
						<a
							href="https://twitter.com/knyttneve"
							rel="noopener noreferrer"
							className="text-gray-600 ml-1"
							target="_blank"
						>
							All Right Reserved
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
						<a className="text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
						<a className="ml-3 text-gray-500">
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="0"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
