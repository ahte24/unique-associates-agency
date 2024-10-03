"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const BillingPage = () => {
	// Wrap the content in a Suspense component
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BillingContent />
		</Suspense>
	);
};

const BillingContent = () => {
	const searchParams = useSearchParams();

	const formData = {
		name: searchParams.get("name"),
		email: searchParams.get("email"),
		phone: searchParams.get("phone"),
	};

	return (
		<div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-96">
			<h2 className="text-2xl font-bold text-gray-900">Billing Details</h2>
			<div className="mt-6 space-y-4">
				<div>
					<p className="text-sm font-medium text-gray-700">Full Name</p>
					<p className="mt-1 text-lg font-bold text-gray-900">
						{formData.name}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-700">Email Address</p>
					<p className="mt-1 text-lg font-bold text-gray-900">
						{formData.email}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-700">Phone Number</p>
					<p className="mt-1 text-lg font-bold text-gray-900">
						{formData.phone}
					</p>
				</div>
				<div>
					<p className="text-sm font-medium text-gray-700">Price</p>
					<p className="mt-1 text-xl font-bold text-gray-900">₹ 500</p>
				</div>
				<div className="text-right">
					<button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Pay
					</button>
				</div>
			</div>
		</div>
	);
};

export default BillingPage;
