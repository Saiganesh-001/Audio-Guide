import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
	FaFacebook,
	FaGoogle,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

const BottomFooter = [
	"Privacy Policy",
	"Cookie Policy",
	"Terms",
];
const Resources = [
	"Articles",
	"Blog",
	"Chart Sheet",
	"Tour challenges",
	"Docs",
	"Projects",
	"Videos",
	"Workspaces",
];
const Plans = [
	"Paid memberships",
	"For students",
	"Business solutions",
];
const Community = [
	"Forums",
	"Chapters",
	"Events",
];

const Footer = () => {
	return (
		<div className="bg-richblack-800 bg-[#F7F8F9]">
			<div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
				<div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
					{/* Section 1 */}
					<div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
						<div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
							<h1 className="text-richblack-50 font-semibold text-[16px]">
								Company
							</h1>
							<div className="flex flex-col gap-2">
								{[
									"About",
									"Careers",
									"Affiliates",
								].map((ele, i) => {
									return (
										<div
											key={i}
											className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
											<Link
												to={ele.toLowerCase()}>
												{ele}
											</Link>
										</div>
									);
								})}
							</div>
							<div className="flex gap-3 text-lg">
								<FaFacebook />
								<FaGoogle />
								<FaTwitter />
								<FaYoutube />
							</div>
							<div></div>
						</div>

						<div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
							<h1 className="text-richblack-50 font-semibold text-[16px]">
								Resources
							</h1>

							<div className="flex flex-col gap-2 mt-2">
								{Resources.map((ele, index) => {
									return (
										<div
											key={index}
											className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
											<Link
												to={ele
													.split(" ")
													.join("-")
													.toLowerCase()}>
												{ele}
											</Link>
										</div>
									);
								})}
							</div>

							<h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
								Support
							</h1>
							<div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
								<Link to={"/help-center"}>
									Help Center
								</Link>
							</div>
						</div>

						<div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0 hidden md:block">
							<h1 className="text-richblack-50 font-semibold text-[16px]">
								Plans
							</h1>

							<div className="flex flex-col gap-2 mt-2">
								{Plans.map((ele, index) => {
									return (
										<div
											key={index}
											className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
											<Link
												to={ele
													.split(" ")
													.join("-")
													.toLowerCase()}>
												{ele}
											</Link>
										</div>
									);
								})}
							</div>
							<h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
								Community
							</h1>

							<div className="flex flex-col gap-2 mt-2">
								{Community.map((ele, index) => {
									return (
										<div
											key={index}
											className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
											<Link
												to={ele
													.split(" ")
													.join("-")
													.toLowerCase()}>
												{ele}
											</Link>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* Section 2 */}
					<div className="ml-3">
						<div className="text-[13px] tracking-wider">
							FIND OUR TOURS IN THESE COUNTRIES:
						</div>
						<div className="flex flex-wrap max-w-[50vw] gap-2 text-[13px] text-[#6C757D]">
							<li>Argentina</li>
							<li>Armenia</li>
							<li>Australia</li>
							<li>Austria</li>
							<li>Belgium</li>
							<li>Bermuda</li>
							<li>Brazil</li>
							<li>Bulgaria</li>
							<li>Canada</li>
							<li>Chile</li>
							<li>China</li>
							<li>Colombia</li>
							<li>Croatia</li>
							<li>Cyprus</li>
							<li>Czech Republic</li>
							<li>Denmark</li>
							<li>Finland</li>
							<li>France</li>
							<li>Georgia</li>
							<li>Germany</li>
							<li>Greece</li>
							<li>Hong Kong (China)</li>
							<li>Hungary</li>
							<li>Iceland</li>
							<li>India</li>
							<li>Indonesia</li>
							<li>Iran</li>
							<li>Ireland</li>
							<li>Israel</li>
							<li>Italy</li>
							<li>Jamaica</li>
							<li>Japan</li>
							<li>Jordan</li>
							<li>Kenya</li>
							<li>Latvia</li>
							<li>Lebanon</li>
							<li>Lithuania</li>
							<li>Malaysia</li>
							<li>Mauritius</li>
							<li>Mexico</li>
							<li>Monaco</li>
							<li>Namibia</li>
							<li>Nepal</li>
							<li>New Zealand</li>
							<li>Norway</li>
							<li>Poland</li>
							<li>Portugal</li>
							<li>Puerto Rico</li>
							<li>Romania</li>
							<li>Russia</li>
							<li>San Marino</li>
							<li>Singapore</li>
							<li>Slovenia</li>
							<li>South Africa</li>
							<li>South Korea</li>
							<li>Spain</li>
							<li>Sweden</li>
							<li>Switzerland</li>
							<li>Thailand</li>
							<li>The Netherlands</li>
							<li>The United Arab Emirates</li>
							<li>The United Kingdom</li>
							<li>The United States</li>
							<li>Turkey</li>
							<li>Ukraine</li>
							<li>Uruguay</li>
							<li>Uzbekistan</li>
							<li>Vietnam</li>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
				{/* Section 1 */}
				<div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
					<div className="flex flex-row">
						{BottomFooter.map((ele, i) => {
							return (
								<div
									key={i}
									className={` ${
										BottomFooter.length - 1 === i
											? ""
											: "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
									} px-3 `}>
									<Link
										to={ele
											.split(" ")
											.join("-")
											.toLocaleLowerCase()}>
										{ele}
									</Link>
								</div>
							);
						})}
					</div>

					<div className="text-center">
						Made by Pranay, Shruti © 2024
						AudioGuide
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
