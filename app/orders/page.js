"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import endpoint from "@/utills/endpoint";

export default function ServicesPage() {
	const [orders, setOrders] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState("");
	const router = useRouter();
	const [paymentStatuses, setPaymentStatuses] = useState({}); // Object to track payment status for each order

	useEffect(() => {
		// Check login status
		const loggedInStatus = document.cookie
			.split("; ")
			.find((row) => row.startsWith("accessToken="));
		if (!loggedInStatus) {
			router.push("/"); // Redirect to login page if not logged in
			return;
		}

		// Fetch orders with dynamic query parameters
		const fetchOrders = async () => {
			try {
				const response = await axios.get(`${endpoint}order/`, {
					headers: {
						Authorization: `Bearer ${Cookies.get("accessToken")}`,
					},
				});
				// Sort orders by date in descending order (latest first)
				const sortedOrders = response.data.sort(
					(a, b) => new Date(b.order_date) - new Date(a.order_date)
				);

				// Create a payment status object where key is order ID and value is whether payment is done
				const paymentStatusMap = {};
				sortedOrders.forEach((order) => {
					paymentStatusMap[order.id] = order.order_status === "payment done";
				});
				setPaymentStatuses(paymentStatusMap); // Set payment statuses for each order
				setOrders(sortedOrders || []); // Set sorted orders
			} catch (error) {
				console.error(
					"Error:",
					error.response ? error.response.data : error.message
				);
			}
		};
		fetchOrders();
	}, [selectedStatus, router]);

	return (
		<>
			<section className="bg-white py-8 antialiased  md:py-16">
				<div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
					<div className="mx-auto container min-h-[650px]">
						<div className="gap-4 sm:flex sm:items-center sm:justify-between">
							<h2 className="text-xl font-semibold text-gray-900  sm:text-2xl">
								My Orders
							</h2>
						</div>

						<div className="mt-6 flow-root sm:mt-8">
							<div className=" divide-gray-200  ">
								{orders.map((order) => (
									<div
										key={order.id}
										className="flex flex-wrap items-center gap-y-4 py-6 border mt-4 rounded-xl p-4"
									>
										<dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
											<dt className="text-base font-medium text-gray-500 ">
												Order Id :
											</dt>
											<dd className="mt-1.5 text-base font-semibold text-gray-900 ">
												<a
													href={`orders/details/${order.id}`}
													className="hover:underline"
												>
													#...{order.id.slice(24)}
												</a>
											</dd>
										</dl>
										<dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
											<dt className="text-base font-medium text-gray-500 ">
												Service Name:
											</dt>
											<dd className="mt-1.5 text-base font-semibold text-gray-900 ">
												<a
													href={`orders/details/${order.id}`}
													className="hover:underline"
												>
													{order.service.name}
												</a>
											</dd>
										</dl>

										<dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
											<dt className="text-base font-medium text-gray-500 ">
												Date:
											</dt>
											<dd className="mt-1.5 text-sm font-semibold text-gray-900  ">
												{new Date(order.order_date).toLocaleString("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric",
													hour: "2-digit",
													minute: "2-digit",
													second: "2-digit",
													hour12: false,
												})}
											</dd>
										</dl>

										<dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
											<dt className="text-base font-medium text-gray-500 ">
												Price:
											</dt>
											<dd className="mt-1.5 text-base font-semibold text-gray-900 ">
												₹{order.service.price}
											</dd>
										</dl>

										<dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
											<dt className="text-base font-medium text-gray-500 ">
												Status:
											</dt>
											<dd
												className={`me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${
													order.order_status === "pending"
														? "bg-yellow-100 text-yellow-800 "
														: order.order_status === "payment done"
														? "bg-green-100 text-green-800 "
														: order.order_status === "order delivered"
														? "bg-blue-100 text-blue-800 "
														: order.order_status === "document uploaded"
														? "bg-purple-100 text-purple-800 "
														: "bg-gray-100 text-gray-800 "
												}`}
											>
												{order.order_status}
											</dd>
										</dl>

										<div className="grid sm:grid-cols-2 lg:flex lg:w-fit lg:items-center lg:justify-end gap-4">
											{/* Check individual payment status for each order */}
											{/* {!paymentStatuses[order.id] ? ( */}
											<Link
												href={`orders/details/${order.id}`}
												className="w-full inline-flex justify-center rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100   lg:w-auto"
											>
												View details
											</Link>
											{/* ) : (
												<Link
													href={`/orders/form_fillup/${order.id}`}
													className="w-full inline-flex justify-center rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100   lg:w-auto"
												>
													Fill the Form
												</Link>
											)} */}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
