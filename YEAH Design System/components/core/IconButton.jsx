import React from 'react';
import { Icon } from './Icon.jsx';
const SIZES={sm:32,md:44,lg:56};
const VARIANTS={
  primary:{background:'var(--yeah-pink)',color:'var(--text-on-pink)',borderColor:'var(--yeah-black)'},
  secondary:{background:'var(--yeah-yellow)',color:'var(--text-on-yellow)',borderColor:'var(--yeah-black)'},
  dark:{background:'var(--yeah-black)',color:'var(--text-on-dark)',borderColor:'var(--yeah-black)'},
  outline:{background:'var(--yeah-white)',color:'var(--text-heading)',borderColor:'var(--yeah-black)'},
  ghost:{background:'transparent',color:'var(--text-heading)',borderColor:'transparent'}
};
export function IconButton({icon='x',variant='outline',size='md',label,disabled=false,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);const [down,setDown]=React.useState(false);
  const px=SIZES[size]||SIZES.md, v=VARIANTS[variant]||VARIANTS.outline, flat=variant==='ghost';
  const lifted=hover&&!disabled&&!down&&!flat;
  return React.createElement('button',{type:'button','aria-label':label||icon,disabled,onClick,
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setDown(false)},
    onMouseDown:()=>setDown(true),onMouseUp:()=>setDown(false),
    style:{display:'inline-flex',alignItems:'center',justifyContent:'center',width:px,height:px,flex:'none',
      border:'var(--border-width) solid '+v.borderColor,borderRadius:'var(--radius-circle)',background:v.background,color:v.color,
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,
      boxShadow:flat?'none':(down?'none':(hover?'var(--shadow-block)':'var(--shadow-block-sm)')),
      transform:'translate('+(lifted?'-1px':'0')+','+(lifted?'-1px':'0')+')',
      transition:'var(--transition-control)',...style},...rest},
    React.createElement(Icon,{name:icon,size:px<=32?16:px<=44?20:24}));
}
