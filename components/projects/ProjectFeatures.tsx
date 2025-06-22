"use client";

import { CheckCircle, Star } from "lucide-react";

interface ProjectFeaturesProps {
  features: string[];
}

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) {
    return (
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
        </div>
        <div className="p-6 text-center text-gray-500">
          <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>No features listed for this project</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            This project includes {features.length} premium feature{features.length !== 1 ? 's' : ''} designed to enhance your living experience.
          </p>
        </div>
      </div>
    </section>
  );
}
