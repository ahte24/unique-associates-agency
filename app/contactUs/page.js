"use client";
import React from "react";
import { useState } from "react";
const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
		service: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("/api/contactus", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("done");
				// toast.success("Inquiry Sent Successfully.", {
				// 	position: "top-right",
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// 	theme: "dark",
				// 	transition: Bounce,
				// });
				setFormData({
					name: "",
					email: "",
					phone: "",
					services: "",
					message: "",
				});
			} else {
				const errorData = await response.json();
				// toast.error("Something went wrong.", {
				// 	position: "top-right",
				// 	autoClose: 5000,
				// 	hideProgressBar: false,
				// 	closeOnClick: true,
				// 	pauseOnHover: true,
				// 	draggable: true,
				// 	progress: undefined,
				// 	theme: "dark",
				// 	transition: Bounce,
				// });
			}
		} catch (error) {
			// toast.error(`Error: ${error.message}`, {
			// 	position: "top-right",
			// 	autoClose: 5000,
			// 	hideProgressBar: false,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: true,
			// 	progress: undefined,
			// 	theme: "dark",
			// 	transition: Bounce,
			// });
			console.log(error);
		}
	};
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="bg-gray-100">
			<section>
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black ">
						Contact Us
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
						Got a technical issue? Want to send feedback about a beta feature?
						Need details about our Business plan? Let us know.
					</p>
					<form onSubmit={handleSubmit} className="space-y-8">
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Full Name
							</label>
							<input
								name="name"
								type="name"
								id="name"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 "
								placeholder="John Doe"
								required
								value={formData.name || ""}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								value={formData.email || ""}
								onChange={handleChange}
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 "
								placeholder="name@uniqueassociates.com"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 "
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
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 :bg-gray-700 "
								placeholder="+91 99999 99999"
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Service Name
							</label>
							<input
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
								placeholder="Let us know how we can help you"
								type="text"
								name="service"
								id="service"
								value={formData.service || ""} // Service value from formData
								onChange={handleChange}
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 "
							>
								Your message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message || ""}
								onChange={handleChange}
								required
								rows="6"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
								placeholder="Leave a comment..."
							></textarea>
						</div>
						<div className="flex items-center justify-center">
							<button
								type="submit"
								className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#215585] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
							>
								Send message
							</button>
						</div>
					</form>
				</div>
			</section>
			<section>
				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Visit Our Location
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<div className="mt-16 lg:mt-20">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="rounded-lg overflow-hidden">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.5411099430853!2d86.33570577586137!3d20.850229093885464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1be5f43e284ea3%3A0xaae1a85f557ee018!2sDevXplore!5e0!3m2!1sen!2sin!4v1724782084865!5m2!1sen!2sin"
									// width="600"
									width="100%"
									height="400"
									style={{ border: 0 }}
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
							<div>
								<div className="max-w-full mx-auto rounded-lg overflow-hidden">
									<div className="px-6 py-4">
										<h3 className="text-lg font-medium text-gray-900">
											Our Address
										</h3>
										<p className="mt-1 text-gray-600">
											DevXplore, Zaman Manzil, Belamput, Jajput Town
										</p>
									</div>
									<div className="border-t border-gray-200 px-6 py-4">
										<h3 className="text-lg font-medium text-gray-900">Hours</h3>
										<p className="mt-1 text-gray-600">
											Monday - Friday: 9am - 5pm
										</p>
										<p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
										<p className="mt-1 text-gray-600">Sunday: Closed</p>
									</div>
									<div className="border-t border-gray-200 px-6 py-4">
										<h3 className="text-lg font-medium text-gray-900">
											Contact
										</h3>
										<p className="mt-1 text-gray-600">
											Email: zaman.dev26@gmail.com
										</p>
										<p className="mt-1 text-gray-600">Phone: +91 9114 11987</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
