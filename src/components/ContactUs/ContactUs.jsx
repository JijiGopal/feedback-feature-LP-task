import React from 'react'
import './ContactUs.scss';
export const ContactUs = () => {
    return (
        <div className='contact-container'>
            <div className="contact-title">
                Let us know what <span>your queries</span> <br /> are!
                <hr />
            </div>

            <div className="contact-form">
                <form>
                    <label htmlForfor="contact-select" >Your Name</label> <br />
                    <input type="text" className='name' placeholder='Enter your Name' /> <br />

                    <div className="non-login">
                        <label htmlFor="email">Your Email</label><br />
                        <input type="text" id="email" placeholder='Enter Your Email' />

                        <label htmlFor="mobile">Your Mobile number</label><br />
                        <input type="number" id="mobile" placeholder='Enter Your number' />
                    </div>

                    <label htmlFor="message">What would you like to ask? <span>*</span></label> <br />
                    <div class="textarea-with-attachment">
                        <textarea id='contact-text' placeholder="Write here..."></textarea>
                    </div>
                    <div className='submit-btn'>
                        <button className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
