import { useState } from 'react'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import Card from '../components/Card'
import './Events.css'

const EVENTS = [
  { id: 1, title: 'Startup Ideation Workshop', date: '14 Aug 2025', venue: 'Main Auditorium', type: 'Workshop', status: 'upcoming', desc: 'A hands-on half-day session teaching the basics of idea generation, problem-solution fit, and how to spot opportunities around you.' },
  { id: 2, title: '36-Hour Hackathon: HealthTech', date: '2 Sep 2025', venue: 'Innovation Lab', type: 'Hackathon', status: 'upcoming', desc: 'Build a health-tech solution in 36 hours. Teams of 2–4 compete for cash prizes and mentorship from industry experts.' },
  { id: 3, title: 'Founder Fireside: TBA', date: '18 Oct 2025', venue: 'Seminar Hall', type: 'Speaker', status: 'upcoming', desc: 'An intimate fireside chat with a successful founder. Past sessions have featured Series A-funded startup CEOs.' },
  { id: 4, title: 'E-Summit 2026', date: 'Jan 2026', venue: 'IIITDM Campus', type: 'Summit', status: 'upcoming', desc: 'Our annual flagship two-day event with keynotes, panels, pitch competitions, and a startup expo. 500+ expected attendees.' },
  { id: 5, title: 'Ideathon 2024', date: '10 Nov 2024', venue: 'CSE Block', type: 'Competition', status: 'past', desc: 'Our first major competition with 12 teams pitching ideas across EdTech, FinTech, and AgriTech verticals.' },
  { id: 6, title: 'Entrepreneur\'s Night', date: '5 Dec 2024', venue: 'Open Amphitheatre', type: 'Networking', status: 'past', desc: 'An evening of informal networking, startup lightning talks, and live music. 200+ students attended.' },
]

const TYPES = ['All', 'Workshop', 'Hackathon', 'Speaker', 'Summit', 'Competition', 'Networking']

const STATUS_COLOR = {
  upcoming: '#22c55e',
  past: '#888',
}

export default function Events() {
  const [filter, setFilter] = useState('All')
  const [tab, setTab]    = useState('upcoming')

  const filtered = EVENTS.filter(e =>
    e.status === tab && (filter === 'All' || e.type === filter)
  )

  return (
    <main className="page-enter">
      <PageHero
        eyebrow="// Events"
        title="What's happening"
        subtitle="From focused workshops to our annual summit — there's always something going on at E-Cell."
      />

      <section className="section container">
        {/* Tabs */}
        <div className="events-tabs">
          {['upcoming', 'past'].map(t => (
            <button
              key={t}
              className={`events-tab ${tab === t ? 'events-tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t === 'upcoming' ? 'Upcoming' : 'Past Events'}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="events-filters">
          {TYPES.map(type => (
            <button
              key={type}
              className={`events-filter-btn ${filter === type ? 'events-filter-btn--active' : ''}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="events-grid">
          {filtered.length === 0 && (
            <p className="events-empty mono">No events found for this filter.</p>
          )}
          {filtered.map((event, i) => (
            <Card key={event.id} delay={i * 80} className="event-card">
              <div className="event-card__header">
                <span className="event-card__type mono">{event.type}</span>
                <span
                  className="event-card__status mono"
                  style={{ color: STATUS_COLOR[event.status] }}
                >
                  ● {event.status}
                </span>
              </div>
              <h3 className="event-card__title">{event.title}</h3>
              <p className="event-card__desc">{event.desc}</p>
              <div className="event-card__meta">
                <span><Calendar size={12} /> {event.date}</span>
                <span><MapPin size={12} /> {event.venue}</span>
              </div>
              {event.status === 'upcoming' && (
                <button className="event-card__cta">
                  Register <ArrowRight size={13} />
                </button>
              )}
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
