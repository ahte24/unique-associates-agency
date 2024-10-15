"use client";

import { useState } from "react";
import axios from "axios";

export default function UploadDocuments() {
	const [orderId, setOrderId] = useState("");
	const [name, setName] = useState("");
	const [businessType, setBusinessType] = useState("");
	const [state, setState] = useState("");
	const [pinCode, setPinCode] = useState("");
	const [gstinPan, setGstinPan] = useState("");
	const [documents, setDocuments] = useState([{ name: "", file: null }]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const addDocument = () => {
		setDocuments([...documents, { name: "", file: null }]);
	};

	const removeDocument = (index) => {
		const newDocuments = documents.filter((_, i) => i !== index);
		setDocuments(newDocuments);
	};

	const handleDocumentChange = (index, e) => {
		const { name, value, files } = e.target;
		const newDocuments = [...documents];
		if (name === "file") {
			newDocuments[index][name] = files[0];
		} else {
			newDocuments[index][name] = value;
		}
		setDocuments(newDocuments);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Client-side validation for file size and type
		for (let doc of documents) {
			if (doc.file) {
				if (doc.file.size > 10 * 1024 * 1024) {
					setMessage("File size should not exceed 10MB");
					setLoading(false);
					return;
				}
				if (doc.file.type !== "application/pdf") {
					setMessage("Only PDF files are allowed");
					setLoading(false);
					return;
				}
			}
		}

		try {
			const formData = new FormData();
			formData.append("order_id", orderId);
			formData.append("number_of_docs", documents.length.toString());

			documents.forEach((doc, index) => {
				formData.append(`document_name_${index + 1}`, doc.name);
				formData.append(`doc_file_${index + 1}`, doc.file);
			});

			// Add other form fields if needed
			formData.append("name", name);
			formData.append("business_type", businessType);
			formData.append("state", state);
			formData.append("pin_code", pinCode);
			formData.append("gstin_pan", gstinPan);

			const response = await axios.post(
				`${endpoint}order/upload_docs/`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
						// Include authentication headers if required
						// "Authorization": `Bearer ${yourToken}`,
					},
				}
			);

			setMessage(response.data.message || "Documents uploaded successfully");
		} catch (error) {
			setMessage(
				error.response?.data?.error || "An error occurred during upload"
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto my-24 p-6 bg-white rounded shadow">
			<h2 className="text-2xl font-bold mb-6">Business Registration Form</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Order ID */}
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
						required
						value={orderId}
						onChange={(e) => setOrderId(e.target.value)}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter your Order ID"
					/>
				</div>

				{/* Name */}
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
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter your full name"
					/>
				</div>

				{/* Business Type */}
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
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter your business type"
					/>
				</div>

				{/* State */}
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
						className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					>
						
						{/* Add more states as needed */}
					</input>
				</div>

				{/* PIN Code */}
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
						type="text"
						required
						value={pinCode}
						onChange={(e) => setPinCode(e.target.value)}
						pattern="[0-9]{6}"
						maxLength={6}
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter PIN code"
					/>
				</div>

				{/* GSTIN/PAN */}
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
						className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Enter GSTIN or PAN"
					/>
				</div>

				{/* Documents */}
				<div>
					<label className="block text-sm font-medium text-gray-700">
						Required Documents
					</label>
					{documents.map((doc, index) => (
						<div key={index} className="flex items-center mt-2 space-x-2">
							<input
								type="text"
								name="name"
								required
								value={doc.name}
								onChange={(e) => handleDocumentChange(index, e)}
								placeholder="Document name"
								className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
							/>
							<input
								type="file"
								name="file"
								required
								accept=".pdf"
								onChange={(e) => handleDocumentChange(index, e)}
								className="flex-1"
							/>
							{index > 0 && (
								<button
									type="button"
									onClick={() => removeDocument(index)}
									className="text-red-500 hover:text-red-700"
								>
								</button>
							)}
						</div>
					))}
					<button
						type="button"
						onClick={addDocument}
						className="mt-3 inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
					>
						{/* <PlusCircleIcon className="h-5 w-5 mr-2" /> */}
						Add Document
					</button>
				</div>

				{/* Message */}
				{message && <div className="text-red-500 text-sm">{message}</div>}

				{/* Submit Button */}
				<div>
					<button
						type="submit"
						disabled={loading}
						className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white ${
							loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
						} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
					>
						{loading ? "Uploading..." : "Submit Registration"}
					</button>
				</div>
			</form>
		</div>
	);
}
