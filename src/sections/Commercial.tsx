import { brandBenefits, mediaImage, mediaSpaces } from '../data/content'

export function Commercial() {
  return (
    <>
      <section className="section commercial" id="marcas" aria-labelledby="commercial-title">
        <div className="section-head reveal">
          <span className="eyebrow">Potencial comercial</span>
          <h2 id="commercial-title">Sua marca dentro do jogo.<br /><em>Não ao lado dele.</em></h2>
        </div>
        <div className="commercial-metrics reveal">
          <div><strong>+74%</strong><span>de fixação de marca vs. mídia tradicional</span></div>
          <div><strong>100%</strong><span>leads qualificados coletados na fila</span></div>
        </div>
        <div className="benefit-grid">
          {brandBenefits.map(([title, text], index) => (
            <article className="benefit-card reveal" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="media-showcase" aria-labelledby="media-title">
        <div className="media-visual reveal"><img src={mediaImage} alt="Mini outdoor e elementos publicitários posicionados na pista" loading="lazy" width="1920" height="1080" /><span>Visível a cada volta</span></div>
        <div className="media-copy reveal">
          <span className="eyebrow">Mídia OOH em movimento</span>
          <h2 id="media-title">A pista também é um <em>veículo de mídia.</em></h2>
          <p>Pontos publicitários estrategicamente posicionados são capturados pelas microcâmeras dos karts e amplificados no telão durante toda a operação.</p>
          <div className="media-list">
            {mediaSpaces.map(([title, text], index) => <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
