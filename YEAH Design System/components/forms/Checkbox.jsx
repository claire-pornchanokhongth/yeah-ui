import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({label,checked,defaultChecked,disabled=false,onChange,id,style,...rest}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const isOn=checked!==undefined?checked:inner;
  const uid=React.useMemo(()=>id||'cb-'+Math.random().toString(36).slice(2,8),[id]);
  return React.createElement('label',{htmlFor:uid,style:{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',
      fontFamily:'var(--font-body)',fontSize:'var(--text-base)',color:'var(--text-body)',
      cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,...style}},
    React.createElement('input',{id:uid,type:'checkbox',checked:isOn,disabled,
      onChange:e=>{if(checked===undefined)setInner(e.target.checked);onChange&&onChange(e)},
      style:{position:'absolute',opacity:0,width:0,height:0},...rest}),
    React.createElement('span',{style:{display:'inline-flex',alignItems:'center',justifyContent:'center',
      width:22,height:22,flex:'none',border:'var(--border-width) solid var(--border-strong)',
      borderRadius:'var(--radius-xs)',background:isOn?'var(--yeah-pink)':'var(--yeah-white)',
      color:'var(--yeah-white)',transition:'var(--transition-control)'}},
      isOn?React.createElement(Icon,{name:'check',size:16}):null),
    label?React.createElement('span',null,label):null);
}
