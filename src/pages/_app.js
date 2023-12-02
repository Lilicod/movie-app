import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import SmNavbar from '@/components/navbar/SmNavbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <><Navbar /><Component {...pageProps} /><Footer/> <SmNavbar/> </>
)
}
