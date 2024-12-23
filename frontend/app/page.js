import React from "react";
import Link from "next/link";
import request from "@/lib/request";
import TestimonialSection from "@/components/TestimonialSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Support from "@/components/Support";

async function page() {
  const res = await request("/api/home?populate=features,testimonials.avatar,howitworks,supports.link");
  const { heading, description, features, website_name, testimonials, howitworks, supports } = res.data.attributes;
  return (
    <>
      <div className="dark:text-white">
        <div className="md:text-7xl text-center font-bold font-Inter mt-8 md:mt-24 text-5xl">
          <h1 className="m-3 md:m-5">{heading}</h1>
          <h1 className="dark:text-slate-400">{website_name}</h1>
        </div>
        <div className="text-center m-8 md:m-16 text-sm md:text-lg dark:text-slate-100 ">
          <p>{description}</p>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center md:gap-5 gap-2">
          <Link href="/events">
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Create a new event
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Learn More
            </button>
          </Link>
        </div>

        {/* Key features section */}
        <div className="flex flex-col items-center justify-center md:gap-10 py-12">

          <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10">
            {features.slice(0, 2).map((feature, index) => (
              <Card
                key={index}
                heading={feature.heading}
                paragraph={feature.description}
              />
            ))}
          </div>

          <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10 mt-5">
            {features.slice(2, 5).map((feature, index) => (
              <Card
                key={index}
                heading={feature.heading}
                paragraph={feature.description}
              />
            ))}
          </div>
        </div>
        {/* Feature section end here */}
        <HowItWorksSection howitworks={howitworks} />
        <TestimonialSection testimonials={testimonials} />
        <Support supports={supports} />
      </div>
    </>
  );
}

function Card({ heading, paragraph }) {
  return (
    <div>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {heading}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {paragraph}
        </p>
      </a>
    </div>
  );
}

export default page;