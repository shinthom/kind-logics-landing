---
colors:
  primary: '#0539a0'
  primary-hover: '#042c80'
  primary-active: '#032060'
  background: '#e8eded'
  text-primary: '#0a0c11'
  text-muted: '#3a3c3c'
  text-inverse: '#ffffff'
  surface-light: '#e1e3e3'
  dark-surface: '#0a0c11'
  dark-text: '#f6f8f8'
typography:
  display:
    family: 'Nanum Myeongjo'
    size: 64px
    weight: 400
    line-height: 1.2
  heading-1:
    family: 'Nanum Myeongjo'
    size: 40px
    weight: 400
    line-height: 1.2
  heading-2:
    family: 'Nanum Myeongjo'
    size: 28px
    weight: 400
    line-height: 1.2
  heading-3:
    family: 'Nanum Myeongjo'
    size: 28px
    weight: 700
    line-height: 1.2
  body:
    family: 'Geist'
    size: 16px
    weight: 400
    line-height: 1.5
  small:
    family: 'Geist'
    size: 14px
    weight: 400
    line-height: 1.5
  caption:
    family: 'Geist'
    size: 12px
    weight: 400
    line-height: 1.5
  code:
    family: 'ui-monospace'
    size: 16px
    weight: 400
    line-height: 1.5
spacing:
  base: 4px
  scale: [4, 8, 16, 20, 24, 32, 40, 48, 64, 80, 128]
elevation:
  z-interactive: 1
  z-scroll-arrow: 2
  z-navigation: 30
motion:
  duration-base: '0.15s'
  easing-standard: 'cubic-bezier(.4, 0, .2, 1)'
  easing-out: 'cubic-bezier(0, 0, .2, 1)'
components:
  button-primary:
    bg: '{colors.primary}'
    text: '{colors.text-inverse}'
    radius: '0px'
    padding: '12px 24px'
  nav-link:
    color: '{colors.text-primary}'
    hover-color: '{colors.primary}'
  text-input:
    bg: '{colors.background}'
    border: '{colors.surface-light}'
    focus-border: '{colors.primary}'
---

# Design System Inspired by Altus

## 1. Visual Theme & Atmosphere

Altus presents a professional, institutional aesthetic, primarily conveyed through a crisp pairing of the elegant serif font Nanum Myeongjo for display text (e.g., "Future Financial Infrastructure, Engineered from Within" at 64px, 400 weight) and the modern sans-serif Geist for body content (e.g., 16px, 400 weight). The brand's identity is anchored by a deep primary blue, `#0539a0`, used for key interactive elements like the "Contact Us" button, set against a clean, light `#e8eded` background. Ample whitespace and a minimalist layout create a sense of clarity and sophistication.

The visual experience is further enriched by subtle `gsap`-driven animations, such as the `heroScrollBounce` keyframe animation on the scroll arrow, adding a dynamic yet controlled feel to the user interface. A distinctive line-art isometric illustration, rendered in the primary blue, serves as a signature visual element, representing complex financial infrastructure in a clean, abstract manner. The footer contrasts sharply with a dark `#0a0c11` background, providing a grounded foundation for the brand's social links and copyright information.

**Key Characteristics**
- **Serif/Sans Pairing**: Nanum Myeongjo (display) with Geist (body).
- **Institutional Blue**: `#0539a0` for key actions and branding.
- **Ample Whitespace**: Generous padding on `#e8eded` background.
- **Line-Art Illustration**: Geometric, monochrome isometric graphics.
- **GSAP Animations**: Subtle, controlled micro-interactions.
- **Minimalist Layout**: Focus on content with clear hierarchy.
- **Dark Footer**: `#0a0c11` background with `#f6f8f8` text for contrast.

## 2. Color Palette & Roles

-   **Primary**
    -   `primary`: `#0539a0` — The brand's signature deep blue, used for primary calls-to-action, active states, and key branding elements like the logo and scroll arrow.
    -   `primary-hover`: `#042c80` (inferred from screenshot) — A slightly darker shade of the primary blue, used for interactive hover states on buttons and links.
    -   `primary-active`: `#032060` (inferred from screenshot) — An even darker shade of the primary blue, used for active/pressed states on interactive elements.

