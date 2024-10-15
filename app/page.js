"use client";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/img.png";
import about from "@/public/about.jpg";
import { useEffect, useRef } from "react";
import axios from "axios";
import endpoint from "@/utills/endpoint";
import { useState } from "react";
export default function Home() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		axios
			.get(`${endpoint}service/most_visited/`)
			.then((response) => {
				setServices(response.data);
			})
			.catch((error) => {
				console.error("There was an error making the request!", error);
			});
	}, []); // Empty dependency array to run only on component mount

	const scrollContainerRef = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const startScrolling = () => {
			let scrollAmount = 0;
			const maxScrollLeft =
				scrollContainer.scrollWidth - scrollContainer.clientWidth;
			const speed = 0.8; // Adjust speed as necessary

			const scroll = () => {
				scrollAmount = (scrollAmount + speed) % maxScrollLeft;
				scrollContainer.scrollLeft = scrollAmount;
				requestAnimationFrame(scroll);
			};

			scroll();
		};

		startScrolling();
	}, []);
	const trimText = (text, maxLength) => {
		if (text.length <= maxLength) {
			return text;
		}
		return text.substring(0, maxLength) + "...";
	};
	return (
		<>
			<section className="w-full py-12  bg-background">
				<div className=" px-4 md:px-6">
					<div className="flex flex-col  lg:flex-row  gap-6 lg:gap-12  ">
						<div className="flex flex-col justify-center space-y-4 w-full lg:w-1/2">
							<div className="space-y-8">
								<h1 className="text-3xl font-semibold sm:text-4xl xl:text-5xl/none text-[#215585]">
									We take care of the details, so you can focus on your vision.
									{/* We focus on the data, so you can focus on your strategy */}
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-lg">
									At TaxClickIn, we provide expert business consultancy and
									documentation services designed to simplify your business
									processes and drive growth. Our team delivers tailored
									strategies and professional documentation, including business
									plans, financial reports, and compliance documents, to meet
									your specific needs. Whether you&apos;re optimizing operations
									or planning for expansion, TaxClickIn is here to support your
									success every step of the way.
								
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row-[30%]">
								<Link
									href={""}
									className="bg-[#215585] text-white w-fit px-4 py-2  rounded-lg hover:bg-[#3a6892]"
								>
									Book Free consultation
								</Link>
							</div>
						</div>
						<div className="flex items-center w-full lg:w-1/2">
							<Image
								alt="Accounting and taxation services"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last "
								height="550"
								src={banner}
								width="550"
							/>
						</div>
					</div>
				</div>
			</section>
			<div className=" flex items-center flex-col gap-8 bg-[#f3f4f6] py-8 ">
				<div className="flex-col flex items-center">
					<div className="text-[17px] font-extrabold">WE ARE</div>
					<div className="text-[22px] font-extrabold">ASSOCIATED WITH</div>
				</div>
				<div
					ref={scrollContainerRef}
					className="h-[80px] flex items-center w-full mx-auto text-[50px] overflow-x-scroll gap-4 hide-scrollbar"
				>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
					<div className="min-w-[170px] h-[70px] bg-slate-400 rounded-lg"></div>
				</div>
			</div>
			<div className="About-us hidden md:block  h-[400px] bg-[#f3f4f6]">
				<div className="w-full flex items-center h-full pl-16">
					<div className="w-[60%] h-full">
						<div className="flex flex-col justify-center h-full  gap-10 w-full mx-auto">
							<div className="">
								<h4 className=" text-left text-2xl font-bold">About Us</h4>
							</div>
							<p>
								TaxClickIn is registered under the Companies Act, 2013. Our core
								team consists of a diligent group of professionals, all under
								one roof. We provide comprehensive solutions to individuals,
								business professionals, corporate entities, and more for all
								taxation, accounting, and registration needs. Whether it&apos;s
								GST compliance, income tax filing, or company incorporation, we
								ensure expert guidance at every step, helping our clients
								navigate their financial and regulatory challenges with ease.
							</p>
						</div>
					</div>
					<div className="w-[40%] h-full">
						<Image
							className="w-full h-full"
							src={about}
							width={500}
							height={500}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="mt-16">
				<div className="w-full flex flex-col items-center gap-1">
					<h2 className="text-3xl font-bold">Top Services</h2>
				</div>
				<div className="mt-16">
					<section className="text-gray-600 body-font">
						<div className="container px-5 mx-auto">
							<div className="flex flex-wrap -m-4">
								{services.map((service) => {
									return (
										<Link
											href={`/services/${service.id}`}
											key={service.id}
											className="xl:w-1/4 md:w-1/2 p-4 "
										>
											<div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col justify-between">
												<img
													className="h-40 rounded w-full object-cover object-center mb-6"
													alt="img"
													src={
														service.image
															? `${endpoint}${service.image}`
															: "https://dummyimage.com/1203x503"
													}
												/>

												<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
													{service.name}
												</h2>
												<p className="leading-relaxed text-base text-wrap">
													{trimText(service.short_description, 100)}
												</p>
												<div className="w-full">
													<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
														Learn More
													</button>
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</section>
				</div>
				<div className="w-full flex justify-center mt-5">
					<Link
						href={"/services"}
						className="px-8 py-3 bg-[#215585] text-white font-bold rounded-lg hover:bg-[#3a6892]"
					>
						More Services
					</Link>
				</div>
			</div>
			<div className="mt-16">
				<div className="w-full flex flex-col items-center gap-1">
					<h2 className="text-3xl font-bold">Why Us?</h2>
					<div className="w-[70px] rounded-xl bg-[#18ba60] h-[5px]"></div>
				</div>
				<section className="text-gray-600 body-font">
					<div className="container px-5 py-10 mx-auto">
						<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Expert Tax Consulting
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Business Registration Services
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										GST Filing and Compliance
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Accurate Financial Reporting
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Affordable Accounting Solutions
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Company Incorporation Support
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										Personalized Financial Advice
									</span>
								</div>
							</div>
							<div className="p-2 sm:w-1/2 w-full">
								<div className="bg-gray-100 rounded flex p-4 h-full items-center">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="3"
										className="text-[#215585] w-6 h-6 flex-shrink-0 mr-4"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
									<span className="title-font font-medium">
										24/7 Client Assistance
									</span>
								</div>
							</div>
						</div>
						<button className="flex mx-auto mt-16 text-white bg-[#215585] border-0 py-2 px-8 focus:outline-none hover:bg-[#3a6892] rounded text-lg">
							Get Free consultation
						</button>
					</div>
				</section>
			</div>
		</>
	);
}
