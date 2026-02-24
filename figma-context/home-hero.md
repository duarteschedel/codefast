# Hero Section — Figma MCP Design Context

**Source:** `https://www.figma.com/design/4UaOYHjlcCR0HDcoA3Il13/E-commerce-Website-UI-Kit---Paperpillar--Community-?node-id=90-3659&m=dev`
**Node ID:** `90:3659`
**Section:** Hero section (includes Navigation, Hero banner, and Casual Inspirations)
**Dimensions:** 1440 × 1272px

## Design Styles

- **Display/Display 1:** Font(family: "Inter", style: Regular, size: 90, weight: 400, lineHeight: 75, letterSpacing: -5)
- **Display/Display 3:** Font(family: "Inter", style: Regular, size: 40, weight: 400, lineHeight: 40, letterSpacing: -3)
- **Heading/Heading 1:** Font(family: "Inter", style: Regular, size: 65, weight: 400, lineHeight: 65, letterSpacing: -4)
- **Shade / 700:** #2E3A59

## Image Assets

| Figma Reference | Local Path | Usage |
|-----------------|------------|-------|
| image 3 | `images/3071b1fc729091cd0452fb9d0b89106ceec16368.png` | Hero main card background |
| image 5 | `images/17aa3a2f29a85f64d93c41afa6b64d31b3a88038.png` | Side card "Outdoor Active" |
| image 6 | `images/837e11f00233936f837e7b69d6a545511b1ba132.png` | Side card "Casual Comfort" |
| image 7 | `images/5e143183ca0df25c3d226a223269e70541e09760.png` | Inspiration card "Say it with Shirt" |
| image 8 | `images/b0b782c02a24c60e5479cec788203caf906828d8.png` | Inspiration card "Funky never get old" |

## Node Structure

```xml
<frame id="90:3659" name="Hero section" width="1440" height="1272">
  <frame id="90:3669" name="Navigation" width="1440" height="80">
    <text id="90:3670" name="Logo">ECOMMERCE</text>
    <frame id="90:3672" name="Search" width="312" height="34">
      <text>Search here</text>
    </frame>
    <frame id="90:3675" name="Category">
      <text>All Category</text>
      <text>Gift Cards</text>
      <text>Special Event</text>
    </frame>
    <frame id="90:3685" name="Icon"> <!-- heart, user, cart icons --> </frame>
  </frame>

  <frame id="90:3692" name="Hero section" width="1440" height="1192">
    <!-- Main hero + side cards -->
    <frame id="90:3693" name="Content" width="1440" height="770">
      <frame id="90:3694" name="Card" x="60" width="958" height="770">
        <!-- Main hero image: 3071b1fc...png -->
        <frame id="90:3698" name="Title & CTA" x="60" y="60" width="328">
          <text id="90:3700" style="font-size:90px; line-height:75px; letter-spacing:-5px; color:white">
            Color of\nSummer\nOutfit
          </text>
          <text id="90:3701" style="font-size:18px; line-height:26px; color:white; opacity:0.8">
            100+ Collections for your outfit inspirations in this summer
          </text>
          <instance id="90:3702" name="Button" variant="Default" text="VIEW COLLECTIONS" />
        </frame>
      </frame>

      <frame id="90:3703" name="Photos" x="1028" width="352" height="770">
        <frame id="90:3704" name="Card" height="380">
          <!-- image: 17aa3a2f...png -->
          <text style="font-size:40px; line-height:40px; letter-spacing:-3px; color:#121212">
            Outdoor\nActive
          </text>
        </frame>
        <frame id="90:3708" name="Card" height="380">
          <!-- image: 837e11f0...png -->
          <text style="font-size:40px; line-height:40px; letter-spacing:-3px; color:#121212">
            Casual\nComfort
          </text>
        </frame>
      </frame>
    </frame>

    <!-- Casual Inspirations -->
    <frame id="90:3713" name="Content" width="1440" height="380">
      <frame id="90:3714" name="Title & CTA" width="411">
        <text id="90:3716" style="font-size:65px; line-height:65px; letter-spacing:-4px; color:#121212">
          Casual\nInspirations
        </text>
        <text id="90:3717" style="font-size:18px; line-height:26px; color:#121212; opacity:0.8">
          Our favorite combinations for casual outfit that can inspire you to apply on your daily activity.
        </text>
        <instance name="Button" variant="Outline black" text="BROWSE INSPIRATIONS" />
      </frame>

      <frame id="90:3719" name="Photos" width="969" height="380">
        <frame id="90:3720" name="Card" width="479" height="380">
          <!-- image: 5e143183...png -->
          <text style="font-size:40px; color:white">Say it\nwith Shirt</text>
          <frame name="arrow / short_right" size="50x50" /> <!-- circular arrow button -->
        </frame>
        <frame id="90:3727" name="Card" width="480" height="380">
          <!-- image: b0b782c0...png -->
          <text style="font-size:40px; color:white">Funky never\nget old</text>
          <frame name="arrow / short_right" size="50x50" /> <!-- circular arrow button -->
        </frame>
      </frame>
    </frame>
  </frame>
</frame>
```

