import type { CSSProperties } from 'react';
/** Circular icon-only control for toolbars, cards and dialog dismissal. */
export interface IconButtonProps {
  /** Lucide icon slug. @default "x" */
  icon?: string;
  /** @default "outline" */
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible name — always supply one. */
  label?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
