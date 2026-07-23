import { ContactButtons } from '../components/ContactButtons'
import { contact, contactLinks } from '../data/content'

export function Contact() {
  return (
    <>
      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-track" aria-hidden="true" />
        <div className="contact-copy reveal">
          <span className="eyebrow">Pronto para a largada?</span>
          <h2 id="contact-title">Leve o X1 para o <em>seu evento.</em></h2>
          <p>Transforme seu stand no ponto mais movimentado do evento. Entre em contato e receba uma proposta personalizada.</p>
          <ContactButtons />
        </div>
        <aside className="contact-card reveal" aria-label="Contatos comerciais">
          <span>X1 · Comercial</span>
          <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer"><small>WhatsApp</small><strong>{contact.whatsapp}</strong></a>
          <a href={contactLinks.email}><small>E-mail</small><strong>{contact.email}</strong></a>
          <a href={contactLinks.instagram} target="_blank" rel="noreferrer"><small>Instagram</small><strong>{contact.instagram}</strong></a>
          <p>Brasília — DF<br />Atendimento em todo o Brasil<br />Frete sob consulta</p>
        </aside>
      </section>
      <footer>
        <a className="brand footer-brand" href="#top"><span>X1</span><small>Live Experience</small></a>
        <p>Mario Kart Live Experience · Mídia Kit 2026</p>
        <nav aria-label="Links do rodapé"><a href="#experiencia">Experiência</a><a href="#formatos">Formatos</a><a href="#contato">Contato</a></nav>
      </footer>
      <a className="floating-whatsapp" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com a X1 pelo WhatsApp"><span>WhatsApp</span><b aria-hidden="true">↗</b></a>
    </>
  )
}
