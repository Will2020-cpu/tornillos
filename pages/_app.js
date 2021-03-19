import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

config.autoAddCss = false


function MyApp({ Component, pageProps, router }) {

  return (
    <>
    <TopProgressBar/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
