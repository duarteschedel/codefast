# Service Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3813&m=dev`
**Node ID:** `90:3813`
**Section:** Service features
**Dimensions:** 1440 × 558px

## Design Styles

- **Heading/Heading 2:** Font(family: "Inter", style: Regular, size: 60, weight: 400, lineHeight: 65, letterSpacing: -3)
- **Heading/Heading 4 (Medium):** Font(family: "Inter", style: Medium, size: 30, weight: 500, lineHeight: 40, letterSpacing: -1)
- **Body/Body 4:** Font(family: "Inter", style: Regular, size: 18, weight: 400, lineHeight: 26, letterSpacing: -0.3)

## Node Structure

```xml
<frame id="90:3813" name="Service" width="1440" height="558">
  <!-- border-top: 1px solid rgba(0,0,0,0.1), padding: 40px 60px, flex-col, gap:56px -->

  <text id="90:3814" style="font-size:60px; line-height:65px; letter-spacing:-3px; color:#121212; max-width:558px">
    Why you'll love to shop on our website
  </text>

  <frame id="90:3815" name="Frame 422" width="1320" — flex, gap:45px, align:center>

    <frame id="90:3816" name="Service" width="410" — flex-col, gap:24px>
      <instance id="90:3817" name="Icon" icon="Love" — 120x120 circle, bg #121212 />
      <!-- Icon: heart-fill, 48x48, white, centered in circle -->
      <frame id="90:3818" — flex-col, gap:4px>
        <text id="90:3819" style="font-size:30px; font-weight:500; line-height:40px; letter-spacing:-1px; color:#121212">
          Take care with love
        </text>
        <text id="90:3820" style="font-size:18px; line-height:26px; letter-spacing:-0.3px; color:#121212; opacity:0.8">
          We take care your package with full of attention and of course full of love. We want to make sure you'll receive your package like you receive your birthday gift.
        </text>
      </frame>
    </frame>

    <frame id="90:3821" name="Service" width="410" — flex-col, gap:24px>
      <instance id="90:3822" name="Icon" icon="Call" — 120x120 circle, bg #121212 />
      <!-- Icon: phone, 48x48, white, centered in circle -->
      <frame id="90:3823" — flex-col, gap:4px>
        <text id="90:3824" style="font-size:30px; font-weight:500; line-height:40px; letter-spacing:-1px">
          Friendly Customer Service
        </text>
        <text id="90:3825" style="font-size:18px; line-height:26px; opacity:0.8">
          You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.
        </text>
      </frame>
    </frame>

    <frame id="90:3826" name="Service" width="410" — flex-col, gap:24px>
      <instance id="90:3827" name="Icon" icon="Refund" — 120x120 circle, bg #121212 />
      <!-- Icon: refresh, 48x48, white, centered in circle -->
      <frame id="90:3828" — flex-col, gap:4px>
        <text id="90:3829" style="font-size:30px; font-weight:500; line-height:40px; letter-spacing:-1px">
          Refund Process
        </text>
        <text id="90:3830" style="font-size:18px; line-height:26px; opacity:0.8">
          Refund is a such bad experience and we don't want that thing happen to you. But when it's happen we will make sure you will through smooth and friendly process.
        </text>
      </frame>
    </frame>

  </frame>
</frame>
```

## Key Design Specs

- **Section:** border-top 1px solid rgba(0,0,0,0.1), padding 40px 60px
- **Section title:** Inter Regular 60px, line-height 65px, letter-spacing -3px, color #121212, max-width 558px, margin-bottom 56px
- **Service grid:** flex, gap 45px
- **Service item:** width 410px, flex-col, gap 24px
- **Icon circle:** 120x120, bg #121212, rounded-full, icon 48x48 white centered (scale 2x of 24px base)
- **Item title:** Inter Medium 30px, line-height 40px, letter-spacing -1px, color #121212
- **Item description:** Inter Regular 18px, line-height 26px, letter-spacing -0.3px, color #121212, opacity 0.8
- **Icons used:** heart-fill (Love), phone (Call), refresh (Refund)
