import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="section" style={{ paddingTop: '8.5rem' }}>
      <div className="container">
        <h1 className="section-title">Page Not Found</h1>
        <p className="section-subtitle">The page you requested does not exist in the new route map.</p>
        <Link className="btn primary" to="/">
          Go to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
