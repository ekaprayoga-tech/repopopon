import Link from "next/link"

export function FeaturesSection() {
  return (
    <section className="-mt-[170px] pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12"></div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">It's time to ditch Google Analytics</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is{" "}
            <Link href="/simple-web-analytics" className="text-blue-600 underline hover:text-blue-800">
              simple analytics
            </Link>
            . It is easy to understand and it cuts through the noise. Check your site traffic and get all the essential
            insights on one page in one minute. There are no layers of menus, there is no need for you to build custom
            reports, custom dashboards or PowerPoint documents. You can even{" "}
            <Link href="/docs/google-analytics-import" className="text-blue-600 underline hover:text-blue-800">
              import your Google Analytics stats
            </Link>
            .
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lightweight script that keeps your site speed fast</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is{" "}
            <Link href="/lightweight-web-analytics" className="text-blue-600 underline hover:text-blue-800">
              lightweight analytics
            </Link>
            . Our script is 75 times smaller than Google Analytics. Your page weight will be cut down, your site will
            load faster and you'll reduce your carbon footprint for a greener and more sustainable web. A site with
            100,000 monthly visitors can save 4.5 kg of CO2 emissions per year by switching from Google Analytics to
            Plausible.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">No need for cookie banners or GDPR consent</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is{" "}
            <Link href="/privacy-focused-web-analytics" className="text-blue-600 underline hover:text-blue-800">
              privacy-friendly analytics
            </Link>
            . All the site measurement is carried out absolutely anonymously. Cookies are not used and no personal data
            is collected. There are no persistent identifiers. No cross-site or cross-device tracking either. Your site
            data is not used for any other purposes. All visitor data is exclusively processed with servers owned and
            operated by European companies and it never leaves the EU.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Track goal conversions, revenue and campaigns</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is powerful. Segment your audience by any metric you click on. Analyze paid campaigns. Track
            ecommerce revenue, outbound link clicks, file downloads and 404 error pages. Track engagement metrics like
            scroll depth, bounce rate, and time spent on page. Create custom events with custom dimensions to track
            conversions and attribution. Increase conversions using funnel analysis.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Invite team members and share your dashboard</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is shareable. Your stats are private by default but you can choose to be transparent and make them
            public so anyone with your custom link can view them. You can embed the dashboard into your website too.
            Stats can also be shared privately by generating a secure link. You can invite team members and assign user
            roles too.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Smooth transition from Google Analytics</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            There's a realtime dashboard, an entry pages report and integration with Search Console. You can track your
            paid campaign conversions, invite team members and count visitors who ignore the consent banner. We exclude
            data center bot traffic by default. You can even import your historical stats. Learn how to get the most out
            of{" "}
            <Link href="/docs/your-plausible-experience" className="text-blue-600 underline hover:text-blue-800">
              your Plausible experience
            </Link>{" "}
            and join thousands who have already migrated from Google Analytics.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-4">We hope you enjoy Plausible!</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-2">Regards,</p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Uku and Marko</p>
          <p className="text-lg text-gray-600 leading-relaxed">
            P.S. We're a completely independent, self-funded, bootstrapped and debt-free team of 10. We're not
            interested in raising funds or taking investment. We choose the subscription business model rather than
            surveillance capitalism. We're operating a sustainable project funded solely by the fees that our
            subscribers pay us. Read more{" "}
            <Link href="/about" className="text-blue-600 underline hover:text-blue-800">
              about us
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="px-4 pb-16 pt-24 mx-auto max-w-screen-xl sm:px-6 lg:pb-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-9">What can you do with Plausible Analytics?</h2>
          <p className="mt-4 text-lg text-gray-500 leading-7">
            Our features are built based on years of user feedback, making sure you work with exactly what you need.
            Each one is designed with simplicity in mind, so you <i>finally</i> don't need any training to use
            analytics.
          </p>
        </div>

        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Automatic scroll depth tracking</dt>
              <dd className="flex space-x-3 lg:py-0 lg:pb-4">
                <span className="text-base text-gray-500 leading-6">
                  Plausible automatically tracks scroll depth (1-100%) for all pages—no complex setup or tag managers
                  needed like with Google Analytics and other tools. You can set up scroll depth goals (codeless) too.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Track AI traffic accurately</dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Track which AI tools, like ChatGPT, Perplexity, DeepSeek, etc., send you traffic. See which pages are
                  driving AI traffic, which conversions are being met, and more.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Track SEO performance</dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Connect Google Search Console to see search terms driving Google traffic within your Plausible
                  dashboard. Analyze SEO content performance and track organic conversions—all in one place.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">
                Track ad performance, and any other campaigns
              </dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Track your UTM tags, along with an automatic breakdown of channels like Affiliates, Display, Email,
                  Paid Search, Paid Social, Referral, etc. Analyze landing pages, conversions, locations, etc.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Real Time dashboard</dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Monitor live site activity. The real-time view matches the default dashboard with the same reports and
                  metrics. Updates every 30 seconds—no refresh needed. Simpler than GA4's Real Time overview.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Codeless goals and revenue tracking</dt>
              <dd className="flex space-x-3 lg:border-t-0 lg:py-0 lg:pb-4">
                <span className="text-base text-gray-500 leading-6">
                  Mark any pageviews as goals—no coding needed. Monitor file downloads, outbound clicks, etc., with a
                  ready-made code snippet. Or use custom code for advanced tracking, while tracking revenue.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Track user journeys with Funnels</dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Analyze user flow across pages, domains, subdomains, including custom events. See the percentage of
                  visitors who complete conversions, where drop-offs occur, and segment users based on behavior.
                </span>
              </dd>
            </div>
          </div>

          <div className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-6 h-6 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div className="space-y-2">
              <dt className="text-lg font-medium text-gray-900 leading-6">Works with whatever you work with</dt>
              <dd className="flex space-x-3">
                <span className="text-base text-gray-500 leading-6">
                  Use our WordPress plugin for easy setup, track WooCommerce funnels in one click, or build custom
                  Looker Studio dashboards—Explore our various integrations and setup guides for easy setup.
                </span>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </section>
  )
}
