import { contact, contactLinks } from '../data/content'

type ContactButtonsProps = { compact?: boolean }

export function ContactButtons({ compact = false }: ContactButtonsProps) {
  return (
    <div className={compact ? 'contact-buttons compact' : 'contact-buttons'}>
      <a className="button primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
        <span>WhatsApp</span><b aria-hidden="true">↗</b>
      </a>
      <a className="button secondary" href={contactLinks.email}>
        <span>{compact ? 'E-mail' : contact.email}</span><b aria-hidden="true">↗</b>
      </a>
    </div>
  )
}
