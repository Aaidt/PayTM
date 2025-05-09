import { UserIcon } from "../icons/UserIcon"
import { LogoutIcon } from "../icons/LogoutIcon"
import { useState } from "react"
import { useNavigate } from "react-router-dom"; 

export const Navbar = ({ user }: { user: string }) => {
    const navigate = useNavigate()
    const [dropOpen, setDropOpen] = useState<boolean>(false)

    return <div>
        <div className="flex justify-between pb-3">
            <h2 className="font-bold text-blue-900 text-3xl pt-5 pl-7">PayTM</h2>
            <div className="flex pt-5 pr-7">

                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="text-xl font-semibold pr-2">Hello, {user}</p>
                        <div onClick={() => {
                            setDropOpen(!dropOpen)
                        }}
                            className="bg-gray-300 rounded-full p-2 w-10">
                            <UserIcon />
                        </div>
                    </div>

                    {dropOpen && (
                        <div
                            className="mt-2 rounded-md p-1 text-lg font-medium bg-red-600 hover:bg-red-500 
                            duration-300 text-white mr-5 cursor-pointer flex items-center justify-center"
                            onClick={() => {
                                localStorage.removeItem("Authorization")
                                alert("You have logged out!!!")
                                navigate("/signin")
                            }}>
                            <div className="">
                                <LogoutIcon />
                            </div>
                            Logout
                        </div>
                    )}

                </div>

            </div>
        </div>
    </div>
}