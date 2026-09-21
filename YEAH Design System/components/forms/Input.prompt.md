Text field. The only component in the system with a mid radius (6px) — inputs stay square-ish but not razor-sharp so they read as editable.

```jsx
<Input label="Email" placeholder="you@yeah.co.th" hint="We only use this for event reminders." />
```

Focus is a 3px yellow ring (never a blue browser default). Errors turn the 2px rule pink and swap `hint` for `error`.
