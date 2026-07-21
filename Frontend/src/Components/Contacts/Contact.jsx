import { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";

function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    toast.success("Message Sent Successfully");

    setForm({

      name: "",

      email: "",

      phone: "",

      subject: "",

      message: "",

    });

  };

  return (

    <div className="contact-page">

      <div className="contact-container">

        <div className="contact-info">

          <h1>

            Contact Us

          </h1>

          <p>

            Have any questions regarding healthcare, appointments,
            medicines or hospitals? Feel free to contact us.

          </p>

          <div className="info-card">

            <h3>📍 Address</h3>

            <p>

              Secure Your Health,
              Guntur,
              Andhra Pradesh

            </p>

          </div>

          <div className="info-card">

            <h3>📞 Phone</h3>

            <p>

              +91 9876543210

            </p>

          </div>

          <div className="info-card">

            <h3>📧 Email</h3>

            <p>

              support@secureyourhealth.com

            </p>

          </div>

        </div>

        <form

          className="contact-form"

          onSubmit={handleSubmit}

        >

          <h2>

            Send Message

          </h2>

          <input

            type="text"

            name="name"

            placeholder="Full Name"

            value={form.name}

            onChange={handleChange}

            required

          />

          <input

            type="email"

            name="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            required

          />

          <input

            type="text"

            name="phone"

            placeholder="Phone Number"

            value={form.phone}

            onChange={handleChange}

            required

          />

          <input

            type="text"

            name="subject"

            placeholder="Subject"

            value={form.subject}

            onChange={handleChange}

            required

          />

          <textarea

            rows="6"

            name="message"

            placeholder="Write your message..."

            value={form.message}

            onChange={handleChange}

            required

          />

          <button type="submit">

            Send Message

          </button>

        </form>

      </div>

    </div>

  );

}

export default Contact;