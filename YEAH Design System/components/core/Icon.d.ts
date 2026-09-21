import type { CSSProperties } from 'react';
/**
 * Lucide glyph fetched from jsDelivr and inlined as SVG; strokes inherit currentColor. SUBSTITUTED SET — the YEAH CI supplied no icon library.
 */
export interface IconProps {
  /** Lucide icon slug, e.g. "arrow-right", "calendar", "users". @default "circle" */
  name?: string;
  /** Pixel box. @default 20 */
  size?: number;
  /** @default "currentColor" */
  color?: string;
  style?: CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
