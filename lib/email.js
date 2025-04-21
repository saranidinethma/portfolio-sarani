import emailjs from '@emailjs/browser';

export const sendEmail = (formData) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  );
};