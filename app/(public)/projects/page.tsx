"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Search, Building2, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  project_name: string;
  location: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  type: 'residential' | 'commercial';
  address: string;
  image_url?: string;
  land_area?: number;
  unit_size?: string;
  created_at?: string;
  updated_at?: string;
}

interface LocationRow {
  location: string;
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [allLocations, setAllLocations] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  // const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [query, statusFilter, typeFilter, locationFilter]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchProjects() {
    setLoading(true);
    let request = supabase.from("projects").select("*").order("created_at", { ascending: false });

    if (query) {
      request = request.or(`project_name.ilike.%${query}%,location.ilike.%${query}%`);
    }
    if (statusFilter) {
      request = request.eq("status", statusFilter);
    }
    if (typeFilter) {
      request = request.eq("type", typeFilter);
    }
    if (locationFilter) {
      request = request.eq("location", locationFilter);
    }

    const { data, error } = await request;
    if (error) console.error(error);
    else setProjects(data || []);
    setLoading(false);
  }

  async function fetchLocations() {
    const { data, error } = await supabase
      .from("projects")
      .select("location")
      .order("location")
      .neq("location", "")
      .then((res) => ({
        data: Array.from(new Set(res.data?.map((row: LocationRow) => row.location))),
        error: res.error,
      }));

    if (error) console.error(error);
    else setAllLocations(data || []);
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'upcoming':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  // const clearFilters = () => {
  //   setQuery("");
  //   setStatusFilter("");
  //   setTypeFilter("");
  //   setLocationFilter("");
  // };

  // const activeFiltersCount = [query, statusFilter, typeFilter, locationFilter].filter(Boolean).length;

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] w-full overflow-hidden bg-black">
        {/* Background image */}
        <img
          src="/images/slide-3.jpg"
          alt="Header Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dotted overlay */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

        {/* Heading Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white space-y-4 max-w-3xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Explore Our Finest Projects
            </h1>
            <p className="text-base md:text-lg text-gray-300">
              Where innovation meets architecture — curated with technology, trust, and timeless design.
            </p>
          </motion.div>
        </div>
      </section>
      {/* <ProjectsHeader /> */}

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects by name or location..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Filter Toggle and Clear
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                {activeFiltersCount}
              </span>
            )}
          </button>
          
          {activeFiltersCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Clear all filters
            </button>
          )}
        </div> */}

        {/* Filters Panel */}
        {/* {showFilters && ( */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">All Locations</option>
                  {allLocations.map((loc, i) => (
                    <option key={i} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        {/* )} */}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {loading ? "Loading..." : `${projects.length} project${projects.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`} 
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url || "/images/demo-1.jpg"}
                    alt={project.project_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center gap-1">
                      {getTypeIcon(project.type)}
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.project_name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.address}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {project.land_area && (
                      <span className="text-gray-600 text-sm px-2 py-1 bg-gray-100 rounded-md">{project.land_area} Katha</span>
                    )}
                    {project.unit_size && (
                      <span className="text-gray-600 text-sm px-2 py-1 bg-gray-100 rounded-md">{project.unit_size}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
