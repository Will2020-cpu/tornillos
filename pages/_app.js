import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false


function MyApp({ Component, pageProps, router }) {

  return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
  )
}

export default MyApp
