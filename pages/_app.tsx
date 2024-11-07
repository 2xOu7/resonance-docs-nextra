import type { AppProps } from 'next/app'
import "@radix-ui/themes/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}