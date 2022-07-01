import Head from 'next/head'
import Topnav from '../components/navbar/Topnav'
import Script from 'next/script'
import '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/navbar/Footer'
import CustomerLikes from '../components/likedcollection/CustomerLikes'
import Product from '../components/Products/Product'
import ProductDetails from '../components/customers/ProductDetails'
import NavFoot from '../components/navbar/NavFoot'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Myntra responsive UI</title>
        <meta name="description" content="Generated by create next app" />
        <script src="https://kit.fontawesome.com/79dfc2e9eb.js" crossOrigin="anonymous" async></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topnav />
      <main >
        <div className='flex items-start justify-start m-3'>
          <Link href='/' >
            <a>Home</a>
          </Link>/
          <Link href='/' >
            <a>Clothing</a>
          </Link>/
          <Link href='/' >
            <a>Men Cloting</a>
          </Link>/
          <Link href='/' >
            <a>TShirts</a>
          </Link>
        </div>
        <Product />
        <hr />
        <ProductDetails />
        <CustomerLikes />

      </main>
      <footer>
        <Footer />
      </footer>
      <NavFoot />
    </div>
  )
}
