import { ContactButtons } from '../components/ContactButtons'
import { heroImage } from '../data/content'

export function Hero() {
  return (
    <main className="hero" id="top">
      <img className="hero-image" src={heroImage} alt="Arena X1 com pista, jogadores e telão no Brasília Game Festival 2026" width="1920" height="1080" />
      <div className="hero-shade" />
      <div className="speed-lines" aria-hidden="true" />
      <div className="hero-content">
        <span className="eyebrow">Mídia Kit 2026 · Brasília — DF</span>
        <h1><span>X1</span> Mario Kart<br />Live <em>Experience</em></h1>
        <p>A arena phygital que transforma seu evento em um espetáculo: karts reais, realidade aumentada e transmissão ao vivo.</p>
        <ContactButtons compact />
      </div>
      <a className="scroll-cue" href="#experiencia"><span>Conheça a experiência</span><i aria-hidden="true" /></a>
      <div className="hero-badge" aria-label="Atendimento em todo o Brasil">
        <strong>BR</strong><span>Atendimento<br />em todo o Brasil</span>
      </div>
    </main>
  )
}
