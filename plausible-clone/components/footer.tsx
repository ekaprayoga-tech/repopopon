import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="bg-slate-700">
      <div className="container mx-auto py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Logo and description section */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="https://plausible.io/assets/images/icon/plausible_logo_dark.svg" // Replace with your logo path
                  alt="Company Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              Made and hosted in the EU
              <br />
              Solely funded by our subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-slate-300 font-medium mb-6 text-sm tracking-wide">WHY PLAUSIBLE?</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/simple-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Simple metrics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lightweight-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Lightweight script
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-focused-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Privacy focused
                  </Link>
                </li>
                <li>
                  <Link
                    href="/open-source-website-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Open source
                  </Link>
                </li>
                <li>
                  <Link
                    href="/most-accurate-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    GA4 Accuracy comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/audience-segmentation"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Visitor segmentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-ecommerce-saas"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Ecommerce tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/white-label-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    White label
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-300 font-medium mb-6 text-sm tracking-wide">COMPARISONS</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/vs-google-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    vs Google Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/vs-matomo" className="text-slate-400 hover:text-white text-sm transition-colors">
                    vs Matomo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vs-cloudflare-web-analytics"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    vs Cloudflare
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-300 font-medium mb-6 text-sm tracking-wide">COMMUNITY</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/changelog" className="text-slate-400 hover:text-white text-sm transition-colors">
                    What's new
                  </Link>
                </li>
                <li>
                  <Link
                    href="/status"
                    target="_blank"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/plausible/analytics"
                    target="_blank"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/plausiblehq"
                    target="_blank"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://fosstodon.org/@plausible"
                    target="_blank"
                    rel="me"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Mastodon
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/plausible-analytics/"
                    target="_blank"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-300 font-medium mb-6 text-sm tracking-wide">COMPANY</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/data-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Data policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/dpa" className="text-slate-400 hover:text-white text-sm transition-colors">
                    DPA
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/imprint" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Imprint
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
