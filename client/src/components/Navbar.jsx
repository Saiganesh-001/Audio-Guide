import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { AuthContext } from "../context/AuthContext";
import { RxAvatar } from "react-icons/rx";
import toast from "react-hot-toast";

const Navbar = () => {
	const [isScrolled, setIsScrolled] =
		useState(false);

	const navigate = useNavigate();

	const { currentUser, updateUser } =
		useContext(AuthContext);

	const handleSignOut = () => {
		localStorage.removeItem("user");
		updateUser(null);
		toast.success("Sign Out Successfully");
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener(
			"scroll",
			handleScroll
		);

		return () => {
			window.removeEventListener(
				"scroll",
				handleScroll
			);
		};
	});
	return (
		<div
			className={`min-w-full sticky top-0 ${
				isScrolled
					? "bg-white shadow-md shadow-gray-50"
					: "bg-transparent  text-white"
			} relative z-[100]`}>
			<div className="h-16 flex justify-around items-center w-10/12 mx-auto ">
				<div>
					{isScrolled && (
						<div className="font-bold text-2xl">
							AudioGuide
						</div>
					)}
					{!isScrolled && (
						<div className="font-bold text-2xl">
							AudioGuide
						</div>
					)}
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
							onClick={() => navigate("/signin")}
							className={` border px-5 py-2 transition duration-200 rounded-md 
                                ${
																	!isScrolled
																		? "text-black bg-white hover:bg-slate-200"
																		: "border border-red-700 text-red-700 hover:bg-red-100"
																}`}>
							Sign In
						</button>
						<button
							onClick={() => navigate("/signup")}
							className="bg-red-600 text-white bg-whi font-bold px-5 py-2 rounded-md hover:bg-red-700 transition duration-200">
							Create Account
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
