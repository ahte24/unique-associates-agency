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
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ params }) => {
	const router = useRouter();
	const { id } = params;
	const [serviceData, setServiceData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

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
		// const order_id = Cookies.get("order_id"); // Fetch the order_id from the cookie
		fetchData();
	}, [id]);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		service: "",
	});

	// Assuming serviceData is fetched asynchronously, useEffect to set the service name
	useEffect(() => {
		if (serviceData && serviceData.name) {
			setFormData((prevFormData) => ({
				...prevFormData,
				service: serviceData.name || "", // Ensure service is never undefined
			}));
		}
	}, [serviceData]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handlePayment = async (e) => {
		try {
			const userProfile = await axios.get(`${endpoint}user/profile/`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			// Step 1: Create the order and get order_id
			const orderResponse = await axios.post(
				`${endpoint}order/create_order/`,
				{ service_id: id }, // 'id' is your service ID
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			// Extract the generated order_id from the response
			const { order_id } = orderResponse.data;
			Cookies.set("order_id", order_id, { expires: 1 });

			// Step 2: Prepare payment parameters
			const merchantKey = "BrmYrE"; // Replace with your actual merchant key
			const merchantSalt = "zO2kz8ThUDbekRFBX0SZYzHuomUMeHKj"; // Replace with your actual merchant salt

			// Generate a unique transaction ID
			const txnid = order_id; // Using order_id as txnid

			// Payment parameters
			const amount = `${serviceData.price}`; // Replace with the actual amount
			const productinfo = `${serviceData.name}`; // Replace with actual product info
			const firstname = `${userProfile.data.user.first_name}`; // Replace with actual first name
			const email = `${userProfile.data.user.email}`; // Replace with actual email
			const phone = `${userProfile.data.phone_number}`; // Replace with actual phone number

			// Success and failure URLs (adjust according to your routes)
			const surl = `${endpoint}order/verify/`; // Success URL
			const furl = `${endpoint}order/verify/`; // Failure URL

			// User-defined fields (optional)
			const udf1 = `${serviceData.id}`;
			const udf2 = `${window.location.href}`;
			const udf3 = "";
			const udf4 = "";
			const udf5 = "";

			// Step 3: Generate the hash (Not secure on frontend)
			const hashString =
				merchantKey +
				"|" +
				txnid +
				"|" +
				amount +
				"|" +
				productinfo +
				"|" +
				firstname +
				"|" +
				email +
				"|" +
				udf1 +
				"|" +
				udf2 +
				"|" +
				udf3 +
				"|" +
				udf4 +
				"|" +
				udf5 +
				"||||||" +
				merchantSalt;

			const hash = CryptoJS.SHA512(hashString).toString();
			Cookies.set("hash", hash, { expires: 1 });

			// Step 4: Prepare form data
			const payuParams = {
				key: merchantKey,
				txnid: txnid,
				amount: amount,
				productinfo: productinfo,
				firstname: firstname,
				email: email,
				phone: phone,
				surl: surl,
				furl: furl,
				hash: hash,
				udf1: udf1,
				udf2: udf2,
				udf3: udf3,
				udf4: udf4,
				udf5: udf5,
				service_provider: "payu_paisa", // For PayU Paisa
			};

			// PayU payment gateway URL (use sandbox for testing)
			const payuURL = "https://secure.payu.in/_payment"; // Sandbox URL
			// For production, use: 'https://secure.payu.in/_payment'
			// Step 5: Create and submit the payment form
			const form = document.createElement("form");
			form.method = "POST";
			form.action = payuURL;

			for (const key in payuParams) {
				if (payuParams.hasOwnProperty(key)) {
					const input = document.createElement("input");
					input.type = "hidden";
					input.name = key;
					input.value = payuParams[key];
					form.appendChild(input);
				}
			}

			document.body.appendChild(form);
			form.submit();
		} catch (error) {
			// Handle errors
			console.error(
				"Error processing payment:",
				error.response ? error.response.data : error.message
			);
			alert("Please Login to Proceed.");
			router.push("/login");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/service", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("done");
				toast.success("Inquiry Sent Successfully.", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: "light",
					transition: Bounce,
				});
				setFormData({
					name: "",
					email: "",
					phone: "",
					services: "",
					message: "",
				});
			} else {
				const errorData = await response.json();
				toast.error("Something went wrong.", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					transition: Bounce,
				});
			}
		} catch (error) {
			toast.error(`Error: ${error.message}`, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				transition: Bounce,
			});
			console.log(error);
		}
	};
	if (loading)
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
				<div className="relative p-4 w-full bg-white  overflow-hidden shadow hover:shadow-md rounded-lg">
					<div className="animate-pulse flex flex-col">
						<div className="rounded w-full h-52 bg-gray-200"></div>
						<div className="flex flex-col mt-5">
							<div className="w-full h-5 bg-gray-200 rounded"></div>
							<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="flex items-center mt-5">
							<div>
								<div className="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div className="flex justify-between w-full ml-3">
								<div className="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div className="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative p-4 w-full bg-white  overflow-hidden shadow hover:shadow-md rounded-lg">
					<div className="animate-pulse flex flex-col">
						<div className="rounded w-full h-52 bg-gray-200"></div>
						<div className="flex flex-col mt-5">
							<div className="w-full h-5 bg-gray-200 rounded"></div>
							<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="flex items-center mt-5">
							<div>
								<div className="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div className="flex justify-between w-full ml-3">
								<div className="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div className="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md ">
					<div className="animate-pulse flex flex-col">
						<div className="rounded w-full h-52 bg-gray-200"></div>
						<div className="flex flex-col mt-5">
							<div className="w-full h-5 bg-gray-200 rounded"></div>
							<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="flex items-center mt-5">
							<div>
								<div className="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div className="flex justify-between w-full ml-3">
								<div className="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div className="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="relative p-4 w-full bg-white  overflow-hidden shadow hover:shadow-md rounded-lg">
					<div className="animate-pulse flex flex-col">
						<div className="rounded w-full h-52 bg-gray-200"></div>
						<div className="flex flex-col mt-5">
							<div className="w-full h-5 bg-gray-200 rounded"></div>
							<div className="mt-2 w-10/12 h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-8/12 h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
							<div className="mt-2 w-full h-3 bg-gray-200 rounded"></div>
						</div>

						<div className="flex items-center mt-5">
							<div>
								<div className="rounded-full bg-gray-200 w-10 h-10"></div>
							</div>
							<div className="flex justify-between w-full ml-3">
								<div className="w-5/12 h-3 bg-gray-200 rounded"></div>
								<div className="w-2/12 h-3 bg-gray-200 rounded"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	if (error) return <p>{error}</p>;

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>

			<ToastContainer />
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
						<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
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
												value={formData.name || ""}
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
												value={formData.email || ""}
												onChange={handleChange}
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
												value={formData.phone || ""}
												onChange={handleChange}
												required
												className="mt-1 border p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
										<div className="hidden">
											{/* Hidden input to store the service name */}
											<label
												htmlFor="service"
												className="block text-sm font-medium text-gray-700"
											>
												Service
											</label>
											<input
												type="hidden"
												name="service"
												id="service"
												value={formData.service || ""} // Service value from formData
												onChange={handleChange}
												required
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
												value={formData.message || ""}
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

					<div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-10 lg:px-8">
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
							<button
								onClick={() => {
									handlePayment();
								}}
								className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#4f46e5] hover:bg-[#4338ca]"
							>
								Proceed to Pay
							</button>
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
									href="/contactUs"
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
