import React from 'react'
import './Feedback.scss';


export const Feedback = () => {
    return (
        <div className='feedback-container'>
            <div className="feedback-title">
            Let us know your <span>Feedback</span> <br /> about us!
                 <hr />
            </div>
            <div className="feedback-form">
                <form>
                    <div class="textarea-with-attachment">
                        <textarea id='feedback-text' placeholder="Write here..."></textarea>
                        <label for="file-upload" class="attach-button">Attach</label>
                        <input id="file-upload" type="file" />
                        <img className='attach' src="/src/assets/attach.png" alt="" />
                    </div>
                    <div className='checkbox'>
                         <input type="checkbox" />
                         <label>Send feedback anonymously</label>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Enter your email to receive an update <span>*</span></label>
                        <input type="text" id="email" placeholder='Enter Your Email'/>
                    </div>
                    <div className='submit-btn'>
                        <button className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

