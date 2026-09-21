import React from 'react';

const SRC={
  lockup:'../../assets/logo-lockup.png',
  knockout:'../../assets/logo-lockup-knockout.png',
  mark:'../../assets/logo-mark.png'
};
export function Logo({variant='lockup',height=48,basePath='../../assets/',style,...rest}){
  const file=variant==='mark'?'logo-mark.png':variant==='knockout'?'logo-lockup-knockout.png':'logo-lockup.png';
  return React.createElement('img',{src:basePath+file,alt:'YEAH — Young Entrepreneur Assembly Hub',
    style:{height,width:'auto',display:'block',...style},...rest});
}
