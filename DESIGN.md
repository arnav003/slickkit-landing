---
name: "SlickKit Studio Design System"
version: "1.0.0"
theme: "Neo-Utility / Dark Mode Native"
tokens:
  colors:
    background:
      canvas: "#09090b"        # Ultra-dark zinc/obsidian
      surface: "#121215"       # Primary card & workspace surface
      elevated: "#18181b"      # Modals, popovers, dropdowns
      tint_card: "#0a2619"     # Trust/active container wash
      tint_border: "#164d32"   # Border on green-tinted containers
    foreground:
      primary: "#fafafa"       # Pure white high-contrast text
      secondary: "#a1a1aa"     # Subtitle & label text
      muted: "#71717a"         # Disabled / metadata text
    accent:
      primary: "#4ade80"       # Vibrant mint/emerald (CTA button, active states)
      primary_hover: "#22c55e" # Darker green on hover
      contrast_text: "#052415" # High-contrast dark text inside green buttons
      glow: "rgba(74, 222, 128, 0.15)"
    border:
      subtle: "#27272a"        # 1px crisp borders on cards
      active: "#164d32"        # Border on green-tinted containers
      focus: "#4ade80"         # Focus ring color
    light:
      canvas: "#fafafa"        # Clean off-white
      surface: "#f4f5f7"       # Soft ash grey card
      elevated: "#ffffff"      # Elevated white card
      tint_card: "#ecf8f1"     # Pastel sage tint
      tint_border: "#d2efe0"   # Light emerald border
      border_subtle: "#e2e8f0" # Light border
      foreground_primary: "#09090b"
      foreground_secondary: "#52525b"
      foreground_muted: "#71717a"
  typography:
    font_sans: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    font_mono: "JetBrains Mono, monospace" # For sizes, page counts, versions
    scale:
      h1: "font-semibold text-2xl tracking-tight"
      h2: "font-semibold text-lg tracking-tight"
      body: "text-sm font-normal"
      caption: "text-xs font-medium"
  radius:
    pill: "rounded-full"       # Primary action buttons & status chips
    card: "rounded-2xl"        # Outer workspace & hero containers (16px)
    subcard: "rounded-xl"      # File items, tool options (12px)
    input: "rounded-lg"        # Text inputs & sliders (8px)
  spacing:
    header_height: "h-14"
    statusbar_height: "h-8"
---

# UI Guidelines & Component Rules

## General Principles
- **Desktop Utility First:** Treat the viewport as an application workspace, not a marketing blog. Maximize canvas area, clean typography, intentional negative space.
- **Micro-Interactions:** Subtle hover states (`transition-colors duration-150 hover:bg-zinc-800`).
- **Trust Signatures:** Use green badge accents and monospace tags (`[ 100% IN-BROWSER COMPUTE ]`) to communicate privacy and security.

## Component Specifications

### 1. Primary Action Buttons
- **Style:** `bg-[#4ade80] hover:bg-[#22c55e] text-[#052415] font-semibold rounded-full px-6 py-2.5 shadow-sm transition-all active:scale-[0.98]`
- Always use high-contrast dark text `#052415` on green buttons.

### 2. Product Suite Cards
- Crisp 1px border (`border-zinc-800/80` or `border-zinc-200`), dark card surface `#121215`, subtle glow on hover.
- Badges: Pill shaped `rounded-full px-2.5 py-0.5 text-xs font-mono font-medium`.

### 3. Status Bar / Indicator
- Left: Green pulsing dot `🟢 RAM Execution Only • Zero Server Uploads`.
- Monospace font for technical metadata.
