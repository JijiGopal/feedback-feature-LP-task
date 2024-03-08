import React from 'react'
import './ReportIssues.scss';
export const ReportIssues = () => {
    return (
        <div className='issue-container'>
            <div className="issue-title">
                Let us know about the <span>Issue</span><br /> you are facing right now!
                <hr />
            </div>
            <div className="issue-form">
                <form>
                    <label htmlForfor="qstn-select" >Interview Questions</label> <br />
                    <select id="qstn-select">
                        <option value="">Interview Questions</option>
                    </select> <br />
                    <label htmlFor="message">Describe the issue in detail <span>*</span></label> <br />
                    <div class="textarea-with-attachment">
                        <textarea id='issue-text' placeholder="Write here..."></textarea>
                        <label for="file-upload" class="attach-button">Attach</label>
                        <input id="file-upload" type="file" />
                    </div>
                    <label htmlFor="">Enter your email to receive an update</label>
                    <input type="text" id="email" placeholder='Enter Your Email' />
                    <div className='submit-btn'>
                        <button className='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
