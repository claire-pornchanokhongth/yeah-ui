Dropdown for 4+ mutually exclusive options; use Radio below that.

```jsx
<Select label="Faculty" options={['Business','Engineering','Law']} placeholder="Choose one" />
```

Native `<select>` under the hood — the chevron is a Lucide `chevron-down` overlay, so don't nest interactive content inside.
