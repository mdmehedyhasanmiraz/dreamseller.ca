"use client";

import { Building2, Home } from "lucide-react";

interface ProjectStatusBadgeProps {
  status: string;
  type: string;
}

export default function ProjectStatusBadge({ status, type }: ProjectStatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'residential':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'commercial':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'ongoing':
        return '⟳';
      case 'upcoming':
        return '⏳';
      default:
        return '•';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'residential':
        return <Home className="w-4 h-4" />;
      case 'commercial':
        return <Building2 className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-900">Project Status</h2>
      </div>
      <div className="p-6 space-y-4">
        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <div className={`px-3 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 ${getStatusColor(status)}`}>
            <span className="text-lg">{getStatusIcon(status)}</span>
            <span className="capitalize">{status}</span>
          </div>
        </div>

        {/* Type Badge */}
        <div className="flex items-center gap-3">
          <div className={`px-3 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 ${getTypeColor(type)}`}>
            {getTypeIcon(type)}
            <span className="capitalize">{type}</span>
          </div>
        </div>

        {/* Status Description */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            {status === 'completed' && 'This project has been successfully completed and is ready for occupancy.'}
            {status === 'ongoing' && 'This project is currently under construction and progressing well.'}
            {status === 'upcoming' && 'This project is in the planning phase and will begin construction soon.'}
          </p>
        </div>
      </div>
    </div>
  );
} 