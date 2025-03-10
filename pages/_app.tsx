import type {AppProps} from 'next/app'
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";
import {AuthProvider, WithLoggedInAuthInfoProps, withRequiredAuthInfo} from "@propelauth/react";

interface EnrichedAppProps extends WithLoggedInAuthInfoProps, AppProps {

}
 function MyApp({Component, pageProps}: EnrichedAppProps) {
    return <Theme>
        <AuthProvider authUrl={process.env.NEXT_PUBLIC_PROPEL_AUTH_URL as string}>
            <Component {...pageProps} />
        </AuthProvider>
    </Theme>
}

export default MyApp