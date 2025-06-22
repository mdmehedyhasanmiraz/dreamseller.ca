"use client";

interface ProjectDetailsProps {
  location: string;
  address: string;
  status: string;
  type: string;
  landArea?: number;
  unitSize?: string;
  floors?: string;
  basements?: number;
  orientation?: string;
}

export default function ProjectDetails({
  location,
  address,
  status,
  type,
  landArea,
  unitSize,
  floors,
  basements,
  orientation,
}: ProjectDetailsProps) {
  const Item = ({ label, value }: { label: string; value: string | number | null | undefined }) => (
    <div className="space-y-1">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-800 font-medium">{value || "—"}</p>
    </div>
  );

  return (
    <section className="px-6 md:px-16 py-14 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Item label="Location" value={location} />
        <Item label="Address" value={address} />
        <Item label="Status" value={status} />
        <Item label="Type" value={type} />
        <Item label="Land Area" value={landArea ? `${landArea} sq.ft` : null} />
        <Item label="Unit Size" value={unitSize} />
        <Item label="Floors" value={floors} />
        <Item label="Basements" value={basements} />
        <Item label="Orientation" value={orientation} />
      </div>
    </section>
  );
}
