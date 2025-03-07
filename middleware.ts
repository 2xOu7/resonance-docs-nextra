// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // This string is "Basic base64encoded(username:password)"
    const basicAuth = req.headers.get('authorization')

    // If no Authorization header exists, prompt for credentials
    if (!basicAuth) {
        return new NextResponse('Auth required', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Protected"'
            }
        })
    }

    // Check the user credentials
    const authValue  = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    const validUser     = process.env.BASIC_AUTH_USER
    const validPassword = process.env.BASIC_AUTH_PASS

    // If credentials are invalid, return 401
    if (user !== validUser || pwd !== validPassword) {
        return new NextResponse('Invalid credentials', {
            status: 401,
            headers: {
                'WWW-Authenticate': 'Basic realm="Protected"'
            }
        })
    }

    // If everything checks out, continue to the requested route
    return NextResponse.next()
}
