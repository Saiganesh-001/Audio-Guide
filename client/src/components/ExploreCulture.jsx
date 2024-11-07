import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { RiBankLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ExploreCulture = () => {
    const navigate = useNavigate();
	const popularDestination = [
		{
			imgUrl:
				"https://plus.unsplash.com/premium_photo-1661963385126-11fa577925d3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Stepwell",
			happy: 4,
			iconic: 194,
			audio: 3,
		},
		{
			imgUrl:
				"https://plus.unsplash.com/premium_photo-1676285070008-fb0cc5c24bb7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Ajanta-Cave",
			happy: 10,
			iconic: 24,
			audio: 5,
		},
		{
			imgUrl:
				"https://images.unsplash.com/photo-1702742969679-382a82f2884d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Jaisalmer",
			happy: 6,
			iconic: 124,
			audio: 2,
		},
		{
			imgUrl:
				"https://plus.unsplash.com/premium_photo-1694475144012-f69becf88a2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			name: "Taj-Mahal",
			happy: 20,
			iconic: 294,
			audio: 10,
		},
	];

    const handelNavigation = (placeName) => {
        navigate(`/tour/${placeName}`)
    }
	return (
		<div className="min-h-[100vh] relative  flex flex-col items-center ">
			<div className="min-w-[75%]">
				<div className="text-5xl flex items-end min-h-[10vh] py-10">
					Explore culture{" "}
					<span className="font-bold ml-4">
						{" "}
						anywhere, anytime
					</span>
				</div>

				<div className="max-w-[30%] min-h-[6vh] rounded-[30px] border-[2px] shadow-md flex items-center pl-4 gap-4">
					<div className=" max-w-[10%] px-2 py-3">
						<CiSearch size={25} />
					</div>
					<div>
						<input
							type="text"
							className="outline-none"
							size={35}
							placeholder="Search for destination, attraction or guide"
						/>
					</div>
				</div>
				<div className="flex items-center gap-3 pt-14 pb-10">
					<div className="bg-[#F0F2F4] min-h-[50px] min-w-[50px] rounded-[50%] flex items-center justify-center">
						<SlLocationPin
							size={20}
							className="text-[#798C9F]"
						/>
					</div>
					<div className="text-2xl">
						Popular destinations
					</div>
				</div>
				<div className="flex justify-around pb-4 cursor-pointer">
					{popularDestination.map(
						(des, index) => (
							<div onClick={() => handelNavigation(des.name)} key={index}>
								<div>
									<img
										src={des.imgUrl}
										alt=""
										width={300}
										className="rounded-xl"
									/>
								</div>
								<div className="text-2xl py-2">
									{des.name}
								</div>
								<div className="flex gap-5">
									<div className="flex items-center gap-1 text-[#659F17]">
										<div>
											<CiFaceSmile size={20} />
										</div>
										<div className="text-[15px]">
											{des.happy}
										</div>
									</div>
									<div className="flex items-center gap-1 text-[#C82853]">
										<div>
											<RiBankLine size={20} />
										</div>
										<div className="text-[15px]">
											{des.iconic}
										</div>
									</div>
									<div className="flex items-center gap-1 text-[#62B7CB]">
										<div>
											<CiHeadphones size={20} />
										</div>
										<div className="text-[15px]">
											{des.audio}
										</div>
									</div>
								</div>
							</div>
						)
					)}
				</div>
				<div className="max-w-[120px] min-h-[60px] rounded-full border-[1px] flex justify-center gap-2 items-center shadow-md text-[#adb1b4] cursor-pointer">
					<div>See all</div>
					<div className="translate-y-0.5">
						<MdKeyboardArrowRight size={20} />
					</div>
				</div>
				<div className="mt-20 mb-10 border-b-[3px]"></div>
			</div>
		</div>
	);
};

export default ExploreCulture;
