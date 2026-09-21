import React from 'react';

const TONES={
  pink:{background:'var(--yeah-pink)',color:'var(--text-on-pink)',border:'var(--yeah-black)'},
  yellow:{background:'var(--yeah-yellow)',color:'var(--text-on-yellow)',border:'var(--yeah-black)'},
  dark:{background:'var(--yeah-black)',color:'var(--text-on-dark)',border:'var(--yeah-black)'},
  white:{background:'var(--yeah-white)',color:'var(--text-heading)',border:'var(--yeah-black)'},
  success:{background:'var(--status-success)',color:'var(--yeah-white)',border:'var(--yeah-black)'}
};
export function Badge({tone='pink',outline=false,children,style,...rest}){
  const t=TONES[tone]||TONES.pink;
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'var(--space-1)',
    padding:'4px var(--space-3)',fontFamily:'var(--font-body)',fontSize:'var(--text-2xs)',fontWeight:'var(--weight-bold)',
    letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',lineHeight:1.4,
    background:outline?'transparent':t.background,color:outline?t.background==='var(--yeah-white)'?'var(--text-heading)':t.background:t.color,
    border:'var(--border-width) solid '+t.border,borderRadius:'var(--radius-badge)',...style},...rest},children);
}
