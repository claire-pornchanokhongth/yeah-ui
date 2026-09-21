Blocking modal for confirmations and short forms.

```jsx
<Dialog open={open} title="Register for Pitch Night" onClose={close}
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Confirm</Button></>}>
  …
</Dialog>
```

Header, body and footer are each separated by a 2px black rule; footer sits on `--surface-sunken`. The scrim is black at 70% with an 8px blur — the only place blur is used in the system.
