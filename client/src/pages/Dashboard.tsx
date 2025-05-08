import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const token = localStorage.getItem("Authorization");

interface ResponseData {
    username: string,
    firstname: string,
    lastname: string
}


export const Dashboard = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        fetch(`${BACKEND_URL}/api/v1/user/info`, {
            method: "GET",
            headers: {
                "Authorization": `${token}`
            }
        })
            .then((response) => {
                if(!response.ok){
                    throw new Error("Network response was not ok.")
                }
                return response.json() as Promise<ResponseData>
            })
            .then((data: ResponseData) => {
                setUser(data.firstname)
            })
            .catch(error => 
                console.log('Error fetching data: ' + error)
            )
    }, [])


    return <div className="min-h-screen">
        <div className="flex justify-between">
            <h2 className="font-bold text-3xl pt-5 pl-7">PayTM</h2>
            <p className="text-xl font-semibold pt-5 pr-7">Hello, {user}</p>
        </div>
    </div>
}