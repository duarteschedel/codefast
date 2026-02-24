# Explore by Colors Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3790&m=dev`
**Node ID:** `90:3790`
**Section:** Explore by Colors
**Dimensions:** 1440 × 210px

## Design Styles

- **Heading/Heading 2:** Font(family: "Inter", style: Regular, size: 60, weight: 400, lineHeight: 65, letterSpacing: -3)

## Node Structure

```xml
<frame id="90:3790" name="Explore by Colors" width="1440" height="210">
  <!-- padding-inline: 60px -->
  <frame id="90:3791" name="Content" width="1320" — flex, gap:100px, align:center, border-top, py:40px>
    <text id="90:3792" style="font-size:60px; line-height:65px; letter-spacing:-3px; color:#121212; width:256px">
      Explore\nby Colors
    </text>
    <frame id="90:3793" name="Button" width="841" — flex-wrap, gap:10px>
      <instance name="Button" variant="Red" textColor="RED PASTEL" — 182x57, border #121212, rounded-200px, gap:12px, pl:12px pr:20px />
      <instance name="Button" variant="Neon" textColor="LIME GREEN" — 182x57 />
      <instance name="Button" variant="Navy" textColor="NAVY BLUE" — 175x57 />
      <instance name="Button" variant="White" textColor="CLEAN WHITE" — 198x57 />
      <instance name="Button" variant="Blue sky" textColor="BLUE SKY" — 162x57 />
      <instance name="Button" variant="Purple" textColor="PURPLE" — 144x57 />
      <instance name="Button" variant="Pink" textColor="PINK" — 118x57 />
      <instance name="Button" variant="Yellow" textColor="YELLOW" — 149x57 />
      <instance name="Button" variant="Dark green" textColor="DARK GREEN" — 188x57 />
    </frame>
  </frame>
</frame>
```

## Key Design Specs

- **Section padding:** `padding-inline: 60px`
- **Container:** flex, align-items center, gap 100px, border-top 1px solid rgba(0,0,0,0.1), padding-block 40px
- **Title:** Inter Regular 60px, line-height 65px, letter-spacing -3px, color #121212, width 256px
- **Color pills:** each 57px tall, rounded-200px (pill), border 1px solid #121212, padding 12px left / 20px right, gap 12px between dot and label
- **Color dot:** 33px circle, each variant has a different fill color
- **Label text:** Inter SemiBold 16px, tracking 1px, color #121212
- **Color values:** RED PASTEL (#e74c3c), LIME GREEN (#a8e619), NAVY BLUE (#1a237e), CLEAN WHITE (#ffffff), BLUE SKY (#4fc3f7), PURPLE (#9c27b0), PINK (#e91e90), YELLOW (#fdd835), DARK GREEN (#2e7d32)
