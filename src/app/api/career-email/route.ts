import { NextResponse } from "next/server";
import * as z from "zod";
import nodemailer from "nodemailer";

// Zod schema for validation
const formSchema = z.object({
  position: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  previousPosition: z.string(),
  previousCompany: z.string(),
  expectedCTC: z.string(),
  yearsOfExperience: z.string(),
  referenceName: z.string().optional(),
  referenceCompany: z.string().optional(),
  referencePosition: z.string().optional(),
  referenceEmail: z.string().email().optional(),
  referencePhone: z.string().optional(),
});

export async function POST(req: Request) {
  const formData = await req.formData();

  const fields: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") {
      fields[key] = value;
    }
  }

  const validation = formSchema.safeParse(fields);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.flatten() },
      { status: 400 }
    );
  }

  const resume = formData.get("resume") as File | null;

  try {
    // Configure your SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];

    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    // Send email
    await transporter.sendMail({
      from: `"Job Application" <${process.env.SMTP_USER}>`,
      to: "your-email@example.com",
      subject: `Application for ${fields.position}`,
      text: `
        Name: ${fields.name}
        Phone: ${fields.phone}
        Email: ${fields.email}
        Address: ${fields.address}
        Position: ${fields.position}
        Experience: ${fields.yearsOfExperience}
        Expected CTC: ${fields.expectedCTC}
      `,
      attachments,
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
