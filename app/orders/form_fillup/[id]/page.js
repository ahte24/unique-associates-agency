"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "lucide-react";
import Link from "next/link";

const RegistrationForm = ({ params }) => {
	const { id } = params;

	const [orderId, setOrderId] = useState(id);
	const [name, setName] = useState("");
	const [businessType, setBusinessType] = useState("");
	const [state, setState] = useState("");
	const [pinCode, setPinCode] = useState("");
	const [gstinPan, setGstinPan] = useState("");
	const [documents, setDocuments] = useState([{ name: "", file: null }]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [serviceData, setServiceData] = useState(null);
	const [error, setError] = useState(false);
	const token = Cookies.get("accessToken");
	const [docLen, setDocLen] = useState(null);
	const [paymentInfo, setPaymentInfo] = useState("");

	const goBack = () => {
		window.location.href = "/";
	};

	useEffect(() => {
		const fetchOrderDetails = async () => {
			try {
				const response = await axios.get(`${endpoint}order/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setPaymentInfo(response.data.order_status);
				const ServiceId = await response.data.service.id;
				const service = await axios.get(`${endpoint}service/${ServiceId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setServiceData(service.data);
				setDocLen(service.data.document_required.length);

				// Set the document names in the documents state
				const requiredDocuments = service.data.document_required.map((doc) => ({
					name: doc.document_name,
					file: null,
				}));
				setDocuments(requiredDocuments);
			} catch (error) {
				setError("Failed to fetch order details");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};
		fetchOrderDetails();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("order_id", orderId);
		formData.append("name", name);
		formData.append("business_type", businessType);
		formData.append("state", state);
		formData.append("pincode", pinCode);
		formData.append("gstinPan", gstinPan);
		formData.append("number_of_docs", documents.length);

		// Add each document
		documents.forEach((doc, index) => {
			formData.append(`document_name_${index + 1}`, doc.name);
			formData.append(`doc_file_${index + 1}`, doc.file); // Assuming each doc object has a 'file' property
		});

		try {
			const response = await axios.post(
				`${endpoint}order/upload_docs/`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						Authorization: `Bearer ${token}`, // Replace with your authentication token
					},
				}
			);

			console.log("Response:", response.data);
			toast.success("Form fillup Successful", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				theme: "light",
				transition: Bounce,
			});
			setTimeout(() => {
				window.location.href = `/orders/details/${id}`;
			}, 2000);
		} catch (error) {
			console.error("Error uploading documents:", error.response.data);
			alert("Error uploading documents");
		}
	};

	const handleDocumentChange = (index, e) => {
		const updatedDocuments = [...documents];
		if (e.target.type === "file") {
			updatedDocuments[index].file = e.target.files[0];
		} else {
			updatedDocuments[index].name = e.target.value;
		}
		setDocuments(updatedDocuments);
	};

	const addDocument = () => {
		setDocuments([...documents, { name: "", file: null }]);
	};

	const removeDocument = (index) => {
		setDocuments(documents.filter((_, i) => i !== index));
	};

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
			<div className="max-w-3xl mx-auto my-16 p-6 bg-white rounded shadow">
				{paymentInfo === "payment done" ? (
					<>
						<h2 className="text-2xl font-bold mb-6">Registration Form</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Order ID Field */}
							<div>
								<label
									htmlFor="orderId"
									className="block text-sm font-medium text-gray-700"
								>
									Order ID
								</label>
								<input
									id="orderId"
									name="orderId"
									type="text"
									disabled
									required
									value={orderId}
									onChange={(e) => setOrderId(e.target.value)}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3 cursor-not-allowed"
									placeholder="Enter your Order ID"
								/>
							</div>

							{/* Other Fields */}
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3"
									placeholder="Enter your full name"
								/>
							</div>

							<div>
								<label
									htmlFor="businessType"
									className="block text-sm font-medium text-gray-700"
								>
									Business Type
								</label>
								<input
									id="businessType"
									name="businessType"
									type="text"
									required
									value={businessType}
									onChange={(e) => setBusinessType(e.target.value)}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3"
									placeholder="Enter your business type"
								/>
							</div>
							<div>
								<label
									htmlFor="state"
									className="block text-sm font-medium text-gray-700"
								>
									State
								</label>
								<input
									id="state"
									name="state"
									required
									value={state}
									onChange={(e) => setState(e.target.value)}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3"
									placeholder="Enter your state"
								/>
							</div>
							<div>
								<label
									htmlFor="pinCode"
									className="block text-sm font-medium text-gray-700"
								>
									PIN Code
								</label>
								<input
									id="pinCode"
									name="pinCode"
									type="number"
									required
									value={pinCode}
									onChange={(e) => setPinCode(e.target.value)}
									maxLength={6}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3"
									placeholder="Enter PIN code"
								/>
							</div>
							<div>
								<label
									htmlFor="gstinPan"
									className="block text-sm font-medium text-gray-700"
								>
									GSTIN/PAN
								</label>
								<input
									id="gstinPan"
									name="gstinPan"
									type="text"
									required
									value={gstinPan}
									onChange={(e) => setGstinPan(e.target.value)}
									className="mt-1 block w-full border outline-gray-400 border-gray-300 rounded-md shadow-sm py-2 px-3"
									placeholder="Enter GSTIN or PAN"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Required Documents
								</label>
								{documents.map((doc, index) => (
									<div key={index} className="flex gap-2 mt-2">
										<input
											type="text"
											required
											disabled={index < docLen}
											value={doc.name}
											onChange={(e) => handleDocumentChange(index, e)}
											placeholder="Document name"
											className={`{flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 ${
												index < docLen ? "cursor-not-allowed" : "cursor-pointer"
											} }`}
										/>
										<input
											type="file"
											required
											accept=".pdf"
											onChange={(e) => handleDocumentChange(index, e)}
											className="flex-1 cursor-pointer"
										/>

										{index > docLen - 1 && (
											<button
												type="button"
												onClick={() => removeDocument(index)}
												className="text-red-500 hover:text-red-700"
											>
												Remove
											</button>
										)}
									</div>
								))}
								<button
									type="button"
									onClick={addDocument}
									className="mt-3 px-3 py-2 border rounded-md text-white hover:bg-[#2a6dab] bg-[#215585]"
								>
									Add Document
								</button>
							</div>
							{message && <div className="text-red-500 text-sm">{message}</div>}

							<div>
								<button
									type="submit"
									disabled={loading}
									className={`w-full py-2 px-4 rounded-md text-white hover:bg-[#2a6dab] ${
										loading ? "bg-gray-400" : "bg-[#215585]"
									}`}
								>
									{loading ? "Uploading..." : "Submit Registration"}
								</button>
							</div>
						</form>
					</>
				) : (
					<div className="flex flex-col justify-center gap-4">
						<div className="text-red-500 text-center text-lg font-medium">
							You don&apos;t have access to this page. Please contact support.
						</div>
						<div className="flex items-center justify-center gap-24">
							<button
								onClick={goBack}
								className="w-44  border border-gray-400 rounded-lg p-1 text-white bg-[#215585] hover:bg-[#2a6dab]"
							>
								Home
							</button>
							<Link
								href="/contactUs"
								className="w-44 border text-center border-gray-400 rounded-lg p-1 text-white bg-[#215585] hover:bg-[#2a6dab]"
							>
								Contact Us
							</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default RegistrationForm;
