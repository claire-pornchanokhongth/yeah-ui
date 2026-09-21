import type { ReactNode, CSSProperties } from 'react';
/** Filter chip / topic label. Toggleable and optionally removable. */
export interface TagProps {
  /** Filled black when true. @default false */
  selected?: boolean;
  /** Makes the tag clickable. */
  onSelect?: (e: React.MouseEvent) => void;
  /** Adds a dismiss × . */
  onRemove?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  style?: CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
