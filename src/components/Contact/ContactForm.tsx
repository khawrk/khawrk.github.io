import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('PersonalWebsite', 'PersonalWeb', form.current, {
                    publicKey: 'ArLSAWwh8V7CJQsx5',
                })
                .then(
                    () => {
                        alert('FORM SENT!');
                        form.current?.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center sm:w-[90%] w-[80%] self-center'>
            <label className='self-start pb-1 font-[300] sm:text-[14px] text-[12px]'>Name</label>
            <input required type="text" name="user_name" className='pl-2 pt-1 text-default-text-color sm:pb-2 mb-3 bg-transparent border-default-text-color border-[1px] rounded-lg' />
            <label className='self-start pb-1 font-[300] sm:text-[14px] text-[12px]'>Email</label>
            <input required type="email" name="user_email" className='pl-2 pt-1 text-default-text-color sm:pb-2 mb-3 bg-transparent border-default-text-color border-[1px] rounded-lg' />
            <label className='self-start pb-1 font-[300] sm:text-[14px] text-[12px]'>Message</label>
            <textarea required name="message" className='pl-2 pt-1 text-default-text-color sm:pb-2 mb-3 bg-transparent border-default-text-color border-[1px] rounded-lg' />
            <input type="submit" value="Send" className='sm:text-[14px] text-[12px] cursor-pointer hover:bg-white hover:text-dark-bg hover:font-bold mt-5 bg-transparent border-default-text-color border-[1px] w-[70px] self-center rounded-lg py-2 px-1' />
        </form>
    );
};

export default ContactForm