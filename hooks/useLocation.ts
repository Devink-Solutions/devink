import { usePathname } from 'next/navigation'

const useLocation = () => {
  const pathname = usePathname()
  if (pathname.length >= 3) return pathname.slice(1, 3)
  return {
    pathname,
  }
}

export default useLocation
