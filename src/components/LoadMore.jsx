import { useEffect, useState } from 'react'
import ReactBlogCard from '@/components/ReactBlogCard'
import BlogPostsSkeleton from '@/components/BlogPostsSkeleton'

export default function LoadMore ({ wpUrl }) {
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [isLimit, setIsLimit] = useState(false)
  const [posts, setPosts] = useState([])

  const handleClick = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const res = await fetch(wpUrl + `/posts?_embed&_fields=title,excerpt,content,slug,_links&per_page=6&page=${page}`)
      const totalPages = res.headers.get('X-WP-TotalPages')
      if (page.toString() === totalPages) setIsLimit(true)
      const data = await res.json()
      setPosts(prev => [...prev, ...data])
      setIsLoading(false)
    }
    fetchPosts()
  }, [page])

  return (
    <>
      <div className="grid max-w-screen-xl gap-12 m-auto mb-12 md:grid-cols-3">
        {
          posts.map((post, index) => (
            <ReactBlogCard
              key={index}
              title={post.title.rendered}
              excerpt={post.excerpt.rendered}
              img={post._embedded['wp:featuredmedia'][0].link}
              caption={post._embedded['wp:featuredmedia'][0].alt_text}
              author={post._embedded.author[0].name}
              authorSlug={post._embedded.author[0].slug}
              content={post.content.rendered}
              slug={post.slug}
            />
          ))
        }

        {isLoading && <BlogPostsSkeleton />}
      </div>

      {!isLimit && <button className="block mx-auto underline text-primary hover:text-dark-primary" onClick={handleClick}>Ver más</button>}
    </>
  )
}
