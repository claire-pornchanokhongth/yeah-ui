import type { CSSProperties } from 'react';
/** Transient confirmation or error notice. */
export interface ToastProps {
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  message?: string;
  /** Override the tone's default Lucide glyph. */
  icon?: string;
  onDismiss?: () => void;
  style?: CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
