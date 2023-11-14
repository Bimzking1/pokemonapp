import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '/components/navbar'
import Content from '/components/content'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Navbar/>
      <Content/>
    </div>
  )
}
