import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { makeStore } from '../redux'
import withRedux from "next-redux-wrapper";
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useEffect} from "react";
import {fetchAccount} from "../redux/slices/billSlice";
import {useAsyncAction} from "../hooks/useAction";
import {AccountType} from "../redux/utils/types";
import DateRange from "../components/DateRange";

function MyApp({ Component, pageProps }: AppProps) {
    const getAccount = useAsyncAction<void, AccountType>(fetchAccount);
    useEffect(()=> {
        getAccount();
    }, [])
  return (
    <div className="App">
      <div className='wrapper'>
          <Header/>
          <DateRange />
          <Component {...pageProps} />
          <Footer/>
      </div>
  </div>
  )  
  
}
export default withRedux(makeStore)(MyApp)
