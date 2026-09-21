import type { ReactNode, CSSProperties } from 'react';
/** Centred modal over a blurred black scrim. */
export interface DialogProps {
  open?: boolean;
  title?: string;
  /** Sub-line under the title. */
  description?: string;
  onClose?: () => void;
  /** Action row, usually Buttons. */
  footer?: ReactNode;
  /** Max width in px. @default 520 */
  width?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element | null;
