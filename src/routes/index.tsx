import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unlimited Lovable — Chrome Extension" },
      { name: "description", content: "Premium automation and productivity Chrome extension for lovable.dev by Faris Automates." },
      { property: "og:title", content: "Unlimited Lovable — Chrome Extension" },
      { property: "og:description", content: "Premium automation and productivity features for lovable.dev." },
    ],
  }),
  component: Index,
});

function Index() {
  const [err, setErr] = useState<string | null>(null);

  const download = () => {
    setErr(null);
    fetch("/unlimited-lovable.zip")
      .then((res) => {
        if (!res.ok) throw new Error(`Download failed: ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "unlimited-lovable.zip";
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch((e) => setErr(e.message));
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        <div className="mb-8 text-center">
          <img
            src="/logo.png"
            alt="Unlimited Lovable logo"
            className="mx-auto mb-5 h-20 w-20 rounded-2xl shadow-md"
          />
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground bg-muted rounded-full px-3 py-1 mb-4">
            Chrome Extension · Manifest V3
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Unlimited Lovable</h1>
          <p className="mt-2 text-sm text-muted-foreground">by Faris Automates</p>
          <p className="mt-3 text-muted-foreground">
            Premium automation and productivity features for lovable.dev — side panel, templates, and more.
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
            <li>Open lovable.dev and click the extension icon to launch the side panel.</li>
          </ol>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Works in Chrome, Edge, Brave, Arc, and other Chromium browsers.
        </p>
      </div>
    </div>
  );
}
