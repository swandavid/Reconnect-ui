import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import tw from "twin.macro";
import styled from "styled-components";

import logo from "../images/reconnect-r-logo.jpg";

const Input = tw.input`select-none w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-800 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3 select-none font-display`}
  }
`;

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <div tw="relative min-h-screen bg-green-800 text-white font-medium flex justify-center">
      <div tw="max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg grid place-items-center flex-1">
        <div tw="w-1/2">
        <Link to="/">
          <img tw="select-none mx-auto w-1/4" src={logo} />
        </Link>
        <div tw="grid place-items-center py-10 font-display font-semibold">
          <h2 tw="mb-6 text-center select-none text-2xl xl:text-3xl font-extrabold font-display">Password Reset</h2>
          <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="Email" ref={emailRef} required/>
            <p tw="text-sm text-red-900 text-center font-display">{error}</p>
            <p tw="text-sm text-red-900 text-center font-display">{message}</p>
            <SubmitButton disabled={loading} type="submit">
              <span className="text">Reset Password</span>
            </SubmitButton>
          </form>
          <p tw="mt-6 text-base text-gray-600 text-center">
            <Link to="/login" tw="select-none border-b border-gray-500 border-dotted">
              Login
            </Link>
          </p>
          <p tw="mt-4 text-sm text-gray-600 text-center select-none">
            Need an account?{" "}
            <Link to="/signup" tw="select-none border-b border-gray-500 border-dotted cursor-pointer">
              Sign Up
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
