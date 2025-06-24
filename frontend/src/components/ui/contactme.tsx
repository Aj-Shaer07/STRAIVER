import React, { useState } from "react";
import Button from "@/components/ui/button.tsx";
import { ShineBorder } from "../magicui/shine-border";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message sent!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: "transparent" }}>
      <ShineBorder>
        <form
          onSubmit={handleSubmit}
          className="w-[600px] p-8 rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 flex flex-col gap-5 transition-transform duration-300 hover:scale-105"
        >
          <h2 className="text-white text-2xl font-bold text-center">Contact Us</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg text-white placeholder-white bg-white/10 border border-white/30 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg text-white placeholder-white bg-white/10 border border-white/30 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          />

          <textarea
            name="message"
            placeholder="Your Query/Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg text-white placeholder-white bg-white/10 border border-white/30 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
          ></textarea>

          <Button>
            Send
          </Button>
        </form>
      </ShineBorder>
    </div>
  );
};

export default ContactForm;