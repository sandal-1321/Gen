import React,{useState} from 'react'
import '../static/nav-contact.css'

const nav_contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className='nav-contact-main'>
      <div className='nav-contact-head'>
        <h2>Contact Us</h2>
        <p>We’re here to guide you with the right solutions.</p>
      </div>
      <div className="contact-container-nav">
        <h2>Connect With Us</h2>
      <form onSubmit={handleSubmit} className="contact-form-nav">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          autoComplete='off'
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          autoComplete='off'
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete='off'
          pattern="[0-9]{10}" 
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={handleChange}
          autoComplete='off'
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          autoComplete='off'
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
    </div>
    
  );
}

export default nav_contact