-   **Neutral Scale**
    -   `text-primary`: `#0a0c11` (Ink) — The dominant dark gray used for main body text, headings, and default link colors on light backgrounds.
    -   `text-muted`: `#3a3c3c` — A lighter dark gray used for secondary text, descriptions, and less prominent information.
    -   `text-inverse`: `#ffffff` — Pure white, primarily used for text on primary blue buttons and other dark interactive elements.
    -   `background`: `#e8eded` (Paper) — The main light gray background color for most page sections, providing a clean canvas.
    -   `surface-light`: `#e1e3e3` — A very light gray used for subtle borders, dividers, and background tints.

-   **Dark Mode / Footer**
    -   `dark-surface`: `#0a0c11` (Ink) — The dark background color specifically used for the footer section.
    -   `dark-text`: `#f6f8f8` — An off-white color used for text and icons on the dark footer background, ensuring high contrast.

## 3. Typography Rules

-   **Font Family**:
    -   Primary Sans-serif: `'Geist', system-ui, sans-serif`
    -   Primary Serif: `'Nanum Myeongjo', Georgia, serif`
    -   Monospace: `'ui-monospace', SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

-   **Hierarchy**:
    -   **Display**: `Nanum Myeongjo` `64px` `400` · line-height `1.2` · tracking `none` · Used for prominent hero headlines.
    -   **H1**: `Nanum Myeongjo` `40px` `400` · line-height `1.2` · tracking `none` · Used for major section titles.
    -   **H2**: `Nanum Myeongjo` `28px` `400` · line-height `1.2` · tracking `none` · Used for sub-section headings.
    -   **H3**: `Nanum Myeongjo` `28px` `700` · line-height `1.2` · tracking `none` · Used for emphasized sub-headings within content.
    -   **Body**: `Geist` `16px` `400` · line-height `1.5` · tracking `none` · Standard text for paragraphs and main content.
    -   **Small**: `Geist` `14px` `400` · line-height `1.5` · tracking `none` · Used for supporting text and details.
    -   **Caption**: `Geist` `12px` `400` · line-height `1.5` · tracking `none` · Used for legal text, footnotes, and metadata.
    -   **Code/Mono**: `ui-monospace` `16px` `400` · line-height `1.5` · tracking `none` · For code snippets and technical content.

-   **Principles**
    -   Employ the elegant `Nanum Myeongjo` serif font exclusively for all headings (H1-H3) and display text to establish a sophisticated and institutional tone.
    -   Utilize the modern `Geist` sans-serif font for all body text, small text, and captions to ensure high readability and a contemporary feel.
    -   Maintain a clear visual hierarchy by varying font sizes and weights, such as pairing Display `64px/400` with Body `16px/400`, while preserving consistent line-heights across roles.
    -   Prioritize generous line-heights (e.g., `1.5` for body text) to enhance readability and create an airy, open feel within text blocks.
    -   Reserve the bold `700` weight of `Nanum Myeongjo` for specific emphasized headings (H3) to draw attention without overusing strong typography.

## 4. Component Stylings

### Buttons

Buttons feature a clean, unrounded aesthetic, reflecting the brand's precise and institutional character. Interactions are smooth with a `0.15s` duration using `cubic-bezier(.4, 0, .2, 1)` easing. The "Contact Us" button includes a subtle right arrow icon, indicating progression.

#### Primary Button

A prominent call-to-action button with a solid brand blue background and inverse white text.

```css
.button-primary {
  background-color: var(--color-primary, #0539a0);
  color: var(--color-text-inverse, #ffffff);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  border: none;
  border-radius: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* inferred from screenshot */
  transition: background-color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.button-primary:hover {
  background-color: var(--color-primary-hover, #042c80); /* inferred from screenshot */
}

.button-primary:active {
  background-color: var(--color-primary-active, #032060); /* inferred from screenshot */
}

.button-primary:disabled {
  background-color: color-mix(in srgb, var(--color-primary, #0539a0) 50%, transparent); /* inferred from screenshot */
  color: color-mix(in srgb, var(--color-text-inverse, #ffffff) 50%, transparent); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Secondary Button

A button with a transparent background, dark text, and a dark border, used for less prominent actions.

```css
.button-secondary {
  background-color: transparent;
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 12px 24px;
  border: 1px solid var(--color-text-primary, #0a0c11); /* inferred from screenshot */
  border-radius: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px; /* inferred from screenshot */
  transition: background-color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1)),
              color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1)),
              border-color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.button-secondary:hover {
  background-color: var(--color-primary, #0539a0); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--color-primary, #0539a0); /* inferred from screenshot */
}

.button-secondary:active {
  background-color: var(--color-primary-active, #032060); /* inferred from screenshot */
  color: var(--color-text-inverse, #ffffff); /* inferred from screenshot */
  border-color: var(--color-primary-active, #032060); /* inferred from screenshot */
}

.button-secondary:disabled {
  background-color: transparent;
  color: color-mix(in srgb, var(--color-text-primary, #0a0c11) 50%, transparent); /* inferred from screenshot */
  border-color: color-mix(in srgb, var(--color-text-primary, #0a0c11) 50%, transparent); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Ghost Button

A text-only button with no background or border, primarily used for subtle actions or navigation within content.

```css
.button-ghost {
  background-color: transparent;
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 8px 16px; /* inferred from screenshot */
  border: none;
  border-radius: 0px;
  cursor: pointer;
  transition: color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.button-ghost:hover {
  color: var(--color-primary, #0539a0); /* inferred from screenshot */
  text-decoration: underline; /* inferred from screenshot */
}

.button-ghost:active {
  color: var(--color-primary-active, #032060); /* inferred from screenshot */
}

.button-ghost:disabled {
  color: color-mix(in srgb, var(--color-text-primary, #0a0c11) 50%, transparent); /* inferred from screenshot */
  cursor: not-allowed;
}
```

### Cards & Containers

Altus uses simple, unrounded containers for content grouping, often relying on subtle background changes or borders for separation. The "Start a Conversation With Us" section acts as a prominent container.

#### Standard Container

A basic container for grouping content, typically with a light background and subtle top border for separation.

```css
.container-standard {
  background-color: var(--color-background, #e8eded);
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  padding: 64px 80px; /* inferred from screenshot */
  border: none;
  border-top: 1px solid var(--color-surface-light, #e1e3e3); /* inferred from screenshot */
  border-radius: 0px;
  transition: background-color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.container-standard:hover {
  /* No specific hover effect observed for static containers */
}
```

### Inputs & Forms

Input fields are minimalistic, with a focus on clear borders and a subtle focus indication.

#### Text Input

A standard text input field with a light background and a subtle border.

```css
.input-text {
  background-color: var(--color-background, #e8eded);
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px; /* inferred from screenshot */
  border: 1px solid var(--color-surface-light, #e1e3e3); /* inferred from screenshot */
  border-radius: 0px;
  transition: border-color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1)),
              box-shadow var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.input-text:focus {
  border-color: var(--color-primary, #0539a0); /* inferred from screenshot */
  outline: none;
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary, #0539a0) 20%, transparent); /* inferred from screenshot */
}

.input-text:disabled {
  background-color: var(--color-surface-light, #e1e3e3); /* inferred from screenshot */
  color: var(--color-text-muted, #3a3c3c); /* inferred from screenshot */
  cursor: not-allowed;
}
```

#### Form Label

Labels for form fields, using the primary text color and body font.

```css
.form-label {
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px; /* inferred from screenshot */
  display: block;
}
```

### Navigation

The top navigation bar features clear, unadorned links, with a subtle hover effect and a distinct active state.

#### Top Navigation Bar

The main navigation bar at the top of the page, providing access to key sections.

```css
.navbar {
  background-color: var(--color-background, #e8eded);
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  padding: 24px 80px; /* inferred from screenshot */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-surface-light, #e1e3e3); /* inferred from screenshot */
  position: sticky;
  top: 0;
  z-index: var(--z-navigation, 30);
}
```

#### Navigation Link

Individual links within the navigation bar.

```css
.nav-link {
  color: var(--color-text-primary, #0a0c11);
  font-family: var(--font-sans, "Geist", system-ui, sans-serif);
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  padding: 8px 16px; /* inferred from screenshot */
  transition: color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.nav-link:hover {
  color: var(--color-primary, #0539a0); /* inferred from screenshot */
}

.nav-link.active,
.nav-link[aria-current="page"] {
  color: var(--color-primary, #0539a0);
  font-weight: 600; /* inferred from screenshot */
}
```

### Links

Standard text links are simple and functional, using the primary text color and gaining the brand blue on hover.

#### Standard Link

A default inline text link.

```css
.link-standard {
  color: var(--color-text-primary, #0a0c11);
  text-decoration: none;
  transition: color var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1)),
              text-decoration var(--default-transition-duration, 0.15s) var(--default-transition-timing-function, cubic-bezier(.4, 0, .2, 1));
}

.link-standard:hover {
  color: var(--color-primary, #0539a0); /* inferred from screenshot */
  text-decoration: underline;
}

.link-standard:visited {
  color: var(--color-text-muted, #3a3c3c); /* inferred from screenshot */
}
```

### Badges

(none observed in source)

## 5. Layout Principles

-   **Spacing System**: Altus employs a robust, consistent spacing system based on a `4px` unit, providing a scale for harmonious arrangement of elements.
    -   Base `4px` → `4, 8, 16, 20, 24, 32, 40, 48, 64, 80, 128`
    -   **Usage Context**:
        -   `4px`: Smallest element gaps, icon spacing.
        -   `8px`: Inline element separation, minor vertical spacing.
        -   `16px`: Component internal padding, list item spacing.
        -   `20px`: Subtle vertical separation.
        -   `24px`: Button horizontal padding, section internal padding.
        -   `32px`: Moderate vertical spacing between content blocks.
        -   `40px`: Larger component padding, card content spacing.
        -   `48px`: Section padding, major vertical content breaks.
        -   `64px`: Large section padding, hero content spacing.
        -   `80px`: Page-level horizontal padding, very large vertical breaks.
        -   `128px`: Extra large section padding, full-bleed hero content.

-   **Grid & Container** *(Note: container widths and column counts are not extracted from the source. The values below are reasonable defaults inferred from the visible layout density.)*
    -   Max Width: `1600px` (from `--wb-inset` CSS variable)
    -   Columns: `12` (inferred)
    -   Gutter: `24px` (inferred)
    -   Section Padding: `64px` vertical, `80px` horizontal (inferred from screenshot)

-   **Whitespace Philosophy**: Altus leverages ample whitespace as a fundamental design element, creating a sense of calm, clarity, and professionalism. Generous padding around content blocks and between sections ensures that elements breathe, preventing visual clutter and guiding the user's eye through the content with ease. This minimalist approach underscores the brand's focus on precision and essential information.

-   **Border Radius Scale**: (none observed in source) The design consistently uses sharp, `0px` border radii for all elements, including buttons and containers, reinforcing a precise and structured aesthetic.

## 6. Depth & Elevation

Altus's design system relies on a flat aesthetic, with depth primarily indicated by explicit z-index values rather than pronounced shadows. The visual grid in the footer implies a subtle 3D space without using traditional box-shadows.

-   **Flat (z-0)**: `none` — Default stacking context for most static content.
-   **Interactive (z-1)**: `none` — Used for subtle interactive elements like `div.ft-minimal-inner` which might have slight transforms or state changes without casting shadows.
-   **Scroll Arrow (z-2)**: `none` — The `a.hero-scroll` arrow is positioned above some content to remain visible during scroll.
-   **Navigation (z-30)**: `none` — The `altus-nav` component is explicitly placed on top of other content to ensure it's always accessible.

**Shadow Philosophy**: Altus embraces a stark, shadow-free aesthetic, prioritizing flat planes and clear content separation over simulated depth. Elevation is managed strictly through z-index for layering interactive and navigational elements, ensuring they are always accessible. The brand avoids soft shadows or gradients, maintaining a crisp, high-fidelity appearance that aligns with its institutional and precise identity.

## 7. Do's and Don'ts

### Do's

-   **Do** use `Nanum Myeongjo` `64px/400` for hero headlines and `Geist` `16px/400` for body text to maintain the established serif/sans pairing.
-   **Do** apply the brand's primary blue, `#0539a0`, for all Primary Buttons and interactive hover states on navigation links.
-   **Do** ensure all main body text uses `#0a0c11` on the `#e8eded` background, which has a contrast ratio of 16.55, passing AAA.
-   **Do** separate major content sections with at least `64px` of vertical spacing to maintain the generous whitespace philosophy.
-   **Do** use `0px` border-radius consistently across all buttons, inputs, and containers to reinforce the precise, unrounded aesthetic.
-   **Do** use the `0.15s cubic-bezier(.4, 0, .2, 1)` transition for all interactive elements like buttons and navigation links.
-   **Do** use `#f6f8f8` text on the `#0a0c11` dark footer background, which has a contrast ratio of 18.35, passing AAA.
-   **Do** maintain `80px` horizontal padding on main content areas to align with the established layout.

### Don'ts

-   **Don't** use `#ffffff` text directly on `#e1e3e3` backgrounds; this pair has a contrast ratio of 1.29 and fails AA accessibility standards.
-   **Don't** introduce `box-shadow` effects on cards or buttons; the design system strictly avoids them for a flat, clean aesthetic.
-   **Don't** deviate from the `4px` spacing scale (`4, 8, 16, 20, 24, 32, 40, 48, 64, 80, 128`); avoid arbitrary spacing values like `10px` or `30px`.
-   **Don't** use `Nanum Myeongjo` for body text; reserve it exclusively for headings and display to preserve its institutional impact.
-   **Don't** use a font weight other than `400` for H1 and H2 headings, as `700` is reserved specifically for H3.
-   **Don't** use any rounded corners; the brand's aesthetic is defined by sharp, `0px` edges.
-   **Don't** place primary `#0539a0` text on dark backgrounds; it is intended for light backgrounds to ensure sufficient contrast.
-   **Don't** use generic `text-decoration: underline` on standard links by default; apply it only on `:hover` to indicate interactivity.

## 8. Responsive Behavior

_Note: breakpoints below are measured from the source CSS. Adjust to the brand's actual media queries when implementing._

-   **Suggested Breakpoints**:
    -   **Mobile Small** (~320px): Content stacks vertically, typography scales down.
    -   **Mobile Large** (~600px): `min-width: 601px` · Navigation may transition to a hamburger menu; main content areas adjust padding.
    -   **Tablet** (~991px): `min-width: 992px` · Layouts may introduce 2-column grids; larger typography sizes become active.
    -   **Desktop** (~1200px): Standard desktop layout with full navigation and multi-column grids.
    -   **Desktop Large** (~1600px): Content adheres to the `1600px` max-width, with increased horizontal padding.

-   **Touch Targets**:
    -   Interactive elements like buttons and navigation links should maintain a minimum touch target size of `44px` by `44px` (inferred from screenshot).
    -   Ensure a minimum of `16px` (spacing scale value) clear space around touch targets to prevent accidental taps.

-   **Collapsing Strategy**:
    -   **Navigation**: At `min-width: 601px`, the top navigation bar transitions from a full list of links to a more compact, potentially hamburger-style menu (inferred).
    -   **Cards**: Content containers and cards will stack vertically on mobile breakpoints, maintaining `24px` vertical spacing between them.
    -   **Typography**: Display and heading font sizes will scale down on smaller viewports (`min-width: 601px`) to ensure readability and fit within the available width.
    -   **Padding**: Horizontal page padding will reduce from `80px` to `24px` on mobile (`min-width: 601px`) to maximize content area.
    -   **Forms**: Input fields will take full width on mobile, and labels will stack above their respective inputs.
    -   **Spacing**: The overall spacing scale will remain consistent, but larger values (e.g., `64px`, `80px`) may be reduced to `32px` or `48px` for vertical rhythm on mobile.

## 9. Agent Prompt Guide

-   **Quick Color Reference**
    -   `primary`: `#0539a0`
    -   `primary-hover`: `#042c80`
    -   `primary-active`: `#032060`
    -   `background`: `#e8eded`
    -   `text-primary`: `#0a0c11`
    -   `text-muted`: `#3a3c3c`
    -   `text-inverse`: `#ffffff`
    -   `surface-light`: `#e1e3e3`
    -   `dark-surface`: `#0a0c11`
    -   `dark-text`: `#f6f8f8`

-   **Iteration Guide**
    1.  Always use `Nanum Myeongjo` for all headings and `Geist` for all body text.
    2.  Ensure Primary Buttons use `background-color: #0539a0` and `color: #ffffff`, with `0px` border-radius.
    3.  Apply `padding: 12px 24px` to all buttons for consistent sizing.
    4.  Utilize the `4px` spacing base and its derived scale (`4, 8, 16, 20, 24, 32, 40, 48, 64, 80, 128`) for all layout and component spacing.
    5.  Maintain `0px` border-radius for all UI elements, including inputs and containers.
    6.  For text inputs, the `:focus` state must have `border-color: #0539a0` and a subtle `box-shadow` focus ring.
    7.  Navigation links should transition `color` to `#0539a0` on `:hover` with `0.15s cubic-bezier(.4, 0, .2, 1)` easing.
    8.  Ensure all body text (`#0a0c11`) on the main background (`#e8eded`) passes AAA contrast (16.55:1).
    9.  The footer must use `dark-surface: #0a0c11` as its background and `dark-text: #f6f8f8` for text.
    10. Implement `gsap`-driven animations for subtle micro-interactions, like the `heroScrollBounce` animation.
    11. Design for a `1600px` max-width content area, with ample `80px` horizontal padding on desktop.
    12. On mobile (`min-width: 601px`), collapse navigation into a compact form and reduce horizontal padding to `24px`.