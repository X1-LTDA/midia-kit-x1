import { mechanics, stats } from '../data/content'

export function Overview() {
  return (
    <>
      <section className="section intro" id="experiencia" aria-labelledby="intro-title">
        <div className="intro-copy reveal">
          <span className="eyebrow">Físico + digital</span>
          <h2 id="intro-title">Uma corrida real.<br /><em>Um espetáculo digital.</em></h2>
        </div>
        <div className="intro-text reveal">
          <p className="lead">Quatro pilotos disputam corridas em uma pista cenográfica real. Microcâmeras nos karts transmitem tudo, em tempo real e com realidade aumentada, para um telão de LED.</p>
          <p>Mais do que um jogo, é um ímã de público: supera a passividade de feiras e congressos, gera filas espontâneas, espectadores e compartilhamentos orgânicos.</p>
        </div>
        <div className="stats reveal" aria-label="Números da experiência">
          {stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>
      <section className="section mechanics" aria-labelledby="mechanics-title">
        <div className="section-head reveal">
          <span className="eyebrow">Como funciona</span>
          <h2 id="mechanics-title">Da largada ao <em>telão</em></h2>
        </div>
        <div className="mechanics-grid">
          {mechanics.map(([number, title, text]) => (
            <article className="mechanic-card reveal" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
