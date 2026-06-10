import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MobileNav from '../../components/mobile/MobileNav.jsx'
import MobileFooter from '../../components/mobile/MobileFooter.jsx'
import {
  MobileMktHero,
  MobileElleFaq,
  MobileBenefits,
  MobilePricing,
} from '../../components/mobile/MobileFunnelSections.jsx'
import mkt from './MobileMktLandingPage.module.css'
import styles from './MobileProcessing.module.css'

const VALUE_PROPS = [
  'Reading through your document carefully...',
  'Flagging anything that deserves a closer look...',
  "Checking the fine print so you don't have to...",
  'Scanning for clauses that could affect you...',
  'Almost there — pulling together your review...',
]

export default function MobileProcessing() {
  const navigate = useNavigate()
  const location = useLocation()
  const [propIndex, setPropIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPropIndex(i => (i + 1) % VALUE_PROPS.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const isV2 = location.pathname.startsWith('/mobile-v2')
    const destination = isV2 ? '/mobile-v2/full-review' : '/mobile-v1/partial-results'
    const timer = setTimeout(() => {
      navigate(destination)
    }, 6000)
    return () => clearTimeout(timer)
  }, [navigate, location.pathname])

  return (
    <div className={mkt.page}>
      <MobileNav />
      <main>
        <MobileMktHero />

        {/* ── ELLE WIDGET — processing state ── */}
        <section className={mkt.widgetSection}>
          <span className={mkt.eyebrow}>Meet Elle • Your AI Legal Assistant</span>
          <h2 className={mkt.widgetHeading}>Get your document reviewed</h2>
          <p className={mkt.widgetBody}>
            Elle reviews your document in seconds — flagging risky clauses, vague language, and anything that could affect you. Upload any contract, lease, or agreement and get a plain-language breakdown instantly. Free. No account needed.
          </p>

          <ul className={mkt.trustList}>
            <li className={mkt.trustItem}>
              <span className={mkt.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>No account required to get started</span>
            </li>
            <li className={mkt.trustItem}>
              <span className={mkt.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Reviews PDFs and Word documents up to 20MB</span>
            </li>
            <li className={mkt.trustItem}>
              <span className={mkt.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Powered by LegalShield's legal expertise</span>
            </li>
          </ul>

          <div className={styles.processingCard} role="status" aria-live="polite">
            <div className={styles.spinner} aria-hidden="true" />
            <p className={styles.fileName}>Service_Contract_2026.doc</p>
            <p className={styles.valueProp}>{VALUE_PROPS[propIndex]}</p>
            <p className={styles.hint}>Usually ~20 seconds · Don't close this window</p>
          </div>
        </section>

        <MobileElleFaq />
        <MobileBenefits />
        <MobilePricing />
      </main>
      <MobileFooter />
    </div>
  )
}
