"use client";

import React from "react";

export default function Component() {
	return (
		<div className="flex flex-col lg:flex-row gap-6 p-14 font-sans container mx-auto">
			<div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
				<div className="p-6">
					<h2 className="text-2xl font-semibold mb-4">Order Details</h2>
					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<div>
								<p className="text-sm text-gray-500">Order ID</p>
								<p className="font-medium">
									fc79064f-cbe3-4260-ad6f-c0224496ba2b
								</p>
							</div>
							<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
								order delivered
							</span>
						</div>
						<div>
							<p className="text-sm text-gray-500 flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
								Item
							</p>
							<p className="font-medium">Aadhaar Card</p>
						</div>
						<div>
							<p className="text-sm text-gray-500 flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								Price
							</p>
							<p className="font-medium">₹400.00</p>
						</div>
						<div>
							<p className="text-sm text-gray-500 flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
									/>
								</svg>
								Order Date
							</p>
							<p className="font-medium">August 26, 2024 at 05:59 PM</p>
						</div>
						<div className="border p-4 rounded-lg min-h-52">
							<p className="text-sm text-gray-500 flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
								Order Documents
							</p>
							<p className="text-sm text-gray-500">No documents attached</p>
						</div>
					</div>
				</div>
			</div>
			<div className="space-y-6">
				
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-6">
						<h2 className="text-2xl font-semibold mb-4">Actions</h2>
						<div className="space-y-2">
							<button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
								Download Invoice
							</button>
							<button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors">
								Contact Support
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
