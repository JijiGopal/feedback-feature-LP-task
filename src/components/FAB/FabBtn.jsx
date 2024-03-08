import React from 'react'
import './FabBtn.css';
import { useState } from 'react';

export const FabBtn = () => {

  const [fabToggle,setFabToggle] = useState(false);

  const fabButtonToggle = () => {
    setFabToggle(!fabToggle);
    console.log("fc",fabToggle)
  }
  
  return (

    <div className="fab-container">
      <div onClick={fabButtonToggle}  className='button iconbutton' >
        {fabToggle ? <img src="/src/assets/fab-close.png" alt="" /> : <img src="/src/assets/fabOpen.png" alt="" /> }
          
      </div>
       
      <ul className={`options ${fabToggle ? "on" : "off"}`} >
        <li>
          <span className='btn-label'>Report an Issue</span>
          <span className='iconbutton'>
            <img src="/src/assets/fab-issue.png" alt="" />
          </span>
        </li>

        <li>
          <span className='btn-label'>Share Feedback</span>
          <span className='iconbutton'>
            <img src="/src/assets/fab-feedback.png" alt="" />
          </span>
        </li>

        <li>
          <span className='btn-label'>Give Suggestion</span>
          <span className='iconbutton'>
            <img src="/src/assets/fab-suggestion.png" alt="" />
          </span>
        </li>

        <li>
          <span className='btn-label'>Contact Us</span>
          <span className='iconbutton'>
            <img src="/src/assets/fab-contact.png" alt="" />
          </span>
        </li>

      </ul>
    </div>
  )
}
