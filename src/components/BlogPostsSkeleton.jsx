export default function BlogPostsSkeleton () {
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
