import type { ReactNode, CSSProperties } from 'react';
/**
 * Square-cornered content block with a 2px black rule and a hard offset shadow.
 * @startingPoint section="Core" subtitle="Square card, block shadow, five tones" viewport="700x260"
 */
export interface CardProps {
  /** @default "white" */
  tone?: 'white' | 'dark' | 'pink' | 'yellow' | 'sunken';
  /** Offset shadow treatment. @default "block" */
  shadow?: 'block' | 'lg' | 'pink' | 'yellow' | 'none';
  /** Adds hover lift + pointer. @default false */
  interactive?: boolean;
  /** @default "var(--space-6)" */
  padding?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
