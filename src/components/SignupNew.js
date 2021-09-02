import React, { useRef, useState } from "react"
import tw from "twin.macro";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext"
import { Link,useHistory } from "react-router-dom"

import illustration from "../images/reconnect-logo.jpg";
import logo from "../images/reconnect-r-logo.jpg";
import googleIconImageSrc from "../images/google-icon.png";
import twitterIconImageSrc from "../images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw.div`relative min-h-screen bg-green-800 text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold font-display`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold cursor-pointer rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4 font-display`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-800 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3 font-display`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

export default function Signup () {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }

        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/home")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }
      
    let illustrationImageSrc = illustration;
    let headingTextSU = "Sign Up To Reconnect";
    let socialButtons = [
      {
        iconImageSrc: googleIconImageSrc,
        text: "Continue With Google",
        url: "https://google.com"
      },
      {
        iconImageSrc: twitterIconImageSrc,
        text: "Continue With Twitter",
        url: "https://twitter.com"
      }
    ];
    let submitButtonTextSU = "Sign Up";
    let SubmitButtonIcon = LoginIcon;

    return (
        <Container>
          <Content>
            <MainContainer>
              <Link to="/">
                <LogoImage src={logo} />
              </Link>
              <MainContent>
                <Heading>{headingTextSU}</Heading>
                <FormContainer>
                        <>
                            <Form onSubmit={handleSubmit}>
                                <Input placeholder="Email" type="email" ref={emailRef} required/>
                                <Input type="password" placeholder="Password" ref={passwordRef} required/>
                                <Input type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required/>
                                <p tw="text-sm text-red-900 text-center">{error}</p>
                                <SubmitButton type="submit" disabled={loading}>
                                    <SubmitButtonIcon className="icon"/>
                                    <span className="text">{submitButtonTextSU}</span>
                                </SubmitButton>
                            </Form>
                            <p tw="mt-8 text-sm text-gray-600 text-center">
                            Dont have an account?{" "}
                            <Link to="/login" tw="border-b border-gray-500 border-dotted cursor-pointer">
                                Sign In
                            </Link>
                            </p>
                        </>
                </FormContainer>
              </MainContent>
            </MainContainer>
            <IllustrationContainer>
              <IllustrationImage imageSrc={illustrationImageSrc} />
            </IllustrationContainer>
          </Content>
        </Container>
    )
}