const { Button, IconButton, Icon, Logo, Badge } = window.YEAHDesignSystem_b0ca81;
const NAV=[['home','Home'],['events','Events'],['members','Members'],['join','Join']];

function SiteHeader({route,go}){
  return (<header style={{position:'sticky',top:0,zIndex:40,background:'var(--yeah-white)',borderBottom:'2px solid var(--border-strong)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--space-8)',height:76,display:'flex',alignItems:'center',gap:'var(--space-8)'}}>
      <a href="#" onClick={e=>{e.preventDefault();go('home')}} style={{display:'flex',alignItems:'center'}}><Logo variant="mark" height={30} basePath="../../assets/"/></a>
      <nav style={{display:'flex',alignItems:'center',gap:'var(--space-6)',marginLeft:'var(--space-4)'}}>
        {NAV.map(([k,l])=>(<a key={k} href="#" onClick={e=>{e.preventDefault();go(k)}}
          style={{fontFamily:'var(--font-body)',fontSize:'var(--text-sm)',fontWeight:route===k?700:500,
          color:route===k?'var(--text-heading)':'var(--text-muted)',textDecoration:'none',
          borderBottom:route===k?'3px solid var(--yeah-pink)':'3px solid transparent',paddingBottom:4}}>{l}</a>))}
      </nav>
      <div style={{flex:1}}></div>
      <IconButton icon="search" variant="ghost" size="sm" label="Search"/>
      <Button size="sm" variant="dark" onClick={()=>go('join')}>Become a member</Button>
    </div>
  </header>);
}

function SiteFooter({go}){
  return (<footer style={{background:'var(--yeah-black)',color:'var(--text-on-dark)',borderTop:'2px solid var(--border-strong)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-16) var(--space-8) var(--space-10)',display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr',gap:'var(--space-10)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)',alignItems:'flex-start'}}>
        <Logo variant="knockout" height={56} basePath="../../assets/"/>
        <p style={{margin:0,fontSize:'var(--text-sm)',lineHeight:'var(--leading-normal)',color:'var(--neutral-400)',maxWidth:'34ch'}}>A student-run hub for young founders. Come with an idea, leave with a team.</p>
      </div>
      {[['Community',['Events','Members','Mentors','Startups']],['Programmes',['Pitch Night','Workshops','Clinics','Incubation']],['About',['Our story','Partners','Contact','Instagram']]].map(([h,items])=>(
        <div key={h} style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <span style={{fontSize:'var(--text-2xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yeah-yellow)'}}>{h}</span>
          {items.map(i=>(<a key={i} href="#" onClick={e=>e.preventDefault()} style={{fontSize:'var(--text-sm)',color:'var(--neutral-200)',textDecoration:'none'}}>{i}</a>))}
        </div>))}
    </div>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-5) var(--space-8)',borderTop:'1px solid var(--neutral-800)',display:'flex',gap:'var(--space-6)',alignItems:'center'}}>
      <span style={{fontSize:'var(--text-xs)',color:'var(--neutral-600)'}}>© 2026 Young Entrepreneur Assembly Hub</span>
      <div style={{flex:1}}></div>
      {['instagram','facebook','linkedin'].map(n=>(<Icon key={n} name={n} size={18} color="var(--neutral-400)"/>))}
    </div>
  </footer>);
}
Object.assign(window,{SiteHeader,SiteFooter});
