import type { CSSProperties } from 'react';
/** Horizontal section switcher. */
export interface TabsProps {
  /** Strings, or {value,label} pairs. */
  items?: Array<string | { value: string; label: string }>;
  /** Controlled active value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** `underline` for page sections, `pill` for in-card filters. @default "underline" */
  variant?: 'underline' | 'pill';
  style?: CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
