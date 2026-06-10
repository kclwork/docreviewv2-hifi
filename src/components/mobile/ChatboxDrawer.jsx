import { useEffect, useRef, useState } from 'react'
import styles from './ChatboxDrawer.module.css'

const ELLE_DEFAULT = "Hi! I can help you review and understand your document. Ask me about specific clauses, rights, or anything you're unsure about!"


export default function ChatboxDrawer({
  open,
  onClose,
  step,
  submittedQuery,
  onSubmitQuery,
  email,
  emailError,
  onEmailChange,
  onSubmitEmail,
  elleResponse,
  onSubscribeClick,
}) {
  const [draft, setDraft] = useState('')
  const messagesRef = useRef(null)

  const showEmailGate = step === 'email-gate'
  const showElleResponse = step === 'elle-response'
  const inputDisabled = !!submittedQuery

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [submittedQuery, showElleResponse, showEmailGate])

  function handleQuerySubmit(e) {
    e.preventDefault()
    const trimmed = draft.trim()
    if (!trimmed || inputDisabled) return
    onSubmitQuery(trimmed)
    setDraft('')
  }

  const queryCountLabel = submittedQuery ? '0 queries' : '1 query'

  return (
    <div
      className={`${styles.drawer} ${open ? styles.drawerOpen : styles.drawerClosed} ${showEmailGate ? styles.drawerEmailGate : ''}`}
      role="dialog"
      aria-label="Chat with Elle"
      aria-hidden={!open}
    >
      <div className={styles.header}>
        <span className={styles.headerLeft}>
          <span className={styles.iconCircle} aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.headerTitle}>Chat with Elle</span>
        </span>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.body}>
        <div
          ref={messagesRef}
          className={`${styles.messages} ${showEmailGate ? styles.messagesBlurred : ''}`}
          aria-hidden={showEmailGate}
        >
          <div className={styles.bubbleElle}>{ELLE_DEFAULT}</div>

          {submittedQuery && (
            <div className={styles.bubbleUser}>{submittedQuery}</div>
          )}

          {showElleResponse && elleResponse && (
            <div className={styles.bubbleElle}>{elleResponse}</div>
          )}
        </div>

        {showEmailGate && (
          <div className={styles.gateOverlay} role="dialog" aria-label="Enter email to receive answer">
            <div className={styles.gateCard}>
              <h3 className={styles.gateHeadline}>Elle's got your answer.</h3>
              <p className={styles.gateSubtext}>
                Enter your email and Elle will walk you through what this means for you.
              </p>

              <form className={styles.emailForm} onSubmit={onSubmitEmail} noValidate>
                <div className={`${styles.emailInputRow} ${emailError ? styles.emailInputRowError : ''}`}>
                  <input
                    type="email"
                    className={styles.emailInput}
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => onEmailChange(e.target.value)}
                    aria-invalid={!!emailError}
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className={styles.emailSubmit}
                    aria-label="Submit email"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                {emailError && (
                  <p className={styles.emailError}>
                    <span aria-hidden="true">ⓘ</span> {emailError}
                  </p>
                )}
              </form>

              <p className={styles.gateDisclaimer}>
                By signing up, you agree to receive emails from LegalShield.{' '}
                <span className={styles.gateLink}>View our Privacy Policy</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {!showEmailGate && (
      <div className={styles.footer}>
        <form
          className={`${styles.inputRow} ${inputDisabled ? styles.inputRowDisabled : ''}`}
          onSubmit={handleQuerySubmit}
        >
          <input
            type="text"
            className={styles.input}
            placeholder="Ask a question about your contract"
            aria-label="Ask a question about your contract"
            value={inputDisabled ? '' : draft}
            onChange={(e) => setDraft(e.target.value)}
            disabled={inputDisabled}
          />
          <button
            type="submit"
            className={styles.submitBtn}
            aria-label="Send question"
            disabled={inputDisabled || !draft.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        <p className={styles.freeAccess}>
          <span className={styles.freeIcon} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 21h20L12 2z" fill="currentColor" />
              <path
                d="M12 10v4M12 17.5v.5"
                stroke="var(--color-neutral-black)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span>
            Free Access: You have <strong>{queryCountLabel}</strong> available.
            {showElleResponse && (
              <>
                {' '}
                <button
                  type="button"
                  className={styles.subscribeLink}
                  onClick={onSubscribeClick}
                >
                  Subscribe to a plan
                </button>{' '}
                to get unlimited queries.
              </>
            )}
          </span>
        </p>

        <p className={styles.finePrint}>
          Your documents are securely encrypted. This answer was generated by AI and is for
          informational purposes only. It does not constitute legal advice.
        </p>
      </div>
      )}
    </div>
  )
}
