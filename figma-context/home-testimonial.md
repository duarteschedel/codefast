# Testimonial Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3803&m=dev`
**Node ID:** `90:3803`
**Section:** Testimonial
**Dimensions:** 1440 × 636px

## Design Styles

- **Heading/Heading 1:** Font(family: "Inter", style: Regular, size: 65, weight: 400, lineHeight: 65, letterSpacing: -4)
- **Single text/Single text 1:** Font(family: "Inter", style: Semi Bold, size: 24, weight: 600, lineHeight: 32, letterSpacing: -0.5)
- **Heading/Heading 4 (Reguler):** Font(family: "Inter", style: Regular, size: 30, weight: 400, lineHeight: 38, letterSpacing: -1)
- **Body/Body 4:** Font(family: "Inter", style: Regular, size: 18, weight: 400, lineHeight: 26, letterSpacing: -0.3)

## Image Assets

| Figma Reference | Local Path | Usage |
|-----------------|------------|-------|
| image 16 | `images/57cd86eaec4b399b54263e873dd87745943b8f88.png` | Testimonial background |

## Node Structure

```xml
<frame id="90:3803" name="Testimoni" width="1440" height="636">
  <!-- padding: 40px 0, centered -->
  <frame id="90:3804" name="Testimoni" x="60" width="1320" height="556" — rounded-xl, overflow hidden>
    <!-- Background image: 57cd86ea...png, covers full area -->
    <frame id="90:3805" name="Group 412" — background image container />

    <!-- Overlay content, positioned at left with padding 80px -->
    <text id="90:3810" style="font-size:30px; line-height:38px; letter-spacing:-1px; color:white; opacity:0.5; margin-bottom:48px">
      What people said
    </text>

    <text id="90:3808" style="font-size:65px; line-height:65px; letter-spacing:-4px; color:white; width:511px; margin-bottom:24px">
      Love the way they handle the order.
    </text>

    <text id="90:3811" style="font-size:18px; line-height:26px; letter-spacing:-0.3px; color:white; opacity:0.8; width:510px; margin-bottom:40px">
      Very professional and friendly at the same time. They packed the order on schedule and the detail of their wrapping is top notch. One of my best experience for buying online items. Surely will come back for another purchase.
    </text>

    <text id="90:3809" style="font-size:24px; font-weight:600; line-height:32px; letter-spacing:-0.5px; color:white">
      Samantha William
    </text>

    <text id="90:3812" style="font-size:14px; color:white; opacity:0.5">
      Fashion Enthusiast
    </text>
  </frame>
</frame>
```

## Key Design Specs

- **Section padding:** `padding: 40px 0`
- **Card:** margin-inline 60px, border-radius xl (16px), overflow hidden, min-height 556px
- **Background image:** absolute, covers full card area via object-fit cover
- **Overlay:** relative z-index, padding 80px, max-width 520px
- **"What people said":** Inter Regular 30px, white, opacity 0.5, margin-bottom 48px
- **Quote:** Inter Regular 65px, line-height 65px, letter-spacing -4px, white, margin-bottom 24px
- **Body text:** Inter Regular 18px, line-height 26px, white, opacity 0.8, margin-bottom 40px
- **Author name:** Inter SemiBold 24px, line-height 32px, letter-spacing -0.5px, white
- **Author role:** Inter Regular 14px, white, opacity 0.5
