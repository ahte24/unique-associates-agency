"use client";
import Head from "next/head";
import { useState } from "react";

const Page = () => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic (e.g., send the data to an API)
		console.log("Form data submitted:", formData);
	};

	return (
		<div>
			<Head>
				<title>Trademark Registration Services</title>
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
								Trademark Registration
							</h1>
							<p className="mt-4 text-xl text-indigo-200">
								Protect your brand and intellectual property with our
								comprehensive trademark registration services.
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

				<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
					<div className="mt-12">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Why Trademark Registration is Required
						</h2>
						<p className="mt-4 text-gray-600">
							Trademark registration is essential to protect your brand identity
							and ensure exclusive rights to use your trademark. It helps
							prevent others from using a similar mark that could confuse
							consumers and damage your brand&apos;s reputation.
						</p>
						<ul className="mt-4 list-disc list-inside text-gray-600">
							<li>Legal protection for your brand</li>
							<li>Exclusive rights to use the trademark</li>
							<li>Deters others from using similar marks</li>
							<li>Brand recognition and reputation</li>
							<li>Asset creation for your business</li>
						</ul>
					</div>

					<div className="mt-12">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Benefits of Trademark Registration
						</h2>
						<p className="mt-4 text-gray-600">
							Registering your trademark offers numerous benefits that can
							significantly enhance your business&apos;s market position and value.
						</p>
						<ul className="mt-4 list-disc list-inside text-gray-600">
							<li>
								Exclusive rights: Ensures that only you can use the trademark
								for your products or services.
							</li>
							<li>
								Brand protection: Protects your brand from unauthorized use by
								competitors.
							</li>
							<li>
								Legal recourse: Provides legal standing to sue for infringement.
							</li>
							<li>
								Business asset: Adds value to your business as a recognizable
								and protected asset.
							</li>
							<li>
								Global protection: Can be extended internationally to protect
								your brand in other countries.
							</li>
						</ul>
					</div>

					<div className="mt-12">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Documents Required for Trademark Registration
						</h2>
						<p className="mt-4 text-gray-600">
							To register your trademark, you will need to provide the following
							documents:
						</p>
						<ul className="mt-4 list-disc list-inside text-gray-600">
							<li>Trademark application form</li>
							<li>Identity proof of the applicant</li>
							<li>Address proof of the applicant</li>
							<li>Logo or wordmark to be registered</li>
							<li>Power of Attorney (if filed by a trademark attorney)</li>
							<li>Proof of business registration (if applicable)</li>
							<li>
								Class of trademark registration (category of goods or services)
							</li>
						</ul>
					</div>

					<div className="mt-12">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Our Trademark Registration Process
						</h2>
						<p className="mt-4 text-gray-600">
							Our streamlined trademark registration process ensures a smooth
							and efficient experience for our clients.
						</p>
						<ol className="mt-4 list-decimal list-inside text-gray-600">
							<li>
								Consultation: Understanding your needs and providing expert
								advice on trademark registration.
							</li>
							<li>
								Search: Conducting a comprehensive search to ensure your
								trademark is unique.
							</li>
							<li>
								Application: Preparing and filing the trademark application with
								the relevant authorities.
							</li>
							<li>
								Examination: Responding to any queries or objections from the
								trademark office.
							</li>
							<li>
								Approval: Receiving the trademark registration certificate.
							</li>
							<li>
								Monitoring: Monitoring and defending your trademark against
								infringements.
							</li>
						</ol>
					</div>

					<div className="mt-12 text-center">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Why Choose Us?
						</h2>
						<p className="mt-4 text-xl text-gray-500">
							We offer expert guidance, personalized service, and comprehensive
							support throughout the trademark registration process.
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
