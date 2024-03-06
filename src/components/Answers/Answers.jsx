import React from 'react'
import { FaCaretDown } from "react-icons/fa";

import './Answers.scss'
import { AnswerContent } from './AnswerContent/AnswerContent';
export const Answers = () => {
  return (
    <>
      <div className='aswr-container'>
        <div className="text">
          Answers (23)
        </div>
        <div className="dropdown-section">
          <span className='text2'>Sort By:</span>
          <div className="dropdown">
            <button className="dropbtn">
              <span className='btn-name'>Popular</span>
              <FaCaretDown size={24} style={{ "color": "black" }} />
            </button>
          </div>
        </div>
      </div>
      <AnswerContent/>
    </>

  )
}
