import { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/ui/Navbar"
import { UserIcon } from "../components/icons/UserIcon"
import { SendIcon } from "../components/icons/SendIcon"

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
    const [open, setOpen] = useState<boolean>(false)
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const [allUsers, setAllUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User>()

    const searchRef = useRef<HTMLInputElement>(null)

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

    useEffect(() => {

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
                setFilteredUsers(allUsers)
            })
            .catch(err => {
                console.log(err)
            })

    }, [searchRef.current?.value])


    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const searchValue = searchRef.current?.value.toLowerCase() || "";
            setFilteredUsers(filteredUsers.filter(u => {
                return u.firstname.toLowerCase().includes(searchValue)
            }))
        }
    }

    return <div className="min-h-screen">

        <Navbar user={user} />

        <div className="p-10 flex text-xl">
            <div className="font-semibold pr-2" >Your balance: </div>
            <div className="">{balance.toFixed(2)}</div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold pl-10">Users</h2>
            <input placeholder="Search users..."
                className="w-300 ml-10 p-1 mt-4 border-1 border-gray-300 rounded-md hover:border-gray-500 duration-300"
                ref={searchRef}
                onKeyDown={handleSearch} />
        </div>

        <div className="flex flex-col p-10">

            {filteredUsers?.map(u => (
                <div key={u._id} className="">

                    <div className="flex justify-between p-4 hover:bg-gray-200 rounded-lg duration-200">
                        <div className="flex items-center">
                            <div className="bg-blue-900 text-white rounded-full p-2 mr-5"><UserIcon /></div>
                            <div className="font-medium pr-3 text-xl">{u.firstname}</div>
                            <div className="font-light text-gray-500 text-lg">{u.username}</div>
                        </div>
                        <button
                            className="flex items-center justify-center hover:bg-blue-700 duration-200 rounded-md bg-blue-900 text-white px-4 font-medium cursor-pointer"
                            onClick={() => {
                                setOpen(true)
                                setSelectedUser(u)
                            }}>
                            Send money <div className="pl-1"><SendIcon /></div>
                        </button>
                    </div>

                    {open && selectedUser?._id === u._id && (<div
                        className="fixed top-0 left-0 z-50 bg-black/60 min-h-screen min-h-full min-w-screen min-w-full flex justify-center items-center"
                        onClick={() => setOpen(false)}>
                        <div
                            className="w-100 h-80 bg-white rounded-lg flex flex-col border-1 border-black/40 p-5"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="text-3xl font-bold pt-3 text-center">SEND MONEY</div>

                            <div className="flex items-center pb-4 pt-10">
                                <div className="bg-blue-900 text-white rounded-full p-2">
                                    <UserIcon />
                                </div>
                                <div className="pl-4 text-lg font-medium">
                                    {u.firstname}
                                </div>
                            </div>

                            <div className="text-lg font-medium pb-2">Amount:</div>
                            <input placeholder="Enter amount"
                                type="number"
                                className="border-1 border-gray-400 hover:border-gray-600 duration-300 rounded-lg w-full p-1">
                            </input>

                            <div className="pt-6">
                                <button className="w-full bg-blue-800 font-semibold text-white rounded-lg p-2 hover:bg-blue-700 duration-300">Initiate transfer</button>
                            </div>

                        </div>
                    </div>
                    )}

                </div>
            ))}
        </div>


    </div>
}