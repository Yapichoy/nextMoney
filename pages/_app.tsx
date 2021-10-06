import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { makeStore } from '../redux'
import withRedux from "next-redux-wrapper";
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
  </div>
  )  
  
}
export default withRedux(makeStore)(MyApp)
