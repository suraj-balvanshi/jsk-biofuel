import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    name,
    phone,
    email,
    city,
    state,
    product,
    query,
    emailSubject,
    emailBody,
    formSubmitted,
    emailError,
    emailAdditionalContent,
  } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER || "info@jskbiodiesel.com",
    to: email,
    bcc: process.env.SMTP_USER,
    subject: emailSubject,
    html: `
      <p>${emailAdditionalContent.intro}</p>
      <p><strong>${emailBody.name}:</strong> ${name}</p>
      <p><strong>${emailBody.phone}:</strong> ${phone}</p>
      <p><strong>${emailBody.email}:</strong> ${email}</p>
      <p><strong>${emailBody.city}:</strong> ${city}</p>
      <p><strong>${emailBody.state}:</strong> ${state}</p>
      <p><strong>${emailBody.product}:</strong> ${product}</p>
      <p><strong>${emailBody.query}:</strong> ${query}</p>
      <p>${emailAdditionalContent.patience}</p>
      <p>${emailAdditionalContent.closing}</p>
      <p>${emailAdditionalContent.regards}</p>
      <p>${emailAdditionalContent.company}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: formSubmitted }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: emailError }, { status: 500 });
  }
}
