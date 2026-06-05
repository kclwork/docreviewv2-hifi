import { useRef } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Accordion from '../components/Accordion.jsx'
import mkt from './MarketingLandingPage.module.css'
import styles from './FullReveal.module.css'

const ALL_ISSUES = [
  {
    tag: 'NEEDS ATTORNEY REVIEW',
    tagVariant: 'attorney',
    headline: 'Unilateral termination clause with no notice requirement',
    subcopy: 'The service provider can terminate this agreement at any time without prior notice or stated cause.',
  },
  {
    tag: 'NEEDS ATTORNEY REVIEW',
    tagVariant: 'attorney',
    headline: 'Unlimited liability on your part',
    subcopy: 'Section 8.2 holds you liable for any damages arising from use of the service, including indirect and consequential losses.',
  },
  {
    tag: 'WORTH CLARIFYING',
    tagVariant: 'clarify',
    headline: 'Auto-renewal with 60-day lock-in window',
    subcopy: 'The contract auto-renews annually. You must cancel at least 60 days before the renewal date or you are bound for another year.',
  },
  {
    tag: 'NEEDS ATTORNEY REVIEW',
    tagVariant: 'attorney',
    headline: 'Arbitration clause waives your right to sue',
    subcopy: 'You agree to resolve all disputes through binding arbitration and waive your right to a jury trial or class action.',
  },
  {
    tag: 'NEEDS ATTORNEY REVIEW',
    tagVariant: 'attorney',
    headline: 'Photographer retains all intellectual property rights',
    subcopy: 'All images remain the exclusive property of the Photographer. Your license to use them is limited and can be revoked.',
  },
  {
    tag: 'WORTH CLARIFYING',
    tagVariant: 'clarify',
    headline: 'No backup photographer guarantee',
    subcopy: 'The agreement does not require the Photographer to provide a qualified substitute if they are unable to attend the event.',
  },
  {
    tag: 'WORTH CLARIFYING',
    tagVariant: 'clarify',
    headline: 'Late payment fee terms are undefined',
    subcopy: 'The contract references penalties for late payment but does not specify the fee amount or accrual rate.',
  },
  {
    tag: 'WORTH CLARIFYING',
    tagVariant: 'clarify',
    headline: 'No weather or venue change policy',
    subcopy: 'There is no provision addressing rescheduling due to weather, venue changes, or other circumstances outside your control.',
  },
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

export default function FullReveal() {
  const pricingRef = useRef(null)

  function scrollToPricing() {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={mkt.page}>
      <Nav />
      <main>

        {/* ── HERO ── */}
        <section className={mkt.hero}>
          <div className={mkt.inner}>
            <h1 className={mkt.heroHeadline}>Understand any legal document in minutes</h1>
            <p className={mkt.heroSubtext}>Get a plain-language AI review of any legal document — free, no account needed.</p>
          </div>
        </section>

        {/* ── ELLE WIDGET — full reveal ── */}
        <section className={styles.widgetSection}>
          <div className={styles.widgetInner}>

            <span className={mkt.widgetEyebrow}>Meet Elle — Your AI Assistant</span>
            <h2 className={mkt.widgetHeading}>Get your document reviewed</h2>

            <div className={styles.widgetCols}>

              {/* Left column — document preview */}
              <div className={styles.docCol}>
                <div className={styles.docCard}>
                  <div className={styles.docContent}>
                    <p className={styles.docTitle}>Wedding Photography Services Agreement</p>
                    <p className={styles.docBody}>
                      This Photography Services Agreement ("Agreement") is entered into as of the date of signature between [PHOTOGRAPHER NAME] ("Photographer") and [CLIENT NAME] ("Client"). Both parties agree to the terms set forth herein.
                    </p>

                    <p className={styles.docSectionHead}>1. Services</p>
                    <p className={styles.docBody}>
                      Photographer agrees to provide wedding photography services for the event described herein. Coverage includes up to eight (8) hours of continuous photography at the venue and agreed-upon locations. Additional coverage hours are available at Photographer's standard hourly rate as set forth in Schedule A.
                    </p>

                    <p className={styles.docSectionHead}>2. Payment Terms</p>
                    <p className={styles.docBody}>
                      Client agrees to pay a non-refundable retainer of fifty percent (50%) of the total fee upon execution of this Agreement. The remaining balance shall be due no later than fourteen (14) days prior to the event date. Failure to remit final payment may result in cancellation of services without refund of any amounts paid. Photographer reserves the right to adjust pricing with thirty (30) days' notice, and continued engagement constitutes acceptance of revised terms.
                    </p>

                    <p className={styles.docSectionHead}>3. Image Delivery</p>
                    <p className={styles.docBody}>
                      Photographer will deliver a minimum of four hundred (400) edited digital images within sixty (60) days of the event. Images will be provided via a private online gallery. Print rights are granted to Client for personal use only; commercial use requires a separate licensing agreement. Raw or unedited files will not be delivered under any circumstances.
                    </p>

                    <p className={styles.docSectionHead}>4. Cancellation Policy</p>
                    <p className={styles.docBody}>
                      In the event Client cancels this Agreement for any reason, the retainer shall be forfeited in its entirety. If Photographer cancels, Client will receive a full refund of all amounts paid. Photographer shall not be liable for cancellations resulting from circumstances beyond reasonable control, including but not limited to acts of God, illness, or force majeure events.
                    </p>

                    <p className={styles.docSectionHead}>5. Limitation of Liability</p>
                    <p className={styles.docBody}>
                      Photographer's total liability to Client shall not exceed the total fees paid under this Agreement. In no event shall Photographer be liable for any indirect, incidental, special, or consequential damages arising out of or relating to this Agreement, even if Photographer has been advised of the possibility of such damages. Client waives the right to seek relief through class action or jury trial.
                    </p>

                    <p className={styles.docSectionHead}>6. Intellectual Property</p>
                    <p className={styles.docBody}>
                      All photographs produced under this Agreement remain the exclusive intellectual property of Photographer. Client is granted a limited, non-exclusive license to use the delivered images for personal purposes only. Photographer retains the right to use any images for portfolio, marketing, or promotional purposes unless Client provides written objection within thirty (30) days of delivery.
                    </p>
                  </div>
                </div>
                <p className={styles.docPageLabel}>Preview · page 1 of 12</p>
                <p className={styles.docEncryptNote}>Don't worry — your document is encrypted and only shared with the path you pick below.</p>
              </div>

              {/* Right column — Elle output, all issues unlocked */}
              <div className={styles.elleCol}>

                {/* Scrollable inner content card */}
                <div className={styles.elleCard}>
                  <div className={styles.elleHeader}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1L2 3.5V8c0 3.3 2.5 5.7 6 7 3.5-1.3 6-3.7 6-7V3.5L8 1z" fill="var(--color-primary-purple)" />
                    </svg>
                    <span className={styles.ellePoweredBy}>Powered by Elle</span>
                  </div>

                  <div className={styles.elleBody}>
                    <div className={styles.elleSection}>
                      <span className={styles.elleSectionLabel}>Document Summary</span>
                      <p className={styles.elleSummary}>
                        This is a photography services agreement with several clauses that may require your attention. The contract contains terms related to unilateral termination, one-sided liability, auto-renewal, and arbitration that could significantly affect your rights as a client.
                      </p>
                    </div>

                    <div className={styles.issuesHeader}>
                      <span className={styles.elleSectionLabel}>Issues Found</span>
                      <span className={styles.issuesBadge}>8</span>
                    </div>

                    {ALL_ISSUES.map((issue, i) => (
                      <div key={i} className={styles.issueCard}>
                        <div className={styles.issueTop}>
                          <span className={styles.issueHeadline}>{issue.headline}</span>
                          <span className={`${styles.issueTag} ${styles[`issueTag--${issue.tagVariant}`]}`}>
                            {issue.tag}
                          </span>
                        </div>
                        <p className={styles.issueSubcopy}>{issue.subcopy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elle's bottom line — pinned to bottom of right column */}
                <div className={styles.elleCta}>
                  <p className={styles.elleCtaLabel}>Elle's bottom line</p>
                  <p className={styles.elleCtaSubcopy}>
                    This contract has 4 clauses that significantly favor the photographer. Before signing, consider having an attorney review the termination, liability, and arbitration sections.
                  </p>
                  <button className={styles.elleCtaBtn} onClick={scrollToPricing}>
                    Subscribe to speak to a lawyer
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={mkt.faqSection}>
          <div className={mkt.inner}>
            <div className={mkt.faqHeader}>
              <h2 className={mkt.faqHeading}>Frequently Asked Questions</h2>
              <button className={mkt.helpCenterBtn}>Help Center</button>
            </div>
            <Accordion items={ELLE_FAQ} />
          </div>
        </section>

        {/* ── BENEFITS OF ELLE ── */}
        <section className={mkt.benefits}>
          <div className={mkt.inner}>
            <div className={mkt.benefitsLeft}>
              <img
                src="/images/marketing-landing-page/person-using-laptop.png"
                alt="Person using laptop"
                className={mkt.benefitsImg}
              />
            </div>
            <div className={mkt.benefitsRight}>
              <h2 className={mkt.benefitsHeading}>Benefits of Elle</h2>
              <Accordion items={BENEFITS_FAQ} />
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className={mkt.pricing} ref={pricingRef}>
          <div className={mkt.inner}>
            <h2 className={mkt.pricingHeading}>
              Affordable plans for <em>every</em> need.
            </h2>
            <div className={mkt.pricingGrid}>
              <div className={mkt.pricingCard}>
                <span className={mkt.planName}>Personal &amp; Family</span>
                <p className={mkt.planDesc}>Legal services on unlimited number of personal legal issues. Legal services provided by attorneys with an average of 22 years of experience.</p>
                <div className={mkt.planPrice}>$35<span className={mkt.planPer}>+/mo</span></div>
                <button className={mkt.planCta}>Shop Plans</button>
              </div>
              <div className={mkt.pricingCard}>
                <span className={mkt.planName}>Small Business</span>
                <p className={mkt.planDesc}>Legal services on business bases, including document review, help collecting debts, on our behalf, and more.</p>
                <div className={mkt.planPrice}>$53.95<span className={mkt.planPer}>+/mo</span></div>
                <button className={mkt.planCta}>Shop Plans</button>
              </div>
              <div className={`${mkt.pricingCard} ${mkt.pricingCardEnterprise}`}>
                <span className={mkt.planName}>Enterprise</span>
                <p className={mkt.planDesc}>Legal and identity theft protection benefits designed to give your employees and their families a sense of security.</p>
                <div className={mkt.planPriceContact}>Contact for pricing</div>
                <button className={mkt.planCtaSecondary}>Learn more</button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