## Key Design Specs

### Hero Banner
- **Container:** flex row, gap 10px, padding-inline 60px
- **Main card:** flex 1, min-height 770px, rounded, overflow hidden, image covers full area
- **Overlay:** padding 60px, flex-column, gap 28px, positioned relative above the image
- **Title:** Inter Regular 90px, white, line-height 75px, letter-spacing -5px
- **Subtitle:** Inter Regular 18px, white, opacity 0.8, max-width 328px
- **CTA:** primary button, large size, text "VIEW COLLECTIONS"
- **Side cards column:** width 352px, flex-column, gap 10px, two cards 380px tall each
- **Side card labels:** 40px Inter Regular, color #121212, padding 30px, positioned top-left

### Casual Inspirations
- **Layout:** flex row, space-between, align stretch, padding-inline 60px
- **Text column:** width 411px, flex-column, gap 40px, centered vertically
- **Title:** Inter Regular 65px, line-height 65px, letter-spacing -4px, color #121212
- **Description:** Inter Regular 18px, line-height 26px, opacity 0.8
- **CTA:** outline button, large size, text "BROWSE INSPIRATIONS"
- **Cards column:** `flex: 1` (CRITICAL — must fill remaining width), display flex, gap 10px
- **Each card:** flex 1 (shares space equally), height 380px, rounded, overflow hidden, image covers full area via position absolute
- **Card footer:** positioned absolute at bottom-left (30px inset), flex row, space-between
- **Card label:** 40px Inter Regular, white, line-height 40px
- **Arrow button:** 50px circle, white background, dark icon (arrow-up-right)

## MCP Generated Code (React + Tailwind — must be converted to Angular)

```tsx
const imgImage3 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/3071b1fc729091cd0452fb9d0b89106ceec16368.png";
const imgImage5 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/17aa3a2f29a85f64d93c41afa6b64d31b3a88038.png";
const imgImage7 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/837e11f00233936f837e7b69d6a545511b1ba132.png";
const imgImage8 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/6972db764beefc93072c91dba3bbf52a478ee908.png";
const imgImage10 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/5e143183ca0df25c3d226a223269e70541e09760.png";
const imgImage12 = "/Users/dmelosch/Desktop/Projects/codefast/figma2code-workshop/public/images/b0b782c02a24c60e5479cec788203caf906828d8.png";

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Hero section" data-node-id="90:3659">
      {/* Navigation: 1440x80, logo "ECOMMERCE", search bar, categories, icon bar */}
      {/* Hero content: main card 958x770 with image overlay, side cards 352x770 */}
      {/* Title: "Color of Summer Outfit" — 90px Inter Regular, white, line-height 75px, letter-spacing -5px */}
      {/* Subtitle: 18px, white, opacity 0.8 */}
      {/* CTA: Button "VIEW COLLECTIONS" — dark bg, 280x50, rounded-200px */}
      {/* Side cards: 352x380 each, image with top-left label 40px Inter Regular, #121212 */}
      {/* Inspirations: title 65px, description 18px, outline button "BROWSE INSPIRATIONS" */}
      {/* Inspiration cards: 479x380, image with bottom overlay label 40px white + 50px circular arrow button */}
    </div>
  );
}
```
