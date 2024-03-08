import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";

import './AnswerContent.scss';

export const AnswerContent = () => {
    return (
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
                        <RiMessage2Line size={40}/>
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
    )
}
