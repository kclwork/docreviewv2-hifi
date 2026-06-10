import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MobileNav from '../../components/mobile/MobileNav.jsx'
import MobileFooter from '../../components/mobile/MobileFooter.jsx'
import {
  MobileMktHero,
  MobileElleFaq,
  MobileBenefits,
  MobilePricing,
} from '../../components/mobile/MobileFunnelSections.jsx'
import mkt from './MobileMktLandingPage.module.css'
import styles from './MobileUpload.module.css'

export default function MobileUpload() {
  const fileInputRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  function handleChangeFile() {
    fileInputRef.current?.click()
  }

  function handleFileChange() {
    // Stay on the current upload route — file picker just refreshes the confirmed state
  }

  function handleReview() {
    const prefix = location.pathname.startsWith('/mobile-v2') ? '/mobile-v2' : '/mobile-v1'
    navigate(`${prefix}/processing`)
  }

  return (
    <div className={mkt.page}>
      <MobileNav />
      <main>
        <MobileMktHero />

        {/* ── ELLE WIDGET — confirmed file state ── */}
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

          <div className={styles.uploadZone}>
            <div className={styles.checkIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.fileMeta}>
              <p className={styles.fileName}>Service_Contract_2026.doc</p>
              <p className={styles.fileSize}>248 KB</p>
            </div>
            <button type="button" className={styles.changeLink} onClick={handleChangeFile}>
              Change file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          <button type="button" className={styles.reviewBtn} onClick={handleReview}>
            Review my document
          </button>
        </section>

        <MobileElleFaq />
        <MobileBenefits />
        <MobilePricing />
      </main>
      <MobileFooter />
    </div>
  )
}
