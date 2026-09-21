import type { CSSProperties, ChangeEvent } from 'react';
/** Single-choice control. Circular, pink dot. */
export interface RadioProps {
  label?: string;
  /** Group name — required for real radio behaviour. */
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
