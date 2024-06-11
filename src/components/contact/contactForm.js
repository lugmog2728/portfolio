import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  // Variables d'environnement
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    emailjs.send(serviceID, templateID, data, userID)
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="contact-form flex justify-center items-center p-4">
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-3xl flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col space-y-4 md:flex-1">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
              className="mt-1 shadow-md block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
              className="mt-1 shadow-md block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="A propos de"
              className="mt-1 shadow-md block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col space-y-4 md:flex-1">
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              required
              className="mt-1 shadow-md block w-full h-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 mt-5 border border-transparent shadow-md text-md font-medium rounded-full text-white bg-oceanblue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
