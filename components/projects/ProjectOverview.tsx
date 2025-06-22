"use client";

import { MapPin, Building, Ruler, Home, Layers, Compass, LucideIcon } from "lucide-react";

interface Project {
  location?: string;
  address?: string;
  land_area?: string | number;
  unit_size?: string | number;
  floors?: string | number;
  basements?: string | number;
  land_orientation?: string;
  type?: string;
  status?: string;
}

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
  const DetailItem = ({ 
    icon: Icon, 
    label, 
    value, 
    unit = "" 
  }: { 
    icon: LucideIcon; 
    label: string; 
    value: string | number | null | undefined; 
    unit?: string;
  }) => (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-lg text-gray-700 mt-1">
          {value ? `${value}${unit}` : "—"}
        </p>
      </div>
    </div>
  );

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-900">Project Overview</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailItem 
            icon={MapPin} 
            label="Location" 
            value={project.location} 
          />
          <DetailItem 
            icon={Building} 
            label="Address" 
            value={project.address} 
          />
          <DetailItem 
            icon={Ruler} 
            label="Land Area" 
            value={project.land_area} 
            unit=" sq.ft"
          />
          <DetailItem 
            icon={Home} 
            label="Unit Size" 
            value={project.unit_size} 
          />
          <DetailItem 
            icon={Layers} 
            label="Floors" 
            value={project.floors} 
          />
          <DetailItem 
            icon={Layers} 
            label="Basements" 
            value={project.basements} 
          />
          <DetailItem 
            icon={Compass} 
            label="Land Orientation" 
            value={project.land_orientation} 
          />
        </div>
        
        {/* Project Description */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Project</h3>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed">
              This {project.type} project is currently {project.status}. 
              {project.land_area && ` Located on ${project.land_area} square feet of land,`} 
              this development offers {project.unit_size && `${project.unit_size} units`} 
              {project.floors && ` across ${project.floors}`} 
              {project.basements && ` with ${project.basements} basement level${Number(project.basements) > 1 ? 's' : ''}`}.
              {project.land_orientation && ` The property is oriented ${project.land_orientation.toLowerCase()}.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 