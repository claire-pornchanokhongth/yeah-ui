import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({label,hint,error,options=[],value,defaultValue,placeholder,disabled=false,onChange,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useMemo(()=>id||'sel-'+Math.random().toString(36).slice(2,8),[id]);
  return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-2)',fontFamily:'var(--font-body)',...style}},
    label?React.createElement('label',{htmlFor:uid,style:{fontSize:'var(--text-xs)',fontWeight:'var(--weight-bold)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-heading)'}},label):null,
    React.createElement('div',{style:{position:'relative',display:'flex'}},
      React.createElement('select',{id:uid,value,defaultValue,disabled,onChange,
        onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
        style:{appearance:'none',WebkitAppearance:'none',height:'var(--control-height-md)',width:'100%',
          padding:'0 var(--space-10) 0 var(--space-4)',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',
          color:'var(--text-body)',background:disabled?'var(--surface-muted)':'var(--yeah-white)',
          border:'var(--border-width) solid '+(error?'var(--status-danger)':'var(--border-strong)'),
          borderRadius:'var(--radius-input)',outline:'none',cursor:disabled?'not-allowed':'pointer',
          boxShadow:focus?'0 0 0 var(--focus-ring-width) var(--yeah-yellow)':'none',
          transition:'var(--transition-control)',boxSizing:'border-box'},...rest},
        placeholder?React.createElement('option',{value:'',disabled:true},placeholder):null,
        options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;
          return React.createElement('option',{key:v,value:v},l)})),
      React.createElement('span',{style:{position:'absolute',right:'var(--space-4)',top:'50%',transform:'translateY(-50%)',pointerEvents:'none',display:'flex',color:'var(--text-heading)'}},
        React.createElement(Icon,{name:'chevron-down',size:18}))),
    error?React.createElement('span',{style:{fontSize:'var(--text-xs)',color:'var(--status-danger)',fontWeight:'var(--weight-medium)'}},error)
      :hint?React.createElement('span',{style:{fontSize:'var(--text-xs)',color:'var(--text-muted)'}},hint):null);
}
