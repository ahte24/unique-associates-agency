"use client";
import Head from "next/head";
import { useState } from "react";
import {
	FaShieldAlt,
	FaRegCheckCircle,
	FaFileAlt,
	FaClipboardList,
	FaGavel,
	FaGlobe,
} from "react-icons/fa";

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
				<title>Tax Planning Consultancy</title>
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
								Tax Planning Consultancy
							</h1>
							<p className="mt-4 text-xl text-indigo-200">
								Tailored tax strategies to reduce liabilities while ensuring
								full compliance with tax regulations, optimizing business
								financial efficiency.
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
				<div className=" container mx-auto mt-10 flex items-center justify-between">
					<div>
						<label
							htmlFor="price"
							className="block text-sm font-medium text-gray-700"
						>
							Price
						</label>
						<p className="mt-1 text-xl font-bold text-gray-900">₹ 500</p>
					</div>

					<button className="inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#4f46e5] hover:bg-[#4338ca]">
						Proceed to Pay
					</button>
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
						<ul className="mt-4 space-y-4">
							{/* Trademark Protection */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">
										Trademark Protection:
									</strong>{" "}
									Trademark registration is essential to protect your brand
									identity and ensure exclusive rights to use your trademark. It
									helps prevent others from using a similar mark that could
									confuse consumers and damage your brand&apos;s reputation. Lorem
									ipsum dolor sit amet, consectetur adipisicing elit. Sed quam
									qui delectus accusamus voluptates facere laboriosam beatae.
								</span>
							</li>

							{/* Brand Identity */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">Brand Identity:</strong>{" "}
									Establish a unique brand identity that stands out in the
									market. Trademark registration solidifies your brand&apos;s
									presence and helps in building trust with your consumers.
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</span>
							</li>

							{/* Legal Protection */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">Legal Protection:</strong>{" "}
									Gain legal protection against infringement and unauthorized
									use of your brand. Trademark registration gives you the legal
									authority to take action against infringers. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit.
								</span>
							</li>

							{/* Exclusive Rights */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">Exclusive Rights:</strong>{" "}
									Ensure that you have exclusive rights to use your trademark
									across all marketing channels and products. Protect your
									brand&apos;s uniqueness and prevent confusion in the market. Lorem
									ipsum dolor sit, amet consectetur adipisicing elit.
								</span>
							</li>

							{/* Consumer Trust */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">Consumer Trust:</strong>{" "}
									Build consumer trust by showing commitment to protecting your
									brand. A registered trademark signals reliability and quality,
									enhancing consumer confidence in your products or services.
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								</span>
							</li>

							{/* Market Positioning */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">
										Market Positioning:
									</strong>{" "}
									Strengthen your market position with a registered trademark
									that differentiates your brand from competitors. Trademark
									registration supports strategic branding and marketing
									efforts. Lorem ipsum dolor sit, amet consectetur adipisicing
									elit.
								</span>
							</li>

							{/* Global Reach */}
							<li className="flex items-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<span className="text-gray-800 text-lg leading-relaxed">
									<strong className="text-indigo-600">Global Reach:</strong>{" "}
									Protect your brand&apos;s global presence with international
									trademark registration. Expand your brand&apos;s reach while
									ensuring legal protection across borders. Lorem ipsum dolor
									sit, amet consectetur adipisicing elit.
								</span>
							</li>
						</ul>
					</div>

					<div className="mt-12">
						<h2 className="text-3xl font-extrabold text-gray-900">
							Benefits of Trademark Registration
						</h2>
						<p className="mt-4 text-gray-600">
							Registering your trademark offers numerous benefits that can
							significantly enhance your business&apos;s market position and
							value.
						</p>
						<ul className="mt-4 space-y-4">
							{/* Exclusive Rights */}
							<li className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<FaRegCheckCircle className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Exclusive Rights:</strong>{" "}
									Ensures that only you can use the trademark for your products
									or services.
								</span>
							</li>

							{/* Brand Protection */}
							<li className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<FaRegCheckCircle className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Brand Protection:</strong>{" "}
									Protects your brand from unauthorized use by competitors.
								</span>
							</li>

							{/* Legal Recourse */}
							<li className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<FaRegCheckCircle className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Legal Recourse:</strong>{" "}
									Provides legal standing to sue for infringement.
								</span>
							</li>

							{/* Business Asset */}
							<li className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<FaRegCheckCircle className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Business Asset:</strong>{" "}
									Adds value to your business as a recognizable and protected
									asset.
								</span>
							</li>

							{/* Global Protection */}
							<li className="flex items-center p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
								<FaRegCheckCircle className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Global Protection:
									</strong>{" "}
									Can be extended internationally to protect your brand in other
									countries.
								</span>
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
						<ul className="mt-4 space-y-4">
							{/* Trademark Application Form */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Trademark Application Form:
									</strong>{" "}
									Complete and submit the necessary documents to begin the
									trademark registration process.
								</span>
							</li>

							{/* Proprietorship Documents */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Proprietorship:</strong>{" "}
									Provide the owner&apos;s identity proof, address proof, and any
									business registration certificate if applicable.
								</span>
							</li>

							{/* Partnership Documents */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Partnership:</strong>{" "}
									Include the partnership deed, identity proofs of all partners,
									and address proofs.
								</span>
							</li>

							{/* Private Limited Company Documents */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Private Limited Company:
									</strong>{" "}
									Submit the certificate of incorporation, identity proof of the
									signatory, and address proof of the company.
								</span>
							</li>

							{/* Identity Proof */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Identity Proof:</strong>{" "}
									Provide valid identity proof of the applicant to ensure
									authenticity and avoid legal complications.
								</span>
							</li>

							{/* Address Proof */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Address Proof:</strong>{" "}
									Submit address proof of the applicant to verify the location
									and establish legitimacy.
								</span>
							</li>

							{/* Logo or Wordmark */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">Logo or Wordmark:</strong>{" "}
									Register the logo or wordmark for exclusive rights and brand
									recognition.
								</span>
							</li>

							{/* Power of Attorney */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Power of Attorney:
									</strong>{" "}
									If filed by a trademark attorney, provide a power of attorney
									document to authorize the representative.
								</span>
							</li>

							{/* Proof of Business Registration */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Proof of Business Registration:
									</strong>{" "}
									Provide proof of business registration if applicable to
									establish legal presence.
								</span>
							</li>

							{/* Class of Trademark Registration */}
							<li className="flex items-start p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-fade-in">
								<FaFileAlt className="text-indigo-600 mr-4 text-2xl  w-20 md:w-fit" />
								<span className="text-gray-700 text-lg">
									<strong className="text-indigo-600">
										Class of Trademark Registration:
									</strong>{" "}
									Identify the class of goods or services for trademark
									registration.
								</span>
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
						<ol className="mt-4 space-y-4 list-decimal list-inside text-gray-600">
							{/* Consultation */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
								Consultation: Understanding your needs and providing expert
								advice on trademark registration.
							</li>

							{/* Search */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
								Search: Conducting a comprehensive search to ensure your
								trademark is unique.
							</li>

							{/* Application */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
								Application: Preparing and filing the trademark application with
								the relevant authorities.
							</li>

							{/* Examination */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
								Examination: Responding to any queries or objections from the
								trademark office.
							</li>

							{/* Approval */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
								Approval: Receiving the trademark registration certificate.
							</li>

							{/* Monitoring */}
							<li className="flex items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl animate-slide-up">
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
