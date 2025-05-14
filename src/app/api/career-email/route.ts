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
  tStrings: z.string(),
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

  const tStrings = JSON.parse(fields.tStrings);
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
      from: process.env.SMTP_USER,
      to: formData.get("email") as string,
      bcc: process.env.SMTP_USER,
      subject: tStrings.subject,
      text: tStrings.body,
      attachments,
    });

    return NextResponse.json({ message: tStrings.successMessage });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: tStrings.errorMessage }, { status: 500 });
  }
}
