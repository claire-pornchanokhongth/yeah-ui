const { Button, Icon, Badge, Card, Tag, Input, Select, Switch } = window.YEAHDesignSystem_b0ca81;

function MembersScreen({go}){
  const D=window.YEAH_DATA;
  const [q,setQ]=React.useState('');
  const list=D.members.filter(m=>m.name.toLowerCase().includes(q.toLowerCase())||m.role.toLowerCase().includes(q.toLowerCase()));
  return (<div>
    <section style={{background:'var(--yeah-pink)',color:'var(--text-on-pink)',borderBottom:'2px solid var(--border-strong)'}}>
      <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-16) var(--space-8) var(--space-12)',display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
        <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',opacity:.8}}>320 members · 41 mentors</span>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-4xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>The room</h1>
      </div>
    </section>
    <section style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'var(--space-12) var(--space-8) var(--space-20)',display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 200px 200px auto',gap:'var(--space-4)',alignItems:'end'}}>
        <Input label="Search members" placeholder="Name, company, skill" value={q} onChange={e=>setQ(e.target.value)}/>
        <Select label="Faculty" options={['All','Business','Engineering','Design','Alumni']}/>
        <Select label="Role" options={['All','Founder','Mentor','Designer']}/>
        <Switch label="Looking for a co-founder" style={{paddingBottom:12}}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--space-5)'}}>
        {list.map((m,i)=>(
          <Card key={m.name} interactive shadow={i%3===1?'pink':'block'} style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
              <div style={{width:48,height:48,flex:'none',borderRadius:'var(--radius-circle)',background:i%2?'var(--yeah-pink)':'var(--yeah-yellow)',color:i%2?'var(--yeah-white)':'var(--yeah-black)',border:'2px solid var(--border-strong)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:'var(--text-md)',fontWeight:700}}>{m.name[0]}</div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <strong style={{fontFamily:'var(--font-display)',fontSize:'var(--text-base)',fontWeight:600}}>{m.name}</strong>
                <span style={{fontSize:'var(--text-xs)',color:'var(--text-muted)'}}>{m.role}</span></div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-2)'}}>{m.tags.map(t=>(<Tag key={t}>{t}</Tag>))}</div>
            <div style={{display:'flex',alignItems:'center',gap:'var(--space-2)',marginTop:'var(--space-1)'}}>
              <Badge tone="white" style={{background:'var(--surface-sunken)'}}>{m.faculty}</Badge>
              <div style={{flex:1}}></div>
              <Button size="sm" variant="outline" iconRight={<Icon name="mail" size={14}/>}>Message</Button>
            </div>
          </Card>))}
      </div>
    </section>
  </div>);
}
Object.assign(window,{MembersScreen});
