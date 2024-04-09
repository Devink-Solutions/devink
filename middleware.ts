import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['es', 'en', 'pt'],

  defaultLocale: 'es',
})

export const config = {
  matcher: ['/', '/(es|en/pt)/:path*'],
}
