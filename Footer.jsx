import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, Mail, MapPin, ExternalLink } from 'lucide-react'
import './Footer.css'

const LINKS = {
  'Navigate': [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Initiatives', to: '/initiatives' },
    { label: 'Events', to: '/events' },
  ],
  'Discover': [
    { label: 'Our Team', to: '/team' },
    { label: 'Startups', to: '/startups' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
  ],
}

const SOCIALS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:ecell@iiitdm.ac.in', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mark">E</span>
            <div>
              <div className="footer__logo-main">E-CELL</div>
              <div className="footer__logo-sub">IIITDM Kancheepuram</div>
            </div>
          </div>
          <p className="footer__tagline">
            Creating Job Creators.<br />
            Fostering the entrepreneurial spirit at IIITDM.
          </p>
          <div className="footer__socials">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="footer__social" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="footer__location">
            <MapPin size={13} />
            <span>Vandalur-Kelambakkam Road, Chennai 600 127</span>
          </div>
        </div>

        {/* Nav columns */}
        {Object.entries(LINKS).map(([heading, items]) => (
          <div key={heading} className="footer__col">
            <h4 className="footer__col-heading">{heading}</h4>
            <ul className="footer__col-list">
              {items.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="footer__col">
          <h4 className="footer__col-heading">Get Involved</h4>
          <p className="footer__cta-text">
            Are you a student with a startup idea? We want to hear from you.
          </p>
          <Link to="/join" className="footer__cta-btn">
            Join E-Cell <ExternalLink size={13} />
          </Link>
          <a href="mailto:ecell@iiitdm.ac.in" className="footer__email">
            ecell@iiitdm.ac.in
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <span className="footer__copy">
          © {new Date().getFullYear()} E-Cell IIITDM Kancheepuram. All rights reserved.
        </span>
        <span className="footer__built">
          Built with ❤️ by E-Cell Web Team
        </span>
      </div>
    </footer>
  )
}
