import React from "react";

const Working = () => {
	return (
		<div className="max-w-[80%] m-auto">
			<div className="flex gap-5 items-center">
				<div>
					<img
						src="https://media.voicemap.me/assets/icons/voicemap-works-c6d51756ffe285a30d9a56930675dc518eff53c2278d43187ac0623c1e10a200.svg"
						alt=""
					/>
				</div>
				<div className="text-[20px] text-[#273D52]">
					How Audio Guide Works
				</div>
			</div>
			<div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/surroundings-8bafba580cee1a2b91bbd5607f91434487e6ba26ed44df0e8b5abab0242e0d31.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Focus on your surroundings, not the
						screen
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						VoiceMap’s audio tour app uses GPS to
						play audio automatically, at the right
						time and place. Just install it, then
						download your tour and go to the
						starting point to begin your walk,
						drive, cycle, train trip or even boat
						ride.
					</div>
				</div>
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/feature_directions-6d8bc74b65a96bfb08b03fd91fed425f6b0740b3f7dfea39aba728f23e6b19f5.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Follow a route with
						turn-by-turn-directions
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						Tours follow a route from a fixed
						starting point. This is how we provide
						turn-by-turn directions. It also helps
						publishers tell a story greater than
						the sum of its parts. But you can use
						Resume to pick up a tour from the
						closest location whenever you like.
					</div>
				</div>
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/repeat-05824ea45c730fba0faa512c695264f70f716426d000efc4448e7adff83bd844.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Listen as many times as you like
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						You can listen to your tours as often
						as you like using both the VoiceMap
						app and the VoiceMap website. Your
						access to tours doesn’t expire.
					</div>
				</div>
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/virtual-96b51f3f019c02e3cf5247b99ce0bbc9e0eabe7439d9c3f2e4a7695f7c5ca233.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Take virtual tours anywhere
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						Just select Virtual mode in the
						VoiceMap app to listen to tours at
						home – or anywhere else. You’ll see
						the option after you download the
						tour. You can also listen to the whole
						tour here on the website.
					</div>
				</div>
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/sync-26a76874e105ff9b4f975f3bae4e13c1aa07dbad9de44992e42cbbfc44186249.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Buy for less on voicemap.me and sync
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						Once you’ve purchased a tour, it’s
						added to your VoiceMap library. If you
						sign into the app using the same
						method you used on the website, you’ll
						have access to your full library of
						tours in both places.
					</div>
				</div>
				<div className=" max-w-[25vw] min-h-[25vh] border-[2px] rounded relative">
					<div>
						<img
							src="https://media.voicemap.me/assets/icons/offline-4ef0a493b77fa0d803495ec48c94bbf7ba3ff7f3f31e89d09b943fe019644191.svg"
							alt=""
							className="absolute top-[-30px] left-[50%] translate-x-[-20px]"
						/>
					</div>
					<div className="my-5 mt-9 mx-4 font-semibold text-[20px] text-[#454D57]">
						Use VoiceMap offline
					</div>
					<div className="mx-4 text-[#697886] text-[18px] ">
						The VoiceMap app works entirely
						offline if there’s no data connection,
						so you don’t have to pay roaming fees.
						Just download the tour over WiFi
						before you get started.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Working;
