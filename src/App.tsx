import { useEffect } from 'react'
import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { Hero } from './sections/Hero'
import { Overview } from './sections/Overview'
import { Commercial } from './sections/Commercial'
import { Plans } from './sections/Plans'
import { Contact } from './sections/Contact'

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#experiencia">Pular para o conteúdo</a>
      <Header />
      <Hero />
      <Overview />
      <Commercial />
      <Plans />
      <Gallery />
      <Contact />
    </>
  )
}
