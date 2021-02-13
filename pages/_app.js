import '../styles/globals.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {GeneralProvider} from '../contexts/general'

function MyApp({ Component, pageProps }) {
    return(
            <GeneralProvider>
                <Component {...pageProps} />
            </GeneralProvider>
        )
    }
    
export default MyApp
    