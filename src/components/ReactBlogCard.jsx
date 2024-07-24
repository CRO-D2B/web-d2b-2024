import Arrow from '@/icons/arrow'

export default function ReactBlogCard ({ title, excerpt, img, caption, author, authorSlug, readingTime, slug }) {
  return (
    <article className="flex flex-col w-full h-full overflow-hidden border-2 rounded-lg border-neutral-200 bg-accent-purple">
      <a className="group peer" href={`/blog/${slug}`}>
        <div className="overflow-hidden bg-white rounded-b-lg">
          <img
            className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-105"
            src={img}
            alt={caption}
            loading="lazy"
          />
        </div>
      </a>

      <a className="group peer-hover:[&_h3]:text-primary" href={`/blog/${slug}`}>
        <header className="p-4">
          <h3 className="text-lg font-bold text-pretty text-neutral-800 group-hover:text-primary">
            {title}
          </h3>
        </header>
      </a>

      <div className="px-4 mb-3">
        <div className="text-clamp-4 [&>p]:text-neutral-600" dangerouslySetInnerHTML={{ __html: excerpt }} />
      </div>

      <footer className="content-end flex-1 px-3 pb-6">
        <div className="mb-3 text-sm">
          <a
            className="font-semibold text-primary/80 hover:text-primary"
            href={`/blog/autor/${authorSlug}`}
          >
            {author}
          </a>
          <span> - Lectura: {readingTime}</span>
        </div>
        <a
          className="flex justify-center w-full gap-2 px-6 py-3 font-bold bg-white border-2 rounded-lg text-primary border-primary md:w-fit hover:bg-accent"
          href={`/blog/${slug}`}>Leer más <Arrow size={24} /></a>
      </footer>
    </article>
  )
}
