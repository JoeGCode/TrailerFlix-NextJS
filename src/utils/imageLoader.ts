import { ImageLoaderProps } from "next/image";
import { TMDB_IMAGE_BASE_URL } from "./constants/tmdb";

export default function imageLoader({ src, width }: ImageLoaderProps) {
  // TMDB images will just be passed as their filename, not the full URL
  // So check for full URL images

  if (src.startsWith("http")) {
    // Check for YouTube thumbnails
    if (src.includes("ytimg")) {
      // YouTube thumbnail source should be passed as https://i.ytimg.com/vi_webp/${video.key}
      // So we just need to append the filename
      let filename = "maxresdefault.webp";

      // Might add others, but there seems to be only 2 16:9 sizes for now
      if (width <= 320) {
        filename = "mqdefault.webp";
      }

      return `${src}/${filename}`;
    } else {
      return src;
    }
  }

  // SHOULD be TMDB images now

  // FIlename may or may not start with a leading slash
  const normalizedFilename = src.startsWith("/") ? src.slice(1) : src;

  let size = "w500"; // fallback size
  if (width <= 92) {
    size = "w92";
  } else if (width <= 154) {
    size = "w154";
  } else if (width <= 185) {
    size = "w185";
  } else if (width <= 342) {
    size = "w342";
  } else if (width <= 500) {
    size = "w500";
  } else if (width <= 780) {
    size = "w780";
  } else if (width <= 1280) {
    size = "w1280";
  } else {
    size = "original";
  }

  return `${TMDB_IMAGE_BASE_URL}/${size}/${normalizedFilename}`;
}
