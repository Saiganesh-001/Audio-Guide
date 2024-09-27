import React, { useContext, useState } from "react"
import Logo from "../assets/slack-logo.svg"
import { FcGoogle } from "react-icons/fc"
import { FaArrowDown, FaGithub, FaGlobe } from "react-icons/fa"

import {
	Box,
	Button,
	Divider,
	TextField,
	Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import apiRequest from "../lib/apiRequest"
import { AuthContext } from "../context/AuthContext"

const SignIn = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const {updateUser} = useContext(AuthContext);

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const res = await apiRequest.post("/signin", {
				email,
				password,
			})

			updateUser(res.data.user)

			navigate("/ChatView")
		} catch (err) {
			alert("Check Credentials Again")
			console.log(err);
		}
	}

	const navigate = useNavigate()

	const handleSignUpClick = () => {
		navigate("/SignUp")
	}
	return (
		<Box
			sx={{
				height: "100%",
			}}
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				paddingY={7}
			>
				<div className="font-bold">AudioGuide</div>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Typography
					sx={{
						letterSpacing: "-.75px",
						maxWidth: "700px",
						marginBottom: "10px",
						fontSize: "48px",
						fontWeight: 700,
						lineHeight: "46px",
						marginTop: "20px"
					}}
				>
					Sign in to AudioGuide
				</Typography>
				<Typography
					sx={{
						color: "#454245",
						maxWidth: "400px",
						marginTop: "10px",
						marginBottom: "32px",
						fontSize: "18px",
						lineHeight: "27px",
					}}
				>
					We suggest using the{" "}
					<span style={{ fontWeight: "bold" }}>
						email address that you use at work.
					</span>
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						width: "20%",
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<TextField
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						type="email"
						required
					/>
					<TextField
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						type="password"
						required
					/>
					<Button
						type="submit"
						variant="contained"
						sx={{ width: "100%", backgroundColor: "#703578", paddingY: "10px" }}
					>
						Continue
					</Button>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							gap: "20px",
						}}
					>
						<Divider sx={{ width: "40%", my: 2 }} />
						<Typography>OR</Typography>
						<Divider sx={{ width: "40%", my: 2 }} />
					</Box>
					<Box display="flex" flexDirection="column" gap={2.5}>
						<Button
							onClick={() => {}}
							variant="outlined"
							size="large"
							sx={{
								position: "relative",
								width: "100%",
								color: "black",
								borderColor: "#A4A4A5",
							}}
						>
							<FcGoogle
								style={{
									position: "absolute",
									left: "10px",
									top: "50%",
									transform: "translateY(-50%)",
									fontSize: "24px",
								}}
							/>
							Continue with Google
						</Button>
						<Button
							onClick={() => {}}
							variant="outlined"
							size="large"
							sx={{
								position: "relative",
								width: "100%",
								color: "black",
								borderColor: "#A4A4A5",
							}}
						>
							<FaGithub
								style={{
									position: "absolute",
									left: "10px",
									top: "50%",
									transform: "translateY(-50%)",
									fontSize: "24px",
								}}
							/>
							Continue with Github
						</Button>
						<Typography onClick={handleSignUpClick}>
							Don&apos;'t have an account?
							<span
								style={{
									paddingLeft: "4px",
									color: "#004B91",
									cursor: "pointer",
								}}
								onClick={handleSignUpClick}
							>
								Sign Up
							</span>
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="end"
				gap={3}
				paddingTop={35}
			>
				<Typography
					style={{
						color: "#A4A4A5",
						cursor: "pointer",
					}}
				>
					Privacy & terms
				</Typography>
				<Typography
					style={{
						color: "#A4A4A5",
						cursor: "pointer",
					}}
				>
					Contact Us
				</Typography>
				<Typography
					style={{
						color: "#A4A4A5",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
					}}
				>
					<FaGlobe size={18} color="#A4A4A5" style={{ marginRight: "3px" }} />
					Change Region
					<FaArrowDown size={14} style={{ marginLeft: "3px" }} />
				</Typography>
			</Box>
		</Box>
	)
}

export default SignIn
