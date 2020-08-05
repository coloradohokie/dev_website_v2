import React from 'react'
import emailjs from 'emailjs-com'
import classes from './Contact.module.scss'

const contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_g4rO3x0v', e.target, 'user_QQC6qcO4EoNkQKpzEG8mV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
    }

    return (
        <div className="main-container">
            <div className={classes.contactContainer}>
                <div className={classes.titleBar}>
                    <div className="circle"></div>
                    <h1>Contact</h1>
                </div>
                <div className={classes.contactForm}>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <input name="name" type="text" placeholder="Full Name" aria-label="Full Name" />
                        <input name="email" type="email" placeholder="Email Address" aria-label="E-Mail Address" />
                        <textarea name="message" placeholder="Your Message" aria-label="Your Message"></textarea>
                        <input className={classes.button} aria-label="Send Message" type="submit" value={"Send Message".toUpperCase()}/>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default contact