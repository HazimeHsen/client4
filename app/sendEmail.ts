"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: {
  name: any;
  email: any;
  message: any;
}) => {
  // Change parameter name to formData
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  resend.emails.send({
    from: "A² Crypto <onboarding@resend.dev>",
    to: "Asquaredcrypto@gmail.com",
    subject: "A² Crypto",
    reply_to: email,
    text: `name: ${name}\nmessage: ${message}`,
  });
};
