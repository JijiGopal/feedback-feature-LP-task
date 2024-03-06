import React from 'react'
import { LuArrowLeft } from "react-icons/lu";
import './BackToQuestions.scss';
export const BackToQuestions = () => {
  return (
    <div className='backTo-container'>
        <div className='backTo-elements'>
        <LuArrowLeft size={50}/>
        <span className='text'>Back To Questions</span>
        </div>
    </div>
  )
}
