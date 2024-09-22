"use client";
import "@/app/globals.css";
import endpoint from "@/utills/endpoint";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdownClick = () => setIsOpen(!isOpen);
	const [categories, setCategories] = useState([]);
	const [categoryDetails, setCategoryDetails] = useState({});
	const [serviceNames, setServiceNames] = useState({});

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(`${endpoint}service/category/`);
				const categoriesData = response.data;
				setCategories(categoriesData);
				// console.log("Fetched categories:", categoriesData);

				// Make an API call for each category
				categoriesData.forEach(async (category) => {
					try {
						const categoryResponse = await axios.get(
							`${endpoint}service/category/${category.id}/`
						);
						// console.log(
						// 	`Fetched data for category ${category.id}:`,
						// 	categoryResponse.data
						// );

						// Store the detailed data in state
						setCategoryDetails((prevDetails) => ({
							...prevDetails,
							[category.id]: categoryResponse.data,
						}));

						// Extract service names and ids and store them in state
						const serviceDetailsForCategory = categoryResponse.data.map(
							(service) => ({
								id: service.id,
								name: service.name,
							})
						);
						setServiceNames((prevNames) => ({
							...prevNames,
							[category.id]: serviceDetailsForCategory,
						}));
					} catch (categoryError) {
						console.error(
							`Error fetching data for category ${category.id}:`,
							categoryError
						);
					}
				});
			} catch (error) {
				console.error("Error fetching categories:", error);
			}
		};

		fetchCategories();
	}, []);

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
				<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
					{categories.map((category) => (
						<div key={category.id}>
							<div>
								<h3 className="font-semibold h-8 text-gray-700">
									{category.category_name}
								</h3>
								{serviceNames[category.id] &&
								serviceNames[category.id].length > 0 ? (
									<ul>
										{serviceNames[category.id].map((service) => (
											<li key={service.id}>
												<Link
													href={`/services/${service.id}`}
													className="text-sm block py-1 hover:text-black font-medium text-gray-700"
												>
													{service.name}
												</Link>
											</li>
										))}
									</ul>
								) : (
									<p>No services available.</p>
								)}
							</div>
						</div>
					))}
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
