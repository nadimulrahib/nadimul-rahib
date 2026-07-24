import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // নোডমেইলার ট্রান্সপোর্টার কনফিগারেশন (SMTP জিমেইল সার্ভিস)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // আপনার নিজের জিমেইল অ্যাড্রেস
        pass: process.env.EMAIL_PASS, // আপনার জিমেইল অ্যাপ পাসওয়ার্ড
      },
    });

    // ইমেইলের লেআউট ও কন্টেন্ট ডিজাইন
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nadimulrahib38@gmail.com', // যেখানে আপনি মেসেজটি রিসিভ করতে চান
      replyTo: email, // ইউজারকে রিপ্লাই দিলে যাতে তার ইমেইলে যায়
      subject: `Portfolio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1f2937; background-color: #f9fafb; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb;">
          <h2 style="color: #10b981; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-top: 0;">New Message From Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 80px;">Name:</td>
              <td style="padding: 6px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 6px 0;">${subject}</td>
            </tr>
          </table>
          <div style="padding: 16px; background-color: #ffffff; border-left: 4px solid #10b981; border-radius: 6px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 14px;">${message}</p>
          </div>
        </div>
      `,
    };

    // ইমেইল পাঠানো এক্সিকিউশন
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Nodemailer API Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}