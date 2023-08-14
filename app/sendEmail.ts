"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const name = FormData.get("name");
  const email = FormData.get("email");
  const message = FormData.get("message");

  resend.emails.send({
    from: "A² Crypto <onboarding@resend.dev>",
    to: "hazimehussein01@gmail.com",
    subject: "A² Crypto",
    reply_to: email as string,
    text: `name: ${name as string}\nmessage: ${message as string}`,
  });
};
