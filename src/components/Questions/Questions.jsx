import React from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

import './Questions.scss';
export const Questions = () => {
    return (
        <div className="landing">
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
                        <IoEye size={20} />
                        <span className='text'>100 Views</span>
                    </div>
                    <div className="rightside">
                        <IoMdInformationCircleOutline size={20} />
                        <span className='text'>How should you word your answer?</span>
                    </div>
                </div>

            </div>
            {/* answer section */}

            <div className='body-container'>
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

                <div className='userAnswer-container'>
                    <div className="answer-header">
                        <div className="user-details">
                            <img src="/src/assets/user-logo.png" className='user-img' alt="user" />
                            <div className="details">
                                <span className='name'>Neha Bhat (You)</span>
                                <span className='date'>Jun 27, 2023</span>
                            </div>
                        </div>
                        <div className="edit">
                            <AiFillEdit size={24} />
                            <span>Edit</span>
                        </div>
                    </div>
                    <div className="answer">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris
                            aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum <span className='light'>interdum ut velit quam. Bibendum amet mi....</span> <span className='bold'>Show more</span>
                        </p>
                    </div>

                    <div className="footer">
                        <div className="like">
                            <SlLike size={24} style={{ "color": "black" }} />
                            <span>Like</span>
                        </div>
                        <div className="post">
                            <div className="msg-logo">
                                <RiMessage2Line size={40} />
                            </div>
                            <div className="search">
                                <input type="text" className="searchTerm" placeholder="Add a Comment" />
                            </div>
                            <div className="button">
                                <button type="submit" className="searchButton">Post</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
