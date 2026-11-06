"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPinned, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedButton from "@/components/views/AnimatedButton";

export default function ContactFormModal({ trigger }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    Phone: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast({ variant: "destructive", title: "Name Required", description: "Please enter your name." });
      return;
    }
    if (!formData.company.trim()) {
      toast({ variant: "destructive", title: "Company Name Required", description: "Please enter your company name." });
      return;
    }
    if (!formData.Phone.trim()) {
      toast({ variant: "destructive", title: "Phone Number Required", description: "Please enter your phone number." });
      return;
    }
    const phoneRegex = /^[\d+\-\s]+$/;
    if (!phoneRegex.test(formData.Phone)) {
      toast({ variant: "destructive", title: "Invalid Phone Number", description: "Phone number should contain only numbers." });
      return;
    }
    if (!formData.email.trim()) {
      toast({ variant: "destructive", title: "Email Required", description: "Please enter your email address." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ variant: "destructive", title: "Invalid Email", description: "Please enter a valid email address." });
      return;
    }
    if (!formData.message.trim()) {
      toast({ variant: "destructive", title: "Message Required", description: "Please enter your message." });
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "8586bec1-f0b2-4c32-89c5-ccb765af1e15",
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      toast({
        variant: "success",
        title: "Form Submitted Successfully",
        description: "Thank you for reaching out! We will contact you soon.",
      });
      setFormData({ name: "", company: "", Phone: "", email: "", message: "" });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting the form. Please try again later.",
      });
    }
  };

  return (
    <>
      {/* Trigger */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                  <div>
                    <h2 className="text-2xl font-bold text-[#d42225]">Get In Touch</h2>
                    <p className="text-sm text-gray-500 mt-0.5">We'd love to hear from you!</p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Quick contact info strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-[#d42225] shrink-0" />
                    <span className="truncate">info@safetyprojects.co.in</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#d42225] shrink-0" />
                    <span>+91 22 61749999</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                    <MapPinned className="h-3.5 w-3.5 text-[#d42225] shrink-0" />
                    <span className="truncate">Kandivali (E), Mumbai – 400101</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full text-black px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42225] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full text-black  px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42225] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Phone</label>
                      <input
                        type="text"
                        name="Phone"
                        placeholder="Your Phone Number"
                        value={formData.Phone}
                        onChange={handleChange}
                        className="w-full text-black px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42225] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-black px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42225] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full text-black px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d42225] text-sm resize-none"
                    />
                  </div>
                  <div className="pt-1">
                    <AnimatedButton text={"Send Message"} />
                  </div>
                </form>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}