import React from "react";
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

function Features() {
  return (
    <div className="bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-gray-800">
              <SpeakerphoneIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Smartlist just got more secure! All user data is now stored
                securely with AES-256 bit encryption!
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pb-80 sm:pb-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="mt-[100px] md:mt-[100px] font text-transparent text-6xl bg-clip-text bg-gradient-to-tl from-green-400 to-green-900 font-[900] tracking-tight sm:tracking-tight sm:text-6xl">
              Next-gen home inventory and personal finances
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Ever been stuck at the grocery store wondering what you need?
              Smartlist helps you organize your home&apos;inventory, expenses,
              task, and more.
            </p>
            <a
              href="#"
              className="mt-5 inline-block text-center bg-gradient-to-br from-orange-400 to-orange-900 rounded-2xl py-3 px-8 font-medium text-white hover:bg-indigo-700 outline-none mr-4 focus:ring ring-indigo-500 focus:ring-indigo-500 teal"
            >
              Get started
            </a>
            <a
              href="#"
              className="mt-5 inline-block text-center bg-gradient-to-br from-indigo-400 to-indigo-900 rounded-2xl py-3 px-8 font-medium text-white hover:bg-indigo-700 outline-none focus:ring ring-indigo-500 focus:ring-indigo-500 teal"
            >
              Tell me more!
            </a>
          </div>
          <div>
            <div className="mt-[80px] -ml-[150px] md:-ml-0">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-4">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <div className="w-44 h-64 rounded-2xl overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-32 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-32 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <div className="w-44 h-32 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-4">
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-32 rounded-2xl overflow-hidden">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Features />
      <Header />
      <div className="fade" />
      Hi!
    </>
  );
}
