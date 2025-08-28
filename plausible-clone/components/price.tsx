"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"

interface VolumePrice {
  volume: string
  starter: number
  growth: number
  business: number
}

const volumesWithPrices: VolumePrice[] = [
  { volume: "10k", starter: 9, growth: 14, business: 19 },
  { volume: "100k", starter: 19, growth: 29, business: 39 },
  { volume: "200k", starter: 29, growth: 44, business: 59 },
  { volume: "500k", starter: 49, growth: 74, business: 99 },
  { volume: "1M", starter: 69, growth: 104, business: 139 },
  { volume: "2M", starter: 89, growth: 134, business: 179 },
  { volume: "5M", starter: 129, growth: 194, business: 259 },
  { volume: "10M", starter: 169, growth: 254, business: 339 },
]

function PricingSection() {
  const [yearlyBilling, setYearlyBilling] = useState(false)
  const [volumeIndex, setVolumeIndex] = useState(0)
  const [currency, setCurrency] = useState("$")

  useEffect(() => {
    // Simulate currency API call
    fetch("/api/paddle/currency")
      .then((response) => response.json())
      .then((data) => setCurrency(data.currency))
      .catch(() => setCurrency("$")) // fallback
  }, [])

  const getVolume = (index: number): string => {
    return index === volumesWithPrices.length ? "10M+" : volumesWithPrices[index].volume
  }

  const getPrice = (
    currencySymbol: string,
    index: number,
    plan: keyof Omit<VolumePrice, "volume">,
    billing: "yearly" | "monthly",
    withDiscount = false,
  ): string => {
    if (index === volumesWithPrices.length) return "Custom"

    let price: number
    if (billing === "yearly") {
      price = 10 * volumesWithPrices[index][plan]
    } else if (billing === "monthly" && withDiscount) {
      price = (10 * volumesWithPrices[index][plan]) / 12
      return currencySymbol + price.toFixed(2)
    } else {
      price = volumesWithPrices[index][plan]
    }

    return currencySymbol + price.toLocaleString("en-US")
  }

  const calculateBubblePosition = (index: number): string => {
    const percentage = (index / 8) * 100
    return `calc(${percentage}% + (${13.87 - 0.26 * percentage}px))`
  }

  const plans = [
    {
      name: "Starter",
      key: "starter" as const,
      features: [
        "One site",
        "3 years of data retention",
        "Intuitive, fast and privacy-friendly dashboard",
        "Email/Slack reports",
        "Google Analytics import",
        "Goals and custom events",
        "Saved Segments",
      ],
    },
    {
      name: "Growth",
      key: "growth" as const,
      features: [
        "Everything in Starter",
        "Up to 3 sites",
        "Up to 3 team members",
        "Team Management",
        "Shared Links",
        "Embedded Dashboards",
        "Shared Segments",
      ],
    },
    {
      name: "Business",
      key: "business" as const,
      features: [
        "Everything in Growth",
        "Up to 10 sites",
        "Up to 10 team members",
        "5 years of data retention",
        "Custom Properties",
        "Stats API (600 requests per hour)",
        "Looker Studio Connector",
        "Ecommerce revenue attribution",
        "Funnels",
      ],
    },
  ]

  return (
    <div className="bg-gray-100 overflow-x-hidden" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-9 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Traffic based plans that match your growth
            </h2>
            <p className="mt-4 text-xl text-gray-600 leading-7">
              Sign up for 30-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl mt-12 p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center lg:items-baseline">
          <div className="lg:flex-1 lg:order-3 lg:justify-end flex">
            <div className="relative">
              <span
                className="absolute whitespace-nowrap w-max px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-yellow-100 border border-yellow-300 text-yellow-700"
                style={{ right: "-20px", top: "-15px" }}
              >
                2 months free
              </span>
              <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-sm font-semibold leading-5 border border-gray-200">
                <label
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ease-in-out duration-200 ${
                    !yearlyBilling ? "text-white bg-indigo-600" : "text-gray-900 bg-white"
                  }`}
                  onClick={() => setYearlyBilling(false)}
                >
                  <input type="radio" name="frequency" value="monthly" className="sr-only" />
                  <span>Monthly</span>
                </label>
                <label
                  className={`cursor-pointer rounded-full px-2.5 py-1 transition-colors ease-in-out duration-200 ${
                    yearlyBilling ? "text-white bg-indigo-600" : "text-gray-900 bg-white"
                  }`}
                  onClick={() => setYearlyBilling(true)}
                >
                  <input type="radio" name="frequency" value="yearly" className="sr-only" />
                  <span>Yearly</span>
                </label>
              </div>
            </div>
          </div>

          <p className="lg:w-1/4 lg:order-1 font-medium text-gray-600">
            {volumeIndex < volumesWithPrices.length && <span>Up to </span>}
            <b className="text-gray-900">{getVolume(volumeIndex)}</b>
            <span> monthly pageviews</span>
          </p>

          <div className="max-w-md lg:max-w-none w-full mt-6 lg:w-1/2 lg:order-2 flex items-baseline space-x-2">
            <span className="text-xs font-medium text-gray-600">10k</span>
            <div className="flex-1 relative">
              <input
                id="volume"
                className="shadow w-full"
                type="range"
                min="0"
                max="8"
                step="1"
                value={volumeIndex}
                onChange={(e) => setVolumeIndex(Number.parseInt(e.target.value))}
              />
              <output
                className="bubble text-xs font-medium absolute"
                style={{ left: calculateBubblePosition(volumeIndex) }}
              >
                {getVolume(volumeIndex)}
              </output>
            </div>
            <span className="text-xs font-medium text-gray-600">10M+</span>
          </div>
        </div>

        <div className="mt-6 overflow isolate mx-auto grid max-w-md grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl px-4 py-4 shadow-md bg-white text-gray-900 border border-gray-200"
            >
              <h3 className="text-lg font-semibold leading-8">{plan.name}</h3>
              <div className="h-20 max-h-20 pt-4">
                {yearlyBilling && volumeIndex < volumesWithPrices.length ? (
                  <div className="flex">
                    <div className="flex flex-col">
                      <span className="h-8 leading-8 text-3xl font-bold tracking-tight">
                        {getPrice(currency, volumeIndex, plan.key, "yearly")}
                      </span>
                      <span className="h-6 leading-6 font-bold tracking-tight text-sm">
                        <span className="line-through tracking-tight text-gray-600">
                          {getPrice(currency, volumeIndex, plan.key, "monthly")}
                        </span>
                        <span className="ml-1">{getPrice(currency, volumeIndex, plan.key, "monthly", true)}</span>
                      </span>
                    </div>
                    <div className="flex flex-col text-sm text-gray-600 pl-1 leading-6 font-semibold">
                      <span className="h-8 flex items-end">/year</span>
                      <span className="h-6">/month</span>
                    </div>
                  </div>
                ) : !yearlyBilling && volumeIndex < volumesWithPrices.length ? (
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-3xl font-bold tracking-tight leading-8">
                      {getPrice(currency, volumeIndex, plan.key, "monthly")}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600 pl-1 self-end">/month</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold tracking-tight leading-8">Custom</div>
                )}
              </div>
              <a
                href={volumeIndex < volumesWithPrices.length ? "/register" : "/contact"}
                className="mt-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 transition duration-150 ease-in-out bg-indigo-600 hover:bg-indigo-500 text-white"
              >
                {volumeIndex < volumesWithPrices.length ? "Start your free trial" : "Contact us"}
              </a>
              <ul className="mt-6 space-y-1 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Enterprise Plan */}
          <div className="rounded-xl px-4 py-4 shadow-md bg-gray-900 text-white">
            <h3 className="text-lg font-semibold leading-8">Enterprise</h3>
            <div className="h-20 max-h-20 pt-4">
              <div className="text-3xl font-bold tracking-tight leading-8">Custom</div>
            </div>
            <a
              href="/contact"
              className="mt-4 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 transition duration-150 ease-in-out bg-gray-800 hover:bg-gray-700 text-white"
            >
              Contact us
            </a>
            <ul className="mt-6 space-y-1 text-sm text-gray-300">
              {[
                "Everything in Business",
                "10+ sites",
                "10+ team members",
                "600+ Stats API requests per hour",
                "Sites API access",
                "Single Sign-On (SSO)",
                "Managed Proxy",
                "5+ years of data retention",
                "Priority support",
              ].map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function CTASection() {
  return (
    <div className="pb-12 bg-gray-100">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 leading-9 sm:text-4xl sm:leading-10">
          Ready to ditch Google Analytics?
          <br />
          <span className="text-indigo-600">Start your free trial today.</span>
        </h3>
        <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex shadow rounded-md">
            <a
              href="/register"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent leading-6 rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Get started
            </a>
          </div>
          <div className="inline-flex ml-3 shadow rounded-md">
            <a
              href="/plausible.io"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent leading-6 rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Price() {
  return (
    <>
      <PricingSection />
      <CTASection />
    </>
  )
}
