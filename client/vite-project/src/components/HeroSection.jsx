import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <h1 className="col-span-full text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-center">Welcome To MyBlog</h1>
        
          <div className="col-span-full text-center">
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/90 mb-8 text-center">Start your writing journey — publish beautiful posts, connect with readers, and explore stories from creators around the world.</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:space-x-4 space-y-3 sm:space-y-0 justify-center">
              <a
                href="/write"
                className="inline-flex items-center justify-center rounded-lg bg-white text-indigo-700 font-semibold px-6 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition"
                aria-label="Write a blog"
              >
                Write a Blog
              </a>

              <a
                href="/read"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 text-white font-medium px-6 py-3 hover:bg-white/20 transition"
                aria-label="Read blogs"
              >
                Read a Blog
              </a>
            </div>
            
              <div className="mt-9 flex items-center justify-center space-x-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold">2.1k+</div>
                <div className="text-sm text-white/90">Active Writers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold">8.4k+</div>
                <div className="text-sm text-white/90">Published Posts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
