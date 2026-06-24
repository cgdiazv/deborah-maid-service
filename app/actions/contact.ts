"use server";

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const details = formData.get('details') as string;

  try {
    const data = await resend.emails.send({
      from: 'Deborah Maid Service <notifications@indevasa.com>',
      to: ['beldapv@yahoo.com'],
      subject: `New Contact Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
          <h2 style="color: #0a2b4e;">New Contact Request</h2>
          <p>You have received a new contact request from the website. Here are the details:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold; width: 150px;">Name</td>
              <td style="padding: 10px; border: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Email</td>
              <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Phone</td>
              <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Service Requested</td>
              <td style="padding: 10px; border: 1px solid #eee;">${service || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #eee; font-weight: bold;">Details</td>
              <td style="padding: 10px; border: 1px solid #eee;">${details || 'None provided'}</td>
            </tr>
          </table>
        </div>
      `
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}