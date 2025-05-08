import { useState, useEffect } from "react";
import { UserIcon } from "../components/icons/UserIcon"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const token = localStorage.getItem("Authorization");

interface ResponseData {
    username: string,
    firstname: string,
    lastname: string,
    balance: number
}


export const Dashboard = () => {
    const [user, setUser] = useState("");
    const [balance, setBalance] = useState<number>(0);
    const [bulkUsers, setBulkUsers ] = useState({});

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/v1/user/info`, {
            method: "GET",
            headers: {
                "Authorization": `${token}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }
                return response.json() as Promise<ResponseData>
            })
            .then((data: ResponseData) => {
                setUser(data.firstname)
                setBalance(data.balance)
            })
            .catch(error =>
                console.log('Error fetching data: ' + error)
            )
    }, [])


    return <div className="min-h-screen">

        <div className="flex justify-between shadow-black/10 pb-2 shadow-sm">
            <h2 className="font-bold text-3xl pt-5 pl-7">PayTM</h2>
            <div className="flex items-center pt-5 pr-7 ">
                <p className="text-xl font-semibold pr-2">Hello, {user}</p>
                <div className="bg-gray-300 rounded-full p-2 ">
                    <UserIcon />
                </div>
            </div>
        </div>

        <div className="p-10 font-semibold text-xl">
            Your balance: {balance.toFixed(2)}
        </div>

        <div>
            <h2 className="text-2xl font-semibold pl-10">Users</h2>
            <input placeholder="Search users..." className="w-300 ml-10 p-1 mt-4 border-1 border-gray-400 rounded"></input>
        </div>

    </div>
}