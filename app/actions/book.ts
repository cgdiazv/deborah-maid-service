"use server";

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBooking(formData: FormData) {
  try {
    // Extract all the form fields
    const data = {
      service: formData.get('service'),
      frequency: formData.get('frequency'),
      facilityType: formData.get('facilityType'),
      facilityName: formData.get('facilityName'),
      rooms: formData.get('rooms'),
      hallways: formData.get('hallways'),
      staircases: formData.get('staircases'),
      bedrooms: formData.get('bedrooms'),
      bathrooms: formData.get('bathrooms'),
      windows: formData.get('windows'),
      supplies: formData.get('supplies'), // "Yes" or "No"
      rate: formData.get('rate'), // The selected hourly rate value
      extras: formData.getAll('extras').join(', '), // Grabs all selected checkboxes
      total: formData.get('total'),
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      pets: formData.get('pets'),
      address: formData.get('address'),
      city: formData.get('city'),
      zip: formData.get('zip'),
      details: formData.get('details'),
    };

    // Send the email via Resend
    await resend.emails.send({
      from: 'Deborah Maid Service <notifications@indevasa.com>',
      to: ['beldapv@yahoo.com'],
      subject: `New Online Booking from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #0a2b4e;">New Online Booking Request</h2>
          
          <h3 style="background-color: #f4f7f9; padding: 10px; border-radius: 5px;">Service Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 40%;">Service</td><td style="padding: 8px; border: 1px solid #eee;">${data.service}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Frequency</td><td style="padding: 8px; border: 1px solid #eee;">${data.frequency}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Facility Type</td><td style="padding: 8px; border: 1px solid #eee;">${data.facilityType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Facility Name</td><td style="padding: 8px; border: 1px solid #eee;">${data.facilityName || 'N/A'}</td></tr>
          </table>

          <h3 style="background-color: #f4f7f9; padding: 10px; border-radius: 5px;">Property Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Rooms:</b> ${data.rooms}</td>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Hallways:</b> ${data.hallways}</td>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Staircases:</b> ${data.staircases}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Bedrooms:</b> ${data.bedrooms}</td>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Bathrooms:</b> ${data.bathrooms}</td>
              <td style="padding: 8px; border: 1px solid #eee;"><b>Windows:</b> ${data.windows}</td>
            </tr>
          </table>

          <h3 style="background-color: #f4f7f9; padding: 10px; border-radius: 5px;">Pricing & Extras</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 40%;">Has Supplies?</td><td style="padding: 8px; border: 1px solid #eee;">${data.supplies}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Hourly Rate</td><td style="padding: 8px; border: 1px solid #eee;">$${data.rate}/hour</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Selected Extras</td><td style="padding: 8px; border: 1px solid #eee;">${data.extras || 'None'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Estimated Total</td><td style="padding: 8px; border: 1px solid #eee; font-size: 18px; font-weight: bold; color: #0a2b4e;">$${data.total}</td></tr>
          </table>

          <h3 style="background-color: #f4f7f9; padding: 10px; border-radius: 5px;">Customer Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold; width: 40%;">Name</td><td style="padding: 8px; border: 1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #eee;">${data.phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #eee;">${data.email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Pets</td><td style="padding: 8px; border: 1px solid #eee;">${data.pets}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Address</td><td style="padding: 8px; border: 1px solid #eee;">${data.address}<br/>${data.city}, ${data.zip}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #eee; font-weight: bold;">Additional Details</td><td style="padding: 8px; border: 1px solid #eee;">${data.details || 'None'}</td></tr>
          </table>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: "Failed to send booking request." };
  }
}