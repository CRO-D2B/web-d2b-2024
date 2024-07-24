/* eslint no-unused-vars: 0 */
import { Suspense, useEffect, useState } from 'react'
import ReactBlogCard from '@/components/ReactBlogCard'
import userSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return { totalPages: res.headers.get('X-WP-TotalPages'), postsData: data }
}

const readingTime = (text) => {
  return Math.ceil(text.split(' ').length / 200) + ' minutos'
}

export default function LoadMore ({ wpUrl }) {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])

  return (
    <>
      <div className="grid max-w-screen-xl gap-12 m-auto md:grid-cols-3">
        <Suspense fallback={<CardSkeleton />}>
          <Posts posts={posts} wpUrl={wpUrl} page={page} update={setPosts} />
        </Suspense>
      </div>

      <button className="block mx-auto underline text-primary hover:text-dark-primary" onClick={() => setPage(prev => prev + 1)}>Ver más</button>
    </>
  )
}

function Posts ({ posts, wpUrl, page, update }) {
  const { data, error, isLoading } = userSWR(wpUrl + `/posts?_embed&_fields=title,excerpt,content,slug,_links&per_page=6&_page=${page}`, fetcher, { suspense: true })
  const { postsData, totalPages } = data
  useEffect(() => {
    update(prev => [...prev, ...postsData])
  }, [page])

  // const { data, error, isLoading } = userSWR(wpUrl + `/posts?_embed&_fields=title,excerpt,content,slug,_links&per_page=6&_page=${page}`, fetcher, { suspense: true })

  // useEffect(() => setPosts(prev => [...prev, ...postsData]), [postsData])

  return posts.map((post, index) => (
    <ReactBlogCard
      key={index}
      title={post.title.rendered}
      excerpt={post.excerpt.rendered}
      img={post._embedded['wp:featuredmedia'][0].link}
      caption={post._embedded['wp:featuredmedia'][0].alt_text}
      author={post._embedded.author[0].name}
      authorSlug={post._embedded.author[0].slug}
      readingTime={readingTime(post.content.rendered)}
      slug={post.slug}
    />
  ))
}

function CardSkeleton () {
  return (
    Array(6).fill(null)
      .map((_, index) =>
        (
        <div key={index} className="flex flex-col gap-8 p-6 border-2 rounded-lg h-[508px] border-neutral-200">
          <div className="w-full h-52 bg-gray-300 rounded-lg animate-pulse animate-delay-[-800ms]"></div>
          <div className="w-full h-8 bg-gray-300 rounded-lg animate-pulse animate-delay-[-600ms]"></div>
          <div className="w-3/5 h-8 bg-gray-300 rounded-lg animate-pulse animate-delay-[-400ms]"></div>
          <div className="w-4/5 h-8 bg-gray-300 rounded-lg animate-pulse animate-delay-[-200ms]"></div>
        </div>
        )
      )
  )
}
