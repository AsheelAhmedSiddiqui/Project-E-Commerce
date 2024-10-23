import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase utils";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();

	function handleLogin() {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				alert("successfully Login", user.email);
				if (email == "admin@gmail.com") {
					navigate("/dashboard");
				} else {
					navigate("/");
				}
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode);
			});
	}

	console.log(auth.currentUser);
	console.log(email, password);

	return (
		<>
			<div className=" w-[400px] mx-auto flex items-center justify-center h-screen">
				<form className=" flex flex-col gap-4 w-full shadow-xl py-12 px-8 border border-warning-500 rounded">
					<h1 className="text-2xl text-warning-500 text-center font-medium">
						Login
					</h1>
					<Input
						type="email"
						label="Email"
						isClearable
						variant="underlined"
						color="warning"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						label="Password"
						isClearable
						variant="underlined"
						color="warning"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button
						onClick={handleLogin}
						color="warning"
						className="w-full text-xl py-6 text-white font-medium mt-4 mb-1 hover:bg-transparent border-2 border-warning-500 hover:text-warning-500"
					>
						Login
					</Button>
					<hr />
					<Button
						color="warning"
						variant="bordered"
						className="w-full text-xl py-6 text font-medium mb-4 mt-2 hover:bg-warning-500 hover:text-white"
					>
						<FontAwesomeIcon icon={faGoogle} />
						Login to Google
					</Button>
					<p>
						If you are not register then{" "}
						<Link
							to={"/signup"}
							className="text-warning-500 hover:underline pr-4"
						>
							Signup Now!
						</Link>
					</p>
				</form>
			</div>

			<div className="user flex items-center justify-center gap-4 mb-8 ">
				<div className="website w-[400px] py-4 px-4 shadow-xl border-2 border-warning-500 rounded">
					<h1 className="text-xl font-medium text-warning-500">
						For Website User
					</h1>
					<p className="text-xl m-2 font-medium">Email: web@gmail.com</p>
					<p className="text-xl m-2 font-medium">Password: web@123</p>
				</div>
				<div className="website w-[400px] py-4 px-4 shadow-xl border-2 border-warning-500 rounded">
					<h1 className="text-xl font-medium text-warning-500">
						For Admin User
					</h1>
					<p className="text-xl m-2 font-medium">Email: admin@gmail.com</p>
					<p className="text-xl m-2 font-medium">Password: admin@123</p>
				</div>
			</div>
		</>
	);
}
