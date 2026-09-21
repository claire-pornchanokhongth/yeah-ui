import type { CSSProperties, ChangeEvent } from 'react';
/** Square checkbox, pink when checked. */
export interface CheckboxProps {
  label?: string;
  /** Controlled state. */
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
