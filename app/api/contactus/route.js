import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { name, email, phone, service, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_ENQUIRY,
				pass: process.env.EMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL_ENQUIRY,
			to: process.env.EMAIL_FIRM,
			subject: `New Enquiry for ${service} Service`,
			html: `<div style="font-family: 'Sora', Arial, sans-serif; color: #333; max-width: 600px; margin: 40px auto; padding: 20px;">
    <h2 style="color: #007ACC; text-align: center; margin-bottom: 20px;">New Enquiry from Contact Us page</h2>
    <p style="text-align: center; margin-bottom: 30px;">A potential client has filled out the contact form. Here are their details:</p>
    <table style="width: 100%; border-collapse: collapse;">
        <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #007ACC; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold;">Services:</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${service}</td>
        </tr>
        <tr>
            <td style="padding: 12px 0; font-weight: bold;">Message:</td>
            <td style="padding: 12px 0;">${message}</td>
        </tr>
    </table>
    <p style="text-align: center; margin-top: 30px;">Please consider this inquiry for prompt response.</p>
</div>

`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ message: "Error sending email", error: error.message },
			{ status: 500 }
		);
	}
}
