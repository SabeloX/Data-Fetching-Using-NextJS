import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Amet minim nisi est consequat ad amet enim. Officia excepteur ex labore occaecat tempor culpa est cupidatat. Esse labore exercitation exercitation adipisicing quis magna ex ea incididunt nostrud deserunt ea nisi.</p>
      <Link href="/people">
        <a className={styles.button}>
          See People List
        </a>
      </Link>
    </div>
  )
}
