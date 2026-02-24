Fetch the design context from the Figma MCP for this URL:
${{figma_url}}

Use get_screenshot and get_design_context on each section node with:
- clientLanguages: "typescript,html,scss"
- clientFrameworks: "angular"
- artifactType: "COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN"
- dirForAssetWrites: "public/images"

If the full page is too large, use get_metadata first to get the node tree, then call get_design_context on each child section individually.

Then implement the screen in src/app/features/home/ using the existing design system components. Reference images as `images/filename.png`.

After implementation, verify visually:
1. Run `npx ng serve` in the background
2. Use Playwright to navigate to http://localhost:4200 and take a full-page screenshot
3. Compare the screenshot against the Figma design (use get_screenshot to fetch the Figma reference)
4. Fix any visual discrepancies and re-verify
