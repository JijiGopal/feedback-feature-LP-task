import React from 'react'
import './FabBtn.css';
export const FabBtn = () => {
  return (

    <div className="fab-container">
      <div className="button iconbutton">
        <img src="/src/assets/fabOpen.png" alt="open" />
      </div>

      <ul className="options">
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
