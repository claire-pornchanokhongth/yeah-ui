import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({open=false,title,description,onClose,footer,width=520,children,style,...rest}){
  if(!open)return null;
  return React.createElement('div',{role:'dialog','aria-modal':true,
    style:{position:'fixed',inset:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'center',
      padding:'var(--space-6)',background:'var(--overlay-scrim)',backdropFilter:'var(--overlay-blur)'}},
    React.createElement('div',{onClick:e=>e.stopPropagation(),
      style:{position:'relative',width:'100%',maxWidth:width,background:'var(--surface-card)',
        border:'var(--border-width) solid var(--border-strong)',borderRadius:'var(--radius-card)',
        boxShadow:'var(--shadow-block-lg)',fontFamily:'var(--font-body)',...style},...rest},
      React.createElement('div',{style:{display:'flex',alignItems:'flex-start',gap:'var(--space-4)',padding:'var(--space-6)',borderBottom:'var(--border-width) solid var(--border-strong)'}},
        React.createElement('div',{style:{flex:1,display:'flex',flexDirection:'column',gap:'var(--space-2)'}},
          title?React.createElement('h2',{style:{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:'var(--weight-semibold)',lineHeight:'var(--leading-snug)',color:'var(--text-heading)'}},title):null,
          description?React.createElement('p',{style:{margin:0,fontSize:'var(--text-sm)',lineHeight:'var(--leading-normal)',color:'var(--text-muted)'}},description):null),
        onClose?React.createElement(IconButton,{icon:'x',variant:'ghost',size:'sm',label:'Close',onClick:onClose}):null),
      children?React.createElement('div',{style:{padding:'var(--space-6)',fontSize:'var(--text-base)',lineHeight:'var(--leading-normal)',color:'var(--text-body)'}},children):null,
      footer?React.createElement('div',{style:{display:'flex',justifyContent:'flex-end',gap:'var(--space-3)',padding:'var(--space-6)',borderTop:'var(--border-width) solid var(--border-strong)',background:'var(--surface-sunken)'}},footer):null));
}
