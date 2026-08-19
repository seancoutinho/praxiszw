# tools

## `hero-scene.html`

Source for the hero background loop (`public/assets/video/hero.*`).

The animation is authored here rather than sourced as stock footage, so it uses
the brand palette directly and can be regenerated at any resolution or duration.
Open it in a browser to preview; `window.renderFrame(t)` draws the scene at loop
position `t` in `[0, 1)`. Canvas size comes from `?w=&h=`, and the scene lays
itself out differently once height exceeds width — see the `PORTRAIT` branches.

Two cuts are shipped:

| Cut | Size | Used |
|---|---|---|
| landscape | 1920×1080 | ≥ 768px |
| portrait | 600×1800 | < 768px |

Every motion has a period that divides evenly into the loop, so it repeats
without a seam. If you change anything, check that still holds — the trend-line
marker in particular runs end-to-end and is faded out at both ends so its
reset is never visible.

### Regenerating

Render 96 frames at `t = i / 96` at the cut's size, then:

```sh
ffmpeg -framerate 24 -i frames/f%04d.png \
  -c:v libvpx-vp9 -pix_fmt yuv420p -b:v 0 -crf 34 -row-mt 1 -g 48 -an hero.webm

ffmpeg -framerate 24 -i frames/f%04d.png \
  -c:v libx264 -pix_fmt yuv420p -profile:v high -preset veryslow -crf 26 \
  -g 48 -movflags +faststart -an hero.mp4

ffmpeg -i frames/f0000.png -vf scale=1600:-1 -q:v 6 hero-poster.jpg
```

The portrait MP4 uses `-crf 27` and the WebM `-crf 36`.

Two things to keep in mind if you change the footage:

1. The darkening baked into the scene is *not* what guarantees text contrast —
   `object-fit: cover` crops the frame differently at every hero size. That
   guarantee lives in `.hero-scrim` in `app/globals.css`. Re-check contrast on
   the **rendered page**, not on the frames.
2. Contrast is decided by the brightest pixel behind a line of text, which in
   practice means the node cores and the trend-line glow — not the overall
   brightness. That is why `KP` (point highlights) is boosted far less than `K`
   (broad marks) in the portrait cut. Raising `KP` costs contrast and buys
   almost nothing visually.
