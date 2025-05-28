import { redirect } from 'next/navigation'

export default async function BlogSlugPage({ params }: { params: { slug: string } }) {
  // Redirect to home page since blog is not ready
  redirect('/')
}
