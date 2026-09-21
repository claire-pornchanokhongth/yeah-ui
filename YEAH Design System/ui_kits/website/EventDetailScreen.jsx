const { Button, IconButton, Icon, Badge, Card, Tag, Dialog, Input, Select, Checkbox, Toast, Tooltip } = window.YEAHDesignSystem_b0ca81;

function EventDetailScreen({ev,go}){
  const [open,setOpen]=React.useState(false);
  const [done,setDone]=React.useState(false);
  const e=ev||window.YEAH_DATA.events[0];
  return (<div>
    <section style={{background:'var(--yeah-black)',color:'var(--text-on-dark)',borderBottom:'2px solid var(--border-strong)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-8) var(--space-8) var(--space-16)'}}>
        <Button variant="ghost" size="sm" iconLeft={<Icon name="arrow-left" size={16}/>} onClick={()=>go('events')} style={{color:'var(--neutral-400)',marginBottom:'var(--space-8)',paddingLeft:0}}>All events</Button>
        <div style={{display:'grid',gridTemplateColumns:'1.4fr .6fr',gap:'var(--space-12)',alignItems:'start'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-5)',alignItems:'flex-start'}}>
            <div style={{display:'flex',gap:'var(--space-2)'}}><Badge tone="yellow">{e.tag}</Badge><Badge tone="pink">{e.state}</Badge></div>
            <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-4xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>{e.title}</h1>
            <p style={{margin:0,fontSize:'var(--text-md)',lineHeight:'var(--leading-normal)',color:'var(--neutral-200)',maxWidth:'52ch'}}>{e.blurb}</p>
            <div style={{display:'flex',gap:'var(--space-2)'}}>
              <Tooltip label="Share"><IconButton icon="share-2" variant="outline" label="Share" size="sm"/></Tooltip>
              <Tooltip label="Save"><IconButton icon="bookmark" variant="outline" label="Save" size="sm"/></Tooltip>
              <Tooltip label="Add to calendar"><IconButton icon="calendar-plus" variant="outline" label="Add to calendar" size="sm"/></Tooltip>
            </div>
          </div>
          <Card tone="white" shadow="yellow" style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            {[['calendar',e.date],['clock',e.time],['map-pin',e.place],['users',e.seats]].map(([ic,v])=>(
              <div key={ic} style={{display:'flex',alignItems:'center',gap:'var(--space-3)',fontSize:'var(--text-sm)',color:'var(--text-body)'}}>
                <Icon name={ic} size={18} color="var(--yeah-pink)"/><span>{v}</span></div>))}
            <div style={{borderTop:'2px solid var(--border-subtle)',paddingTop:'var(--space-4)',display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
              <Button block onClick={()=>setOpen(true)} disabled={e.state==='Sold out'}>{e.state==='Sold out'?'Sold out':'Register — free'}</Button>
              <span style={{fontSize:'var(--text-xs)',color:'var(--text-muted)',textAlign:'center'}}>Members and non-members welcome.</span>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-16) var(--space-8)',display:'grid',gridTemplateColumns:'1.4fr .6fr',gap:'var(--space-12)',alignItems:'start'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-6)'}}>
        <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>Run of the evening</h2>
        <div style={{display:'flex',flexDirection:'column',gap:0,borderTop:'2px solid var(--border-strong)'}}>
          {[['18:00','Doors, food, name tags'],['18:30','Six pitches, five minutes each'],['19:45','Feedback round with mentors'],['20:30','Open floor']].map(([t,d])=>(
            <div key={t} style={{display:'grid',gridTemplateColumns:'80px 1fr',gap:'var(--space-6)',padding:'var(--space-4) 0',borderBottom:'1px solid var(--border-subtle)'}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)',color:'var(--text-accent)',fontWeight:600}}>{t}</span>
              <span style={{fontSize:'var(--text-base)',color:'var(--text-body)'}}>{d}</span></div>))}
        </div>
        <h2 style={{margin:'var(--space-4) 0 0',fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',fontWeight:600,letterSpacing:'var(--tracking-display)'}}>Who's pitching</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-4)'}}>
          {window.YEAH_DATA.members.slice(0,3).map(m=>(
            <Card key={m.name} padding="var(--space-4)" shadow="none" style={{display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
              <div style={{width:40,height:40,borderRadius:'var(--radius-circle)',background:'var(--yeah-yellow)',border:'2px solid var(--border-strong)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontWeight:700}}>{m.name[0]}</div>
              <strong style={{fontSize:'var(--text-sm)'}}>{m.name}</strong>
              <span style={{fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{m.role}</span>
            </Card>))}
        </div>
      </div>
      <Card tone="sunken" shadow="none" style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <span style={{fontSize:'var(--text-2xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>Bring</span>
        <ul style={{margin:0,paddingLeft:'1.1em',fontSize:'var(--text-sm)',lineHeight:'var(--leading-loose)',color:'var(--text-body)'}}>
          <li>A deck, if you have one</li><li>A student ID</li><li>Questions for the mentors</li></ul>
      </Card>
    </section>

    <Dialog open={open} title={'Register for '+e.title} description={e.date+' · '+e.time+' · '+e.place}
      onClose={()=>setOpen(false)}
      footer={<><Button variant="ghost" onClick={()=>setOpen(false)}>Cancel</Button>
        <Button onClick={()=>{setOpen(false);setDone(true)}}>Confirm</Button></>}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <Input label="Name" placeholder="Your full name"/>
        <Input label="Email" placeholder="you@yeah.co.th"/>
        <Select label="I'm coming as" options={['A founder','A curious student','A mentor']} placeholder="Choose one"/>
        <Checkbox label="Remind me the day before" defaultChecked/>
      </div>
    </Dialog>
    {done?(<div style={{position:'fixed',right:'var(--space-6)',bottom:'var(--space-6)',zIndex:120}}>
      <Toast tone="success" title="You're in" message="QR code sent to your email." onDismiss={()=>setDone(false)}/>
    </div>):null}
  </div>);
}
Object.assign(window,{EventDetailScreen});
