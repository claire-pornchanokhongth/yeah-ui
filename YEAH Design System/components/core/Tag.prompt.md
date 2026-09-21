Sentence-case chip used for filtering lists and labelling topics. Distinct from Badge: Tag is interactive and sentence-case, Badge is static and uppercase.

```jsx
<Tag selected onSelect={() => {}}>Startup</Tag>
```

Lay rows of tags out with flex + `gap: var(--space-2)`. Selected state is a solid black fill — not pink, which would compete with buttons.
