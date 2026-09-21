import type { CSSProperties } from 'react';
/** Immediate on/off toggle for settings. */
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Receives the new boolean, not an event. */
  onChange?: (next: boolean) => void;
  id?: string;
  style?: CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
