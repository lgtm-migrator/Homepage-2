import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Track and manage your home inventory",
    description: "Keep track of what you have and need to buy.",
    icon: GlobeAltIcon,
  },
  {
    name: "Recieve maintenance reminders for your home",
    description:
      "Store notes and reminders for your home, such as when to change an air filter.",
    icon: ScaleIcon,
  },
  {
    name: "Search your home",
    description:
      "Quickly find items in your home by searching for them by name or category",
    icon: LightningBoltIcon,
  },
  {
    name: "Invite others to your home",
    description: "Sync your home with up to 5 people.",
    icon: AnnotationIcon,
  },
  {
    name: "Access on any device",
    description:
      "Access your home from your phone, tablet, computer, or with our web app",
    icon: AnnotationIcon,
  },
  {
    name: "Make a positive impact",
    description:
      "We'll occassionally send you updates on how to make your home tidier and more eco-friendly",
    icon: AnnotationIcon,
  },
];
export function Features() {
  return (
    <div className="py-12 bg-white" id="/features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-green-600 font-semibold">
            In a nutshell
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Smartlist helps you...
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
