import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact & Emergency Services</h1>

      <div className="contact-card">
        <h2>🚑 Emergency Ambulance</h2>
        <p className="emergency">Dial: 108</p>
      </div>

      <div className="contact-card">
        <h2>👮 Police</h2>
        <p>Dial: 100</p>
      </div>

      <div className="contact-card">
        <h2>🔥 Fire Department</h2>
        <p>Dial: 101</p>
      </div>

      <div className="contact-card">
        <h2>📧 Email</h2>
        <p>support@secureyourhealth.com</p>
      </div>

      <div className="contact-card">
        <h2>📞 Customer Care</h2>
        <p>+91 98765 43210</p>
      </div>

      <button className="contact-btn">
        Contact Support
      </button>
    </div>
  );
}

export default Contact;