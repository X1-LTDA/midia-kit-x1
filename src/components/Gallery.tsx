import { useEffect, useState } from 'react'
import { gallery } from '../data/content'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((active + 1) % gallery.length)
      if (event.key === 'ArrowLeft') setActive((active - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="section gallery-section" id="galeria" aria-labelledby="gallery-title">
      <div className="section-head reveal">
        <span className="eyebrow">Registros reais</span>
        <h2 id="gallery-title">A ativação <em>em ação</em></h2>
        <p>Público, gameplay, estrutura e ambientação registrados no Brasília Game Festival 2026.</p>
      </div>
      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <button className={`gallery-item item-${index + 1} reveal`} key={image.src} type="button" onClick={() => setActive(index)} aria-label={`Ampliar: ${image.title}`}>
            <img src={image.src} alt={image.alt} loading="lazy" width="1920" height="1080" />
            <span>{image.title}<b aria-hidden="true">↗</b></span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada" onClick={() => setActive(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="Fechar galeria">×</button>
          <button className="lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + gallery.length) % gallery.length) }} aria-label="Imagem anterior">‹</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].alt} />
            <figcaption>{gallery[active].title} <span>{active + 1} / {gallery.length}</span></figcaption>
          </figure>
          <button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % gallery.length) }} aria-label="Próxima imagem">›</button>
        </div>
      )}
    </section>
  )
}
