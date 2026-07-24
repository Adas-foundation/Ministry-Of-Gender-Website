---
name: National Protection Framework
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#424654'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#737785'
  outline-variant: '#c2c6d6'
  surface-tint: '#0057cc'
  primary: '#0047a9'
  on-primary: '#ffffff'
  primary-container: '#0b5ed7'
  on-primary-container: '#dae2ff'
  inverse-primary: '#b0c6ff'
  secondary: '#006d41'
  on-secondary: '#ffffff'
  secondary-container: '#90f4b7'
  on-secondary-container: '#007144'
  tertiary: '#634900'
  on-tertiary: '#ffffff'
  tertiary-container: '#816000'
  on-tertiary-container: '#ffe0a1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#00419d'
  secondary-fixed: '#93f7ba'
  secondary-fixed-dim: '#77da9f'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#00522f'
  tertiary-fixed: '#ffdf9e'
  tertiary-fixed-dim: '#fabd00'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
  emergency-red: '#DC3545'
  info-cyan: '#0DCAF0'
  success-mint: '#20C997'
  surface-faint: '#F8F9FA'
  border-subtle: '#DEE2E6'
  text-muted: '#6C757D'
  danger-bg: '#FDEDED'
  success-bg: '#EAF7F0'
typography:
  headline-h1:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 72px
  headline-h1-mobile:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 48px
  headline-h2:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 60px
  headline-h2-mobile:
    fontFamily: Poppins
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 42px
  headline-h3:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 48px
  headline-h4:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 36px
  headline-h5:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 27px
  body-normal:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 21px
  label-btn:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered to project authority, safety, and unwavering reliability for the Ministry of Gender, Community Development and Social Welfare in Malawi. It balances the institutional gravity of a government entity with the empathetic, accessible nature required for a protection and case management reporting system.

The aesthetic follows a **Corporate / Modern** style, heavily influenced by the utilitarian clarity of international digital service standards (GOV.UK) and the refined functionalism of Microsoft Fluent. It prioritizes legibility and clarity over decorative elements, ensuring that users in high-stress situations can navigate the interface with minimal cognitive load. The visual tone is "calm but urgent"—structured through a strict grid but softened by approachable geometry.

## Colors

This design system utilizes a high-contrast palette designed for maximum accessibility (WCAG AA). 

- **Primary Blue** is the anchor of the system, representing government stability and professional service.
- **Protection Green** is used for secondary actions and case-management status indicators, symbolizing safety and growth.
- **Emergency Red** is reserved strictly for SOS triggers and critical alerts; its usage is limited to maintain its psychological impact.
- **Neutral Scales** rely on a cool-gray spectrum to ensure a clean, modern canvas that does not distract from critical information.

All background/foreground pairings have been vetted for a contrast ratio of at least 4.5:1, specifically for the "Secondary Text" on "Surface" backgrounds.

## Typography

The typography system uses a dual-font strategy. **Poppins** provides a friendly yet authoritative geometric presence for headlines, making the service feel modern and approachable. **Inter** is utilized for all body and UI text due to its exceptional legibility on small screens and high x-height, which is critical for long case reports and data-heavy tables.

A strict **150% line-height** (1.5) is enforced across all body text levels to enhance readability for users who may be under stress or accessing the system from mobile devices in the field.

## Layout & Spacing

The layout is built on a **fixed grid** for desktop dashboards and a **fluid grid** for public-facing reporting forms. 

- **Grid Model:** 12-column system with 24px gutters.
- **Mobile:** 4-column system with 16px margins. 
- **Rhythm:** An 8px base unit (linear scale) governs all padding, margins, and component heights.

Reporting forms should be constrained to a maximum width of 720px (centered) to prevent "line-length fatigue" and ensure the focus remains on the form fields. Dashboards use the full container-max width of 1280px to accommodate data tables and complex case-management views.

## Elevation & Depth

Visual hierarchy in this design system is primarily conveyed through **Tonal Layers** and extremely **Ambient Shadows**.

1.  **Level 0 (Background):** `#F8F9FA`. Used for the page background to reduce screen glare.
2.  **Level 1 (Surface):** `#FFFFFF`. Used for cards, inputs, and the primary content area. Includes a 1px border of `#DEE2E6`.
3.  **Level 2 (Hover/Active):** Surfaces receive a soft shadow: `0 4px 12px rgba(0, 0, 0, 0.05)`.
4.  **Level 3 (Overlays/Modals):** These use a more pronounced shadow: `0 12px 32px rgba(0, 0, 0, 0.1)` and a background blur on the backdrop to maintain focus on the task at hand.

Avoid heavy skeuomorphism. Depth should feel like physical paper layered on a desk, clean and orderly.

## Shapes

The design system utilizes **Rounded (12px)** geometry. This specific radius is used consistently across all buttons, input fields, and cards. 

- **Standard Elements:** 12px (`0.75rem`)
- **Large Components (e.g., Modals):** 16px (`1rem`)
- **Small Components (e.g., Tags/Chips):** 8px (`0.5rem`)

This "Soft-Geometric" approach removes the harshness of sharp corners—making the interface feel more human and supportive—while maintaining a professional, structured appearance.

## Components

### Buttons
- **Primary:** Background `#0B5ED7`, text `#FFFFFF`. High-emphasis actions (e.g., Submit).
- **Secondary:** Background `#F3F2F1`, text `#212529`. For neutral actions.
- **SOS/Emergency:** Background `#DC3545`, text `#FFFFFF`. Highly visible with a 2px outer pulse effect.
- **Outline:** 1px border of `#0B5ED7`, transparent background. For secondary tasks.

### Form Inputs
- **Inputs & Dropdowns:** 12px corner radius, 16px padding. Height 48px to ensure a large touch target for mobile field workers.
- **Labels:** Always visible above the input, never rely on placeholders alone for accessibility.
- **Focus State:** 2px solid `#0B5ED7` ring with 2px offset.

### Navigation
- **Top Nav:** Sticky, white surface with a thin bottom border. Houses the Malawi crest and system name.
- **Dashboard Sidebar:** Persistent on desktop, collapsible on mobile. Uses a light gray surface (`#F8F9FA`) to distinguish it from the main workspace.

### Feedback & Status
- **Success/Error States:** Use background tints (`#EAF7F0`, `#FDEDED`) combined with bold text and icons to ensure the message is clear even for colorblind users.
- **Timeline:** A vertical line of `#DEE2E6` with status-colored nodes (`#198754`, `#FFC107`) to track case progression.
- **Skeleton States:** Use a pulsing light gray (`#EEEEEE`) to indicate loading content in data tables and charts to reduce perceived latency.