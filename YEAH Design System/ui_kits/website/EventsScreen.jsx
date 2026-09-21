const { Button, Icon, Badge, Card, Tag, Tabs, Input } = window.YEAHDesignSystem_b0ca81;

function EventsScreen({go}){
  const D=window.YEAH_DATA;
  const [scope,setScope]=React.useState('all');
  const [tags,setTags]=React.useState(['Pitch']);
  const toggle=t=>setTags(s=>s.includes(t)?s.filter(x=>x!==t):[...s,t]);
  const list=D.events.filter(e=>tags.length===0||tags.includes(e.tag));
  return (<div>
    <section style={{background:'var(--yeah-yellow)',borderBottom:'2px solid var(--border-strong)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-16) var(--space-8) var(--space-12)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',opacity:.7}}>Programme · September 2026</span>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-4xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>Everything we're running</h1>
      </div>
    </section>
    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-12) var(--space-8) var(--space-20)',display:'grid',gridTemplateColumns:'240px 1fr',gap:'var(--space-10)',alignItems:'start'}}>
      <aside style={{display:'flex',flexDirection:'column',gap:'var(--space-6)',position:'sticky',top:100}}>
        <Input label="Search" placeholder="Pitch, pricing…" size="sm"/>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>Format</span>
          <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-2)'}}>
            {['Pitch','Workshop','Clinic','Social'].map(t=>(<Tag key={t} selected={tags.includes(t)} onSelect={()=>toggle(t)}>{t}</Tag>))}
          </div>
        </div>
        <Card tone="dark" shadow="yellow" padding="var(--space-5)" style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
          <strong style={{fontFamily:'var(--font-display)',fontSize:'var(--text-md)',fontWeight:600}}>Want to host?</strong>
          <span style={{fontSize:'var(--text-sm)',color:'var(--neutral-400)'}}>Members can propose a workshop any time.</span>
          <Button size="sm" variant="secondary" block>Propose a session</Button>
        </Card>
      </aside>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
        <Tabs variant="pill" items={[{value:'all',label:'All'},{value:'wk',label:'This week'},{value:'mo',label:'This month'}]} value={scope} onChange={setScope}/>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
          {list.map(ev=>(
            <Card key={ev.id} interactive onClick={()=>go('event',ev)} padding="var(--space-5)"
              style={{display:'grid',gridTemplateColumns:'96px 1fr auto',gap:'var(--space-6)',alignItems:'center'}}>
              <div style={{background:ev.tone==='pink'?'var(--yeah-pink)':'var(--yeah-yellow)',color:ev.tone==='pink'?'var(--yeah-white)':'var(--yeah-black)',border:'2px solid var(--border-strong)',padding:'var(--space-3)',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span style={{fontSize:'var(--text-2xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>{ev.date.split(' ')[0]}</span>
                <span style={{fontFamily:'var(--font-display-alt)',fontSize:'var(--text-2xl)',fontWeight:700,lineHeight:1}}>{ev.date.split(' ')[1]}</span>
                <span style={{fontSize:'var(--text-2xs)',fontWeight:700,textTransform:'uppercase'}}>{ev.date.split(' ')[2]}</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)'}}>
                  <Badge tone="white" style={{background:'var(--yeah-white)',color:'var(--text-heading)'}}>{ev.tag}</Badge>
                  <span style={{fontSize:'var(--text-xs)',fontWeight:600,color:ev.state==='Sold out'?'var(--text-muted)':'var(--text-accent)'}}>{ev.state}</span>
                </div>
                <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-md)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>{ev.title}</h3>
                <div style={{display:'flex',gap:'var(--space-4)',fontSize:'var(--text-sm)',color:'var(--text-muted)'}}>
                  <span style={{display:'flex',alignItems:'center',gap:6}}><Icon name="clock" size={14}/>{ev.time}</span>
                  <span style={{display:'flex',alignItems:'center',gap:6}}><Icon name="map-pin" size={14}/>{ev.place}</span>
                </div>
              </div>
              <Button size="sm" variant={ev.state==='Sold out'?'outline':'primary'} disabled={ev.state==='Sold out'}>{ev.state==='Sold out'?'Sold out':'Register'}</Button>
            </Card>))}
        </div>
      </div>
    </section>
  </div>);
}
Object.assign(window,{EventsScreen});
