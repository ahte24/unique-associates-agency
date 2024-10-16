// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import endpoint from "@/utills/endpoint";
// import Cookies from "js-cookie";

// const RegistrationForm = ({ params }) => {
// 	const { id } = params;

// 	const [orderId, setOrderId] = useState(id);
// 	const [name, setName] = useState("");
// 	const [businessType, setBusinessType] = useState("");
// 	const [state, setState] = useState("");
// 	const [pinCode, setPinCode] = useState("");
// 	const [gstinPan, setGstinPan] = useState("");
// 	const [documents, setDocuments] = useState([{ name: "", file: null }]);
// 	const [loading, setLoading] = useState(false);
// 	const [message, setMessage] = useState("");
// 	const [serviceData, setServiceData] = useState(null);
// 	const [error, setError] = useState(false);
// 	const token = Cookies.get("accessToken");

// 	useEffect(() => {
// 		const fetchOrderDetails = async () => {
// 			try {
// 				const response = await axios.get(`${endpoint}order/${id}`, {
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 						// "Content-Type": "application/json",
// 					},
// 				});
// 				setServiceData(response.data);

// 				const ServiceId = await response.data.service.id;
// 				const service = await axios.get(`${endpoint}service/${ServiceId}`, {
// 					headers: {
// 						Authorization: `Bearer ${token}`,
// 					},
// 				});
// 				setServiceData(service.data);
// 				service.data.document_required.forEach((doc) => {
// 					console.log(doc.document_name);
// 				});
// 			} catch (error) {
// 				setError("Failed to fetch order details");
// 				console.error(error);
// 				// console.log("something is not right");
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		fetchOrderDetails();
// 	}, [id]);

// 	// useEffect(() => {
// 	// 	const fetchData = async () => {
// 	// 		try {
// 	// 			const response = await axios.get(`${endpoint}service/${ServiceId}`, {
// 	// 				headers: {
// 	// 					Authorization: `Bearer ${token}`,
// 	// 				},
// 	// 			});
// 	// 			setServiceData(response.data);
// 	// 			console.log(response.data);
// 	// 		} catch (error) {
// 	// 			setError("Failed to fetch service data");
// 	// 			console.error(error);
// 	// 		} finally {
// 	// 			setLoading(false);
// 	// 		}
// 	// 	};
// 	// 	fetchData();
// 	// }, []);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const formData = {
// 			orderId,
// 			name,
// 			businessType,
// 			state,
// 			pinCode,
// 			gstinPan,
// 			documents,
// 		};
// 		console.log("Form Data:", formData);
// 	};

// 	const handleDocumentChange = (index, e) => {
// 		const updatedDocuments = [...documents];
// 		if (e.target.type === "file") {
// 			updatedDocuments[index].file = e.target.files[0];
// 		} else {
// 			updatedDocuments[index].name = e.target.value;
// 		}
// 		setDocuments(updatedDocuments);
// 	};

// 	const addDocument = () => {
// 		setDocuments([...documents, { name: "", file: null }]);
// 	};

// 	const removeDocument = (index) => {
// 		setDocuments(documents.filter((_, i) => i !== index));
// 	};
// 	// console.log("Service Data ID:", serviceData ? serviceData.service.id : null);

// 	return (
// 		<div className="max-w-3xl mx-auto my-24 p-6 bg-white rounded shadow">
// 			<h2 className="text-2xl font-bold mb-6">Registration Form</h2>
// 			<form onSubmit={handleSubmit} className="space-y-6">
// 				<div className="hidden">
// 					<label
// 						htmlFor="orderId"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						Order ID
// 					</label>
// 					<input
// 						id="orderId"
// 						name="orderId"
// 						type="text"
// 						required
// 						value={orderId}
// 						onChange={(e) => setOrderId(e.target.value)}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter your Order ID"
// 					/>
// 				</div>
// 				<div>
// 					<label
// 						htmlFor="name"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						Name
// 					</label>
// 					<input
// 						id="name"
// 						name="name"
// 						type="text"
// 						required
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter your full name"
// 					/>
// 				</div>
// 				<div>
// 					<label
// 						htmlFor="businessType"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						Business Type
// 					</label>
// 					<input
// 						id="businessType"
// 						name="businessType"
// 						type="text"
// 						required
// 						value={businessType}
// 						onChange={(e) => setBusinessType(e.target.value)}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter your business type"
// 					/>
// 				</div>
// 				<div>
// 					<label
// 						htmlFor="state"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						State
// 					</label>
// 					<input
// 						id="state"
// 						name="state"
// 						required
// 						value={state}
// 						onChange={(e) => setState(e.target.value)}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter your state"
// 					/>
// 				</div>
// 				<div>
// 					<label
// 						htmlFor="pinCode"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						PIN Code
// 					</label>
// 					<input
// 						id="pinCode"
// 						name="pinCode"
// 						type="text"
// 						required
// 						value={pinCode}
// 						onChange={(e) => setPinCode(e.target.value)}
// 						maxLength={6}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter PIN code"
// 					/>
// 				</div>
// 				<div>
// 					<label
// 						htmlFor="gstinPan"
// 						className="block text-sm font-medium text-gray-700"
// 					>
// 						GSTIN/PAN
// 					</label>
// 					<input
// 						id="gstinPan"
// 						name="gstinPan"
// 						type="text"
// 						required
// 						value={gstinPan}
// 						onChange={(e) => setGstinPan(e.target.value)}
// 						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 						placeholder="Enter GSTIN or PAN"
// 					/>
// 				</div>
// 				<div>
// 					<label className="block text-sm font-medium text-gray-700">
// 						Required Documents
// 					</label>
// 					{documents.map((doc, index) => (
// 						<div key={index} className="flex gap-2 mt-2">
// 							<input
// 								type="text"
// 								required
// 								value={doc.name}
// 								onChange={(e) => handleDocumentChange(index, e)}
// 								placeholder="Document name"
// 								className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3"
// 							/>
// 							<input
// 								type="file"
// 								required
// 								accept=".pdf"
// 								onChange={(e) => handleDocumentChange(index, e)}
// 								className="flex-1"
// 							/>
// 							{index > 0 && (
// 								<button
// 									type="button"
// 									onClick={() => removeDocument(index)}
// 									className="text-red-500 hover:text-red-700"
// 								>
// 									Remove
// 								</button>
// 							)}
// 						</div>
// 					))}
// 					<button
// 						type="button"
// 						onClick={addDocument}
// 						className="mt-3 px-3 py-2 border rounded-md text-gray-700 bg-white"
// 					>
// 						Add Document
// 					</button>
// 				</div>
// 				{message && <div className="text-red-500 text-sm">{message}</div>}
// 				<div>
// 					<button
// 						type="submit"
// 						disabled={loading}
// 						className={`w-full py-2 px-4 rounded-md text-white ${
// 							loading ? "bg-gray-400" : "bg-indigo-500"
// 						}`}
// 					>
// 						{loading ? "Uploading..." : "Submit Registration"}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// export default RegistrationForm;

"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import Cookies from "js-cookie";

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

	useEffect(() => {
		const fetchOrderDetails = async () => {
			try {
				const response = await axios.get(`${endpoint}order/${id}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

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

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = {
			orderId,
			name,
			businessType,
			state,
			pinCode,
			gstinPan,
			documents,
		};
		console.log("Form Data:", formData);
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
		<div className="max-w-3xl mx-auto my-16 p-6 bg-white rounded shadow">
			<h2 className="text-2xl font-bold mb-6">Registration Form</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="">
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
								accept=".pdf, .png, .jpg, .jpeg"
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
		</div>
	);
};

export default RegistrationForm;
