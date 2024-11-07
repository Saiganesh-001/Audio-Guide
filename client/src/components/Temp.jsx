import { Rating } from "@mui/material";
import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import { LuHeart } from "react-icons/lu";
import { FaRegShareFromSquare } from "react-icons/fa6";
import toast from "react-hot-toast";
import { FaWalking } from "react-icons/fa";
import { TbMap2 } from "react-icons/tb";
import { TbDeviceMobilePin } from "react-icons/tb";
import { MdHeadset } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { GrNotes } from "react-icons/gr";
import Working from "../components/Working";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Tour = () => {
	const { placename } = useParams();

	const { currentUser, updateUser } =
		useContext(AuthContext);

	const handleSignOut = () => {
		localStorage.removeItem("user");
		updateUser(null);
	};
	const [data, setData] = useState();

	const Places = [
		{
			placename: "Stepwell",
			price: 499.76,
			review: 3,
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/3/35/Chand_Baori_perspective_panorama_%28July_2022%29.jpg",
			averageTime:
				"This is a 3.4km walking tour. It takes an average of 75 mins to complete.",
			city: "Vadodara",
			aboutTour:
				"Stepwells, also known as vavs or baoris, are unique water storage systems that were developed in India to cope with seasonal water shortages. They consist of deep wells with long, descending steps, allowing people to reach groundwater easily, even during dry seasons. Originating in western India between the 7th and 19th centuries, stepwells are also found in other arid regions of the Indian subcontinent, including parts of Pakistan.",
		},
		{
			placename: "Ajanta-Cave",
			price: 299.34,
			review: 4,
			imgUrl:
				"https://www.indianholiday.com/wordpress/wp-content/uploads/2024/09/Ajanta-Caves.jpg",
			averageTime:
				"This is a 3.4km walking tour. It takes an average of 90 mins to complete.",
			city: "Maharashtra, India",
			aboutTour:
				"The Ajanta Caves are a collection of 30 rock-cut Buddhist caves located in the Aurangabad district of Maharashtra, India. Dating back to the 2nd century BCE and continuing until around 480 CE, these caves are a UNESCO World Heritage Site and are celebrated for their exceptional ancient Indian art. Built in two phases, they served as monasteries (Viharas) and worship halls (Chaityas) for different Buddhist traditions, offering shelter for monks during the monsoon and a resting place for merchants and pilgrims. The caves feature intricate rock sculptures and detailed paintings that depict the past lives and rebirths of the Buddha, as well as stories from the Jatakamala, a collection of ancient Buddhist tales. Notably, Caves 1, 2, 16, and 17 house some of the best-preserved wall paintings, known for their vivid colors and expressive details. Though they were mentioned in the records of medieval Chinese Buddhist travelers, the caves were largely forgotten and covered by jungle until 1819, when they were accidentally rediscovered by British officer Captain John Smith during a tiger hunt. Carved into a 75-meter-high rocky wall along the U-shaped gorge of the Waghur River, the Ajanta Caves are surrounded by natural beauty, with the sound of waterfalls audible during high water levels. They remain a testament to the spiritual and artistic heritage of ancient India.",
		},
		{
			placename: "Jaisalmer",
			price: 699.0,
			review: 4,
			imgUrl:
				"https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-07040584942670a.jpg?w=376&dpr=2.6",
			averageTime:
				"The duration of a tour 3 hours to experience",
			city: "Jaisalmer, Rajasthan",
			aboutTour:
				"Jaisalmer, often called The Golden City, is a vibrant and historic city located in the heart of the Thar Desert in Rajasthan, India. Known for its stunning yellow sandstone architecture, the city is dominated by the majestic Jaisalmer Fort, a UNESCO World Heritage Site, which rises from the desert like a golden mirage. The fort is not just a monument but a living fort with people still residing inside, along with shops, temples, and historical structures. Jaisalmer is famous for its intricately carved havelis (traditional mansions) such as Patwon Ki Haveli and Nathmal Ki Haveli, which showcase the exquisite craftsmanship of the region. The city offers a unique blend of history, culture, and desert adventures, with attractions like camel safaris, desert camps, and cultural performances under the starry sky of the Thar Desert. Its rich heritage, colorful bazaars, and warm hospitality make Jaisalmer a must-visit destination for those looking to experience the charm and grandeur of Rajasthan.",
		},
		{
			placename: "Taj-Mahal",
			price: 699.0,
			review: 4.8,
			imgUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Taj_Mahal-10_%28cropped%29.jpg/1920px-Taj_Mahal-10_%28cropped%29.jpg",
			averageTime: "Typically around 2-3 hours",
			city: "Agra, India",
			aboutTour:
				"A tour of the Taj Mahal typically lasts around 2-3 hours, giving visitors ample time to explore its stunning architecture, serene gardens, and the surrounding structures. The iconic ivory-white marble mausoleum, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is best experienced during sunrise or sunset, when the changing light enhances its beauty. Visitors can walk through the lush gardens, admire the intricate marble inlay work, and take in the reflections of the monument in the central pool. The site also includes a mosque and a guest house, which are worth visiting for their architectural details. For those seeking a truly unique experience, the Taj Mahal is open for night viewing on full moon nights, allowing visitors to see it bathed in soft moonlight. The best way to enjoy the tour is to arrive early, especially during peak seasons, to avoid the crowds and fully immerse yourself in the tranquil beauty of this world-famous symbol of love.",
		},
	];

	useEffect(() => {
		const placeData = Places.find(
			(place) =>
				place.placename.toLowerCase() ===
				placename.toLowerCase()
		);
		setData(placeData);
		console.log(data);
	}, []);

	function copy() {
		const el = document.createElement("input");
		el.value = window.location.href;
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
		toast.success("Link has been copied");
	}

	return (
		<div>
			{/* Navbar */}
			<div className="min-w-full sticky top-0 bg-white shadow-md shadow-gray-50 z-10">
				<div className="h-16 flex justify-around items-center w-9/12 mx-auto ">
					<div>
						<div className="font-bold text-2xl">
							AudioGuide
						</div>
					</div>
					<div className="flex gap-11 tracking-wider">
						<div className="cursor-pointer hover:text-red-500">
							About
						</div>
						<div className="cursor-pointer hover:text-red-500">
							Explore
						</div>
						<div className="cursor-pointer hover:text-red-500">
							Create
						</div>
						<div className="cursor-pointer hover:text-red-500">
							Vouchers
						</div>
						<div className="cursor-pointer hover:text-red-500">
							INR
						</div>
					</div>
					{currentUser ? (
						<div className="relative flex gap-3 items-center cursor-pointer group">
							<RxAvatar size={25} />
							<div>{currentUser?.username}</div>

							<button
								className="ml-4 flex items-center gap-2"
								onClick={handleSignOut}>
								<LiaSignOutAltSolid size={20} />
								Sign Out
							</button>
						</div>
					) : (
						<div className="flex gap-4">
							<button
								onClick={() =>
									navigate("/signin")
								}
								className="border px-5 py-2 transition duration-200 rounded-md 
                                     border-red-700 text-red-700 hover:bg-red-100">
								Sign In
							</button>
							<button
								onClick={() =>
									navigate("/signup")
								}
								className="bg-red-600 text-white bg-whi font-bold px-5 py-2 rounded-md hover:bg-red-700 transition duration-200">
								Create Account
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Tour Details */}
			<div className="h-16 justify-around items-center w-8/12 mx-auto mb-[55vh]">
				<div className="flex mt-10 items-center gap-4 text-[#454D57]">
					<div className="text-3xl text-[#454D57] font-medium mb-2">
						{data?.placename}
					</div>
					<div>({data?.review} Review)</div>
				</div>
				<div className="flex justify-between">
					<Rating />
					<div className="flex gap-3">
						<FaRegShareFromSquare
							onClick={copy}
							size={25}
							className="hover:cursor-pointer"
						/>
						<LuHeart
							size={25}
							className="hover:cursor-pointer"
						/>
					</div>
				</div>
				<div className="flex justify-between mt-5 rounded-md min-h-[45vh]">
					<div className="flex flex-col justify-between max-w-[45vw]">
						<img
							src={data?.imgUrl}
							alt=""
							className="rounded-md"
							width={700}
						/>
						<div className="flex py-5 border justify-evenly rounded-md gap-5 px-10">
							<div className="flex items-center gap-4">
								<div>
									<FaWalking
										size={30}
										color="#B3B8BD"
									/>
								</div>
								<div>
									<div className="text-[#454D57]">
										{data?.averageTime}
									</div>
								</div>
							</div>
							<div className="border"></div>
							<div className="flex items-center gap-4">
								<div>
									<TbMap2
										size={30}
										color="#B3B8BD"
									/>
								</div>
								<div>
									<div className="text-[#454D57]">
										{data?.city}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col min-w-[20vw] shadow-lg rounded-md">
						<div className="bg-[url('C:\Users\Saiganesh\Desktop\Projects\AudioGuide\client\src\assets\image.png')] bg-contain min-h-[13vh] mb-3 rounded-md"></div>
						<div className="min-h-[13vh] pl-3 rounded-md max-w-[19vw]">
							<div className="text-4xl font-semibold text-[#273D52]">
								₹{data?.price}
							</div>
							<div className="text-[#6A7987]">
								Access all 35 locations offline
								with the VoiceMap app
							</div>
							<div className="pl-5">
								<div className="flex flex-col gap-3 mt-6">
									<button
										className="border px-5 py-3 transition duration-200 rounded-md 
                                     text-white bg-red-600 hover:bg-red-800">
										<TbDeviceMobilePin
											className="absolute translate-x-20"
											size={25}
										/>
										Buy Now
									</button>
									<button
										className="border px-5 py-2 transition duration-200 rounded-md 
                                     border-red-700 text-red-700 hover:bg-red-100">
										<MdHeadset
											className="absolute translate-x-16"
											size={25}
										/>
										Preview Tour
									</button>
									<button
										className="border px-5 py-2 transition duration-200 rounded-md 
                                     border-red-700 text-red-700 hover:bg-red-100">
										<TfiCommentAlt
											className="absolute translate-x-20 translate-y-1"
											size={20}
										/>
										Reviews
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="border max-w-[70%] mx-auto"></div>
			{/* About The Tour */}
			<div className="flex w-8/12 mx-auto mt-6">
				<div className="min-w-[30vw] text-xl flex gap-3">
					<GrNotes color="#b91c1c" />
					<div>About the Tour</div>
				</div>
				<div className="flex flex-col gap-3 text-[#697886]">
					<div>{data?.aboutTour}</div>
				</div>
			</div>
			<div className="border max-w-[70%] mx-auto mt-7"></div>
			<Working />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Tour;
