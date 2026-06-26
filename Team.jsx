import { Linkedin, Twitter, Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import Card from '../components/Card'
import './Team.css'

const TEAM = {
  'Core Leadership': [
    { name: 'Arjun Krishnan', role: 'President', branch: 'CSE · 3rd Year', initials: 'AK' },
    { name: 'Priya Rajan',   role: 'Vice President', branch: 'ECE · 3rd Year', initials: 'PR' },
    { name: 'Karthik M',    role: 'Secretary', branch: 'ME · 2nd Year', initials: 'KM' },
  ],
  'Heads': [
    { name: 'Sneha Iyer',   role: 'Events Head', branch: 'CSE · 2nd Year', initials: 'SI' },
    { name: 'Ravi Shankar', role: 'Tech Head', branch: 'ECE · 2nd Year', initials: 'RS' },
    { name: 'Ananya V',     role: 'Design Head', branch: 'CSE · 2nd Year', initials: 'AV' },
    { name: 'Dhruv M',      role: 'Marketing Head', branch: 'ME · 2nd Year', initials: 'DM' },
    { name: 'Meera K',      role: 'Outreach Head', branch: 'ECE · 2nd Year', initials: 'MK' },
    { name: 'Aditya P',     role: 'Finance Head', branch: 'CSE · 2nd Year', initials: 'AP' },
  ],
  'Core Members': [
    { name: 'Shreya N',  role: 'Events Core', branch: 'CSE · 1st Year', initials: 'SN' },
    { name: 'Varun G',   role: 'Tech Core', branch: 'ECE · 1st Year', initials: 'VG' },
    { name: 'Lakshmi R', role: 'Design Core', branch: 'ME · 1st Year', initials: 'LR' },
    { name: 'Amit K',    role: 'Marketing Core', branch: 'CSE · 1st Year', initials: 'AK' },
  ],
}

const COLORS = [
  '#e63329', '#ff6b35', '#8b5cf6', '#06b6d4',
  '#10b981', '#f59e0b', '#ec4899', '#6366f1',
]

function MemberCard({ name, role, branch, initials, colorIdx, delay }) {
  const bg = COLORS[colorIdx % COLORS.length]
  return (
    <Card delay={delay} className="member-card">
      <div className="member-card__avatar" style={{ background: bg }}>
        {initials}
      </div>
      <div className="member-card__info">
        <h3 className="member-card__name">{name}</h3>
        <span className="member-card__role">{role}</span>
        <span className="member-card__branch mono">{branch}</span>
      </div>
      <div className="member-card__socials">
        <a href="#" aria-label="LinkedIn"><Linkedin size={14} /></a>
        <a href="#" aria-label="Twitter"><Twitter size={14} /></a>
        <a href="#" aria-label="Email"><Mail size={14} /></a>
      </div>
    </Card>
  )
}

export default function Team() {
  let globalIdx = 0
  return (
    <main className="page-enter">
      <PageHero
        eyebrow="// The Team"
        title="The people behind E-Cell"
        subtitle="Student founders, builders, and doers running one of IIITDM's most active cells."
      />

      {Object.entries(TEAM).map(([tier, members]) => (
        <section key={tier} className="section container team-tier">
          <h2 className="team-tier__title">{tier}</h2>
          <div className={`team-grid team-grid--${tier === 'Core Leadership' ? 'sm' : tier === 'Heads' ? 'md' : 'lg'}`}>
            {members.map((m, i) => (
              <MemberCard
                key={m.name}
                {...m}
                colorIdx={globalIdx++}
                delay={i * 80}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
