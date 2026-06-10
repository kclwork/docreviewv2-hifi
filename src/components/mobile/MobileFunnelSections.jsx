import { useState } from 'react'
import styles from './MobileFunnelSections.module.css'

const ELLE_FAQ = [
  {
    question: 'What can Elle actually do with my document?',
    answer: 'Elle reviews your document in seconds — flagging risky clauses, vague language, missing provisions, unusual terms, and potential tax liabilities. Elle also gives plain-language summaries of what it finds and alerts you to areas where you should seek professional legal advice.',
  },
  { question: 'Do I need a legal background to use it?', answer: '' },
  { question: 'Is my information safe and is Elle\'s review considered legal advice?', answer: '' },
  { question: 'Is Elle available for anyone to use?', answer: '' },
]

const BENEFITS_FAQ = [
  {
    question: 'Why use Elle instead of ChatGPT or another AI?',
    answer: 'Elle is purpose-built for legal documents, trained on contract law and legal terminology. Unlike general AI tools, Elle flags the specific clauses and provisions that matter — and it\'s backed by LegalShield\'s 22 years of legal expertise.',
  },
  { question: 'What makes Elle\'s document review more reliable than a general AI?', answer: '' },
  { question: 'Can\'t I just paste my contract into AI and ask questions?', answer: '' },
  { question: 'Why trust Elle with something as important as a legal document?', answer: '' },
]

function MobileAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const interactive = i === 0
        const isOpen = openIndex === i
        return (
          <div key={i} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqTrigger}
              onClick={() => interactive && setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{ cursor: interactive ? 'pointer' : 'default' }}
            >
              <span className={styles.faqQuestion}>{item.question}</span>
              <span className={styles.faqIcon}>{interactive && isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && item.answer && (
              <div className={styles.faqAnswer}><p>{item.answer}</p></div>
            )}
            <div className={styles.faqDivider} />
          </div>
        )
      })}
    </div>
  )
}

export function MobileMktHero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroHeadline}>Understand any legal document in minutes</h1>
      <p className={styles.heroSubtext}>
        Get a plain-language AI review of any legal document — free, no account needed.
      </p>
    </section>
  )
}

export function MobileElleFaq() {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      <MobileAccordion items={ELLE_FAQ} />
      <button type="button" className={styles.helpCenterBtn}>Help Center</button>
    </section>
  )
}

export function MobileBenefits() {
  return (
    <section className={styles.benefits}>
      <img
        src="/images/marketing-landing-page/person-using-laptop.png"
        alt="Person using laptop"
        className={styles.benefitsImg}
      />
      <h2 className={styles.benefitsHeading}>Benefits of Elle</h2>
      <MobileAccordion items={BENEFITS_FAQ} />
    </section>
  )
}

export function MobilePricing() {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.pricingHeading}>
        Affordable plans for <em>every</em> need.
      </h2>
      <div className={styles.pricingGrid}>
        <div className={styles.pricingCard}>
          <span className={styles.planName}>Personal &amp; Family</span>
          <p className={styles.planDesc}>Legal services on unlimited number of personal legal issues. Legal services provided by attorneys with an average of 22 years of experience.</p>
          <div className={styles.planPrice}>$35<span className={styles.planPer}>+/mo</span></div>
          <button type="button" className={styles.planCta}>Shop Plans</button>
        </div>
        <div className={styles.pricingCard}>
          <span className={styles.planName}>Small Business</span>
          <p className={styles.planDesc}>Legal services on business bases, including document review, help collecting debts, on our behalf, and more.</p>
          <div className={styles.planPrice}>$53.95<span className={styles.planPer}>+/mo</span></div>
          <button type="button" className={styles.planCta}>Shop Plans</button>
        </div>
      </div>
    </section>
  )
}
