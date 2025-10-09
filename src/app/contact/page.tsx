export default function ContactPage() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have feedback or partnership ideas? We’d love to hear from you!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
