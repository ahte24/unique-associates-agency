import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="text-gray-600 body-font bg-[#f3f4f6] ">
			<div className="container sm:gap-0 gap-14 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-72 h-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 text-3xl">
						UniqueAssociates
					</a>
					<p className="mt-2 text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
						voluptatum.
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
				<div className="container mx-auto py-4 px-5 flex justify-center flex-col items-center">
					<p className="text-gray-500 text-[12px] md:text-[14px] text-center sm:text-left ">
						© 2024 TaxClickIn | All Right Reserved
					</p>
					<div className="flex flex-wrap flex-col sm:flex-row sm:gap-4">
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link
								href={"/privacypolicy"}
								className="text-gray-500 text-sm text-center sm:text-left"
							>
								Privacy Policy
							</Link>
						</span>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link
								href={"/terms&conditions"}
								className="text-gray-500 text-sm text-center sm:text-left"
							>
								Terms & Conditions
							</Link>
						</span>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link
								href={"/cancellation&refund"}
								className="text-gray-500 text-sm text-center sm:text-left"
							>
								Cancellation & Refund
							</Link>
						</span>
						<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
							<Link
								href={"/shipping&delivery"}
								className="text-gray-500 text-sm text-center sm:text-left"
							>
								Shipping & Delivery
							</Link>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
