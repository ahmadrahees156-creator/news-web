import { useState } from 'react'
import NewsList from '../components/NewsList'

function Home() {
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  const handleSearch = () => {
    setQuery(search)
    setCategory('')
  }

  const handleCategory = (selectedCategory) => {
    setCategory(selectedCategory)
    setQuery('')
    setSearch('')
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8]">

      {/* Hero Section */}

      <section className="bg-[#3b2f2f] text-[#f5f1e8] px-4 sm:px-6 py-10 sm:py-12">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-between border-b border-[#c49a6c]/30 pb-3 mb-8">

            <p className="text-[#c49a6c] text-xs sm:text-sm font-bold tracking-[0.25em]">
              NEWSROOM
            </p>

            <p className="text-[#d6c8b8] text-xs sm:text-sm">
              TODAY'S EDITION
            </p>

          </div>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">

            <div>

              <p className="text-[#c49a6c] text-sm font-semibold mb-3">
                📰 STAY INFORMED
              </p>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">

                THE WORLD

                <span className="block text-[#c49a6c]">
                  IN FOCUS.
                </span>

              </h2>

            </div>

            <div className="md:border-l md:border-[#c49a6c]/30 md:pl-8">

              <p className="text-[#d6c8b8] text-base sm:text-lg leading-7">
                Latest stories, important events and
                updates from around the world — all
                in one place.
              </p>

              <div className="flex items-center gap-2 mt-5">

                <span className="w-2 h-2 rounded-full bg-[#c49a6c]"></span>

                <span className="text-xs font-semibold tracking-widest text-[#c49a6c]">
                  LIVE NEWS FEED
                </span>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-between border-t border-[#c49a6c]/30 mt-8 pt-4">

            <span className="text-xs sm:text-sm text-[#9f9183]">
              STORIES • BUSINESS • TECHNOLOGY • SPORTS
            </span>

            <span className="hidden sm:block text-[#c49a6c] text-sm font-semibold">
              24 / 7
            </span>

          </div>

        </div>

      </section>


      {/* Search Section */}

      <section className="max-w-6xl mx-auto px-4 -mt-7 relative z-10">

        <div className="bg-[#fffdf8] rounded-2xl shadow-lg p-4 border border-[#e5d8c8]">

          <div className="flex flex-col sm:flex-row gap-3">

            <div className="flex-1 relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9a8978] text-xl">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search latest news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                className="w-full border border-[#d8c9b8] bg-[#faf7f0] rounded-xl px-12 py-3 text-[#3b2f2f] outline-none focus:ring-2 focus:ring-[#8b5e34]"
              />

            </div>

            <button
              onClick={handleSearch}
              className="bg-[#8b5e34] text-white px-7 py-3 rounded-xl font-semibold hover:bg-[#704825] transition"
            >
              Search
            </button>

          </div>

        </div>

      </section>


      {/* Categories */}

      <section className="max-w-6xl mx-auto px-4 pt-10">

        <h3 className="text-xl font-bold mb-4 text-[#3b2f2f]">
          Explore Categories
        </h3>

        <div className="flex flex-wrap gap-2 sm:gap-3">

          <button
            onClick={() => handleCategory('')}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-medium transition ${
              category === ''
                ? 'bg-[#3b2f2f] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
            🏠 All
          </button>

          <button
            onClick={() => handleCategory('business')}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-medium transition ${
              category === 'business'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
            💰 Business
          </button>

          <button
            onClick={() => handleCategory('technology')}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-medium transition ${
              category === 'technology'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
            💻 Technology
          </button>

          <button
            onClick={() => handleCategory('sports')}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-medium transition ${
              category === 'sports'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
            ⚽ Sports
          </button>

          <button
            onClick={() => handleCategory('entertainment')}
            className={`px-4 sm:px-5 py-2.5 rounded-full font-medium transition ${
              category === 'entertainment'
                ? 'bg-[#8b5e34] text-white'
                : 'bg-[#fffdf8] text-[#5c4b3e] border border-[#dfd1c0] hover:bg-[#e9dfd2]'
            }`}
          >
            🎬 Entertainment
          </button>

        </div>

      </section>


      {/* News Section */}

      <section className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">

          <div>

            <p className="text-[#8b5e34] font-semibold text-sm">
              {category ? category.toUpperCase() : 'LATEST'}
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#3b2f2f]">
              {query
                ? `Results for "${query}"`
                : 'Latest News'}
            </h2>

          </div>

          <span className="text-[#8b7a6a]">
            📰 News
          </span>

        </div>

        <NewsList
          search={query}
          category={category}
        />

      </section>


      {/* About Section */}

      <section
        id="about"
        className="bg-[#fffdf8] border-t border-[#e5d8c8] px-4 sm:px-6 py-14 sm:py-16"
      >

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div>

              <p className="text-[#8b5e34] font-semibold text-sm tracking-widest mb-3">
                ABOUT NEWSROOM
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#3b2f2f] leading-tight">

                News that keeps you

                <span className="text-[#8b5e34]">
                  {' '}informed.
                </span>

              </h2>

              <p className="text-[#6b5b4d] leading-7 mt-5">
                NewsRoom is a simple and responsive news platform designed
                to bring the latest stories together in one place. Explore
                different categories, search for specific topics and open
                articles to read more.
              </p>

              <p className="text-[#6b5b4d] leading-7 mt-4">
                The website uses React.js, Axios and a news API to fetch
                and display current news in an easy-to-use interface.
              </p>

            </div>


            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#f5f1e8] rounded-2xl p-6 border border-[#e5d8c8]">

                <p className="text-3xl mb-3">
                  🔎
                </p>

                <h3 className="font-bold text-[#3b2f2f]">
                  Easy Search
                </h3>

                <p className="text-sm text-[#8b7a6a] mt-2">
                  Find news by searching for any topic.
                </p>

              </div>


              <div className="bg-[#f5f1e8] rounded-2xl p-6 border border-[#e5d8c8]">

                <p className="text-3xl mb-3">
                  📰
                </p>

                <h3 className="font-bold text-[#3b2f2f]">
                  Latest Stories
                </h3>

                <p className="text-sm text-[#8b7a6a] mt-2">
                  Stay updated with fresh news.
                </p>

              </div>


              <div className="bg-[#f5f1e8] rounded-2xl p-6 border border-[#e5d8c8]">

                <p className="text-3xl mb-3">
                  📱
                </p>

                <h3 className="font-bold text-[#3b2f2f]">
                  Responsive
                </h3>

                <p className="text-sm text-[#8b7a6a] mt-2">
                  Works across mobile, tablet and desktop.
                </p>

              </div>


              <div className="bg-[#f5f1e8] rounded-2xl p-6 border border-[#e5d8c8]">

                <p className="text-3xl mb-3">
                  ⚡
                </p>

                <h3 className="font-bold text-[#3b2f2f]">
                  Fast Experience
                </h3>

                <p className="text-sm text-[#8b7a6a] mt-2">
                  Clean interface with quick navigation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Home