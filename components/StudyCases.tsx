import { getStudyCasesBlog } from '@/app/ghost/studyCasesBlogs'
import StudyCases from './StudyCases.client'
export default async function StudyCasesComponent({ locale }: { locale: string }) {
  const blogPosts = await getStudyCasesBlog(locale)

  if (!blogPosts) return null

  return <StudyCases blogPosts={blogPosts} locale={locale} />
}
