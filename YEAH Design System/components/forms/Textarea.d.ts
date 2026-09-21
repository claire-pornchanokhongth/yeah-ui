import type { CSSProperties, ChangeEvent } from 'react';
/** Multi-line text field. Same rules as Input. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  /** @default 4 */
  rows?: number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  style?: CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
