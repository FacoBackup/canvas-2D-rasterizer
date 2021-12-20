import '../styles/globals.css'
import {Fabric} from "@f-ui/core";
import styles from '../styles/Home.module.css'
function MyApp({Component, pageProps}) {
    return (
        <Fabric theme={'light'} className={styles.wrapper} >
            <Component {...pageProps} />
        </Fabric>
    )
}

export default MyApp
