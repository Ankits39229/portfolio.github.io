"use server"

import { z } from "zod"

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>

export interface ContactFormState {
  success?: boolean
  error?: string
  fieldErrors?: {
    name?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
}

// Simulate email sending (replace with actual email service)
async function sendEmail(data: ContactFormData) {
  // In a real application, you would integrate with an email service like:
  // - Nodemailer with SMTP
  // - SendGrid
  // - Resend
  // - AWS SES

  console.log("Sending email with data:", data)

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simulate occasional failures for testing
  if (Math.random() < 0.1) {
    throw new Error("Failed to send email")
  }

  return true
}

// Store contact submissions (in production, use a database)
const contactSubmissions: Array<ContactFormData & { timestamp: Date; id: string }> = []

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = contactSchema.parse(rawData)

    // Send email
    await sendEmail(validatedData)

    // Store submission (in production, save to database)
    contactSubmissions.push({
      ...validatedData,
      timestamp: new Date(),
      id: Math.random().toString(36).substr(2, 9),
    })

    return {
      success: true,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        error: "Please check your form data",
        fieldErrors: error.flatten().fieldErrors,
      }
    }

    // Return generic error
    return {
      error: "Failed to send message. Please try again later.",
    }
  }
}

// Get contact submissions (for admin purposes)
export async function getContactSubmissions() {
  return contactSubmissions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}
