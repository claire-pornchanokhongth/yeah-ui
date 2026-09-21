import type { CSSProperties, ChangeEvent } from 'react';
/** Native select with the brand's rule, radius and chevron. */
export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  style?: CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
