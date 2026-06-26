import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart } from 'lucide-react'
import PageHero from '../components/PageHero'
import Card from '../components/Card'
import { useInView } from '../hooks/useInView'
import './About.css'

function ValueCard({ icon: Icon, title, desc, delay }) {
  return (
    <Card delay={delay}>
      <div className="value-icon"><Icon size={20} /></div>
      <h3 className="value-title">{title}</h3>
      <p className="value-desc">{desc}</p>
    </Card>
  )
}

function TimelineItem({ year, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? 'timeline-item--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="timeline-year mono">{year}</span>
      <div className="timeline-content">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-desc">{desc}</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main className="page-enter">
      <PageHero
        eyebrow="// About E-Cell"
        title="Fuelling the Founder Mindset"
        subtitle="We are the Entrepreneurship Cell of IIITDM Kancheepuram — a student-run body dedicated to building a culture of innovation and ownership on campus."
      />

      {/* Mission / Vision / Values */}
      <section className="section container">
        <div className="mvv-grid">
          <ValueCard
            icon={Target}
            title="Our Mission"
            desc="To cultivate an entrepreneurial ecosystem at IIITDM by connecting students with resources, mentors, and opportunities to transform ideas into scalable ventures."
            delay={0}
          />
          <ValueCard
            icon={Eye}
            title="Our Vision"
            desc="A campus where every student thinks like a founder — identifying problems, building solutions, and creating lasting impact beyond the classroom."
            delay={100}
          />
          <ValueCard
            icon={Heart}
            title="Our Values"
            desc="Bias for action. Radical ownership. Collaborative ambition. We believe the best way to learn entrepreneurship is to do it."
            delay={200}
          />
        </div>
      </section>

      {/* Story */}
      <section className="about-story section">
        <div className="container about-story__inner">
          <div className="about-story__text">
            <span className="mono about-eyebrow">// Our Story</span>
            <h2 className="about-story__title">How it all started</h2>
            <p>
              E-Cell IIITDM was founded by a small group of students who believed that
              an engineering campus could be more than a pipeline to job placements.
              They envisioned a space where students could explore business models,
              meet mentors, and actually build things.
            </p>
            <p>
              Since then, we've run dozens of events, hosted founders from across India,
              supported student startups at their earliest stage, and built a community
              that outlives any one batch.
            </p>
            <p>
              Today, E-Cell is one of the most active student bodies on campus —
              and we're just getting started.
            </p>
            <Link to="/team" className="btn-accent">
              Meet the Team <ArrowRight size={15} />
            </Link>
          </div>
          <div className="about-story__timeline">
            <TimelineItem year="2024" title="E-Cell Founded" desc="Established as the official Entrepreneurship Cell of IIITDM Kancheepuram." delay={0} />
            <TimelineItem year="2024" title="First Hackathon" desc="Over 100 students participated in our inaugural 24-hour hackathon." delay={100} />
            <TimelineItem year="2025" title="Speaker Series Launch" desc="Monthly founder talks began with speakers from funded startups across India." delay={200} />
            <TimelineItem year="2025" title="E-Summit Announced" desc="Planning our first annual flagship summit for Jan 2026." delay={300} />
          </div>
        </div>
      </section>
    </main>
  )
}
