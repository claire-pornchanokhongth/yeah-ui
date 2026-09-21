import React from 'react';
import { Icon } from './Icon.jsx';
export function Tag({selected=false,onSelect,onRemove,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const interactive=!!onSelect;
  return React.createElement('span',{onClick:onSelect,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
    style:{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',height:'32px',padding:'0 var(--space-4)',
      fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:'var(--weight-medium)',lineHeight:1,
      background:selected?'var(--yeah-black)':(hover&&interactive?'var(--yeah-yellow-100)':'var(--yeah-white)'),
      color:selected?'var(--text-on-dark)':'var(--text-body)',
      border:'var(--border-width) solid var(--yeah-black)',borderRadius:'var(--radius-pill)',
      cursor:interactive?'pointer':'default',transition:'var(--transition-control)',...style},...rest},
    children,
    onRemove?React.createElement('span',{onClick:e=>{e.stopPropagation();onRemove(e)},style:{display:'inline-flex',cursor:'pointer',opacity:.6}},React.createElement(Icon,{name:'x',size:14})):null);
}
