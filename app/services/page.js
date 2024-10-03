"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";

const Services = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(`${endpoint}service/`)
			.then((response) => {
				if (Array.isArray(response.data.results)) {
					setData(response.data.results);
				} else {
					throw new Error("Expected an array in 'results'");
				}
				setLoading(false);
			})
			.catch((error) => {
				setError(error.message || "An error occurred");
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return (
			// <p>Error: {error}</p>
			<div>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-14 mx-auto">
						<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 xl:px-10 ">
							<Link
								href={"/service1"}
								className=" p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://www.manishanilgupta.com/public/assets/upload/blog/6385b70e089ba_how-tax-consultants-are-helpful-to-your-business.jpg"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									Tax Planning Consultancy
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>

								<p className="text-base leading-relaxed mt-2">
									Tailored tax strategies to reduce liabilities while ensuring
									full compliance with tax regulations, optimizing business
									financial efficiency.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>
							<Link
								href={"/service2"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://5.imimg.com/data5/SELLER/Default/2022/3/MK/RS/ZZ/3072116/investment-consulatncy-service-1--500x500.jpg"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									Investment Consultancy
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Professional advice on managing your investment portfolio,
									helping you make informed decisions to maximize returns and
									meet financial objectives.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>

							<Link
								href={"/service3"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReuUNDPCWxFcNBQD7-0y4qehkMGr2tSWpfuA&s"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									Accounting Services
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Offering accounting, bookkeeping, and financial reporting
									services to maintain accurate financial records and ensure
									regulatory compliance.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>

							{/* <Link
								href={"/service4"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://dummyimage.com/1203x503"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									GST Compliances
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Comprehensive GST management services, from registration to
									timely filing, ensuring compliance with GST laws and
									minimizing tax liabilities.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link> */}

							{/* <Link
								href={"/service"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://dummyimage.com/1203x503"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									Legal Advice
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Expert legal consultation on various business-related issues
									to help you navigate legal challenges and ensure full
									compliance.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>

							<Link
								href={"/service"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://dummyimage.com/1203x503"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									Labour Law Compliances
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Ensuring your business complies with all labor laws, including
									employee rights, wages, and workplace regulations, to avoid
									legal penalties.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>

							<Link
								href={"/service"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://dummyimage.com/1203x503"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									GST Compliances
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Comprehensive GST management services, from registration to
									timely filing, ensuring compliance with GST laws and
									minimizing tax liabilities.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>

							<Link
								href={"/service"}
								className="p-6 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt="content"
										className="object-cover object-center h-full w-full"
										src="https://dummyimage.com/1203x503"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									ROC Compliances
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									Helping your business stay compliant with ROC by filing
									essential forms, maintaining records, and ensuring corporate
									law adherence.
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link> */}
						</div>
					</div>
				</section>
			</div>
		);
	}

	// Base URL for your local server

	return (
		<div>
			<section className="text-gray-600 body-font ">
				<div className="container px-5 py-14 mx-auto">
					<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 xl:px-10">
						{data.map((service, index) => (
							<Link
								href={`/services/${service.id}`}
								className="p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:mb-0 mb-6"
								key={service.id}
							>
								<div className="rounded-lg h-48 overflow-hidden">
									<img
										alt={service.name}
										className="object-cover object-center h-full w-full"
										src={
											service.image
												? `${endpoint}${service.image}`
												: "https://dummyimage.com/1203x503"
										}
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-gray-900 mt-5">
									{service.name}
								</h2>
								<div className="w-[60px] rounded-xl bg-[#18ba60] h-[5px]"></div>
								<p className="text-base leading-relaxed mt-2">
									{service.short_description}
								</p>
								<div className="text-indigo-500 inline-flex items-center mt-3">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;
