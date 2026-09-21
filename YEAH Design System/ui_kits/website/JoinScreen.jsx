const { Button, Icon, Card, Input, Textarea, Select, Checkbox, Radio, Tabs, Toast, Badge } = window.YEAHDesignSystem_b0ca81;

function JoinScreen({go}){
  const [step,setStep]=React.useState(0);
  const [sent,setSent]=React.useState(false);
  const steps=['You','Your idea','Confirm'];
  return (<div style={{background:'var(--surface-sunken)',minHeight:'70vh'}}>
    <section style={{maxWidth:'var(--container-narrow)',margin:'0 auto',padding:'var(--space-16) var(--space-8) var(--space-20)',display:'flex',flexDirection:'column',gap:'var(--space-8)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
        <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-accent)'}}>Membership · Free</span>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-3xl)',fontWeight:700,lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)',color:'var(--text-heading)'}}>Join YEAH</h1>
        <p style={{margin:0,fontSize:'var(--text-base)',lineHeight:'var(--leading-normal)',color:'var(--text-body)'}}>Three short steps. We reply within a week, and there is no interview.</p>
      </div>

      <div style={{display:'flex',gap:'var(--space-2)'}}>
        {steps.map((s,i)=>(<div key={s} style={{flex:1,display:'flex',flexDirection:'column',gap:'var(--space-2)'}}>
          <div style={{height:8,background:i<=step?'var(--yeah-pink)':'var(--neutral-200)',border:'2px solid var(--border-strong)'}}></div>
          <span style={{fontSize:'var(--text-2xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:i<=step?'var(--text-heading)':'var(--text-muted)'}}>{s}</span>
        </div>))}
      </div>

      <Card padding="var(--space-8)" style={{display:'flex',flexDirection:'column',gap:'var(--space-5)'}}>
        {step===0?(<>
          <Input label="Full name" placeholder="Phantakarn Mangkornngam"/>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}>
            <Input label="Email" placeholder="you@yeah.co.th"/>
            <Select label="Faculty" placeholder="Choose one" options={['Business','Engineering','Law','Design','Alumni']}/>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase'}}>I'm joining as</span>
            <div style={{display:'flex',gap:'var(--space-6)'}}>
              <Radio name="as" label="A founder" defaultChecked/><Radio name="as" label="A curious student"/><Radio name="as" label="A mentor"/>
            </div>
          </div>
        </>):step===1?(<>
          <Input label="Working title" placeholder="CropTech"/>
          <Textarea label="What are you building?" rows={4} placeholder="Two or three sentences is plenty."/>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-3)'}}>
            <Checkbox label="I have a team already" defaultChecked/>
            <Checkbox label="I'm looking for a co-founder"/>
            <Checkbox label="I'd like a mentor match"/>
          </div>
        </>):(<>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--space-4)'}}>
            {[['Name','Phantakarn Mangkornngam'],['Email','phantakarn@yeah.co.th'],['Faculty','Business'],['Joining as','A founder'],['Project','CropTech']].map(([k,v])=>(
              <div key={k} style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'var(--space-4)',paddingBottom:'var(--space-3)',borderBottom:'1px solid var(--border-subtle)'}}>
                <span style={{fontSize:'var(--text-xs)',fontWeight:700,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{k}</span>
                <span style={{fontSize:'var(--text-base)',color:'var(--text-heading)'}}>{v}</span></div>))}
          </div>
          <Checkbox label="I agree to the community code of conduct" defaultChecked/>
        </>)}
        <div style={{display:'flex',gap:'var(--space-3)',paddingTop:'var(--space-2)'}}>
          {step>0?(<Button variant="outline" onClick={()=>setStep(step-1)} iconLeft={<Icon name="arrow-left" size={18}/>}>Back</Button>):null}
          <div style={{flex:1}}></div>
          {step<2?(<Button onClick={()=>setStep(step+1)} iconRight={<Icon name="arrow-right" size={18}/>}>Continue</Button>)
            :(<Button variant="secondary" onClick={()=>{setSent(true);go('home')}}>Send application</Button>)}
        </div>
      </Card>

      <div style={{display:'flex',gap:'var(--space-4)'}}>
        {[['gift','Free forever'],['calendar','Weekly events'],['users','Mentor matching']].map(([ic,l])=>(
          <div key={l} style={{flex:1,display:'flex',alignItems:'center',gap:'var(--space-3)',padding:'var(--space-4)',background:'var(--yeah-white)',border:'2px solid var(--border-strong)'}}>
            <Icon name={ic} size={20} color="var(--yeah-pink)"/><span style={{fontSize:'var(--text-sm)',fontWeight:600}}>{l}</span></div>))}
      </div>
    </section>
    {sent?(<div style={{position:'fixed',right:'var(--space-6)',bottom:'var(--space-6)',zIndex:120}}>
      <Toast tone="success" title="Application sent" message="We reply within a week." onDismiss={()=>setSent(false)}/></div>):null}
  </div>);
}
Object.assign(window,{JoinScreen});
