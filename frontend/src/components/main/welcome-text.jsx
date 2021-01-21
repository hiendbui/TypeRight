import React from 'react'
import { GrClose } from 'react-icons/gr';


export default function WelcomeText({show, close}) {
    function closeWelcome(){
        close()
        document.querySelector('.type-container').focus()
    }
    return (
        <div>
            { show && 
                <div className="page-card welcome-text">
                    <h4>Welcome to TypeRight!</h4>
                    <p>Start typing below, and improve your typing speed and accuracy. <br/>Sign in or create an account to track your progress and create your own typing tests.</p>
                    <GrClose className="close welcome" onClick={closeWelcome} color="white" size={20}/>
                </div>
            }
        </div>
    )
}
