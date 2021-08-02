import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useState, useEffect } from 'react';
import fire from './Fire';
import firebase from "firebase/app";

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
import LoginPage from "pages/Login.js";
import Hero from 'pages/Hero.js';
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

//import ComponentRenderer from "ComponentRenderer.js";
//import MainLandingPage from "MainLandingPage.js";
//import ThankYouPage from "ThankYouPage.js";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Login from "pages/Login.js";

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  var providerTwitter = new firebase.auth.TwitterAuthProvider();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLoginGoogle = () => {
    clearErrors();
    fire
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => {
        /* @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

      });
  };

  const handleLoginTwitter = () => {
    clearErrors();
    fire
      .auth()
      .signInWithPopup(providerTwitter)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = credential.accessToken;
        var secret = credential.secret;

        // The signed-in user info.
        var user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

      });
  }

  const handleLoginEmail = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break; 
        }
      });
  };

  const handleSignupEmail = () => {
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break; 
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout}/>
      ) : (
        <LoginPage
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLoginEmail={handleLoginEmail}
          handleSignupEmail={handleSignupEmail}
          handleLoginGoogle={handleLoginGoogle}
          handleLoginTwitter={handleLoginTwitter}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

//export default LoginPage;
//export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
