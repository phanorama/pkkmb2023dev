import 'next/link'
import Navbar from './Header/Navbar/navbar.tsx';
import Footer from './Footer/Footer.tsx';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!asdasdasd
      </h1>
      <Footer />
    </div>
  )
}
