import { useState } from 'react'
import { Mail, MapPin, Instagram, Linkedin, Twitter, Send } from 'lucide-react'
import PageHero from '../components/PageHero'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <main className="page-enter">
      <PageHero
        eyebrow="// Contact"
        title="Let's talk"
        subtitle="Whether you want to collaborate, invite us, or just say hi — we're always reachable."
      />

      <section className="section container contact-grid">
        {/* Left info */}
        <div className="contact-info">
          <div className="contact-info__block">
            <span className="mono contact-info__label">Email</span>
            <a href="mailto:ecell@iiitdm.ac.in" className="contact-info__val">
              <Mail size={16} /> ecell@iiitdm.ac.in
            </a>
          </div>
          <div className="contact-info__block">
            <span className="mono contact-info__label">Location</span>
            <span className="contact-info__val">
              <MapPin size={16} />
              IIITDM Kancheepuram<br />
              Vandalur-Kelambakkam Road<br />
              Chennai 600 127
            </span>
          </div>
          <div className="contact-info__block">
            <span className="mono contact-info__label">Follow Us</span>
            <div className="contact-socials">
              <a href="#" className="contact-social" aria-label="Instagram">
                <Instagram size={18} /> @ecell_iiitdm
              </a>
              <a href="#" className="contact-social" aria-label="LinkedIn">
                <Linkedin size={18} /> E-Cell IIITDM
              </a>
              <a href="#" className="contact-social" aria-label="Twitter">
                <Twitter size={18} /> @ecelliiitdm
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <span className="contact-success__icon">✓</span>
              <h3>Message sent!</h3>
              <p>We'll get back to you within 48 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }}>
                Send another
              </button>
            </div>
          ) : (
            <div className="contact-form">
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label className="mono">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="contact-form__field">
                  <label className="mono">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
              </div>
              <div className="contact-form__field">
                <label className="mono">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's it about?" />
              </div>
              <div className="contact-form__field">
                <label className="mono">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us more..." />
              </div>
              <button className="contact-form__submit" onClick={handleSubmit}>
                Send Message <Send size={15} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
