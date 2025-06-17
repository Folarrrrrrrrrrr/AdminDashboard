import React,{useState} from 'react'
import "./unauthorized.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Unauthorized = ({errorResponse, animationLink, extraErrorDetails, errorAction,closePopup, actionText})=> {
 
   const [apiErrorPopup,setErrorPopup] = useState(true)
  return (
    <div>
       <div className="errorContainer" onClick={closePopup} >
          <button
            id="closeErrorBtn"
            onClick={() => setErrorPopup(false)}
          >
            &times;
          </button>  
          <DotLottieReact
            // src="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie"
            src={animationLink}
            loop
            autoplay
          />
          <p className="errorText"> {errorResponse}: {extraErrorDetails} <p className='signOutBtn' onClick={errorAction}>  {actionText}</p></p>
        </div>
    </div>
  )
}

export default Unauthorized;