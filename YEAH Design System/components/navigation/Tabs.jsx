import React from 'react';

export function Tabs({items=[],value,defaultValue,onChange,variant='underline',style,...rest}){
  const first=items[0]&&(typeof items[0]==='string'?items[0]:items[0].value);
  const [inner,setInner]=React.useState(defaultValue!==undefined?defaultValue:first);
  const active=value!==undefined?value:inner;
  const pick=v=>{if(value===undefined)setInner(v);onChange&&onChange(v)};
  const pill=variant==='pill';
  return React.createElement('div',{role:'tablist',
    style:{display:'flex',alignItems:'stretch',gap:pill?'var(--space-2)':'var(--space-6)',
      borderBottom:pill?'none':'var(--border-width) solid var(--border-strong)',
      fontFamily:'var(--font-body)',...style},...rest},
    items.map(it=>{
      const v=typeof it==='string'?it:it.value, l=typeof it==='string'?it:it.label, isOn=v===active;
      return React.createElement('button',{key:v,role:'tab','aria-selected':isOn,onClick:()=>pick(v),
        style:pill?{height:'var(--control-height-sm)',padding:'0 var(--space-4)',fontSize:'var(--text-sm)',
          fontWeight:'var(--weight-semibold)',cursor:'pointer',borderRadius:'var(--radius-pill)',
          border:'var(--border-width) solid var(--border-strong)',
          background:isOn?'var(--yeah-black)':'transparent',color:isOn?'var(--text-on-dark)':'var(--text-body)',
          transition:'var(--transition-control)'}
        :{padding:'0 0 var(--space-3)',marginBottom:'calc(-1 * var(--border-width))',background:'none',
          border:'none',borderBottom:'var(--border-width-thick) solid '+(isOn?'var(--yeah-pink)':'transparent'),
          fontSize:'var(--text-base)',fontWeight:isOn?'var(--weight-bold)':'var(--weight-medium)',
          color:isOn?'var(--text-heading)':'var(--text-muted)',cursor:'pointer',
          transition:'var(--transition-control)'}},l)}));
}
