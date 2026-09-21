import type { ReactNode, CSSProperties } from 'react';
/**
 * The brand's primary action. Pill-shaped, 2px black outline, hard offset block shadow.
 * @startingPoint section="Core" subtitle="Pill button, four brand variants" viewport="700x150"
 */
export interface ButtonProps {
  /** Fill treatment. @default "primary" */
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Stretch to container width. @default false */
  block?: boolean;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** Renders an <a> when set. */
  href?: string;
  as?: 'button' | 'a' | 'div';
  onClick?: (e: React.MouseEvent) => void;
  style?: CSSProperties;
  children?: ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
