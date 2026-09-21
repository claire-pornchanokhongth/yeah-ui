import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';
const TONES={
  info:{background:'var(--yeah-black)',color:'var(--text-on-dark)',icon:'info'},
  success:{background:'var(--status-success)',color:'var(--yeah-white)',icon:'check'},
  warning:{background:'var(--yeah-yellow)',color:'var(--text-on-yellow)',icon:'triangle-alert'},
  danger:{background:'var(--yeah-pink)',color:'var(--text-on-pink)',icon:'circle-alert'}
};
export function Toast({tone='info',title,message,icon,onDismiss,style,...rest}){
  const t=TONES[tone]||TONES.info;
  return React.createElement('div',{role:'status',
    style:{display:'flex',alignItems:'flex-start',gap:'var(--space-3)',minWidth:280,maxWidth:420,
      padding:'var(--space-4)',background:t.background,color:t.color,
      border:'var(--border-width) solid var(--border-strong)',borderRadius:'var(--radius-card)',
      boxShadow:'var(--shadow-block)',fontFamily:'var(--font-body)',...style},...rest},
    React.createElement(Icon,{name:icon||t.icon,size:20,style:{marginTop:2}}),
    React.createElement('div',{style:{flex:1,display:'flex',flexDirection:'column',gap:'2px'}},
      title?React.createElement('strong',{style:{fontSize:'var(--text-sm)',fontWeight:'var(--weight-bold)'}},title):null,
      message?React.createElement('span',{style:{fontSize:'var(--text-sm)',lineHeight:'var(--leading-normal)',opacity:.9}},message):null),
    onDismiss?React.createElement(IconButton,{icon:'x',variant:'ghost',size:'sm',label:'Dismiss',onClick:onDismiss,style:{color:'inherit'}}):null);
}
