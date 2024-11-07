import type {AppProps} from 'next/app'
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";

export default function MyApp({Component, pageProps}: AppProps) {
    return <Theme>
        <Component {...pageProps} />
    </Theme>
}