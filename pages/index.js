import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Amet minim nisi est consequat ad amet enim. Officia excepteur ex labore occaecat tempor culpa est cupidatat. Esse labore exercitation exercitation adipisicing quis magna ex ea incididunt nostrud deserunt ea nisi.</p>
      <Link href="/people">See People List</Link>
    </div>
  )
}
