import React from 'react';

const SIZES={sm:{h:'var(--control-height-sm)',px:'var(--space-4)',fs:'var(--text-sm)'},md:{h:'var(--control-height-md)',px:'var(--space-6)',fs:'var(--text-base)'},lg:{h:'var(--control-height-lg)',px:'var(--space-8)',fs:'var(--text-md)'}};
const VARIANTS={
  primary:{background:'var(--yeah-pink)',color:'var(--text-on-pink)',borderColor:'var(--yeah-black)'},
  secondary:{background:'var(--yeah-yellow)',color:'var(--text-on-yellow)',borderColor:'var(--yeah-black)'},
  dark:{background:'var(--yeah-black)',color:'var(--text-on-dark)',borderColor:'var(--yeah-black)'},
  outline:{background:'transparent',color:'var(--text-heading)',borderColor:'var(--yeah-black)'},
  ghost:{background:'transparent',color:'var(--text-heading)',borderColor:'transparent'}
};
export function Button({variant='primary',size='md',block=false,disabled=false,iconLeft=null,iconRight=null,as='button',href,onClick,style,children,...rest}){
  const [hover,setHover]=React.useState(false);
  const [down,setDown]=React.useState(false);
  const s=SIZES[size]||SIZES.md, v=VARIANTS[variant]||VARIANTS.primary;
  const flat=variant==='ghost';
  const lifted=hover&&!disabled&&!down&&!flat;
  const Tag=href?'a':as;
  return React.createElement(Tag,{
    href,onClick:disabled?undefined:onClick,disabled:Tag==='button'?disabled:undefined,
    onMouseEnter:()=>setHover(true),onMouseLeave:()=>{setHover(false);setDown(false)},
    onMouseDown:()=>setDown(true),onMouseUp:()=>setDown(false),
    style:{display:block?'flex':'inline-flex',width:block?'100%':undefined,alignItems:'center',justifyContent:'center',gap:'var(--space-2)',
      height:s.h,padding:'0 '+s.px,fontFamily:'var(--font-body)',fontSize:s.fs,fontWeight:'var(--weight-semibold)',lineHeight:1,
      letterSpacing:'var(--tracking-normal)',textDecoration:'none',whiteSpace:'nowrap',cursor:disabled?'not-allowed':'pointer',
      border:'var(--border-width) solid '+v.borderColor,borderRadius:'var(--radius-button)',background:v.background,color:v.color,
      boxShadow:flat?'none':(down?'none':(hover?'var(--shadow-block-lg)':'var(--shadow-block)')),
      transform:'translate('+(lifted?'var(--lift)':(down?'2px':'0'))+','+(lifted?'var(--lift)':(down?'2px':'0'))+')',
      transition:'var(--transition-control)',opacity:disabled?.45:1,...style},...rest},
    iconLeft,React.createElement('span',null,children),iconRight);
}
