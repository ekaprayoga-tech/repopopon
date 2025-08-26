export function FeaturesSection() {
  return (
    <section className="-mt-[170PX] pb-16 px-4 sm:px-6 lg:px-8 bg-white"> 
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12"></div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            It's time to ditch Google Analytics
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Plausible is{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              simple analytics
            </a>
            . It is easy to understand and it cuts through the noise. Check
            your site traffic and get all the essential insights on one page in
            one minute. There are no layers of menus, there is no need for you
            to build custom reports, custom dashboards or PowerPoint documents.
            You can even{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              import your Google Analytics stats
            </a>
            .
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Lightweight script that keeps your site speed fast
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Plausible is{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              lightweight analytics
            </a>
            . Our script is 75 times smaller than Google Analytics. Your page
            weight will be cut down, your site will load faster and you'll
            reduce your carbon footprint for a greener and more sustainable web.
            A site with 100,000 monthly visitors can save 4.5 kg of CO2
            emissions per year by switching from Google Analytics to Plausible.
          </p>
        </div>
      </div>
    </section>
  )
}
