"use client"

import { useActionState, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm, type ContactFormState } from "@/app/actions/contact"
import { CheckCircle, AlertCircle, Send, Mail, Phone, MapPin, Clock } from "lucide-react"

const initialState: ContactFormState = {}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle successful submission
  if (state.success && !isSubmitted) {
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <CheckCircle className="mx-auto text-green-400 mb-6" size={64} />
                <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                <p className="text-neutral-300 mb-8">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false)
                    // Reset form would go here if needed
                  }}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-8">Send us a message</h2>

                {state.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="text-red-400" size={20} />
                    <span className="text-red-400">{state.error}</span>
                  </motion.div>
                )}

                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={isPending}
                        className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-blue-400"
                        placeholder="John Doe"
                      />
                      {state.fieldErrors?.name && (
                        <p className="mt-1 text-sm text-red-400">{state.fieldErrors.name[0]}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={isPending}
                        className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-blue-400"
                        placeholder="john@example.com"
                      />
                      {state.fieldErrors?.email && (
                        <p className="mt-1 text-sm text-red-400">{state.fieldErrors.email[0]}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      disabled={isPending}
                      className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-blue-400"
                      placeholder="Project inquiry"
                    />
                    {state.fieldErrors?.subject && (
                      <p className="mt-1 text-sm text-red-400">{state.fieldErrors.subject[0]}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      disabled={isPending}
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-neutral-400 focus:border-blue-400 resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {state.fieldErrors?.message && (
                      <p className="mt-1 text-sm text-red-400">{state.fieldErrors.message[0]}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-white text-black hover:bg-neutral-200 font-bold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's start a conversation</h2>
              <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                We're here to help bring your ideas to life. Whether you need a new website, security assessment, or AI
                solution, we're ready to discuss your project.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-neutral-400">ankits39229@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-neutral-400">+91 7479584773</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    {/* <p className="text-neutral-400">
                      123 Innovation Street
                      <br />
                      Tech City, TC 12345
                    </p> */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-500/20 rounded-lg">
                    <Clock className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-neutral-400">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: By appointment
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20"
            >
              <h3 className="font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-neutral-300 text-sm">
                I typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call me directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>  
  )
}
