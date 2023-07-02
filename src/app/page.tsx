import HeroSection from '@/sectionLayouts/HeroSection/HeroSection'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <HeroSection/>
    </main>
  )
}
