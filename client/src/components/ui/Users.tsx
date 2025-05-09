import { UserIcon } from "../icons/UserIcon"

export const Users = ({ firstname }: { firstname: string }) => {
    return <div className="flex justify-between p-4 hover:bg-gray-200 rounded-lg hover:-translate-y-1 duration-200">
        <div className="flex items-center">
            <div className="bg-gray-300 rounded-full p-2 mr-5"><UserIcon /></div>
            <div className="font-medium">{firstname}</div>
        </div>
        <button className="rounded-md bg-black text-white px-2">Send money</button>
    </div>
}