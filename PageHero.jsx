import { useInView } from '../hooks/useInView'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, children }) {
  const [ref, inView] = useInView()

  return (
    <section className={`page-hero ${inView ? 'page-hero--visible' : ''}`} ref={ref}>
      <div className="container">
        {eyebrow && (
          <span className="page-hero__eyebrow mono">{eyebrow}</span>
        )}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && (
          <p className="page-hero__subtitle">{subtitle}</p>
        )}
        {children}
      </div>
      <div className="page-hero__line" />
    </section>
  )
}
