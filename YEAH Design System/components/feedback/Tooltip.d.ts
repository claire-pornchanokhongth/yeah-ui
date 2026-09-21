import type { ReactNode, CSSProperties } from 'react';
/** Hover/focus label for icon-only controls. */
export interface TooltipProps {
  /** Tooltip text — keep to a few words. */
  label?: string;
  /** @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: ReactNode;
  style?: CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
