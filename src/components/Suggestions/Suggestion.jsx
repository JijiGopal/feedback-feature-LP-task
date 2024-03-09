import React from 'react'
import './Suggestion.scss';

export const Suggestion = () => {
    return (
        <div className='suggestion-container'>
            <div className="suggestion-title">
            Share your <span>Suggestions</span> with us <br /> for a chance to earn rewards!
                <hr />
            </div>
            <div className="suggestion-form">
                <form>
                    <label htmlForfor="suggestion-select" >Choose a section</label> <br />
                    <select id="suggestion-select">
                        <option value="">Select</option>
                    </select> <br />
                    <label htmlFor="message">Describe the issue in detail <span>*</span></label> <br />
                    <div class="textarea-with-attachment">
                        <textarea id='suggestion-text' placeholder="Write here..."></textarea>
                        <label for="file-upload" class="attach-button">Attach </label>
                        <input id="file-upload" type="file" />
                    </div>
                    <label htmlFor="">Enter your email to receive an update</label><br />
                    <input type="text" id="email" placeholder='Enter Your Email' />
                    <div className='submit-btn'>
                        <button className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
