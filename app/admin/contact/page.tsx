"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getContactSubmissions } from "@/app/actions/contact"
import { Mail, Calendar, User, MessageSquare } from "lucide-react"

interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: Date
}

export default function AdminContactPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadSubmissions() {
      try {
        const data = await getContactSubmissions()
        setSubmissions(data)
      } catch (error) {
        console.error("Failed to load submissions:", error)
      } finally {
        setLoading(false)
      }
    }

    loadSubmissions()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-neutral-400">Loading submissions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Submissions</h1>
          <p className="text-neutral-400">{submissions.length} total submissions</p>
        </motion.div>

        <div className="space-y-6">
          {submissions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white/5 rounded-xl"
            >
              <Mail className="mx-auto text-neutral-400 mb-4" size={48} />
              <p className="text-neutral-400">No submissions yet</p>
            </motion.div>
          ) : (
            submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <User className="text-blue-400" size={20} />
                    <div>
                      <h3 className="font-bold">{submission.name}</h3>
                      <p className="text-neutral-400 text-sm">{submission.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <Calendar size={16} />
                    {new Date(submission.timestamp).toLocaleString()}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="text-green-400" size={16} />
                    <span className="font-medium">Subject:</span>
                  </div>
                  <p className="text-neutral-300">{submission.subject}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="text-purple-400" size={16} />
                    <span className="font-medium">Message:</span>
                  </div>
                  <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">{submission.message}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
