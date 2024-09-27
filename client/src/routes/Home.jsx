import React from "react";
import Navbar from "../components/Navbar";
import BgImages from "../components/BgImages";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { RiBankLine } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import AudioPlayer from "../components/AudioPlayer";
import Working from "../components/Working";

const Home = () => {
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
			name: "Ajanta Cave",
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
			name: "Taj Mahal",
			happy: 20,
			iconic: 294,
			audio: 10,
		},
	];

	const circleImages = [
		"https://media.voicemap.me/public/users/avatars/000/000/166/medium/Tuscany_Trotter_VoiceMap.png",
		"https://media.voicemap.me/public/users/avatars/000/011/189/medium/SAM_2531__Erla_portrait_sept_1_2015__voicemap.jpg",
		"https://media.voicemap.me/public/users/avatars/000/015/891/medium/OLT_solid_rgb.png",
		"https://media.voicemap.me/public/users/avatars/000/031/831/medium/Portrait.png",
		"https://media.voicemap.me/public/users/avatars/000/056/359/medium/400x400_Author_Photo.jpg",
		"https://media.voicemap.me/public/users/avatars/000/061/112/medium/James_Easton_cropped.jpg",
		"https://media.voicemap.me/public/users/avatars/000/072/571/medium/IMG_k8clhk.jpg",
		"https://media.voicemap.me/public/users/avatars/000/076/646/medium/Profilna.jpg",
		"https://media.voicemap.me/public/users/avatars/000/084/244/medium/Cristina.jpg",
		"https://media.voicemap.me/public/users/avatars/000/085/078/medium/nicolas-legends-guides.jpg",
		"https://media.voicemap.me/public/users/avatars/000/085/661/medium/CET_Headshot.jpg",
		"https://media.voicemap.me/public/users/avatars/000/086/848/medium/Ivica_Profaca2.jpg",
		"https://media.voicemap.me/public/users/avatars/000/087/887/medium/sb_2019.jpg",
		"https://media.voicemap.me/public/users/avatars/000/099/747/medium/ToursVoirQuebec_BirthplaceofQuebeccity_hostimage.jpg",
		"https://media.voicemap.me/public/users/avatars/000/107/850/medium/mairin-anhern.jpg",
		"https://media.voicemap.me/public/users/avatars/000/126/956/medium/IMG_1452.JPG",
		"https://media.voicemap.me/public/users/avatars/000/151/924/medium/Spain_City_Walks_Insta.jpg",
		"https://media.voicemap.me/public/users/avatars/000/153/542/medium/Logo_Grey.png",
		"https://media.voicemap.me/public/users/avatars/000/204/233/medium/4__1_.png",
		"https://media.voicemap.me/public/users/avatars/000/220/974/medium/apartheid-museum__1_.jpeg",
	];

	return (
		<div>
			<Navbar />
			<BgImages />
			<div className="min-h-[57vh] flex flex-col items-center justify-center gap-16 translate-y-[-5rem]">
				<div className="flex flex-col items-center">
					<div className=" text-white font-semibold text-7xl">
						Stories that move you
					</div>
					<div className="flex items-center justify-center text-white mt-3 text-3xl">
						Explore at your own pace with
						Audio Guide immersive audio tour app
					</div>
				</div>
				<div className="flex items-center justify-center">
					<input
						placeholder="Search by destination or by tour name"
						type="text"
						className="outline-none min-w-[40vw] border-none py-[10px] pl-5 rounded-l-md p-3"
					/>
					<div className="bg-red-700 py-[13px] px-5 rounded-r-md translate-x-[-4px] cursor-pointer">
						<FaSearch
							color="white"
							size={20}
						/>
					</div>
				</div>
			</div>
			<div className="min-h-[20vh] flex justify-center translate-y-[-2rem]">
				<div className=" max-w-[25vw]">
					<div className="flex items-center">
						<img
							src="https://media.voicemap.me/assets/home/guy@3x-963edee5b1859fb4edabad6d65f3c1f1c381f87a3dd879dac935bd8969449e17.png"
							alt=""
							width={80}
						/>
						<div className="px-6">
							<div className="text-[#454D57] font-bold">
								Independance
							</div>
							<div className="text-[#454D57] tracking-wide ">
								No awkward groups or rigid
								schedules
							</div>
						</div>
						<img
							src="https://media.voicemap.me/assets/home/crowd@3x-8aa644febbc1334eb827e51fee9fc807ced7657895acec8febb98d87c95e82b7.png"
							alt=""
							width={120}
							className=""
						/>
					</div>
				</div>
				<div className=" min-w-[20vw] flex gap-3 items-center justify-center bg-[#F7F8F9] translate-y-[-10px]">
					<div className="px-5 py-5 text-4xl font-bold text-red-600">
						43
					</div>
					<div className="w-1 border-r-2 border-[#454D57] min-h-10"></div>
					<div className="bg-white font-medium text-2xl text-[#454D57]">
						destinations
					</div>
				</div>
				<div className="max-w-[25vw] flex gap-14 items-center pb-10">
					<div className="flex flex-col pl-3">
						<div className="font-medium text-2xl">
							Easy to use
						</div>
						<div className="text-[#454D57]">
							Tours work offline and play
							automatically 
						</div>
					</div>
					<div className="max-h-[100px] translate-x-[-30px]">
						<img
							src="https://media.voicemap.me/assets/home/use@3x-030bc8ddf94cdf0e5ef1174bc8b0c65d00e6cbf2ef23cea5caee2bb8558fc4a0.png"
							alt=""
							width={150}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center min-h-[16vh] max-w-[50%] m-auto">
				<div className="text-4xl font-medium text-[#454D57]">
					The app that takes stories beyond the
					screen
				</div>
				<div className="text-center text-[#454D57] text-[20px] mt-2">
					They’re like podcasts that
					move with you, to tell stories about
					what you’re seeing right now.
				</div>
			</div>
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
					<div className="flex justify-around pb-4 ">
						{popularDestination.map(
							(des, index) => (
								<div>
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
						<div >See all</div>
						<div className="translate-y-0.5">
							<MdKeyboardArrowRight size={20} />
						</div>
					</div>
					<div className="mt-20 mb-10 border-b-[3px]"></div>
				</div>
			</div>
			<div className="">
				<div
					className="min-h-[40vh] bg-[#283D51]  bg-cover mt-10 flex flex-col items-center p-10"
					style={{
						backgroundImage: `url("https://media.voicemap.me/assets/banners/banner-about-team-06efa62b74931f936f7a5cc0212a0c5d25bcc80bd20cbef87063d149a29cb6b8.png")`,
					}}>
					<div className="text-[#9AA4AD] tracking-widest font-semibold">
						LISTEN TO A TRAILER
					</div>
					<div className="text-white mt-4 text-3xl max-w-[40%] font-bold text-center tracking-wider">
						Passionate, knowledgable producers
						helping you discover hundreds of
						destinations
					</div>
					<div className="flex justify-around mt-16 w-[100vw] px-10">
						{circleImages.map((url, index) => (
							<div
								key={index}
								className="min-h-[50px] min-w-[50px] rounded-full bg-contain bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${url})`,
								}}></div>
						))}
					</div>
					<div>
						<AudioPlayer />
					</div>
				</div>
			</div>
			<div className="mt-20 mb-10 max-w-[75%] m-auto border-b-[3px]"></div>
			<Working />

			<div className="min-h-[100vh]">
                <div className=""></div>
			</div>
		</div>
	);
};

export default Home;
