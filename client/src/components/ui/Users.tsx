import { UserIcon } from "../icons/UserIcon"
import { SendIcon } from "../icons/SendIcon"
import type { Dispatch, SetStateAction } from "react"

export const Users = ({
    firstname,
    email,
    setOpen
}: {
    firstname: string,
    email: string,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return <div className="flex justify-between p-4 hover:bg-gray-200 rounded-lg duration-200">
        <div className="flex items-center">
            <div className="bg-green-600 text-white rounded-full p-2 mr-5"><UserIcon /></div>
            <div className="font-medium pr-3">{firstname}</div>
            <div className="font-light text-gray-500">{email}</div>
        </div>
        <button
            className="flex items-center justify-center hover:bg-green-500 duration-200 rounded-md bg-green-600 text-white px-4 font-medium cursor-pointer"
            onClick={() => setOpen(true)}>
            Send money <div className="pl-1"><SendIcon /></div>
        </button>
    </div>
}