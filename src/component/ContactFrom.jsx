

const ContactForm = () => {

    const fromSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // const formData = new FormData(event.target); // Get the form data
        // const data = Object.fromEntries(formData.entries()); // Convert FormData to an object
        // console.log(data); // Log the form data to the console (or handle it as needed)
        alert("Form submitted successfully!"); // Alert for demonstration purposes
    }

    return (
        <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={fromSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default ContactForm;