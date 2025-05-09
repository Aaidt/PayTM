import { UserIcon } from "../icons/UserIcon"
import type { Dispatch, SetStateAction } from "react"

export const Users = ({
    firstname,
    email,
    open,
    setOpen
}: {
    firstname: string,
    email: string,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {
    return <div className="flex justify-between p-4 hover:bg-gray-100 rounded-lg hover:-translate-y-1 duration-200">
        <div className="flex items-center">
            <div className="bg-green-600 text-white rounded-full p-2 mr-5"><UserIcon /></div>
            <div className="font-medium pr-3">{firstname}</div>
            <div className="font-light text-gray-500">{email}</div>
        </div>
        <button
            className="rounded-md bg-green-600 text-white px-4"
            onClick={() => setOpen(true)}>
            Send money
        </button>
    </div>
}