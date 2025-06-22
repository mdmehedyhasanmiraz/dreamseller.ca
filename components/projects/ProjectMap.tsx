"use client";

import { MapPin, Navigation } from "lucide-react";

interface ProjectMapProps {
  address: string;
}

export default function ProjectMap({ address }: ProjectMapProps) {
  if (!address) {
    return (
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Project Location</h2>
        </div>
        <div className="p-6 text-center text-gray-500">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Location information not available</p>
        </div>
      </section>
    );
  }

  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Project Location</h2>
          <a
            href={`https://www.google.com/maps?q=${encodedAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Open in Maps
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Address:</span>
          </div>
          <p className="text-gray-800 ml-6">{address}</p>
        </div>

        <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed&zoom=15`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
