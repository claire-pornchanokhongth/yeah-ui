import React from 'react';

const TONES={
  white:{background:'var(--surface-card)',color:'var(--text-body)'},
  dark:{background:'var(--yeah-black)',color:'var(--text-on-dark)'},
  pink:{background:'var(--yeah-pink)',color:'var(--text-on-pink)'},
  yellow:{background:'var(--yeah-yellow)',color:'var(--text-on-yellow)'},
  sunken:{background:'var(--surface-sunken)',color:'var(--text-body)'}
};
export function Card({tone='white',shadow='block',interactive=false,padding='var(--space-6)',onClick,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const t=TONES[tone]||TONES.white;
  const shadowVar=shadow==='none'?'none':shadow==='pink'?'var(--shadow-block-pink)':shadow==='yellow'?'var(--shadow-block-yellow)':shadow==='lg'?'var(--shadow-block-lg)':'var(--shadow-block)';
  const lift=interactive&&hover;
  return React.createElement('div',{onClick,onMouseEnter:()=>setHover(true),onMouseLeave:()=>setHover(false),
    style:{background:t.background,color:t.color,padding,borderRadius:'var(--radius-card)',
      border:'var(--border-width) solid var(--border-strong)',
      boxShadow:lift?'var(--shadow-block-lg)':shadowVar,
      transform:'translate('+(lift?'var(--lift)':'0')+','+(lift?'var(--lift)':'0')+')',
      cursor:interactive?'pointer':'default',transition:'var(--transition-control)',...style},...rest},children);
}
