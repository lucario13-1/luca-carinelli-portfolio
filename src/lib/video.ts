/**
 * True if `video` points at a local file under /public (e.g.
 * "/videos/demo.mp4") rather than a YouTube/Vimeo link. Local files render
 * with a native <video> player instead of an iframe embed.
 */
export function isLocalVideoFile(url?: string): boolean {
  if (!url) return false;
  return /^\/.*\.(mp4|mov|webm)$/i.test(url);
}

/**
 * Converts a normal YouTube/Vimeo share URL (what you'd paste from the
 * browser address bar) into an embeddable iframe URL. Returns undefined
 * for an empty/missing value so callers can fall back to a placeholder.
 */
export function getEmbedUrl(url?: string): string | undefined {
  if (!url) return undefined;

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return url;
}
