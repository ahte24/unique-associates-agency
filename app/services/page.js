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
		return <p>Error: {error}</p>;
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
