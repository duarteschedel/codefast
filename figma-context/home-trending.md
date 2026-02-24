# Trending Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3734&m=dev`
**Node ID:** `90:3734`
**Section:** Trending products grid
**Dimensions:** 1440 × 1058px

## Image Assets

| Figma Reference | Local Path | Product |
|-----------------|------------|---------|
| image 9 | `images/5a88e5962507976b1988e6d9a08599fcba5247bd.png` | Casual Shoe |
| image 11 | `images/0b42775b5c482fd10ff96fad137ae5ca5aa7a561.png` | Skateboard Shoe (1) |
| image 14 | `images/7150a0e902536ab1a554d315fc11f4ef6f9c1302.png` | Skateboard Shoe (2) |
| image 15 | `images/c8c225ce10fd34a19ed897401decf4c2dd4806d5.png` | Skateboard Shoe (3) |
| image 12 | `images/6202a986df950869c406241f2f48f416d0807241.png` | Basket Shoe |
| image 13 | `images/f8ae4065476b2a224ae85cd40fd6b1c7d34bc9ae.png` | Sportwear Shoe |

## Node Structure

```xml
<frame id="90:3734" name="Trending" width="1440" height="1058">
  <frame id="90:3735" name="Content" x="60" width="1320">
    <!-- border-top: 1px solid rgba(0,0,0,0.1), padding: 32px 0 -->

    <frame id="90:3737" name="Header" — flex, space-between>
      <text id="90:3738" style="font-size:30px; line-height:38px; letter-spacing:-1px; color:#121212">
        Trending
      </text>
      <frame id="90:3739" name="Frame 7" — flex, gap:10px>
        <!-- Filter pills: rounded-200px, height:50px, border:1px solid #ddd -->
        <instance name="Button" text="SHORTS" — border #ddd, text rgba(18,18,18,0.8), 14px Medium, tracking 1px />
        <instance name="Button" text="HAT" />
        <instance name="Button" text="JACKETS" />
        <instance name="Button" text="SHOES" — active: bg #121212, text white />
        <instance name="Button" text="T-SHIRT" />
      </frame>
    </frame>

    <frame id="90:3745" name="Shoes Card" — flex-col, gap:20px>
      <!-- Row 1: 3 cards -->
      <frame name="Row" — flex, gap:10px>
        <frame name="Card" width="322" height="450">
          <!-- Image area: 322x374, rounded, overflow hidden -->
          <!-- image 9: Casual Shoe photo -->
          <instance name="Love icon" variant="active" — 40x40 circle, bg #f15353, heart icon white />
          <text style="font-size:24px; font-weight:500; line-height:32px; letter-spacing:-1px">Casual Shoe</text>
          <text style="font-size:20px; font-weight:400; line-height:28px; opacity:0.8">$225</text>
        </frame>
        <frame name="Card" width="322" height="450">
          <!-- image 11: Skateboard Shoe photo -->
          <instance name="Love icon" variant="inactive" — bg rgba(18,18,18,0.2), heart outline white />
          <text>Skateboard Shoe</text>
          <text>$125</text>
        </frame>
        <frame name="Card" width="654" height="450">
          <!-- image 14: Skateboard Shoe photo -->
          <instance name="Love icon" variant="inactive" />
          <text>Skateboard Shoe</text>
          <text>$125</text>
        </frame>
      </frame>

      <!-- Row 2: 3 cards -->
      <frame name="Row" — flex, gap:10px>
        <frame name="Card" width="654" height="450">
          <!-- image 15: Skateboard Shoe photo -->
          <instance name="Love icon" variant="inactive" />
          <text>Skateboard Shoe</text>
          <text>$125</text>
        </frame>
        <frame name="Card" width="324" height="450">
          <!-- image 12: Basket Shoe photo -->
          <instance name="Love icon" variant="inactive" />
          <text>Basket Shoe</text>
          <text>$125</text>
        </frame>
        <frame name="Card" width="322" height="450">
          <!-- image 13: Sportwear Shoe photo -->
          <instance name="Love icon" variant="inactive" />
          <text>Sportwear Shoe</text>
          <text>$159</text>
        </frame>
      </frame>
    </frame>
  </frame>
</frame>
```

## Key Design Specs

- **Section padding:** `padding-inline: 60px`
- **Border top:** `1px solid rgba(0,0,0,0.1)`
- **Header:** flex, space-between, margin-bottom 24px
- **Title:** Inter Regular 30px, line-height 38px, letter-spacing -1px, color #121212
- **Filter pills:** height 50px, rounded-200px (pill), border 1px solid #ddd, font 14px Inter Medium, tracking 1px, color rgba(18,18,18,0.8). Active: bg #121212, text white
- **Product grid:** 3 columns, gap 10px between cards
- **Product card image area:** rounded corners, 374px tall, overflow hidden
- **Love icon:** 40x40 circle, positioned top-right (20px inset). Inactive: bg rgba(18,18,18,0.2). Active: bg #f15353
- **Product name:** Inter Medium 24px, line-height 32px, letter-spacing -1px, color #121212
- **Product price:** Inter Regular 20px, line-height 28px, opacity 0.8, color #121212
