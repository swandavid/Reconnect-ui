import React, { useState } from 'react'
import tw from "twin.macro";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { UserCircleIcon, ClipboardCheckIcon, ClipboardListIcon, LogoutIcon, UserGroupIcon } from '@heroicons/react/outline'

export default function HomeSideBar() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
    }

    return (
        <div tw="grid lg:justify-items-start place-items-center w-full h-full">
            <div tw="w-full h-1/2 grid grid-cols-5 my-5 lg:grid-cols-1 lg:h-full lg:w-1/2">
                <button tw="hover:bg-white hover:bg-opacity-25 grid place-items-center lg:flex lg:flex-row w-full h-full">
                    <ClipboardListIcon tw="w-6 lg:ml-4 flex-none"/>
                    <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">Get Activity</h1>
                </button>
                <Link to="/activity-log">
                <button tw="hover:bg-white hover:bg-opacity-25 grid place-items-center lg:flex lg:flex-row w-full h-full">
                    <ClipboardCheckIcon tw="w-6 lg:ml-4 flex-none"/>
                    <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">Activity Log</h1>
                </button>
                </Link>
                <Link to="/profile">
                <button tw="hover:bg-white hover:bg-opacity-25 grid place-items-center lg:flex lg:flex-row w-full h-full">
                    <UserCircleIcon tw="w-6 lg:ml-4 flex-none"/>
                    <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">Profile</h1>
                </button>
                </Link>
                <Link to="/about">
                    <button tw="hover:bg-white hover:bg-opacity-25 grid place-items-center lg:flex lg:flex-row w-full h-full">
                        <UserGroupIcon tw="w-6 lg:ml-4 flex-none"/>
                        <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">About Us</h1>
                    </button>
                </Link>
                <button tw="hover:bg-white hover:bg-opacity-25 grid place-items-center lg:flex lg:flex-row w-full h-full" onClick={handleLogout}>
                    <LogoutIcon tw="w-6 lg:ml-4 flex-none"/>
                    <h1 tw="font-display font-semibold ml-2 text-xs md:text-base lg:text-lg">Logout</h1>
                </button>
            </div>
        </div>
    )
}
