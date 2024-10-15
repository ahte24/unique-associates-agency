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

	const trimText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
	};

	if (loading) {
		return (
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
				<div class="relative p-4 w-full bg-white  overflow-hidden shadow hover:shadow-md rounded-lg">
					<div class="animate-pulse flex flex-col">
						<div class="rounded w-full h-52 bg-gray-200"></div>
						<div class="flex flex-col mt-5">
							<div class="w-full h-5 bg-gray-200 rounded"></div>
							<div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="flex items-center mt-5">
							<div>
								<div class="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div class="flex justify-between w-full ml-3">
								<div class="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div class="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="relative p-4 w-full bg-white  overflow-hidden shadow hover:shadow-md rounded-lg">
					<div class="animate-pulse flex flex-col">
						<div class="rounded w-full h-52 bg-gray-200"></div>
						<div class="flex flex-col mt-5">
							<div class="w-full h-5 bg-gray-200 rounded"></div>
							<div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="flex items-center mt-5">
							<div>
								<div class="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div class="flex justify-between w-full ml-3">
								<div class="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div class="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md ">
					<div class="animate-pulse flex flex-col">
						<div class="rounded w-full h-52 bg-gray-200"></div>
						<div class="flex flex-col mt-5">
							<div class="w-full h-5 bg-gray-200 rounded"></div>
							<div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="flex items-center mt-5">
							<div>
								<div class="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div class="flex justify-between w-full ml-3">
								<div class="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div class="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg">
					<div class="animate-pulse flex flex-col">
						<div class="rounded w-full h-52 bg-gray-200"></div>
						<div class="flex flex-col mt-5">
							<div class="w-full h-5 bg-gray-200 rounded"></div>
							<div class="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div class="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div class="flex items-center mt-5">
							<div>
								<div class="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div class="flex justify-between w-full ml-3">
								<div class="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div class="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	// Base URL for your local server

	return (
		<div>
			<section className="text-gray-600 body-font min-h-[700px]">
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
									{trimText(service.short_description, 100)}
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
