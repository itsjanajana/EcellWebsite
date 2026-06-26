import { ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import Card from '../components/Card'
import './Startups.css'

const STARTUPS = [
  { name: 'GreenRoute', domain: 'Sustainability', stage: 'MVP', desc: 'An AI-powered logistics optimizer that reduces carbon emissions in last-mile delivery.', founders: 'Ravi K, Ananya V', year: 2024, initials: 'GR', color: '#10b981' },
  { name: 'MedSync',   domain: 'HealthTech',     stage: 'Idea', desc: 'Real-time medication adherence tracker for elderly patients using IoT wearables.', founders: 'Priya R, Dhruv M', year: 2024, initials: 'MS', color: '#06b6d4' },
  { name: 'EduBot',    domain: 'EdTech',         stage: 'Beta', desc: 'Conversational AI tutor for Tier-2 college students preparing for competitive exams.', founders: 'Arjun K, Shreya N', year: 2025, initials: 'EB', color: '#8b5cf6' },
  { name: 'FarmLens',  domain: 'AgriTech',       stage: 'Pilot', desc: 'Computer vision app that diagnoses crop diseases from smartphone photos.', founders: 'Karthik M, Amit K', year: 2025, initials: 'FL', color: '#f59e0b' },
  { name: 'Locavo',    domain: 'Marketplace',    stage: 'Idea', desc: 'Hyperlocal skill marketplace connecting college students with verified freelance gigs.', founders: 'Meera K, Varun G', year: 2025, initials: 'LO', color: '#ec4899' },
  { name: 'Structify', domain: 'SaaS',           stage: 'MVP', desc: 'No-code tool to convert unstructured research papers into structured knowledge graphs.', founders: 'Aditya P, Lakshmi R', year: 2025, initials: 'ST', color: '#e63329' },
]

const STAGE_COLOR = {
  Idea: '#888', MVP: '#f59e0b', Beta: '#06b6d4', Pilot: '#10b981', Live: '#22c55e',
}

export default function Startups() {
  return (
    <main className="page-enter">
      <PageHero
        eyebrow="// Startups"
        title="Built at IIITDM"
        subtitle="These are the ventures started by E-Cell members — from dorm-room ideas to market pilots."
      />

      <section className="section container">
        <div className="startups-grid">
          {STARTUPS.map((s, i) => (
            <Card key={s.name} delay={i * 80} className="startup-card">
              <div className="startup-card__head">
                <div
                  className="startup-card__logo"
                  style={{ background: s.color + '22', color: s.color }}
                >
                  {s.initials}
                </div>
                <div>
                  <h3 className="startup-card__name">{s.name}</h3>
                  <span className="startup-card__domain mono">{s.domain}</span>
                </div>
              </div>
              <p className="startup-card__desc">{s.desc}</p>
              <div className="startup-card__footer">
                <div className="startup-card__meta">
                  <span className="startup-card__founders mono">{s.founders}</span>
                  <span className="startup-card__year mono">{s.year}</span>
                </div>
                <span
                  className="startup-card__stage"
                  style={{ color: STAGE_COLOR[s.stage] || '#888', borderColor: STAGE_COLOR[s.stage] + '44' || '#88884' }}
                >
                  {s.stage}
                </span>
              </div>
              <a href="#" className="startup-card__link">
                View startup <ExternalLink size={12} />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA to pitch */}
      <section className="section container startups-cta">
        <div className="startups-cta__inner">
          <h2 className="startups-cta__title">Building something?</h2>
          <p className="startups-cta__sub">Submit your startup to be featured here and get access to E-Cell's mentor network.</p>
          <a href="mailto:ecell@iiitdm.ac.in" className="btn-accent-lg">Submit Your Startup</a>
        </div>
      </section>
    </main>
  )
}
