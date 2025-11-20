"use client";

export default function StatsCards({ current }) {
  const formatBytes = (n) => {
    if (!n) return "0 B";
    const units = ["B", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(n) / Math.log(1024));
    return `${(n / 1024 ** i).toFixed(2)} ${units[i]}`;
  };

  if (!current) {
    return <p>Loading...</p>;
  }

  // CPU
  const cpuLoad = current.cpu[0]?.toFixed(2); // 1-min load average

  // Memory
  const total = current.totalMem;
  const free = current.freeMem;
  const used = total - free;
  const usedPercent = ((used / total) * 100).toFixed(2);
  const freePercent = ((free / total) * 100).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* CPU */}
      <div className="h-card">
        <h3 className="font-semibold mb-2">CPU</h3>
        <p>Load Average (1m): {cpuLoad}</p>
        <p>Platform: {current.platform}</p>
        <p>Uptime: {(current.uptime / 3600).toFixed(1)} hrs</p>
      </div>

      {/* Memory */}
      <div className="h-card">
        <h3 className="font-semibold mb-2">Memory</h3>
        <p>Total: {formatBytes(total)}</p>
        <p>
          Used: {formatBytes(used)} ({usedPercent}%)
        </p>
        <p>
          Free: {formatBytes(free)} ({freePercent}%)
        </p>
      </div>

      {/* Network (not available yet) */}
      <div className="h-card">
        <h3 className="font-semibold mb-2">Network</h3>
        <p className="text-gray-400 text-sm">
          Network stats not implemented in backend yet.
        </p>
      </div>
    </div>
  );
}
