import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Line Counter — Chrome Extension" },
      { name: "description", content: "Download the Line Counter Chrome extension to count lines and words on any page." },
      { property: "og:title", content: "Line Counter — Chrome Extension" },
      { property: "og:description", content: "Count lines and words on any web page." },
    ],
  }),
  component: Index,
});

function Index() {
  const [err, setErr] = useState<string | null>(null);

  const download = () => {
    setErr(null);
    fetch("/line-counter.zip")
      .then((res) => {
        if (!res.ok) throw new Error(`Download failed: ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "line-counter.zip";
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1 mb-4">
            Chrome Extension · Manifest V3
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Line Counter</h1>
          <p className="mt-3 text-muted-foreground">
            A tiny Chrome extension that counts lines and words on any page — or in your selection.
          </p>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <button
            onClick={download}
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3 hover:opacity-90 transition"
          >
            Download extension (.zip)
          </button>
          {err && <p className="mt-3 text-sm text-destructive">{err}</p>}

          <ol className="mt-6 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Unzip the downloaded file.</li>
            <li>
              Open <code className="px-1 py-0.5 rounded bg-muted text-foreground">chrome://extensions</code>.
            </li>
            <li>Enable <span className="text-foreground font-medium">Developer mode</span> (top-right).</li>
            <li>Click <span className="text-foreground font-medium">Load unpacked</span> and select the unzipped folder.</li>
            <li>Pin the extension and click its icon on any page.</li>
          </ol>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Works in Chrome, Edge, Brave, Arc, and other Chromium browsers.
        </p>
      </div>
    </div>
  );
}
