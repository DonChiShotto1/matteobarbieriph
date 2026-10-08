# Matteo Barbieri Photography

Portfolio: https://donchishotto1.github.io/matteobarbieriph/

## Image delivery

On screens up to 760 px wide, portfolio photos use the smaller previews in `t/` when the crop matches the full image. Larger screens and the five crop exceptions use the full JPEGs in `f/`. The full JPEGs remain in place as fallbacks.

When adding a photo, keep its matching preview in `t/`. If its crop differs from the full image, add its filename to `MOBILE_CROP_EXCEPTIONS` in `index.html` so mobile keeps the full version.
