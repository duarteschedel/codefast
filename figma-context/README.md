# Figma Context Files

This directory contains pre-exported Figma MCP output for workshop participants who **do not have a Figma dev seat**.

## For Participants WITH Figma Access

If you have a Figma dev seat, use the **@figma2code agent** directly in GitHub Copilot:

### Setup

1. Install the Figma MCP server in your IDE (VS Code / Cursor / etc.)
2. Configure it with your Figma personal access token
3. Use the `@figma2code` agent in Copilot Chat with a Figma URL

### Example Prompt

```
@figma2code Implement this Figma screen: https://figma.com/design/XXXX/MyFile?node-id=1-2

Use the existing design system components and save images to src/images/.
```

The agent will automatically:
1. Fetch the design context and screenshot from Figma via MCP
2. Map visual elements to the 16 design system components
3. Generate Angular code following project conventions
4. Verify the build compiles

## For Participants WITHOUT Figma Access

Use the context files in this directory as input for your Copilot prompts.

### How to Use

1. Open the relevant context file (e.g., `home-hero.md`)
2. Copy the design specifications
3. Include them in your Copilot prompt along with component references

### Template Prompt

```
@figma2code Based on the following Figma design context:

[PASTE CONTEXT FILE CONTENT HERE]

Implement the [SECTION_NAME] section using the design system components.
```

## Available Context Files

> Context files will be added here once the Figma design is finalized.
> Each file will contain the MCP output for a specific section of the home page.

| File | Section | Status |
|------|---------|--------|
| `home-hero.md` | Hero banner | Pending |
| `home-featured.md` | Featured products grid | Pending |
| `home-categories.md` | Category cards | Pending |
| `home-cta.md` | Newsletter CTA | Pending |

## Design System Reference

### Components — Full Catalog

#### Base Components
| Component | Selector | Key Inputs |
|-----------|----------|------------|
| Button | `<app-button>` | `variant`: primary/secondary/outline, `size`: sm/md/lg, `disabled`: boolean |
| Icon | `<app-icon>` | `name`: search/cart/heart/heart-fill/user/menu/arrow-right/arrow-up-right/star/chevron-down/phone/refresh, `size`: sm/md/lg |
| Badge | `<app-badge>` | `text`, `variant`: default/success/warning/error |
| Input | `<app-input>` | `label`, `placeholder`, `type`: text/email/password/search |
| Card | `<app-card>` | Slots: `[card-image]`, `[card-header]`, `[card-content]`, `[card-footer]` |
| SectionHeader | `<app-section-header>` | `title`, `subtitle` |

#### Atoms
| Component | Selector | Key Inputs |
|-----------|----------|------------|
| IconButton | `<app-icon-button>` | `icon`, `size`: sm/lg, `variant`: dark/light, `active`: boolean, `ariaLabel` |
| FilterChip | `<app-filter-chip>` | `label`, `active`: boolean |
| ColorPill | `<app-color-pill>` | `label`, `color` (hex) |

#### Molecules
| Component | Selector | Key Inputs |
|-----------|----------|------------|
| OverlayCard | `<app-overlay-card>` | `image`, `label`, `overlayPosition`: top/bottom, `height` |
| ProductCard | `<app-product-card>` | `name`, `price`, `image`, `loved`: boolean |
| ServiceFeature | `<app-service-feature>` | `icon`, `title`, `description` |

#### Organisms
| Component | Selector | Key Inputs |
|-----------|----------|------------|
| HeroBanner | `<app-hero-banner>` | `mainImage`, `title`, `subtitle`, `ctaLabel`, `sideCards[]` |
| ProductGrid | `<app-product-grid>` | `title`, `filters[]`, `products[]` |
| Testimonial | `<app-testimonial>` | `backgroundImage`, `quote`, `text`, `authorName`, `authorRole` |
| BlogFeature | `<app-blog-feature>` | `image`, `title`, `description`, `ctaLabel` |

### Design Tokens

Design tokens are defined in `src/styles/_variables.scss`:
- **Colors**: `$color-dark` (#121212), `$color-white`, `$color-love` (#f15353), primary (blue), secondary (purple), neutrals, semantics
- **Spacing**: 4px base scale (`$space-1` through `$space-24`)
- **Typography**: Inter font, sizes from `$text-xs` (12px) to `$text-display` (90px)
- **Borders**: `$radius-sm` (4px) through `$radius-full` (pill)
- **Shadows**: `$shadow-sm` through `$shadow-xl`
- **Breakpoints**: `$breakpoint-sm` (640px) through `$breakpoint-xl` (1280px)
