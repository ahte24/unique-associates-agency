"use client";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
	FaShieldAlt,
	FaRegCheckCircle,
	FaFileAlt,
	FaClipboardList,
	FaGavel,
	FaGlobe,
} from "react-icons/fa";

const Page = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		service: "Trademark Registration",
	});
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// Construct the query string manually
		const queryString = new URLSearchParams(formData).toString();
		router.push(`/billing?${queryString}`);
	};

	return (
		<div>
			<Head>
				<title>Tax Planning Consultancy</title>
				<meta
					name="description"
					content="Comprehensive trademark registration services to protect your brand and intellectual property."
				/>
			</Head>
			<main className="bg-gray-50 min-h-screen">
				{/* Hero Section */}
				<div className="bg-indigo-600">
					<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<div className="max-w-2xl">
							<h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
								Tax Planning Consultancy
							</h1>
							<p className="mt-4 text-xl text-indigo-200">
								Tailored tax strategies to reduce liabilities while ensuring
								full compliance with tax regulations, optimizing business
								financial efficiency.
							</p>
						</div>
						<div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
							<div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-96">
								<h2 className="text-2xl font-bold text-gray-900">
									Payment Form
								</h2>
								<form onSubmit={handleSubmit} className="mt-6 space-y-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Full Name
										</label>
										<input
											type="text"
											name="name"
											id="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="mt-1 border p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Email Address
										</label>
										<input
											type="email"
											name="email"
											id="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="mt-1 border p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									<div>
										<label
											htmlFor="phone"
											className="block text-sm font-medium text-gray-700"
										>
											Phone Number
										</label>
										<input
											type="tel"
											name="phone"
											id="phone"
											value={formData.phone}
											onChange={handleChange}
											required
											className="mt-1 border p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									{/* <div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700"
										>
											Message
										</label>
										<textarea
											name="message"
											id="message"
											value={formData.message}
											onChange={handleChange}
											rows="4"
											required
											className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md outline-none p-2"
										/>
									</div> */}
									<div className="text-right flex justify-between items-center">
										<div>
											<label
												htmlFor="price"
												className="block text-sm font-medium text-gray-700"
											>
												Price
											</label>
											<p className="mt-1 text-xl font-bold text-gray-900">
												₹ 500
											</p>
										</div>

										<button
											type="submit"
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Proceede to pay
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					{/* <div className=" container flex items-center justify-between">
						<div>
							<label
								htmlFor="price"
								className="block text-sm font-medium text-gray-700"
							>
								Price
							</label>
							<p className="mt-1 text-xl font-bold text-gray-900">₹ 500</p>
						</div>

						<button className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#4f46e5] hover:bg-[#4338ca]">
							Proceed to Pay
						</button>
					</div> */}

					<div className="mt-12 text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Why Choose Us?
						</h2>
						<p className="mt-4 text-xl text-gray-500">
							We offer expert guidance, personalized service, and comprehensive
							support.
						</p>
						<div className="mt-8 flex justify-center">
							<a
								href="/contact"
								className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Page;
