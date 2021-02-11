import '../styles/globals.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {SearchProvider} from '../contexts/search'

function MyApp({ Component, pageProps }) {
    return(
            <SearchProvider>
                <Component {...pageProps} />
            </SearchProvider>
        )
    }
    
export default MyApp
    