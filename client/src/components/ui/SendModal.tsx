import type { Dispatch, SetStateAction } from "react";
import { UserIcon } from "../icons/UserIcon"

export const SendModal = ({
    setOpen
}: {
    setOpen: Dispatch<SetStateAction<boolean>>
}) => {

    return <div
        className="fixed top-0 left-0 z-50 bg-black/60 min-h-screen min-h-full min-w-screen min-w-full flex justify-center items-center"
        onClick={() => setOpen(false)}>
        <div
            className="w-100 h-85 bg-white rounded-lg flex flex-col border-1 border-black/40  p-5"
            onClick={(e) => e.stopPropagation()}>
            <div className="text-3xl font-bold pt-3 text-center">SEND MONEY</div>

            <div className="flex items-center pb-4 pt-13">
                <div className="bg-green-600 text-white rounded-full p-2">
                    <UserIcon />
                </div>
                <div className="pl-4 text-lg font-medium">
                    NAME
                </div>
            </div>

            <div className="text-lg font-medium pb-2">Amount:</div>
            <input placeholder="Enter amount"
            type="number"
                className="border-1 border-gray-400 hover:border-gray-600 duration-300 rounded-lg w-full p-1">
            </input>

            <div className="pt-6">
                <button className="w-full bg-green-600 font-semibold text-white rounded-lg p-2 hover:bg-green-500 duration-300">Initiate transfer</button>
            </div>

        </div>
    </div>

}