import type {AppProps} from 'next/app'
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";
import {AuthProvider} from "@propelauth/nextjs/client";

export default function MyApp({Component, pageProps}: AppProps) {
    return <AuthProvider authUrl={process.env.NEXT_PUBLIC_AUTH_URL as string}>
        <Theme>
            <Component {...pageProps} />
        </Theme>
    </AuthProvider>
}