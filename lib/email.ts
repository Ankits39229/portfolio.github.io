// Email service utilities
// In production, you would use a real email service

export interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text: string
}

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

// Generate HTML email template
export function generateContactEmailHTML(data: ContactEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .content {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        .field-label {
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
          word-wrap: break-word;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
        <p>You have received a new message from your website</p>
      </div>
      
      <div class="content">
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value">${escapeHtml(data.name)}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value">${escapeHtml(data.email)}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Subject:</div>
          <div class="field-value">${escapeHtml(data.subject)}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message:</div>
          <div class="field-value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
        </div>
      </div>
      
      <div class="footer">
        <p>This email was sent from your website contact form.</p>
        <p>Timestamp: ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `
}

// Generate plain text email
export function generateContactEmailText(data: ContactEmailData): string {
  return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
This email was sent from your website contact form.
Timestamp: ${new Date().toLocaleString()}
  `.trim()
}

// Generate auto-reply email HTML
export function generateAutoReplyHTML(name: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting us</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .content {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 0 0 10px 10px;
        }
        .cta {
          text-align: center;
          margin: 30px 0;
        }
        .button {
          display: inline-block;
          background: #667eea;
          color: white;
          padding: 12px 30px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #666;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Thank You!</h1>
        <p>We've received your message</p>
      </div>
      
      <div class="content">
        <p>Hi ${escapeHtml(name)},</p>
        
        <p>Thank you for reaching out to us! We've received your message and will get back to you as soon as possible.</p>
        
        <p>We typically respond within 24 hours during business days. If your inquiry is urgent, please don't hesitate to call us directly.</p>
        
        <div class="cta">
          <a href="https://yourwebsite.com" class="button">Visit Our Website</a>
        </div>
        
        <p>Best regards,<br>
        The Team</p>
      </div>
      
      <div class="footer">
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </body>
    </html>
  `
}

// Utility function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }

  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Mock email sending function (replace with real email service)
export async function sendEmail(emailData: EmailData): Promise<boolean> {
  // In production, integrate with:
  // - Nodemailer + SMTP
  // - SendGrid
  // - Resend
  // - AWS SES
  // - Mailgun

  console.log("Sending email:", {
    to: emailData.to,
    from: emailData.from,
    subject: emailData.subject,
    timestamp: new Date().toISOString(),
  })

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate success/failure
  return Math.random() > 0.1 // 90% success rate
}

// Send contact form notification
export async function sendContactNotification(data: ContactEmailData): Promise<boolean> {
  const emailData: EmailData = {
    to: "admin@yourwebsite.com", // Replace with your email
    from: "noreply@yourwebsite.com",
    subject: `New Contact: ${data.subject}`,
    html: generateContactEmailHTML(data),
    text: generateContactEmailText(data),
  }

  return sendEmail(emailData)
}

// Send auto-reply to user
export async function sendAutoReply(data: ContactEmailData): Promise<boolean> {
  const emailData: EmailData = {
    to: data.email,
    from: "noreply@yourwebsite.com",
    subject: "Thank you for contacting us",
    html: generateAutoReplyHTML(data.name),
    text: `Hi ${data.name},\n\nThank you for reaching out! We've received your message and will get back to you soon.\n\nBest regards,\nThe Team`,
  }

  return sendEmail(emailData)
}
