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
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
      <div className="flex flex-col gap-2">
        <label className='text-xs text-white/50 tracking-wide'>Name</label>
        <input 
          required 
          type="text" 
          name="user_name" 
          className='w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-text/50 transition-colors placeholder:text-white/30' 
          placeholder="Your name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-xs text-white/50 tracking-wide'>Email</label>
        <input 
          required 
          type="email" 
          name="user_email" 
          className='w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-text/50 transition-colors placeholder:text-white/30' 
          placeholder="your@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className='text-xs text-white/50 tracking-wide'>Message</label>
        <textarea 
          required 
          name="message" 
          rows={4}
          className='w-full px-4 py-3 text-sm text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-text/50 transition-colors placeholder:text-white/30 resize-none' 
          placeholder="Tell me about your project..."
        />
      </div>
      <button 
        type="submit" 
        className='mt-4 w-full py-3 text-sm font-medium text-dark-bg bg-orange-text rounded-lg hover:bg-orange-text/90 transition-colors'
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm
