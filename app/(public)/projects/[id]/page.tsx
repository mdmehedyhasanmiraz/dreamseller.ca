"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectOverview from "@/components/projects/ProjectOverview";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectMap from "@/components/projects/ProjectMap";
import ProjectStatusBadge from "@/components/projects/ProjectStatusBadge";

interface Project {
  id: string;
  project_name: string;
  image_url: string;
  address: string;
  status: string;
  type: string;
  features?: string[];
  gallery?: string[];
  location?: string;
  land_area?: string | number;
  unit_size?: string | number;
  floors?: string | number;
  basements?: string | number;
  land_orientation?: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.error("Error fetching project:", error);
          } else {
            setProject(data);
          }
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Project Not Found</h1>
          <p className="text-gray-600">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ProjectHero 
        name={project.project_name} 
        imageUrl={project.image_url} 
        address={project.address}
        status={project.status}
        type={project.type}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <ProjectOverview project={project} />
            <ProjectFeatures features={project.features || []} />
            <ProjectMap address={project.address} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <ProjectStatusBadge status={project.status} type={project.type} />
              <ProjectGallery gallery={project.gallery || []} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
