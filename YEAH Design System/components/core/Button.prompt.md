Pill-shaped action button — the single most recognisable YEAH interface element; use it for every call to action.

```jsx
<Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" />}>สมัครเลย</Button>
```

Variants: `primary` (neon pink / white text), `secondary` (yellow / black text), `dark` (black / white text), `outline` (transparent, black rule), `ghost` (no border, no shadow — for toolbars only).
Sizes 32 / 44 / 56px. Every variant except `ghost` carries the black 2px border and `--shadow-block`; hover lifts 2px and grows the shadow to 8px, press drops it flat. Never combine `primary` on a pink background — switch to `secondary` or `dark`.
