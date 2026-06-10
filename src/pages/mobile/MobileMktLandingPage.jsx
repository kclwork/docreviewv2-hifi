import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileNav from '../../components/mobile/MobileNav.jsx'
import MobileFooter from '../../components/mobile/MobileFooter.jsx'
import {
  MobileMktHero,
  MobileElleFaq,
  MobileBenefits,
  MobilePricing,
} from '../../components/mobile/MobileFunnelSections.jsx'
import styles from './MobileMktLandingPage.module.css'

export default function MobileMktLandingPage() {
  const fileInputRef = useRef(null)
  const navigate = useNavigate()

  function handleUploadClick() {
    fileInputRef.current?.click()
  }

  function handleFileChange() {
    navigate('/mobile-v1/upload')
  }

  return (
    <div className={styles.page}>
      <MobileNav />
      <main>
        <MobileMktHero />

        {/* ── ELLE WIDGET ── */}
        <section className={styles.widgetSection}>
          <span className={styles.eyebrow}>Meet Elle • Your AI Legal Assistant</span>
          <h2 className={styles.widgetHeading}>Get your document reviewed</h2>
          <p className={styles.widgetBody}>
            Elle reviews your document in seconds — flagging risky clauses, vague language, and anything that could affect you. Upload any contract, lease, or agreement and get a plain-language breakdown instantly. Free. No account needed.
          </p>

          <ul className={styles.trustList}>
            <li className={styles.trustItem}>
              <span className={styles.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>No account required to get started</span>
            </li>
            <li className={styles.trustItem}>
              <span className={styles.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Reviews PDFs and Word documents up to 20MB</span>
            </li>
            <li className={styles.trustItem}>
              <span className={styles.trustCheck} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Powered by LegalShield's legal expertise</span>
            </li>
          </ul>

          <div className={styles.uploadZone}>
            <div className={styles.uploadIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <button type="button" className={styles.uploadBtn} onClick={handleUploadClick}>
              <span aria-hidden="true" className={styles.plus}>+</span>
              Upload document
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </div>

          <p className={styles.acceptedFormats}>Accepted formats: PDF and .doc files — max 20MB</p>
          <p className={styles.disclaimer}>
            By uploading your document you agree to LegalShield's Terms of Service and Privacy Policy. Elle's review is AI-generated and for informational purposes only. It does not constitute legal advice.
          </p>
        </section>

        <MobileElleFaq />
        <MobileBenefits />
        <MobilePricing />
      </main>
      <MobileFooter />
    </div>
  )
}
