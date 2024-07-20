"use client";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/main-banner.jpg";
import about from "@/public/about.jpg";
import { useEffect, useRef } from "react";
export default function Home() {
	const scrollContainerRef = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const startScrolling = () => {
			let scrollAmount = 0;
			const maxScrollLeft =
				scrollContainer.scrollWidth - scrollContainer.clientWidth;
			const speed = .8; // Adjust speed as necessary

			const scroll = () => {
				scrollAmount = (scrollAmount + speed) % maxScrollLeft;
				scrollContainer.scrollLeft = scrollAmount;
				requestAnimationFrame(scroll);
			};

			scroll();
		};

		startScrolling();
	}, []);
	return (
		<>
			<div className="min-h-[150px] bg-slate-500">
				<Image
					src={banner}
					alt="banner"
					className="w-full h-[300px] sm:h-[550px] object-center md:object-cover object-cover"
					width={750}
					height={250}
				/>
			</div>
			<div className=" flex items-center flex-col p-4 gap-8 bg-[#f3f4f6] py-8 ">
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
								FastInfo Legal Services Pvt Ltd. is registered under the
								Companies Act, 2013. Our core team consists of a diligent team
								of professionals, all under one roof. They provide solution to
								all the individual, business person, corporate body and others
								for the issues faced by them in their everyday life.
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
					<h2 className="text-3xl font-bold">Our Services</h2>
					<div className="w-[70px] rounded-xl bg-[#18ba60] h-[5px]"></div>
				</div>
				<div className="mt-16">
					<section className="text-gray-600 body-font">
						<div className="container px-5 mx-auto">
							<div className="flex flex-wrap -m-4">
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
								<div className="xl:w-1/4 md:w-1/2 p-4">
									<div className="bg-gray-100 p-6 rounded-lg">
										<img
											className="h-40 rounded w-full object-cover object-center mb-6"
											src="https://dummyimage.com/720x400"
											alt="content"
										/>
										<h3 className="tracking-widest text-[#215585] text-xs font-medium title-font">
											SUBTITLE
										</h3>
										<h2 className="text-lg text-gray-900 font-medium title-font mb-4">
											Chichen Itza
										</h2>
										<p className="leading-relaxed text-base">
											Fingerstache flexitarian street art 8-bit waistcoat.
											Distillery hexagon disrupt edison bulbche.
										</p>
										<Link href={"/"} className="w-full">
											<button className="w-full h-[40px] mt-4 text-white rounded-lg bg-[#215585]">
												Learn More
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="w-full flex justify-center mt-5">
					<Link
						href={"/"}
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
										Authentic Cliche Forage
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
										Kinfolk Chips Snackwave
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
										Coloring Book Ethical
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
										Typewriter Polaroid Cray
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
									<span className="title-font font-medium">Pack Truffaut Blue</span>
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
										The Catcher In The Rye
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
									<span className="title-font font-medium">Pack Truffaut Blue</span>
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
										The Catcher In The Rye
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
