import React from "react";
import { FaSearch } from "react-icons/fa";

const NewsLetter = () => {
	return (
		<div className="min-h-[30vh] bg-[#F7F8F9] flex justify-center border-b-2">
			<div className="flex justify-center items-center">
				<img
					src="https://media.voicemap.me/assets/newsletter_banner-090839ce6cbe5192f69cadcb69012a791135f05b624dfa0eed9ee2ff37a4f10b.png"
					alt=""
					width={400}
				/>
				<div className="max-w-[35vw] ml-11 flex flex-col gap-5">
					<div className="text-3xl">
						Celebrate curiosity with VoiceMap’s
						newsletter
					</div>
					<div className="text-xl">
						Subscribe to our fortnightly
						newsletter. It celebrates the human
						curiosity and connections that make
						travel meaningful.
					</div>
					<div className="flex items-center justify-center">
						<input
							placeholder="Enter your email address."
							type="text"
							className="outline-none min-w-[25vw] border py-[10px] pl-5 rounded-l-md p-3"
						/>
						<div className="bg-red-600 py-[10px] px-5 rounded-r-md translate-x-[-4px] cursor-pointer text-white">
							Subscribe
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
