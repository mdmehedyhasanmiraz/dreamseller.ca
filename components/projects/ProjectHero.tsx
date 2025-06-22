"use client";

import { MapPin, Building2, Home } from "lucide-react";

interface ProjectHeroProps {
  name: string;
  imageUrl?: string;
  address?: string;
  status?: string;
  type?: string;
}

export default function ProjectHero({ name, imageUrl, address, status, type }: ProjectHeroProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'residential':
        return <Home className="w-5 h-5" />;
      case 'commercial':
        return <Building2 className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  // Use fallback image if no image is provided
  const displayImage = imageUrl || "/images/demo-1.jpg";

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black text-white">
      {/* Blurred background */}
      <div className="absolute inset-0">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 w-full max-w-7xl">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              {/* Status and Type Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {status && (
                  <div className={`px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 ${getStatusColor(status)}`}>
                    <span className="capitalize">{status}</span>
                  </div>
                )}
                {type && (
                  <div className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium flex items-center gap-2 border border-white/30">
                    {getTypeIcon(type)}
                    <span className="capitalize">{type}</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {name}
              </h1>
              
              {address && (
                <div className="flex items-center gap-2 text-gray-300 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5" />
                  <p className="text-lg">{address}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={displayImage}
                alt={name}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
