import "../static/contact.css"

const contact = () => {
    return (
        <div className="contact-main">
            <div className="contact-container">
                <div className="contact-holebox">
                    <div className="contact-header">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-box">
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p>Feel free to reach out to us for any inquiries or support.</p>
                            <p>Ready to transform the way you work? Whether you need to streamline operations, enhance workflows,
                                or deliver measurable outcomes, Manovate is here to help.</p>
                            <p>Contact us today to see how our tailored ServiceNow solutions can drive real results for your business.
                                Let’s get started.</p>
                            <p><strong>Email:</strong> GenBug@.in.com</p>
                        </div>
                        <div className="contact-form"> 
                            <form>
                                <div className="contact-form-group">
                                    <label>Name:</label>
                                    <input type="text" name="name" required />
                                </div>
                                <div className="contact-form-group">
                                    <label>Email:</label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className="contact-form-group">
                                    <label>Message:</label>
                                    <textarea name="message" required style={{ width: "70%", height: "50px", resize: "none" }}></textarea>
                                </div>
                                <div className="contact-btn">
                                     <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact