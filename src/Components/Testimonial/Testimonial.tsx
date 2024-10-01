"use client";

// components/Testimonial.tsx

import { useState } from "react";
import { testimonials } from "../Data/data";
import Image from "next/image";
import { TestimQuote } from "../Common/Icon/svg";
import SectionTitle from "../Common/Title/SectionTitle";

export default function Testimonial() {
  const [selectedId, setSelectedId] = useState(testimonials[0].id);

  const selectedTestimonial =
    testimonials.find((testimonial) => testimonial.id === selectedId) ||
    testimonials[0];

  return (
    <section className="pt-10 bg-[#f8f9fa] dark:bg-[#1D1D1D]">
      <div className="container w-full px-3 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
        <SectionTitle
          title="My Testimonials"
          subtitle="What My Clients Say About Me."
        />
        <div className="max-w-6xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 space-y-4">
              {testimonials.map((person) => (
                <div
                  key={person.id}
                  onClick={() => setSelectedId(person.id)}
                  className={`p-6 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer bg-[#fff] dark:bg-[#232323] ${
                    selectedId === person.id
                      ? "border-2 border-[#764b9b] dark:border-[#44a56b]"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      src={person.imageUrl}
                      alt={person.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-[#eeeded]">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-[#eeebeb]">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-2 flex items-center">
              <blockquote
                className="p-6 bg-white dark:bg-[#232323] rounded-lg shadow-md"
                style={{ height: "100%" }}
              >
                <TestimQuote />
                <p className="font-black  capitalize text-[#152035] dark:text-[#eeeded] mb-[6px] text-[20px] transition-colors duration-500 ease-in-out">
                  {selectedTestimonial.title}
                </p>
                <p className="mt-4 text-gray-700 dark:text-[#eeebeb]">
                  {selectedTestimonial.testimonial}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

