Read the design context from the following pre-exported Figma MCP files:
- figma-context/home-hero.md
- figma-context/home-trending.md
- figma-context/home-colors.md
- figma-context/home-testimonial.md
- figma-context/home-service.md
- figma-context/home-blog.md

These files contain the real Figma MCP output: node structure, design specs, typography, colors, image asset paths, and generated code (React+Tailwind to be converted).

Image assets are already saved in public/images/.

Implement the home page in src/app/features/home/ using the existing design system components. Reference images as `images/filename.png`.

After implementation, verify visually:
1. Run `npx ng serve` in the background
2. Use Playwright to navigate to http://localhost:4200 and take a full-page screenshot
3. Check for missing sections, wrong typography, broken images, or layout issues
4. Fix any visual discrepancies and re-verify
