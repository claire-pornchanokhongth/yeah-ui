const { Button, Icon, Badge, Card, Tag, Logo } = window.YEAHDesignSystem_b0ca81;

function EventCard({ev,go}){
  return (<Card tone={ev.tone} interactive shadow={ev.tone==='white'?'block':'block'} onClick={()=>go('event',ev)}
    style={{display:'flex',flexDirection:'column',gap:'var(--space-3)',minHeight:200}}>
    <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
      <Badge tone={ev.tone==='yellow'?'dark':ev.tone==='pink'?'dark':'pink'}>{ev.tag}</Badge>
      <span style={{fontSize:'var(--text-xs)',fontWeight:600,opacity:.75}}>{ev.state}</span>
    </div>
    <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-lg)',fontWeight:600,lineHeight:'var(--leading-snug)',letterSpacing:'var(--tracking-display)'}}>{ev.title}</h3>
    <p style={{margin:0,fontSize:'var(--text-sm)',lineHeight:'var(--leading-normal)',opacity:.85,flex:1}}>{ev.blurb}</p>
    <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)',fontSize:'var(--text-sm)',fontWeight:600}}>
      <Icon name="calendar" size={16}/><span>{ev.date}</span><span style={{opacity:.5}}>·</span><span>{ev.time.split(' – ')[0]}</span>
    </div>
  </Card>);
}

function HomeScreen({go}){
  const D=window.YEAH_DATA;
  return (<div>
    {/* hero */}
    <section style={{borderBottom:'2px solid var(--border-strong)',background:'var(--yeah-white)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-24) var(--space-8)',display:'grid',gridTemplateColumns:'1.15fr .85fr',gap:'var(--space-16)',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',alignItems:'flex-start'}}>
          <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>Young Entrepreneur Assembly Hub</span>
          <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-5xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)',color:'var(--text-heading)',textWrap:'balance'}}>
            Come with an idea.<br/>Leave with a team.
          </h1>
          <p style={{margin:0,fontSize:'var(--text-md)',lineHeight:'var(--leading-normal)',color:'var(--text-body)',maxWidth:'44ch'}}>
            A student-run hub where young founders meet, pitch and build. Free to join, open every week.
          </p>
          <div style={{display:'flex',gap:'var(--space-3)',flexWrap:'wrap'}}>
            <Button size="lg" onClick={()=>go('join')}>Become a member</Button>
            <Button size="lg" variant="outline" iconRight={<Icon name="arrow-right" size={20}/>} onClick={()=>go('events')}>See what's on</Button>
          </div>
        </div>
        <div style={{background:'var(--yeah-black)',border:'2px solid var(--border-strong)',boxShadow:'var(--shadow-block-pink)',padding:'var(--space-10)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Logo variant="knockout" height={120} basePath="../../assets/"/>
        </div>
      </div>
    </section>

    {/* stats strip */}
    <section style={{background:'var(--yeah-yellow)',borderBottom:'2px solid var(--border-strong)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-10) var(--space-8)',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'var(--space-8)'}}>
        {D.stats.map(([n,l])=>(<div key={l} style={{display:'flex',flexDirection:'column',gap:2}}>
          <span style={{fontFamily:'var(--font-display-alt)',fontSize:'var(--text-3xl)',fontWeight:700,lineHeight:1,color:'var(--yeah-black)'}}>{n}</span>
          <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--yeah-black)',opacity:.7}}>{l}</span>
        </div>))}
      </div>
    </section>

    {/* events */}
    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-20) var(--space-8)'}}>
      <div style={{display:'flex',alignItems:'flex-end',gap:'var(--space-6)',marginBottom:'var(--space-8)'}}>
        <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',fontWeight:600,letterSpacing:'var(--tracking-display)',color:'var(--text-heading)'}}>What's on</h2>
        <div style={{flex:1,borderBottom:'2px solid var(--border-strong)',marginBottom:8}}></div>
        <Button variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={16}/>} onClick={()=>go('events')}>All events</Button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {D.events.slice(0,3).map(ev=>(<EventCard key={ev.id} ev={ev} go={go}/>))}
      </div>
    </section>

    {/* three-up how it works, on black */}
    <section style={{background:'var(--yeah-black)',color:'var(--text-on-dark)',borderTop:'2px solid var(--border-strong)',borderBottom:'2px solid var(--border-strong)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-20) var(--space-8)',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-10)'}}>
        {[['users','Show up','Weekly mixers and clinics. No application, no fee, no pitch required.'],
          ['presentation','Pitch it','Five minutes on stage at Pitch Night, then honest feedback from people who have shipped.'],
          ['rocket','Build it','Mentors, a co-working floor and a small grant for teams that keep going.']].map(([ic,h,b],i)=>(
          <div key={h} style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            <div style={{width:56,height:56,display:'flex',alignItems:'center',justifyContent:'center',background:i===1?'var(--yeah-pink)':'var(--yeah-yellow)',border:'2px solid var(--yeah-white)'}}>
              <Icon name={ic} size={28} color={i===1?'var(--yeah-white)':'var(--yeah-black)'}/>
            </div>
            <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>{h}</h3>
            <p style={{margin:0,fontSize:'var(--text-base)',lineHeight:'var(--leading-normal)',color:'var(--neutral-400)'}}>{b}</p>
          </div>))}
      </div>
    </section>

    {/* CTA */}
    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-20) var(--space-8)'}}>
      <Card tone="pink" shadow="lg" padding="var(--space-16)" style={{display:'flex',alignItems:'center',gap:'var(--space-10)'}}>
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-3xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>Membership is free.<br/>The room is not empty.</h2>
          <p style={{margin:0,fontSize:'var(--text-md)',opacity:.9,maxWidth:'40ch'}}>320 members, 48 events run, and a Pitch Night every month.</p>
        </div>
        <Button size="lg" variant="secondary" onClick={()=>go('join')}>Join YEAH</Button>
      </Card>
    </section>
  </div>);
}
Object.assign(window,{HomeScreen,EventCard});
