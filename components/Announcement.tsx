import React from "react";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

export function Announcement() {
  return (
    <div className="max-w-[100vw] text-ellipsis overflow-hidden bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center max-w-[100%]">
            <span className="flex p-2 rounded-lg bg-gray-800">
              <SpeakerphoneIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate text-ellipsis max-w-[100%] overflow-hidden font-medium text-white">
              Smartlist just got more secure! All user data is now stored
              securely with AES-256 bit encryption!
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50 focus:ring-2 ring-offset-2 ring-white ring-offset-gray-900"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}