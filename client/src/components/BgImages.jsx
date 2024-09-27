import React, { useState } from "react";
import pic1 from "../assets/pic1.jpg"

const Searchbar = () => {
	let slides = [
		"https://media.voicemap.me/assets/banners/home/banner4-35988ecbae5bbdeeb2e1211a41e33693d5e17b04632812d503debca5a9327f2d.jpg",
		"https://media.voicemap.me/assets/banners/home/banner5-b6c30afdc16b6a5088177a28b82e30746d6a772807eab5daeb92e75679b83150.jpg",
		"https://media.voicemap.me/assets/banners/home/banner1-c13fdfad4e2075498a4ce02e22d26b792e24e29685da8e708b28c7ac3b20cd29.jpg",
		"https://media.voicemap.me/assets/banners/home/banner2-1c7184c7b38f11117f314cddee12b2fca74043ad16e41eecabc2f0db2e25961b.jpg",
	];
	return (
		<div
			className="bg-cover bg-center min-h-[60vh] absolute top-[-10px] z-[-10] min-w-[100vw]"
			style={{
				backgroundImage: `url(${pic1})`,
			}}>
		</div>
	);
};

export default Searchbar;
