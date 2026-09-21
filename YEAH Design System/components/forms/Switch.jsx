import React from 'react';

export function Switch({label,checked,defaultChecked,disabled=false,onChange,id,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const isOn=checked!==undefined?checked:inner;
  const uid=React.useMemo(()=>id||'sw-'+Math.random().toString(36).slice(2,8),[id]);
  const toggle=()=>{if(disabled)return;const n=!isOn;if(checked===undefined)setInner(n);onChange&&onChange(n)};
  return React.createElement('label',{htmlFor:uid,onClick:e=>{e.preventDefault();toggle()},
    style:{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',fontFamily:'var(--font-body)',
      fontSize:'var(--text-base)',color:'var(--text-body)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}},
    React.createElement('input',{id:uid,type:'checkbox',checked:isOn,disabled,readOnly:true,style:{position:'absolute',opacity:0,width:0,height:0},...rest}),
    React.createElement('span',{role:'switch','aria-checked':isOn,
      style:{display:'inline-flex',alignItems:'center',width:48,height:28,flex:'none',padding:2,
        border:'var(--border-width) solid var(--border-strong)',borderRadius:'var(--radius-pill)',
        background:isOn?'var(--yeah-pink)':'var(--neutral-200)',transition:'var(--transition-control)'}},
      React.createElement('span',{style:{width:20,height:20,borderRadius:'var(--radius-circle)',
        background:'var(--yeah-white)',border:'1px solid var(--yeah-black)',
        transform:'translateX('+(isOn?20:0)+'px)',transition:'transform var(--duration-fast) var(--ease-out)'}})),
    label?React.createElement('span',null,label):null);
}
