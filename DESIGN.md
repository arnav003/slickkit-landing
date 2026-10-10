---
name: "SlickKit Studio Design System"
version: "2.0.0"
theme: "Soft Structuralism / Daylight Precision"
dials:
  design_variance: 8
  motion_intensity: 6
  visual_density: 3
tokens:
  colors:
    light:
      canvas: "#F6F8FA"        # Airy cool porcelain / daylight paper
      outer_shell: "rgba(15, 23, 42, 0.035)" # Double-bezel aluminum tray
      inner_core: "#FFFFFF"    # Pure elevated optical plate
      foreground_primary: "#0F172A"
      foreground_secondary: "#475569"
      foreground_muted: "#64748B"
      accent_primary: "#059669" # Deep botanical emerald (<80% saturation)
      accent_tint: "#ECFDF5"
    dark:
      canvas: "#0B0D10"
      outer_shell: "rgba(255, 255, 255, 0.03)"
      inner_core: "#12151A"
      foreground_primary: "#F1F5F9"
      foreground_secondary: "#94A3B8"
      foreground_muted: "#64748B"
      accent_primary: "#10B981"
  typography:
    font_sans: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif"
    font_mono: "JetBrains Mono, ui-monospace, monospace"
  radius:
    shell: "rounded-[2rem]"
    core: "rounded-[calc(2rem-0.375rem)]"
    pill: "rounded-full"
---

# SlickKit Studio Design Architecture

## Core Principles
1. **Airy Daylight First:** Designed around an open, high-key porcelain canvas (`#F6F8FA`) with translucent optical glass and precision-milled aluminum accents. No dark terminal clichés.
2. **Double-Bezel (Doppelrand) Hardware Containers:** All major cards and interactive modules sit inside a machined outer shell (`double-bezel-shell`) with concentric inner cores (`double-bezel-core`) and subtle top-edge refraction.
3. **Button-in-Button Kinetic CTAs:** Primary action pills feature a nested circular trailing icon wrapper (`w-8 h-8 rounded-full`) that translates diagonally on hover using spring physics (`cubic-bezier(0.32, 0.72, 0, 1)`).
4. **Live In-Browser Proof:** Instead of static marketing claims, sections embed interactive client-side demonstrations (Web Crypto SHA-256 RAM hashing, PDF stream manipulation, AVIF target shrink, and metadata scrubbing).
