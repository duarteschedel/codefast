# Figma Context Files

This directory contains pre-exported Figma MCP output for workshop participants who **do not have a Figma dev seat**. The `@figma2code` agent is the same in both cases — only the prompt changes.

## Two Ways to Use the Same Agent

### Option A — With Figma MCP (you have a Figma dev seat)

Your prompt tells the agent to fetch directly from Figma:

```
@figma2code Fetch the design context from the Figma MCP for this URL:
https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3658&m=dev

Use get_screenshot and get_design_context with:
- clientLanguages: "typescript,html,scss"
- clientFrameworks: "angular"
- dirForAssetWrites: "public/images"

Then implement the home page using the existing design system components.
```

### Option B — Without Figma MCP (no dev seat)

Your prompt tells the agent to read the pre-exported context files instead:

```
@figma2code Read the design context from the following files:
- figma-context/home-hero.md
- figma-context/home-trending.md
- figma-context/home-colors.md
- figma-context/home-testimonial.md
- figma-context/home-service.md
- figma-context/home-blog.md

Then implement the home page using the existing design system components.
Image assets are already in public/images/.
```

You can also do it one section at a time:

```
@figma2code Read the design context from figma-context/home-testimonial.md
and implement the testimonial section using the design system components.
```

## Available Context Files

Each file contains the real Figma MCP output for a section of the home page, including node structure, design specs, image asset paths, and the raw generated code (React+Tailwind that the agent converts to Angular).

**Figma source:** [E-commerce Website UI Kit — Paperpillar (Community)](https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3658&m=dev)

| File | Section | Figma Node |
|------|---------|------------|
| `home-hero.md` | Hero banner + Navigation + Casual Inspirations | `90:3659` |
| `home-trending.md` | Trending products grid | `90:3734` |
| `home-colors.md` | Explore by Colors | `90:3790` |
| `home-testimonial.md` | Testimonial | `90:3803` |
| `home-service.md` | Service features | `90:3813` |
| `home-blog.md` | Blog feature | `90:3831` |
