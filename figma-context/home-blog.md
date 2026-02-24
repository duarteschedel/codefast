# Blog Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3831&m=dev`
**Node ID:** `90:3831`
**Section:** From The Blog
**Dimensions:** 1440 × 555px

## Design Styles

- **Heading/Heading 4 (Reguler):** Font(family: "Inter", style: Regular, size: 30, weight: 400, lineHeight: 38, letterSpacing: -1)
- **Heading/Heading 2:** Font(family: "Inter", style: Regular, size: 60, weight: 400, lineHeight: 65, letterSpacing: -3)
- **Body/Body 4:** Font(family: "Inter", style: Regular, size: 18, weight: 400, lineHeight: 26, letterSpacing: -0.3)

## Image Assets

| Figma Reference | Local Path | Usage |
|-----------------|------------|-------|
| image 18 | `images/ff3c0bb419ab7a36a466902e4bb611c667f4c3c4.png` | Blog featured image |

## Node Structure

```xml
<frame id="90:3831" name="Blog" width="1440" height="555">
  <!-- padding: 0 60px 120px -->
  <frame id="90:3832" name="Content" width="1320" — flex-col, gap:30px>

    <text id="90:3833" style="font-size:30px; line-height:38px; letter-spacing:-1px; color:#121212">
      From The Blog
    </text>

    <frame id="90:3834" name="Row" width="1320" height="367" — flex, space-between, align:center>

      <frame id="90:3835" name="Images" width="654" height="367" — rounded-xl, overflow hidden>
        <!-- image 18: ff3c0bb4...png, object-fit cover -->
      </frame>

      <frame id="90:3839" name="Content" width="606" — flex-col, gap:24px>
        <frame id="90:3840" — flex-col, gap:20px>
          <text id="90:3841" style="font-size:60px; line-height:65px; letter-spacing:-3px; color:#121212">
            How to combine your daily outfit to looks fresh and cool.
          </text>
          <text id="90:3842" style="font-size:18px; line-height:26px; letter-spacing:-0.3px; color:#121212; opacity:0.8; width:566px">
            Maybe you don't need to buy new clothes to have nice, cool, fresh looking outfit everyday. Maybe what you need is to combine your clothes collections. Mix and match is the key.
          </text>
        </frame>
        <instance name="Button" variant="Outline black" text="READ MORE" width="170" height="50" />
      </frame>

    </frame>
  </frame>
</frame>
```

## Key Design Specs

- **Section padding:** `padding: 0 60px 120px`
- **Section title:** Inter Regular 30px, line-height 38px, letter-spacing -1px, color #121212, margin-bottom 30px
- **Layout:** flex, space-between, align center, gap 40px
- **Image:** 654x367, border-radius xl (16px), overflow hidden, object-fit cover
- **Blog title:** Inter Regular 60px, line-height 65px, letter-spacing -3px, color #121212
- **Blog description:** Inter Regular 18px, line-height 26px, letter-spacing -0.3px, color #121212, opacity 0.8, max-width 566px
- **CTA button:** outline variant, 170x50, text "READ MORE"
