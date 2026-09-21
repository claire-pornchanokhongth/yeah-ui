import React from 'react';

export function Textarea({label,hint,error,rows=4,value,defaultValue,placeholder,disabled=false,onChange,id,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  const uid=React.useMemo(()=>id||'ta-'+Math.random().toString(36).slice(2,8),[id]);
  return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'var(--space-2)',fontFamily:'var(--font-body)',...style}},
    label?React.createElement('label',{htmlFor:uid,style:{fontSize:'var(--text-xs)',fontWeight:'var(--weight-bold)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-heading)'}},label):null,
    React.createElement('textarea',{id:uid,rows,value,defaultValue,placeholder,disabled,onChange,
      onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
      style:{padding:'var(--space-3) var(--space-4)',fontFamily:'var(--font-body)',fontSize:'var(--text-base)',
        lineHeight:'var(--leading-normal)',color:'var(--text-body)',resize:'vertical',
        background:disabled?'var(--surface-muted)':'var(--yeah-white)',
        border:'var(--border-width) solid '+(error?'var(--status-danger)':'var(--border-strong)'),
        borderRadius:'var(--radius-input)',outline:'none',
        boxShadow:focus?'0 0 0 var(--focus-ring-width) var(--yeah-yellow)':'none',
        transition:'var(--transition-control)',width:'100%',boxSizing:'border-box'},...rest}),
    error?React.createElement('span',{style:{fontSize:'var(--text-xs)',color:'var(--status-danger)',fontWeight:'var(--weight-medium)'}},error)
      :hint?React.createElement('span',{style:{fontSize:'var(--text-xs)',color:'var(--text-muted)'}},hint):null);
}
