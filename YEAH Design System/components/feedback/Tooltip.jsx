import React from 'react';

export function Tooltip({label,placement='top',children,style,...rest}){
  const [open,setOpen]=React.useState(false);
  const pos=placement==='bottom'?{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}
    :placement==='left'?{right:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}
    :placement==='right'?{left:'calc(100% + 8px)',top:'50%',transform:'translateY(-50%)'}
    :{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'};
  return React.createElement('span',{onMouseEnter:()=>setOpen(true),onMouseLeave:()=>setOpen(false),
    onFocus:()=>setOpen(true),onBlur:()=>setOpen(false),
    style:{position:'relative',display:'inline-flex',...style},...rest},
    children,
    React.createElement('span',{role:'tooltip',
      style:{position:'absolute',...pos,zIndex:50,whiteSpace:'nowrap',pointerEvents:'none',
        padding:'6px var(--space-3)',background:'var(--yeah-black)',color:'var(--text-on-dark)',
        fontFamily:'var(--font-body)',fontSize:'var(--text-xs)',fontWeight:'var(--weight-medium)',
        borderRadius:'var(--radius-xs)',opacity:open?1:0,
        transition:'opacity var(--duration-fast) var(--ease-out)'}},label));
}
