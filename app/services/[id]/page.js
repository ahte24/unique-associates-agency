"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import {
	FaShieldAlt,
	FaRegCheckCircle,
	FaFileAlt,
	FaClipboardList,
	FaGavel,
	FaGlobe,
} from "react-icons/fa";
import endpoint from "@/utills/endpoint";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = ({ params }) => {
	const router = useRouter();
	const { id } = params;
	const [serviceData, setServiceData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false); // New state variable
	const token = Cookies.get("accessToken");

	useEffect(() => {
		if (!id) return;
		const fetchData = async () => {
			try {
				const response = await axios.get(`${endpoint}service/${id}`);
				setServiceData(response.data);
			} catch (error) {
				setError("Failed to fetch service data");
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [id]);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		service: "Trademark Registration",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handlePayment = async (e) => {
		try {
			// Create the order first
			const orderResponse = await axios.post(
				`${endpoint}order/create_order/`,
				{ service_id: id }, // Assuming 'id' is the service ID
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			// Extract the generated order_id from the response
			const { order_id } = orderResponse.data;

			
			const previousUrl = window.location.href;
			console.log(previousUrl);
			
			const paymentResponse = await axios.post(
				`${endpoint}order/payment/${order_id}/`,
				{ previousUrl }, 
				{
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json", 
					},
				}
			);

			// Log the payment response for debugging purposes
			console.log("Payment Response:", paymentResponse.data);

			// Check if the payment was successfully initiated and contains a redirect URL
			if (paymentResponse.data && paymentResponse.data.success) {
				const redirectUrl =
					paymentResponse.data.data.instrumentResponse.redirectInfo.url;

				if (redirectUrl) {
					console.log("Redirecting to:", redirectUrl);
					// Redirect the user to the payment gateway or success page
					window.location.href = redirectUrl;
				} else {
					console.error("Redirect URL not found in the response.");
				}
			} else {
				// Log an error if the payment initiation fails
				console.error(
					"Payment initiation failed:",
					paymentResponse.data.message
				);
			}
		} catch (error) {
			// In case of error, redirect the user to the login page or handle it accordingly
			alert("Login to proceed");
			router.push("/login");
			console.error(
				"Error processing payment:",
				error.response ? error.response.data : error.message
			);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Handle form submission logic (e.g., send the data to an API)
		console.log("Form data submitted:", formData);
	};
	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<div>
				<Head>
					<title>{serviceData?.name || "Service Details"}</title>
					<meta
						name="description"
						content={serviceData?.short_description || "Service details page"}
					/>
				</Head>
				<main className="bg-gray-50 min-h-screen">
					<div className="bg-indigo-600">
						<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
							<div className="max-w-2xl">
								<h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
									{serviceData.name}
								</h1>
								<p className="mt-4 text-xl text-indigo-200">
									{serviceData.short_description}
								</p>
							</div>
							<div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
								<div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-96">
									<h2 className="text-2xl font-bold text-gray-900">
										Inquiry Form
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
										<div>
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
										</div>

										<div className="text-right">
											<button
												type="submit"
												className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
						<div className="flex items-center justify-between">
							<div>
								<label
									htmlFor="price"
									className="block text-sm font-medium text-gray-700"
								>
									Price
								</label>
								<p className="mt-1 text-xl font-bold text-gray-900">
									₹ {serviceData.price || "Price not available"}
								</p>
							</div>
							{!isPaymentSuccessful ? (
								<button
									onClick={handlePayment}
									className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#4f46e5] hover:bg-[#4338ca]"
								>
									Proceed to Pay
								</button>
							) : (
								<Link
									href={
										"/services/7f0993ca-a42c-4744-9396-2603a84bf2ea/form_fillup"
									}
									className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
								>
									Fill the Form
								</Link>
							)}
						</div>
						{serviceData.services_description.length > 0 && (
							<div className="mt-12">
								{serviceData.services_description.map((desc) => (
									<div key={desc.id} className="mt-8">
										<h2 className="text-3xl font-extrabold text-gray-900">
											{desc.heading}
										</h2>
										<ul className="mt-4 space-y-4">
											{desc.point1 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 1:{" "}
														</strong>{" "}
														{desc.point1}
													</span>
												</li>
											)}
											{desc.point2 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 2:
														</strong>{" "}
														{desc.point2}
													</span>
												</li>
											)}
											{desc.point3 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 3:
														</strong>{" "}
														{desc.point3}
													</span>
												</li>
											)}
											{desc.point4 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 4:
														</strong>{" "}
														{desc.point4}
													</span>
												</li>
											)}
											{desc.point5 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 5:
														</strong>{" "}
														{desc.point5}
													</span>
												</li>
											)}
											{desc.point6 && (
												<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
													<span className="text-gray-800 text-lg leading-relaxed">
														<strong className="text-indigo-600">
															Point 6:
														</strong>{" "}
														{desc.point6}
													</span>
												</li>
											)}
										</ul>
									</div>
								))}
							</div>
						)}
						{serviceData.document_required &&
							serviceData.document_required.length > 0 && (
								<div className="mt-8">
									<h3 className="text-2xl font-bold text-gray-900">
										Documents Required:
									</h3>
									<ul className="mt-4 space-y-4">
										{serviceData.document_required.map((doc) => (
											<li
												key={doc.id}
												className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl"
											>
												<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
												<span className="text-gray-800 text-lg leading-relaxed">
													{doc.document_name}
												</span>
											</li>
										))}
									</ul>
								</div>
							)}
						<div className="mt-12 text-center">
							<h2 className="text-3xl font-extrabold text-gray-900">
								Why Choose Us?
							</h2>
							<p className="mt-4 text-xl text-gray-500">
								We offer expert guidance, personalized service, and
								comprehensive support throughout the trademark registration
								process.
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
		</>
	);
};

export default Page;
