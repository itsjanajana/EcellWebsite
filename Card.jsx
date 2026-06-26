import { useInView } from '../hooks/useInView'
import './Card.css'

export default function Card({ children, className = '', delay = 0, glass = false }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`card ${glass ? 'card--glass' : ''} ${inView ? 'card--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
