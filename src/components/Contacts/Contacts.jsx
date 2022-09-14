import { useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contacts.css'

const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vryb4wg', 'template_gcp1xwx', form.current, 'jdb3PpWeS88GIOIbS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id="contacts">
            <h5>Get In Touch</h5>
            <h2>Contacts</h2>

            <div className='container contact_container'>
                <div className="contact_options">
                    <article className='contact_option'>
                        <h4>Email</h4>
                        <h5>khushijoy61@gmail.com</h5>
                        <a href="mailto:khushijoy61@gmail.com">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <h4>twitter</h4>
                        <h5>@khushiS26</h5>
                        <a href="https://twitter.com/messages/compose?recipient_id=1374964762207907844">Send a message</a>
                    </article>
                    <article className='contact_option'>
                        <h4>Email</h4>
                        <h5>khushijoy61@gmail.com</h5>
                        <a href="mailto:khushijoy61@gmail.com">Send a message</a>
                    </article>
                </div>

                {/* end of contact option */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder='Your full name' required />
                    <input type='email' name="user_email" placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type="submit" className='btn btn-primary'> send a message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts