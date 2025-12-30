"use client";

import { useState } from "react";
import CustomSelect from "@/components/elements/CustomSelect";

export default function ContactForm() {

  const options = [
        { value: "0", label: "Hiring Employees" },
        { value: "1", label: "Temporary Staffing" },
        { value: "2", label: "Direct Hire" },
        { value: "3", label: "Contract To Hire" },
        { value: "4", label: "Training" },
    ];

    const handleSelectChange = (value: string) => {
        console.log("Selected value:", value);
    };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (

    <form onSubmit={handleSubmit} className="default-form" id="contact-form"> 
      <div className="row clearfix">
          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 form-group">
            <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 form-group">
              <input type="text" name="phone" required placeholder="Phone *" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 form-group">
              <div className="select-box">
                  <CustomSelect
                      options={options}
                      placeholder="Choose an Option"
                      onChange={handleSelectChange}
                  />
              </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
              <input type="text" name="subject" required  placeholder="Subject" />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
            <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message ..."
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
              <button className="theme-btn-one" type="submit" name="submit-form">Send Message</button>
          </div>
      </div>

      {status === "loading" && <p>Sending...</p>}
      {status === "success" && <p>Message sent successfully ✅</p>}
      {status === "error" && <p>Something went wrong ❌</p>}
  </form>
  );
}
