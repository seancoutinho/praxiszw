# tools

## `hero-scene.html`

Source for the hero background loop (`public/assets/video/hero.*`).

The animation is authored here rather than sourced as stock footage, so it uses
the brand palette directly and can be regenerated at any resolution or duration.
Open it in a browser to preview; `window.renderFrame(t)` draws the scene at loop
position `t` in `[0, 1)`.

Every motion has a period that divides evenly into the loop, so it repeats
without a seam. If you change anything, check that still holds — the trend-line
marker in particular runs end-to-end and is faded out at both ends so its
reset is never visible.

### Regenerating

Render 96 frames at `t = i / 96` (1920×1080), then:

```sh
ffmpeg -framerate 24 -i frames/f%04d.png \
  -c:v libvpx-vp9 -pix_fmt yuv420p -b:v 0 -crf 34 -row-mt 1 -g 48 -an hero.webm

ffmpeg -framerate 24 -i frames/f%04d.png \
  -c:v libx264 -pix_fmt yuv420p -profile:v high -preset veryslow -crf 26 \
  -g 48 -movflags +faststart -an hero.mp4

ffmpeg -i frames/f0000.png -vf scale=1600:-1 -q:v 6 hero-poster.jpg
```

Note that the left-hand darkening baked into the scene is *not* what guarantees
text contrast — `object-fit: cover` crops the frame differently at every hero
aspect ratio. That guarantee lives in `.hero-scrim` in `app/globals.css`. If you
change the footage, re-check contrast on the rendered page, not on the frames.
