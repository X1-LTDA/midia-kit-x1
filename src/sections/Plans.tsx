import { operationImage, plans, requirements } from '../data/content'

export function Plans() {
  return (
    <>
      <section className="section plans-section" id="formatos" aria-labelledby="plans-title">
        <div className="section-head reveal">
          <span className="eyebrow">Formatos de contratação</span>
          <h2 id="plans-title">Uma estrutura para <em>cada desafio.</em></h2>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? 'plan-card featured reveal' : 'plan-card reveal'} key={plan.name}>
              {plan.featured && <span className="plan-label">Experiência completa</span>}
              <h3>{plan.name}</h3><strong>{plan.price}</strong>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href="#contato">Solicitar proposta <b aria-hidden="true">↗</b></a>
            </article>
          ))}
        </div>
        <p className="plan-note reveal">Empresa sediada em Brasília — DF. Custos de transporte para outras cidades sob consulta. Valores sujeitos a alteração conforme escopo, duração e local do evento.</p>
      </section>
      <section className="operation" aria-labelledby="operation-title">
        <div className="operation-image reveal"><img src={operationImage} alt="Equipe X1 reposicionando um kart durante a corrida" loading="lazy" width="1920" height="1080" /></div>
        <div className="operation-copy reveal">
          <span className="eyebrow">Operação completa</span>
          <h2 id="operation-title">Estrutura, suporte e <em>ritmo de pista.</em></h2>
          <p>Em caso de acidentes, o staff reorganiza os karts em segundos. A equipe pode reunir operador de transmissão, operador de pista e manutenção, coordenador de fila e captação de leads e segurança.</p>
          <dl>{requirements.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
        </div>
      </section>
    </>
  )
}
