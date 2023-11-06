export default function ImageLoader({ src, width, quality }) {
  const params = `w=${width}&q=${quality || 75}`;
  const joinSymbol = src.includes('?') ? '&' : '?';
  return `${src}${joinSymbol}${params}`;
}
