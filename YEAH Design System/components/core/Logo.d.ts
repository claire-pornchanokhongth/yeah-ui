import type { CSSProperties } from 'react';
/** The YEAH mark. Never redraw, recolour or add effects to it. */
export interface LogoProps {
  /** `lockup` = mark + tagline (black type), `knockout` = mark + white tagline for dark grounds, `mark` = glyph only. @default "lockup" */
  variant?: 'lockup' | 'knockout' | 'mark';
  /** Rendered height in px. @default 48 */
  height?: number;
  /** Path prefix to /assets/, relative to the consuming page. @default "../../assets/" */
  basePath?: string;
  style?: CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
