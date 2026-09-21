import type { ReactNode, CSSProperties } from 'react';
/** Small uppercase status pill — event state, membership tier, "new". */
export interface BadgeProps {
  /** @default "pink" */
  tone?: 'pink' | 'yellow' | 'dark' | 'white' | 'success';
  /** Transparent fill, coloured text. @default false */
  outline?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
