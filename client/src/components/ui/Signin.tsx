import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

interface ResponseData {
    token: string
}

export const Signin = () => {
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSignin = async () => {
        try {
            const response = await axios.post<ResponseData>(`${BACKEND_URL}/api/v1/user/signin`, {
                username: emailRef.current?.value,
                password: passwordRef.current?.value
            });

            alert("You have successfully Signed-In!!!✅✅");
            navigate("/dashboard");

            const token = response.data?.token
            localStorage.setItem("Authorization", `Bearer ${token}`)

            console.log(response.data);

        } catch (err) {
            console.log("Something went wrong..." + err);
        }

    }

    return (
        <div className="bg-gray-500/50 min-h-screen">
            <div className="flex justify-center items-center container">
                <div className="p-6 bg-white h-90 w-82 rounded-md mt-30 ml-20 shadow-lg shadow-black/60">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="font-bold text-3xl">Sign In</h1>
                        <p className="text-gray-500 pt-1 text-center">Enter your credentials to access your account</p>
                    </div>
                    <div className="">

                        <div className="pt-2">

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
                            <button onClick={() => handleSignin()}
                                className="hover:bg-black/80 duration-300 cursor-pointer bg-black rounded-md w-full text-white p-1 flex justify-center items-center">
                                Sign In
                            </button>
                        </div>

                        <div className="pt-2 flex items-center justify-center text-md">
                            Dont have an account yet?
                            <div
                                onClick={() => navigate("/signup")}
                                className="cursor-pointer hover:-translate-y-1 duration-200 underline underline-offset-3">
                                Sign Up
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}