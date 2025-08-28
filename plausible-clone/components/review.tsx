import Image from "next/image"
import Link from "next/link"

export default function Review() {
  return (
    <div className="py-6 overflow-hidden bg-white md:py-8 lg:py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">People ❤️ Plausible</h2>
        <p className="max-w-3xl mx-auto mt-3 text-xl text-center text-gray-500 sm:mt-4">
          Plausible is built for scale and can serve sites with hundreds of millions of monthly visitors. Thousands of
          sites, startups and some of the world&apos;s leading brands have already made the switch from Google Analytics
          and other services.
        </p>

        <div className="pb-12 mt-10 bg-white sm:pb-16">
          <div className="relative w-full">
            <div className="mx-auto">
              <dl className="bg-white rounded-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium text-gray-500 leading-6">Paying subscribers</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">15k</dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium text-gray-500 leading-6">Tracked pageviews</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">173B</dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium text-gray-500 leading-6">Uptime (Last 90 days)</dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">99.99%</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="md:grid gap-4 grid-cols-3">
          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/cyrusshepard" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/cyrusshepard.jpg"
                    alt="Cyrus Shepard"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">Cyrus Shepard</div>
                    <div className="text-xs text-gray-500">@cyrusshepard</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://twitter.com/cyrusshepard/status/1714380470862131344"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                Using GA4 + simultaneously testing several &quot;simpler&quot; alternatives. 100% favorite so far is
                Plausible.
                <br />
                <br />
                Not free/not a ton of bells and whistles, but SOOOO easy to use (for clients too) and the data is near
                real-time. Good solution for ~70% of websites that have trouble with GA4.
              </div>
            </div>
          </div>

          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/Prezly" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/Prezly.jpg"
                    alt="Prezly"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">Prezly</div>
                    <div className="text-xs text-gray-500">@Prezly</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://twitter.com/Prezly/status/1566772185712267266"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                We are super excited to announce that Prezly now has analytics! Thanks to Plausible, our users can
                access simple, privacy-minded, and lightweight data right from the dashboard.{" "}
                <Link
                  target="_blank"
                  href="https://www.prezly.com/help/analytics-dashboard"
                  className="text-blue-500 hover:underline"
                >
                  prezly.com/help/analytics-dashboard
                </Link>
              </div>
            </div>
          </div>

          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/robhope" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/robhope.jpg"
                    alt="Rob Hope"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">Rob Hope</div>
                    <div className="text-xs text-gray-500">@robhope</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://twitter.com/robhope/status/1351465826109558784"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                Just replaced my full network&apos;s Google Analytics with Plausible - I can&apos;t remember when last I
                was this impressed by a SaaS UX + design 💯
                <br />
                <br />
                Became a paying customer within 1hr of the 30-day trial.
              </div>
            </div>
          </div>

          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/dhh" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/dhh.jpg"
                    alt="DHH"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">DHH</div>
                    <div className="text-xs text-gray-500">@dhh</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://twitter.com/dhh/status/1438785402576506884"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                Been a very happy customer of Plausible at Basecamp. Wonderful to see domains like web stats that were
                once a wasteland due to monopoly weight spring new, better options ❤️
              </div>
            </div>
          </div>

          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/lkr" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/lkr.jpg"
                    alt="Laura Roeder"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">Laura Roeder</div>
                    <div className="text-xs text-gray-500">@lkr</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://x.com/lkr/status/1792637010567385355"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                I&apos;ve been super happy with Plausible. All the conversion tracking we need, it has every report we
                use.
              </div>
            </div>
          </div>

          <div className="my-4 md:m-0">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center">
                <Link className="flex items-center group" href="https://twitter.com/JohnONolan" target="_blank">
                  <Image
                    className="w-10 rounded-full"
                    src="https://plausible.io/assets/images/twitter/JohnONolan.jpg"
                    alt="John O'Nolan"
                    width={40}
                    height={40}
                  />
                  <div className="ml-2 leading-tight">
                    <div className="font-bold group-hover:text-blue-500">John O&apos;Nolan</div>
                    <div className="text-xs text-gray-500">@JohnONolan</div>
                  </div>
                </Link>
                <Link
                  className="ml-auto twitter-icon"
                  href="https://twitter.com/JohnONolan/status/1488921946062569480"
                  target="_blank"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-2 text-sm whitespace-pre-wrap cursor-text tweet-text">
                Check out Plausible if you haven&apos;t yet — fantastic product, $190/mo for 5M views, or less when paid
                annually. We switched over everything from GA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
