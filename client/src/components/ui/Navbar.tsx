import { UserIcon } from "../icons/UserIcon"

export const Navbar = ({user}: {user:string}) => {
    return <div>
        <div className="flex justify-between shadow-black/10 pb-3 shadow-sm">
            <h2 className="font-bold text-3xl pt-5 pl-7">PayTM</h2>
            <div className="flex items-center pt-5 pr-7 ">
                <p className="text-xl font-semibold pr-2">Hello, {user}</p>
                <div className="bg-gray-300 rounded-full p-2 ">
                    <UserIcon />
                </div>
            </div>
        </div>
    </div>
}