import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

interface ResponseData {
    token: string
}

export const Signup = () => {
    const navigate = useNavigate();

    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignup = async () => {
        try {
            const response = await axios.post<ResponseData>(`${BACKEND_URL}/api/v1/user/signup`, {
                firstname: firstnameRef.current?.value,
                lastname: lastnameRef.current?.value,
                username: emailRef.current?.value,
                password: passwordRef.current?.value
            });

            const token = response.data?.token
            localStorage.setItem("Authorization", `Bearer ${token}`)

            alert("You have successfully Signed-Up!!!✅✅");
            navigate("/dashboard");

            console.log(response.data);

        } catch (err) {
            console.log("Something went wrong..." + err);
        }

    }

    return (
        <div className="bg-gray-700/70 min-h-screen">
            <div className="flex justify-center items-center container">
                <div className="p-6 bg-white h-120 w-82 rounded-md mt-15 ml-20 shadow-lg shadow-black/60">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Sign Up</h1>
                        <p className="text-gray-500 pt-1 text-center">Enter your information to create an account</p>
                    </div>
                    <div className="">

                        <div className="pt-2">
                            <h3 className="font-semibold">First name:</h3>
                            <input ref={firstnameRef}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        lastnameRef.current?.focus()
                                    }
                                }}
                                className="border-1 rounded-md w-full p-1 border-gray-400 hover:border-gray-800"
                                placeholder="John"></input>
                        </div>

                        <div className="pt-2">
                            <h3 className="font-semibold">Last name:</h3>
                            <input ref={lastnameRef}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        emailRef.current?.focus()
                                    }
                                }}
                                className="border-1 rounded-md w-full p-1 border-gray-400 hover:border-gray-800"
                                placeholder="Doe"></input>
                        </div>

                        <div className="pt-2">
                            <h3 className="font-semibold">Email:</h3>
                            <input ref={emailRef}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        passwordRef.current?.focus()
                                    }
                                }}
                                className="border-1 rounded-md w-full p-1 border-gray-400 hover:border-gray-800"
                                placeholder="JohnDoe@example.com"></input>
                        </div>

                        <div className="pt-2">
                            <h3 className="font-semibold">Password:</h3>
                            <input ref={passwordRef}
                                className="border-1 rounded-md w-full p-1 border-gray-400 hover:border-gray-800"
                                type="password"
                                placeholder="********"></input>
                        </div>

                    </div>

                    <div className="pt-4">
                        <button onClick={() => handleSignup()}
                            className="hover:-translate-y-1 duration-200 cursor-pointer bg-black rounded-md w-full text-white p-1 flex justify-center items-center">
                            Sign Up
                        </button>
                    </div>

                    <div className="pt-2 flex items-center justify-center text-md">
                        Already have account?
                        <div
                            onClick={() => navigate("/signin")}
                            className="cursor-pointer hover:-translate-y-1 duration-200 underline underline-offset-3">
                            Log In
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}