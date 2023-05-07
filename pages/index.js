import Image from 'next/image'
import img from '../styles/result.jpg'

function Home() {
  return (
    <main className="main">
      <Image src={img} width={300} height={600}></Image>
    </main>
  )
}

export default Home
