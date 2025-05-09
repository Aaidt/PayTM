import { useState, useEffect } from "react";
import { Users } from "../components/ui/Users"
import { Navbar } from "../components/ui/Navbar"
import { SendModal } from "../components/ui/SendModal"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const token = localStorage.getItem("Authorization");

interface ResponseData {
    username: string,
    firstname: string,
    lastname: string,
    balance: number
}

interface User {
    _id: string,
    username: string,
    firstname: string,
    lastname: string,
}

interface allUsers {
    users: User[]
}

export const Dashboard = () => {
    const [user, setUser] = useState("");
    const [balance, setBalance] = useState<number>(0);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [open, setOpen] = useState<boolean>(false)

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


        fetch(`${BACKEND_URL}/api/v1/user/allUsers`, {
            method: "GET",
            headers: {
                "Authorization": `${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }
                return response.json() as Promise<allUsers>
            })
            .then((data: allUsers) => {
                setAllUsers(data.users)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])


    return <div className="">
        {open && (
            <SendModal setOpen={setOpen} />
        )}

        <Navbar user={user} />

        <div className="p-10 flex text-xl">
            <div className="font-semibold" >Your balance: </div>
            <div className="">{balance.toFixed(2)}</div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold pl-10">Users</h2>
            <input placeholder="Search users..." className="w-300 ml-10 p-1 mt-4 border-1 border-gray-300 rounded-md hover:border-gray-500 duration-300"></input>
        </div>

        <div className="flex flex-col p-10">

            {allUsers?.map(u => (
                <div key={u._id} className="text-lg">
                    <Users firstname={u.firstname} email={u.username} open={open} setOpen={setOpen} />
                </div>
            ))}
        </div>


    </div>
}