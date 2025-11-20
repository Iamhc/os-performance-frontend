"use client";

export default function DiskList({ current }) {
  if (!current || !current.disks) {
    return (
      <p className="text-gray-400 text-sm mt-4">
        Disk stats not available from backend.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {current.disks.map((d) => (
        <div key={d.fs} className="p-2 border rounded">
          <p className="font-medium text-sm">{d.fs}</p>
          <p className="text-xs">
            Used: {d.used} • Free: {d.free}
          </p>
        </div>
      ))}
    </div>
  );
}
