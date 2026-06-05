import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Accordion from '../components/Accordion.jsx'
import styles from './MarketingLandingPage.module.css'
import ps from './ProcessingState.module.css'

const VALUE_PROPS = [
  'Reading through your document carefully...',
  'Flagging anything that deserves a closer look...',
  'Checking the fine print so you don\'t have to...',
  'Scanning for clauses that could affect you...',
  'Almost there — pulling together your review...',
]

const ELLE_FAQ = [
  {
    question: 'What can Elle actually do with my document?',
    answer: 'Elle reviews your document in seconds — flagging risky clauses, vague language, making provisions, unusual terms, and potential tax liabilities. Elle also gives plain-language summaries of what it finds and alerts you to areas where you should seek professional legal advice.',
  },
  {
    question: 'Do I need a legal background to use it?',
    answer: 'Not at all. Elle is designed for everyday people. It explains legal language in plain terms so you can understand what you\'re agreeing to before you sign.',
  },
  {
    question: 'Is my information safe and is Elle\'s review considered legal advice?',
    answer: 'Your document is processed securely and never shared. Elle\'s review is AI-generated and for informational purposes only — it does not constitute legal advice.',
  },
  {
    question: 'Is Elle available for anyone to use?',
    answer: 'Yes. Elle\'s basic document review is free and available without an account. LegalShield members get access to deeper analysis, attorney follow-up, and more.',
  },
]

const BENEFITS_FAQ = [
  {
    question: 'Why use Elle instead of ChatGPT or another AI?',
    answer: 'Elle is purpose-built for legal documents, trained on contract law and legal terminology. Unlike general AI tools, Elle flags the specific clauses and provisions that matter — and it\'s backed by LegalShield\'s 22 years of legal expertise.',
  },
  {
    question: 'What makes Elle\'s document review more reliable than a general AI?',
    answer: 'Elle is built on LegalShield\'s legal knowledge base and is designed to identify risky language in contracts, leases, and agreements. It gives you a structured summary — not just a chat response.',
  },
  {
    question: 'Can\'t I just paste my contract into AI and ask questions?',
    answer: 'You can, but Elle is optimized for this specific task. It provides a structured review with flagged issues, plain-language summaries, and categorized risk levels — saving you time and giving you more actionable insights.',
  },
  {
    question: 'Why trust Elle with something as important as a legal document?',
    answer: 'Elle is powered by LegalShield — a company with over 22 years of experience connecting people with licensed attorneys. Your document is handled securely, and the review is designed by legal professionals.',
  },
]

export default function ProcessingState() {
  const navigate = useNavigate()
  const [propIndex, setPropIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPropIndex(i => (i + 1) % VALUE_PROPS.length)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/partial-results')
    }, 6000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className={styles.page}>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.inner}>
            <h1 className={styles.heroHeadline}>Understand any legal document in minutes</h1>
            <p className={styles.heroSubtext}>Get a plain-language AI review of any legal document — free, no account needed.</p>
          </div>
        </section>

        {/* ── ELLE WIDGET — processing state ── */}
        <section className={styles.widget}>
          <div className={styles.inner}>

            {/* Left column */}
            <div className={styles.widgetLeft}>
              <span className={styles.widgetEyebrow}>Meet Elle · Your AI Assistant</span>
              <h2 className={styles.widgetHeading}>Get your document reviewed</h2>
              <p className={styles.widgetBody}>
                Elle reviews your document in seconds — flagging risky clauses, vague language, and anything that could affect you. Upload any contract, lease, or agreement and get a plain-language summary instantly. Free. No account needed.
              </p>
              <ul className={styles.trustList}>
                <li className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>No legal jargon — get started</span>
                </li>
                <li className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>Reviews PDFs and Word documents up to 25MB</span>
                </li>
                <li className={styles.trustItem}>
                  <span className={styles.trustCheck}>✓</span>
                  <span>Powered by LegalShield's legal expertise</span>
                </li>
              </ul>
            </div>

            {/* Right column — processing */}
            <div className={styles.widgetRight}>
              <div className={styles.uploadCard}>
                <div className={styles.uploadZone}>
                  <div className={ps.processingStack}>
                    <div className={ps.spinner} />
                    <p className={ps.valueProp}>{VALUE_PROPS[propIndex]}</p>
                    <p className={ps.hint}>Usually ~20 seconds · Don't close this window</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.faqSection}>
          <div className={styles.inner}>
            <div className={styles.faqHeader}>
              <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
              <button className={styles.helpCenterBtn}>Help Center</button>
            </div>
            <Accordion items={ELLE_FAQ} />
          </div>
        </section>

        {/* ── BENEFITS OF ELLE ── */}
        <section className={styles.benefits}>
          <div className={styles.inner}>
            <div className={styles.benefitsLeft}>
              <img
                src="/images/marketing-landing-page/person-using-laptop.png"
                alt="Person using laptop"
                className={styles.benefitsImg}
              />
            </div>
            <div className={styles.benefitsRight}>
              <h2 className={styles.benefitsHeading}>Benefits of Elle</h2>
              <Accordion items={BENEFITS_FAQ} />
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className={styles.pricing}>
          <div className={styles.inner}>
            <h2 className={styles.pricingHeading}>
              Affordable plans for <em>every</em> need.
            </h2>
            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <span className={styles.planName}>Personal &amp; Family</span>
                <p className={styles.planDesc}>Legal services on unlimited number of personal legal issues. Legal services provided by attorneys with an average of 22 years of experience.</p>
                <div className={styles.planPrice}>$35<span className={styles.planPer}>+/mo</span></div>
                <button className={styles.planCta}>Shop Plans</button>
              </div>
              <div className={styles.pricingCard}>
                <span className={styles.planName}>Small Business</span>
                <p className={styles.planDesc}>Legal services on business bases, including document review, help collecting debts, on our behalf, and more.</p>
                <div className={styles.planPrice}>$53.95<span className={styles.planPer}>+/mo</span></div>
                <button className={styles.planCta}>Shop Plans</button>
              </div>
              <div className={`${styles.pricingCard} ${styles.pricingCardEnterprise}`}>
                <span className={styles.planName}>Enterprise</span>
                <p className={styles.planDesc}>Legal and identity theft protection benefits designed to give your employees and their families a sense of security.</p>
                <div className={styles.planPriceContact}>Contact for pricing</div>
                <button className={styles.planCtaSecondary}>Learn more</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
