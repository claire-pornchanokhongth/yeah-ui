import React from 'react';

const CDN='https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const CACHE={};
const WAITING={};

function load(name,cb){
  if(CACHE[name]!==undefined){cb();return}
  if(WAITING[name]){WAITING[name].push(cb);return}
  WAITING[name]=[cb];
  fetch(CDN+name+'.svg').then(r=>r.ok?r.text():'').then(t=>{
    CACHE[name]=t.replace(/<svg([^>]*)>/,'<svg$1 style="width:100%;height:100%;display:block">');
    (WAITING[name]||[]).forEach(f=>f());delete WAITING[name];
  }).catch(()=>{CACHE[name]='';(WAITING[name]||[]).forEach(f=>f());delete WAITING[name]});
}

export function Icon({name='circle',size=20,color='currentColor',style,...rest}){
  const [svg,setSvg]=React.useState(CACHE[name]);
  React.useEffect(()=>{let live=true;load(name,()=>{if(live)setSvg(CACHE[name])});return()=>{live=false}},[name]);
  return React.createElement('span',{'aria-hidden':true,role:'img',
    dangerouslySetInnerHTML:svg?{__html:svg}:undefined,
    style:{display:'inline-block',flex:'none',width:size,height:size,lineHeight:0,color,...style},...rest});
}
