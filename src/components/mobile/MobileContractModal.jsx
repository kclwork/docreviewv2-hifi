import { useEffect } from 'react'
import styles from './MobileContractModal.module.css'

export default function MobileContractModal({ fileName, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return (
    <div
      className={styles.scrim}
      role="dialog"
      aria-modal="true"
      aria-label={fileName}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={styles.modal}>
        <header className={styles.header}>
          <span className={styles.title}>{fileName}</span>
          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close preview"
            onClick={onClose}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        <div className={styles.body}>
          <p className={styles.docTitle}>Wedding Photography Services Agreement</p>
          <p className={styles.docBody}>
            This Photography Services Agreement ("Agreement") is entered into as of the date of signature between [PHOTOGRAPHER NAME] ("Photographer") and [CLIENT NAME] ("Client"). Both parties agree to the terms set forth herein.
          </p>

          <p className={styles.docSection}>1. Services</p>
          <p className={styles.docBody}>
            Photographer agrees to provide wedding photography services for the event described herein. Coverage includes up to eight (8) hours of continuous photography at the venue and agreed-upon locations. Additional coverage hours are available at Photographer's standard hourly rate as set forth in Schedule A.
          </p>

          <p className={styles.docSection}>2. Payment Terms</p>
          <p className={styles.docBody}>
            Client agrees to pay a non-refundable retainer of fifty percent (50%) of the total fee upon execution of this Agreement. The remaining balance shall be due no later than fourteen (14) days prior to the event date. Failure to remit final payment may result in cancellation of services without refund of any amounts paid. Photographer reserves the right to adjust pricing with thirty (30) days' notice, and continued engagement constitutes acceptance of revised terms.
          </p>

          <p className={styles.docSection}>3. Image Delivery</p>
          <p className={styles.docBody}>
            Photographer will deliver a minimum of four hundred (400) edited digital images within sixty (60) days of the event. Images will be provided via a private online gallery. Print rights are granted to Client for personal use only; commercial use requires a separate licensing agreement. Raw or unedited files will not be delivered under any circumstances.
          </p>

          <p className={styles.docSection}>4. Cancellation Policy</p>
          <p className={styles.docBody}>
            In the event Client cancels this Agreement for any reason, the retainer shall be forfeited in its entirety. If Photographer cancels, Client will receive a full refund of all amounts paid. Photographer shall not be liable for cancellations resulting from circumstances beyond reasonable control, including but not limited to acts of God, illness, or force majeure events.
          </p>

          <p className={styles.docSection}>5. Limitation of Liability</p>
          <p className={styles.docBody}>
            Photographer's total liability to Client shall not exceed the total fees paid under this Agreement. In no event shall Photographer be liable for any indirect, incidental, special, or consequential damages arising out of or relating to this Agreement, even if Photographer has been advised of the possibility of such damages. Client waives the right to seek relief through class action or jury trial.
          </p>

          <p className={styles.docSection}>6. Intellectual Property</p>
          <p className={styles.docBody}>
            All photographs produced under this Agreement remain the exclusive intellectual property of Photographer. Client is granted a limited, non-exclusive license to use the delivered images for personal purposes only. Photographer retains the right to use any images for portfolio, marketing, or promotional purposes unless Client provides written objection within thirty (30) days of delivery.
          </p>
        </div>
      </div>
    </div>
  )
}
