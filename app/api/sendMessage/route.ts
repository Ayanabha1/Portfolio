import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const email = body.email,
      name = body.name,
      message = body.message;
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
      },
      secure: true,
    });

    const mail = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      to: process.env.NEXT_PUBLIC_TARGET_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${email}`,
      html: `
      <h1>Message sent from my portfolio</h1>
      <p>Name: ${name} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>
      `,
    });

    return NextResponse.json({ message: "Message sent", status: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
