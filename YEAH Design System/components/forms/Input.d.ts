import type { CSSProperties, ChangeEvent } from 'react';
/** Single-line text field with uppercase micro-label and a yellow focus ring. */
export interface InputProps {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces hint and turns the rule pink. */
  error?: string;
  /** @default "text" */
  type?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
