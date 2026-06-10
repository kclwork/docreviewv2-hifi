import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MobileNav from '../../components/mobile/MobileNav.jsx'
import MobileFooter from '../../components/mobile/MobileFooter.jsx'
import MobileContractModal from '../../components/mobile/MobileContractModal.jsx'
import {
  MobileMktHero,
  MobileElleFaq,
  MobileBenefits,
  MobilePricing,
} from '../../components/mobile/MobileFunnelSections.jsx'
import mkt from './MobileMktLandingPage.module.css'
import pr from './MobilePartialResults.module.css'
import styles from './MobileFullReveal.module.css'

const ISSUES = [
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Termination',
    title: 'Unilateral termination clause with no notice requirement',
    description: 'The service provider can terminate this agreement at any time without prior notice or stated cause. This means you could lose access to services or paid retainers without warning, and you have no contractual mechanism to dispute or recover damages.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Liability',
    title: 'Unlimited liability on your part',
    description: 'Section 8.2 holds you liable for any damages arising from use of the service, including indirect and consequential losses. There is no cap on the amount you could be required to pay, which is unusual and exposes you to significant financial risk.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Auto-renewal',
    title: 'Auto-renewal with 60-day lock-in window',
    description: 'The contract auto-renews annually. You must cancel at least 60 days before the renewal date or you are bound for another year. Setting a calendar reminder well in advance is critical to avoid unintended renewal.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'Disputes',
    title: 'Arbitration clause waives your right to sue',
    description: 'You agree to resolve all disputes through binding arbitration and waive your right to a jury trial or class action. This significantly limits your legal options if a major dispute arises.',
  },
  {
    severity: 'NEEDS ATTORNEY REVIEW',
    severityVariant: 'attorney',
    category: 'IP',
    title: 'Photographer retains all intellectual property rights',
    description: 'All images remain the exclusive property of the Photographer. Your license to use them is limited and can be revoked. You cannot use the images for commercial purposes without a separate agreement.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Reliability',
    title: 'No backup photographer guarantee',
    description: 'The agreement does not require the Photographer to provide a qualified substitute if they are unable to attend the event. You bear the risk of last-minute changes with no contractual safety net.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Payment',
    title: 'Late payment fee terms are undefined',
    description: 'The contract references penalties for late payment but does not specify the fee amount or accrual rate. Without defined limits, fees could escalate without bound.',
  },
  {
    severity: 'WORTH CLARIFYING',
    severityVariant: 'clarify',
    category: 'Scheduling',
    title: 'No weather or venue change policy',
    description: 'There is no provision addressing rescheduling due to weather, venue changes, or other circumstances outside your control. You may be forced to pay full fees even if the event is disrupted by unavoidable factors.',
  },
]

const FILENAME = 'Service_Contract_2026.doc'
const TOTAL = ISSUES.length

const DOC_SUMMARY = 'This is a photography services agreement with several clauses that may require your attention. The contract contains terms related to unilateral termination, one-sided liability, auto-renewal, and arbitration that could significantly affect your rights as a client.'

const BOTTOM_LINE = 'This contract leans heavily in the photographer\'s favor — there are several clauses that could limit your options if something goes wrong. We recommend having a licensed attorney review it before signing.'

export default function MobileFullReveal() {
  const location = useLocation()
  const email = location.state?.email || 'you@example.com'

  const pricingRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [cardExpanded, setCardExpanded] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const current = ISSUES[index]

  function go(delta) {
    setIndex(i => (i + delta + TOTAL) % TOTAL)
    setCardExpanded(false)
  }

  function handleCardTap() {
    setCardExpanded(v => !v)
  }

  function handleSubscribe() {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={mkt.page}>
      <MobileNav />
      <main>
        <MobileMktHero />

        {/* ── ELLE WIDGET ── */}
        <section className={pr.widgetSection}>
          <span className={mkt.eyebrow}>Meet Elle - Your AI Assistant</span>
          <h2 className={mkt.widgetHeading}>Get your document reviewed</h2>

          <div className={pr.widget}>

            {/* Success banner — capped header of widget */}
            <div className={styles.successBanner} role="status">
              <span className={styles.successIcon} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className={styles.successText}>
                Unlocked. Sent full results to <strong>{email}</strong>
              </span>
            </div>

            {/* TOP — light purple */}
            <div className={pr.top}>
              <div className={pr.poweredRow}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L2 3.5V8c0 3.3 2.5 5.7 6 7 3.5-1.3 6-3.7 6-7V3.5L8 1z" fill="currentColor" />
                </svg>
                <span>Powered by Elle</span>
              </div>

              <button type="button" className={pr.fileRow} onClick={() => setModalOpen(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <span className={pr.fileName}>{FILENAME}</span>
              </button>

              <h2 className={pr.headline}>Elle flagged {TOTAL} issues.</h2>
              <p className={pr.subtext}>Swipe through to read each.</p>

              <div className={pr.divider} />

              <button
                type="button"
                className={pr.summaryTrigger}
                onClick={() => setSummaryOpen(v => !v)}
                aria-expanded={summaryOpen}
              >
                <span className={pr.summaryLabel}>Document Summary</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className={summaryOpen ? pr.chevronOpen : pr.chevron}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {summaryOpen && (
                <p className={pr.summaryBody}>{DOC_SUMMARY}</p>
              )}

              <div className={pr.divider} />

              <span className={pr.issueLabel}>Issue {index + 1} of {TOTAL}</span>

              <div
                className={`${pr.issueCard} ${cardExpanded ? pr.issueCardExpanded : ''}`}
                onClick={handleCardTap}
                role="button"
                tabIndex={0}
              >
                <div className={pr.issueContent}>
                  <div className={pr.issueTop}>
                    <span className={`${pr.severityBadge} ${pr[`severityBadge--${current.severityVariant}`]}`}>
                      {current.severity}
                    </span>
                    <span className={pr.categoryLabel}>{current.category}</span>
                  </div>
                  <h3 className={pr.issueTitle}>{current.title}</h3>
                  <p className={`${pr.issueDescription} ${cardExpanded ? '' : pr.issueDescriptionClamped}`}>
                    {current.description}
                  </p>
                </div>
                {!cardExpanded && (
                  <div className={pr.readMoreHint}>
                    <span>Read more</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>

              <div className={pr.pagination}>
                <button
                  type="button"
                  className={pr.pagBtn}
                  onClick={() => go(-1)}
                  aria-label="Previous issue"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className={pr.dots} role="tablist" aria-label="Issue pagination">
                  {ISSUES.map((_, i) => {
                    const active = i === index
                    return (
                      <span
                        key={i}
                        className={`${pr.dot} ${active ? pr.dotActive : ''}`}
                        aria-current={active ? 'true' : undefined}
                      />
                    )
                  })}
                </div>
                <button
                  type="button"
                  className={pr.pagBtn}
                  onClick={() => go(1)}
                  aria-label="Next issue"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* BOTTOM — white — Elle's bottom line */}
            <div className={styles.bottom}>
              <h3 className={styles.bottomHeadline}>Elle's bottom line</h3>
              <p className={styles.bottomBody}>{BOTTOM_LINE}</p>
              <button type="button" className={styles.bottomCta} onClick={handleSubscribe}>
                Subscribe to speak to a lawyer
              </button>
            </div>
          </div>
        </section>

        <MobileElleFaq />
        <MobileBenefits />
        <div ref={pricingRef}>
          <MobilePricing />
        </div>
      </main>
      <MobileFooter />

      {modalOpen && (
        <MobileContractModal fileName={FILENAME} onClose={() => setModalOpen(false)} />
      )}
    </div>
  )
}
