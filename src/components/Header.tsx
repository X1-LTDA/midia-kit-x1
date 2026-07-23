import { useEffect, useState } from 'react'
import { contactLinks } from '../data/content'

const links = [
  ['experiencia', 'Experiência'],
  ['marcas', 'Para marcas'],
  ['formatos', 'Formatos'],
  ['galeria', 'Galeria'],
  ['contato', 'Contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight
      setProgress(available > 0 ? (window.scrollY / available) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className="site-header">
      <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <a className="brand" href="#top" aria-label="X1 Mario Kart Live Experience — início">
        <span>X1</span><small>Live Experience</small>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        <span className="sr-only">Abrir menu</span>
        <i /><i />
      </button>
      <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">Falar com a X1</a>
      </nav>
    </header>
  )
}
