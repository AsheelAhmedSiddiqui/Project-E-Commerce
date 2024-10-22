import { Button, Input, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import { auth, db } from "../firebase utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export default function Signup() {
	const [username, setUsername] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoad, setIsLoad] = useState(false);
	const navigate = useNavigate();
	// console.log(db);

	function handleSignup() {
		setIsLoad(true);
		createUserWithEmailAndPassword(auth, userEmail, userPassword)
			.then(async (userCredential) => {
				// Signed up
				const user = userCredential.user;
				try {
					const docRef = await addDoc(collection(db, "users"), {
						userID: user.uid,
						username: username,
						email: userEmail,
						role: "visitor",
						createdAt: `${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
						isActive: true,
						password: userPassword,
					});
					setIsLoad(false);
					navigate("/");
					console.log("Document written with ID: ", docRef.id);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode);
				// ..
			});
	}

	// console.log(auth.currentUser)

	return (
		<div className="container h-screen flex items-center justify-center mx-auto">
			<form className=" w-[500px] shadow-xl py-6 px-4 rounded border-2 border-warning-500">
				<h1 className="text-center text-3xl font-medium text-warning-500">Create Account</h1>
				<div className="input-group flex justify-center flex-col gap-6">
					<div className="username">
						<Input
							color="warning"
							type="username"
							label="Username"
							variant="underlined"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="email">
						<Input
							color="warning"
							type="email"
							label="Email"
							variant="underlined"
							onChange={(e) => setUserEmail(e.target.value)}
						/>
					</div>
					<div className="password">
						<Input
							color="warning"
							type="password"
							label="Password"
							variant="underlined"
							onChange={(e) => setUserPassword(e.target.value)}
						/>
					</div>
					<Button
						color="warning"
						onClick={handleSignup}
						className="m-4 py-6 font-medium text-white text-lg"
					>
						{isLoad ? <Spinner color="default" /> : "Create Account"}
					</Button>
					<div className="border border-warning-500 mt-4"></div>
					<Button
						color="warning"
						startContent={<FontAwesomeIcon icon={faGoogle} />}
						className="m-2 py-6 text-medium font-medium hover:bg-warning-500 hover:text-white"
						variant="bordered"
					>
						Sign up with Google
					</Button>
				</div>
			</form>
		</div>
	);
}
