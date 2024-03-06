import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import './Questions.scss';
export const Questions = () => {
    return (
        <div className='question-container'>
            <div className="header-items">
                <div className="items">
                    <div className="head-item">Design</div>
                    <div className="head-item">Technology</div>
                </div>

                <div className="header-logo">
                    <img src="/src/assets/rocket.png" alt="" className='rocket' />
                     
                </div>
            </div>

            <div className="content">
                <p className='q1'>A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? </p>
                <p className='q2'>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
            </div>

            <div className="views">
                <div className="leftside">
                    <IoEye size={20}/>
                    <span className='text'>100 Views</span>
                </div>
                <div className="rightside">
                    <IoMdInformationCircleOutline size={20}/>
                    <span className='text'>How should you word your answer?</span>
                </div>
            </div>

        </div>
    )
}
