import { useState, useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const Dashboard = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const response = fetch(`${BACKEND_URL}/api/v1/user/`)
    }, [])

    return <div className="min-h-screen flex justify-center items-center">
        <div>
            <h2>PayTM</h2>
            <p>Hello, {user}</p>
        </div>
    </div>
}