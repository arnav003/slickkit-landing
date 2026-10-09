# SlickKit Studio Hub (`slickkit.dev`)

The official studio landing page for **SlickKit** — an indie software lab specializing in fast, local-first, privacy-respecting browser utilities.

## Overview

SlickKit builds client-side WebAssembly tools that process files locally on your device with 100% in-browser compute:
- **No Cloud Uploads:** Documents process in isolated Web Workers inside your device RAM.
- **Zero Latency:** Immediate compute at memory-bus speeds without network bandwidth limits.
- **No Subscriptions:** Eliminates predatory recurring SaaS bills.
- **Zero Telemetry:** Auditable client-side execution with no surveillance trackers or cookies.

## Product Suite

| Tool | Status | Engine / Features |
|---|---|---|
| **SlickKit PDF** | **LIVE** | Merge, split, compress, organize via pdf-lib in Web Workers |
| **SlickKit Image** | **COMING SOON** | Batch AVIF & WebP converter, lossless compression, WebGPU neural background removal |
| **SlickKit Media** | **PLANNED** | Lossless video trimmer, audio extractor, and GIF converter via FFmpeg WASM |
| **SlickKit Vault** | **PLANNED** | AES-256-GCM client-side encryption and metadata scrubber |

## Design System

Adheres strictly to the tokens and rules in [`DESIGN.md`](./DESIGN.md):
- **Theme:** Neo-Utility / Dark Mode Native
- **Canvas Colors:** `#09090b` (Dark Canvas), `#121215` (Surface), `#18181b` (Elevated)
- **Accent:** `#4ade80` (Electric Mint / Emerald) with `#052415` high-contrast dark text on action buttons
- **Trust Elements:** Monospace badges, 100% offline status indicators, live telemetry monitor

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Export production static build
npm run build
```
