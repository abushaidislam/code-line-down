import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Unlimited Lovable — Chrome Extension by Faris Automates" },
      {
        name: "description",
        content:
          "Premium automation and productivity Chrome extension for lovable.dev. Warm, editorial, made to be lived with.",
      },
      { property: "og:title", content: "Unlimited Lovable — Chrome Extension" },
      {
        property: "og:description",
        content: "Premium automation and productivity features for lovable.dev.",
      },
    ],
  }),
  component: Index,
});

/* ─────────── Design tokens (Lovable warm cream system) ─────────── */
const CREAM = "#f7f4ed";
const CREAM_SOFT = "#fcfbf8";
const INK = "#1c1c1c";
const OFF_WHITE = "#fcfbf8";
const LINE = "#eceae4";
const MUTED = "#5f5f5d";

const FONT_DISPLAY = "'Instrument Serif', ui-serif, Georgia, serif";
const FONT_SANS = "'Instrument Sans', ui-sans-serif, system-ui, sans-serif";

const INSET_SHADOW =
  "rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px";

function Index() {
  const [err, setErr] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const download = () => {
    setErr(null);
    setDownloading(true);
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
      .catch((e) => setErr(e.message))
      .finally(() => setDownloading(false));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: CREAM,
        color: INK,
        fontFamily: FONT_SANS,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft warm gradient wash — barely visible atmospheric depth */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 15% -10%, rgba(232,162,162,0.22), transparent 50%), radial-gradient(circle at 85% 110%, rgba(184,201,232,0.18), transparent 55%), radial-gradient(circle at 50% 50%, rgba(242,201,161,0.10), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Top nav */}
      <header
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            style={{ borderRadius: 8, border: `1px solid ${LINE}` }}
          />
          <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>
            Unlimited Lovable
          </span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="https://whatsapp.com/channel/0029Vb6om89HrDZj4T3NbI3O"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: INK,
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: 6,
            }}
          >
            WhatsApp
          </a>
          <a
            href="https://www.facebook.com/farisautomates"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: INK,
              textDecoration: "none",
              padding: "8px 14px",
              borderRadius: 6,
              border: `1px solid rgba(28,28,28,0.4)`,
            }}
          >
            Facebook
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 880,
          margin: "0 auto",
          padding: "80px 32px 96px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 9999,
            border: `1px solid ${LINE}`,
            background: CREAM_SOFT,
            fontSize: 13,
            color: MUTED,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 9999,
              background: "#2f6b3a",
              boxShadow: "0 0 0 3px rgba(47,107,58,0.15)",
            }}
          />
          Chrome Extension · Manifest V3 · v6.4.5
        </div>

        {/* Logo mark */}
        <div style={{ marginTop: 40, marginBottom: 32 }}>
          <img
            src="/logo.png"
            alt="Unlimited Lovable logo"
            width={96}
            height={96}
            style={{
              borderRadius: 24,
              border: `1px solid ${LINE}`,
              background: CREAM_SOFT,
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: FONT_DISPLAY,
            fontSize: "clamp(48px, 8vw, 84px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Unlimited <em style={{ fontStyle: "italic", color: MUTED }}>Lovable.</em>
          <br />
          <span style={{ letterSpacing: "-0.035em" }}>Made unfairly&nbsp;fast.</span>
        </h1>

        <p
          style={{
            marginTop: 24,
            fontSize: 18,
            lineHeight: 1.5,
            color: "rgba(28,28,28,0.82)",
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Premium automation and productivity features for{" "}
          <span style={{ borderBottom: `1px solid ${INK}` }}>lovable.dev</span> — side panel
          controls, prompt templates, voice, and more. Crafted by Faris Automates.
        </p>

        {/* CTA row */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={download}
            disabled={downloading}
            style={{
              background: INK,
              color: OFF_WHITE,
              border: "none",
              borderRadius: 6,
              padding: "12px 22px",
              fontSize: 15,
              fontFamily: FONT_SANS,
              fontWeight: 500,
              cursor: downloading ? "wait" : "pointer",
              boxShadow: INSET_SHADOW,
              transition: "opacity 0.2s ease, transform 0.2s ease",
              opacity: downloading ? 0.75 : 1,
            }}
            onMouseDown={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseUp={(e) => (e.currentTarget.style.opacity = "1")}
          >
            {downloading ? "Preparing…" : "Download extension (.zip)"}
          </button>
          <a
            href="#install"
            style={{
              background: "transparent",
              color: INK,
              textDecoration: "none",
              borderRadius: 6,
              padding: "12px 22px",
              fontSize: 15,
              fontWeight: 500,
              border: "1px solid rgba(28,28,28,0.4)",
            }}
          >
            How to install →
          </a>
        </div>

        {err && (
          <p style={{ marginTop: 16, fontSize: 14, color: "#a83232" }}>{err}</p>
        )}

        {/* Stats bar */}
        <div
          style={{
            marginTop: 96,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24,
            borderTop: `1px solid ${LINE}`,
            borderBottom: `1px solid ${LINE}`,
            padding: "40px 0",
          }}
        >
          {[
            { n: "∞", l: "Prompts, unlocked" },
            { n: "1-click", l: "Side panel launch" },
            { n: "MV3", l: "Chromium native" },
          ].map((s) => (
            <div key={s.l}>
              <div
                style={{
                  fontFamily: FONT_DISPLAY,
                  fontSize: 44,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  fontWeight: 400,
                }}
              >
                {s.n}
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: MUTED }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Install card */}
        <section
          id="install"
          style={{
            marginTop: 80,
            padding: 32,
            background: CREAM_SOFT,
            border: `1px solid ${LINE}`,
            borderRadius: 16,
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Installation
          </div>
          <h2
            style={{
              margin: "8px 0 24px",
              fontFamily: FONT_DISPLAY,
              fontSize: 36,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Load it in under a minute.
          </h2>

          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 14,
            }}
          >
            {[
              ["Download", "Grab the .zip above and unzip it anywhere on your machine."],
              [
                "Open extensions",
                <>
                  Visit{" "}
                  <code
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      background: CREAM,
                      border: `1px solid ${LINE}`,
                      fontSize: 13,
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    }}
                  >
                    chrome://extensions
                  </code>{" "}
                  in your Chromium browser.
                </>,
              ],
              ["Developer mode", "Enable the toggle in the top-right corner."],
              [
                "Load unpacked",
                "Click Load unpacked and select the unzipped Unlimited Lovable folder.",
              ],
              [
                "Open lovable.dev",
                "Click the extension icon in your toolbar to launch the side panel.",
              ],
            ].map(([title, body], i) => (
              <li
                key={String(title)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "40px 1fr",
                  gap: 16,
                  padding: "14px 4px",
                  borderTop: i === 0 ? "none" : `1px solid ${LINE}`,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 9999,
                    background: INK,
                    color: OFF_WHITE,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 500,
                    boxShadow: INSET_SHADOW,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{title}</div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: "rgba(28,28,28,0.82)",
                    }}
                  >
                    {body}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <p style={{ marginTop: 40, fontSize: 13, color: MUTED }}>
          Works in Chrome, Edge, Brave, Arc, and other Chromium browsers.
        </p>
      </main>

      {/* Footer */}
      <footer
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: `1px solid ${LINE}`,
          padding: "32px",
          textAlign: "center",
          fontSize: 13,
          color: MUTED,
        }}
      >
        Built with care · © {new Date().getFullYear()} Faris Automates
      </footer>
    </div>
  );
}
