/* @ds-bundle: {"format":4,"namespace":"YEAHDesignSystem_b0ca81","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7124cd1cf455","components/core/Button.jsx":"28f84e9e5421","components/core/Card.jsx":"35a0f6710863","components/core/Icon.jsx":"3516be598898","components/core/IconButton.jsx":"03e472a94cb4","components/core/Logo.jsx":"f9af5b67b5c3","components/core/Tag.jsx":"cf2dd3f09bd8","components/feedback/Dialog.jsx":"244669ada513","components/feedback/Toast.jsx":"f3f2d3fdcb15","components/feedback/Tooltip.jsx":"0e65d2689c71","components/forms/Checkbox.jsx":"4e667c0e5b7a","components/forms/Input.jsx":"0582c7ef0492","components/forms/Radio.jsx":"15b663fefe68","components/forms/Select.jsx":"f5725cd8f2f3","components/forms/Switch.jsx":"bce05240825e","components/forms/Textarea.jsx":"af436dd2da24","components/navigation/Tabs.jsx":"bfb4b0a62c27","ui_kits/website/EventDetailScreen.jsx":"04c0c2e7d9d5","ui_kits/website/EventsScreen.jsx":"0a774f81baac","ui_kits/website/HomeScreen.jsx":"3bc8a393ba0c","ui_kits/website/JoinScreen.jsx":"de4eafc0913c","ui_kits/website/MembersScreen.jsx":"5eff2bd75e80","ui_kits/website/SiteChrome.jsx":"2c0e31ada8d5","ui_kits/website/data.js":"818d68a5e708"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YEAHDesignSystem_b0ca81 = window.YEAHDesignSystem_b0ca81 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  pink: {
    background: 'var(--yeah-pink)',
    color: 'var(--text-on-pink)',
    border: 'var(--yeah-black)'
  },
  yellow: {
    background: 'var(--yeah-yellow)',
    color: 'var(--text-on-yellow)',
    border: 'var(--yeah-black)'
  },
  dark: {
    background: 'var(--yeah-black)',
    color: 'var(--text-on-dark)',
    border: 'var(--yeah-black)'
  },
  white: {
    background: 'var(--yeah-white)',
    color: 'var(--text-heading)',
    border: 'var(--yeah-black)'
  },
  success: {
    background: 'var(--status-success)',
    color: 'var(--yeah-white)',
    border: 'var(--yeah-black)'
  }
};
function Badge({
  tone = 'pink',
  outline = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.pink;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '4px var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      background: outline ? 'transparent' : t.background,
      color: outline ? t.background === 'var(--yeah-white)' ? 'var(--text-heading)' : t.background : t.color,
      border: 'var(--border-width) solid ' + t.border,
      borderRadius: 'var(--radius-badge)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 'var(--control-height-sm)',
    px: 'var(--space-4)',
    fs: 'var(--text-sm)'
  },
  md: {
    h: 'var(--control-height-md)',
    px: 'var(--space-6)',
    fs: 'var(--text-base)'
  },
  lg: {
    h: 'var(--control-height-lg)',
    px: 'var(--space-8)',
    fs: 'var(--text-md)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--yeah-pink)',
    color: 'var(--text-on-pink)',
    borderColor: 'var(--yeah-black)'
  },
  secondary: {
    background: 'var(--yeah-yellow)',
    color: 'var(--text-on-yellow)',
    borderColor: 'var(--yeah-black)'
  },
  dark: {
    background: 'var(--yeah-black)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--yeah-black)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'var(--yeah-black)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'transparent'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  onClick,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const s = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.primary;
  const flat = variant === 'ghost';
  const lifted = hover && !disabled && !down && !flat;
  const Tag = href ? 'a' : as;
  return React.createElement(Tag, {
    href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.h,
      padding: '0 ' + s.px,
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-normal)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: 'var(--border-width) solid ' + v.borderColor,
      borderRadius: 'var(--radius-button)',
      background: v.background,
      color: v.color,
      boxShadow: flat ? 'none' : down ? 'none' : hover ? 'var(--shadow-block-lg)' : 'var(--shadow-block)',
      transform: 'translate(' + (lifted ? 'var(--lift)' : down ? '2px' : '0') + ',' + (lifted ? 'var(--lift)' : down ? '2px' : '0') + ')',
      transition: 'var(--transition-control)',
      opacity: disabled ? .45 : 1,
      ...style
    },
    ...rest
  }, iconLeft, React.createElement('span', null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const TONES = {
  white: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)'
  },
  dark: {
    background: 'var(--yeah-black)',
    color: 'var(--text-on-dark)'
  },
  pink: {
    background: 'var(--yeah-pink)',
    color: 'var(--text-on-pink)'
  },
  yellow: {
    background: 'var(--yeah-yellow)',
    color: 'var(--text-on-yellow)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)'
  }
};
function Card({
  tone = 'white',
  shadow = 'block',
  interactive = false,
  padding = 'var(--space-6)',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const t = TONES[tone] || TONES.white;
  const shadowVar = shadow === 'none' ? 'none' : shadow === 'pink' ? 'var(--shadow-block-pink)' : shadow === 'yellow' ? 'var(--shadow-block-yellow)' : shadow === 'lg' ? 'var(--shadow-block-lg)' : 'var(--shadow-block)';
  const lift = interactive && hover;
  return React.createElement('div', {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.background,
      color: t.color,
      padding,
      borderRadius: 'var(--radius-card)',
      border: 'var(--border-width) solid var(--border-strong)',
      boxShadow: lift ? 'var(--shadow-block-lg)' : shadowVar,
      transform: 'translate(' + (lift ? 'var(--lift)' : '0') + ',' + (lift ? 'var(--lift)' : '0') + ')',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';
const CACHE = {};
const WAITING = {};
function load(name, cb) {
  if (CACHE[name] !== undefined) {
    cb();
    return;
  }
  if (WAITING[name]) {
    WAITING[name].push(cb);
    return;
  }
  WAITING[name] = [cb];
  fetch(CDN + name + '.svg').then(r => r.ok ? r.text() : '').then(t => {
    CACHE[name] = t.replace(/<svg([^>]*)>/, '<svg$1 style="width:100%;height:100%;display:block">');
    (WAITING[name] || []).forEach(f => f());
    delete WAITING[name];
  }).catch(() => {
    CACHE[name] = '';
    (WAITING[name] || []).forEach(f => f());
    delete WAITING[name];
  });
}
function Icon({
  name = 'circle',
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(CACHE[name]);
  React.useEffect(() => {
    let live = true;
    load(name, () => {
      if (live) setSvg(CACHE[name]);
    });
    return () => {
      live = false;
    };
  }, [name]);
  return React.createElement('span', {
    'aria-hidden': true,
    role: 'img',
    dangerouslySetInnerHTML: svg ? {
      __html: svg
    } : undefined,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      lineHeight: 0,
      color,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 44,
  lg: 56
};
const VARIANTS = {
  primary: {
    background: 'var(--yeah-pink)',
    color: 'var(--text-on-pink)',
    borderColor: 'var(--yeah-black)'
  },
  secondary: {
    background: 'var(--yeah-yellow)',
    color: 'var(--text-on-yellow)',
    borderColor: 'var(--yeah-black)'
  },
  dark: {
    background: 'var(--yeah-black)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--yeah-black)'
  },
  outline: {
    background: 'var(--yeah-white)',
    color: 'var(--text-heading)',
    borderColor: 'var(--yeah-black)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-heading)',
    borderColor: 'transparent'
  }
};
function IconButton({
  icon = 'x',
  variant = 'outline',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const px = SIZES[size] || SIZES.md,
    v = VARIANTS[variant] || VARIANTS.outline,
    flat = variant === 'ghost';
  const lifted = hover && !disabled && !down && !flat;
  return React.createElement('button', {
    type: 'button',
    'aria-label': label || icon,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      flex: 'none',
      border: 'var(--border-width) solid ' + v.borderColor,
      borderRadius: 'var(--radius-circle)',
      background: v.background,
      color: v.color,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      boxShadow: flat ? 'none' : down ? 'none' : hover ? 'var(--shadow-block)' : 'var(--shadow-block-sm)',
      transform: 'translate(' + (lifted ? '-1px' : '0') + ',' + (lifted ? '-1px' : '0') + ')',
      transition: 'var(--transition-control)',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: px <= 32 ? 16 : px <= 44 ? 20 : 24
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  lockup: '../../assets/logo-lockup.png',
  knockout: '../../assets/logo-lockup-knockout.png',
  mark: '../../assets/logo-mark.png'
};
function Logo({
  variant = 'lockup',
  height = 48,
  basePath = '../../assets/',
  style,
  ...rest
}) {
  const file = variant === 'mark' ? 'logo-mark.png' : variant === 'knockout' ? 'logo-lockup-knockout.png' : 'logo-lockup.png';
  return React.createElement('img', {
    src: basePath + file,
    alt: 'YEAH — Young Entrepreneur Assembly Hub',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onSelect,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onSelect;
  return React.createElement('span', {
    onClick: onSelect,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: '32px',
      padding: '0 var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      background: selected ? 'var(--yeah-black)' : hover && interactive ? 'var(--yeah-yellow-100)' : 'var(--yeah-white)',
      color: selected ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: 'var(--border-width) solid var(--yeah-black)',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    },
    ...rest
  }, children, onRemove ? React.createElement('span', {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .6
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement('div', {
    role: 'dialog',
    'aria-modal': true,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'var(--overlay-scrim)',
      backdropFilter: 'var(--overlay-blur)'
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-block-lg)',
      fontFamily: 'var(--font-body)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-6)',
      borderBottom: 'var(--border-width) solid var(--border-strong)'
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, title ? React.createElement('h2', {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-heading)'
    }
  }, title) : null, description ? React.createElement('p', {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    variant: 'ghost',
    size: 'sm',
    label: 'Close',
    onClick: onClose
  }) : null), children ? React.createElement('div', {
    style: {
      padding: 'var(--space-6)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, children) : null, footer ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-6)',
      borderTop: 'var(--border-width) solid var(--border-strong)',
      background: 'var(--surface-sunken)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    background: 'var(--yeah-black)',
    color: 'var(--text-on-dark)',
    icon: 'info'
  },
  success: {
    background: 'var(--status-success)',
    color: 'var(--yeah-white)',
    icon: 'check'
  },
  warning: {
    background: 'var(--yeah-yellow)',
    color: 'var(--text-on-yellow)',
    icon: 'triangle-alert'
  },
  danger: {
    background: 'var(--yeah-pink)',
    color: 'var(--text-on-pink)',
    icon: 'circle-alert'
  }
};
function Toast({
  tone = 'info',
  title,
  message,
  icon,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 280,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: t.background,
      color: t.color,
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-block)',
      fontFamily: 'var(--font-body)',
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 20,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, title ? React.createElement('strong', {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)'
    }
  }, title) : null, message ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      opacity: .9
    }
  }, message) : null), onDismiss ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    variant: 'ghost',
    size: 'sm',
    label: 'Dismiss',
    onClick: onDismiss,
    style: {
      color: 'inherit'
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : placement === 'left' ? {
    right: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : placement === 'right' ? {
    left: 'calc(100% + 8px)',
    top: '50%',
    transform: 'translateY(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return React.createElement('span', {
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    ...rest
  }, children, React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      padding: '6px var(--space-3)',
      background: 'var(--yeah-black)',
      color: 'var(--text-on-dark)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      borderRadius: 'var(--radius-xs)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const uid = React.useMemo(() => id || 'cb-' + Math.random().toString(36).slice(2, 8), [id]);
  return React.createElement('label', {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('input', {
    id: uid,
    type: 'checkbox',
    checked: isOn,
    disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: 'none',
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-xs)',
      background: isOn ? 'var(--yeah-pink)' : 'var(--yeah-white)',
      color: 'var(--yeah-white)',
      transition: 'var(--transition-control)'
    }
  }, isOn ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 16
  }) : null), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  type = 'text',
  size = 'md',
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || 'in-' + Math.random().toString(36).slice(2, 8), [id]);
  const h = size === 'sm' ? 'var(--control-height-sm)' : size === 'lg' ? 'var(--control-height-lg)' : 'var(--control-height-md)';
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label) : null, React.createElement('input', {
    id: uid,
    type,
    value,
    defaultValue,
    placeholder,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: h,
      padding: '0 var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-muted)' : 'var(--yeah-white)',
      border: 'var(--border-width) solid ' + (error ? 'var(--status-danger)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-input)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 var(--focus-ring-width) var(--yeah-yellow)' : 'none',
      transition: 'var(--transition-control)',
      width: '100%',
      boxSizing: 'border-box'
    },
    ...rest
  }), error ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--status-danger)',
      fontWeight: 'var(--weight-medium)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const uid = React.useMemo(() => id || 'rd-' + Math.random().toString(36).slice(2, 8), [id]);
  return React.createElement('label', {
    htmlFor: uid,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('input', {
    id: uid,
    type: 'radio',
    name,
    value,
    checked: isOn,
    disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: 'none',
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--yeah-white)',
      transition: 'var(--transition-control)'
    }
  }, React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--yeah-pink)',
      transform: 'scale(' + (isOn ? 1 : 0) + ')',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || 'sel-' + Math.random().toString(36).slice(2, 8), [id]);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label) : null, React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, React.createElement('select', {
    id: uid,
    value,
    defaultValue,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      height: 'var(--control-height-md)',
      width: '100%',
      padding: '0 var(--space-10) 0 var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-muted)' : 'var(--yeah-white)',
      border: 'var(--border-width) solid ' + (error ? 'var(--status-danger)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-input)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? '0 0 0 var(--focus-ring-width) var(--yeah-yellow)' : 'none',
      transition: 'var(--transition-control)',
      boxSizing: 'border-box'
    },
    ...rest
  }, placeholder ? React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  })), React.createElement('span', {
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex',
      color: 'var(--text-heading)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'chevron-down',
    size: 18
  }))), error ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--status-danger)',
      fontWeight: 'var(--weight-medium)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const uid = React.useMemo(() => id || 'sw-' + Math.random().toString(36).slice(2, 8), [id]);
  const toggle = () => {
    if (disabled) return;
    const n = !isOn;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return React.createElement('label', {
    htmlFor: uid,
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, React.createElement('input', {
    id: uid,
    type: 'checkbox',
    checked: isOn,
    disabled,
    readOnly: true,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    },
    ...rest
  }), React.createElement('span', {
    role: 'switch',
    'aria-checked': isOn,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      width: 48,
      height: 28,
      flex: 'none',
      padding: 2,
      border: 'var(--border-width) solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      background: isOn ? 'var(--yeah-pink)' : 'var(--neutral-200)',
      transition: 'var(--transition-control)'
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--yeah-white)',
      border: '1px solid var(--yeah-black)',
      transform: 'translateX(' + (isOn ? 20 : 0) + 'px)',
      transition: 'transform var(--duration-fast) var(--ease-out)'
    }
  })), label ? React.createElement('span', null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || 'ta-' + Math.random().toString(36).slice(2, 8), [id]);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? React.createElement('label', {
    htmlFor: uid,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)'
    }
  }, label) : null, React.createElement('textarea', {
    id: uid,
    rows,
    value,
    defaultValue,
    placeholder,
    disabled,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      padding: 'var(--space-3) var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)',
      resize: 'vertical',
      background: disabled ? 'var(--surface-muted)' : 'var(--yeah-white)',
      border: 'var(--border-width) solid ' + (error ? 'var(--status-danger)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-input)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 var(--focus-ring-width) var(--yeah-yellow)' : 'none',
      transition: 'var(--transition-control)',
      width: '100%',
      boxSizing: 'border-box'
    },
    ...rest
  }), error ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--status-danger)',
      fontWeight: 'var(--weight-medium)'
    }
  }, error) : hint ? React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const [inner, setInner] = React.useState(defaultValue !== undefined ? defaultValue : first);
  const active = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: pill ? 'var(--space-2)' : 'var(--space-6)',
      borderBottom: pill ? 'none' : 'var(--border-width) solid var(--border-strong)',
      fontFamily: 'var(--font-body)',
      ...style
    },
    ...rest
  }, items.map(it => {
    const v = typeof it === 'string' ? it : it.value,
      l = typeof it === 'string' ? it : it.label,
      isOn = v === active;
    return React.createElement('button', {
      key: v,
      role: 'tab',
      'aria-selected': isOn,
      onClick: () => pick(v),
      style: pill ? {
        height: 'var(--control-height-sm)',
        padding: '0 var(--space-4)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        border: 'var(--border-width) solid var(--border-strong)',
        background: isOn ? 'var(--yeah-black)' : 'transparent',
        color: isOn ? 'var(--text-on-dark)' : 'var(--text-body)',
        transition: 'var(--transition-control)'
      } : {
        padding: '0 0 var(--space-3)',
        marginBottom: 'calc(-1 * var(--border-width))',
        background: 'none',
        border: 'none',
        borderBottom: 'var(--border-width-thick) solid ' + (isOn ? 'var(--yeah-pink)' : 'transparent'),
        fontSize: 'var(--text-base)',
        fontWeight: isOn ? 'var(--weight-bold)' : 'var(--weight-medium)',
        color: isOn ? 'var(--text-heading)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventDetailScreen.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Card,
  Tag,
  Dialog,
  Input,
  Select,
  Checkbox,
  Toast,
  Tooltip
} = window.YEAHDesignSystem_b0ca81;
function EventDetailScreen({
  ev,
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const e = ev || window.YEAH_DATA.events[0];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yeah-black)',
      color: 'var(--text-on-dark)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-8) var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    onClick: () => go('events'),
    style: {
      color: 'var(--neutral-400)',
      marginBottom: 'var(--space-8)',
      paddingLeft: 0
    }
  }, "All events"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "yellow"
  }, e.tag), /*#__PURE__*/React.createElement(Badge, {
    tone: "pink"
  }, e.state)), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--neutral-200)',
      maxWidth: '52ch'
    }
  }, e.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "Share"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "share-2",
    variant: "outline",
    label: "Share",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Save"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bookmark",
    variant: "outline",
    label: "Save",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Add to calendar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "calendar-plus",
    variant: "outline",
    label: "Add to calendar",
    size: "sm"
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "white",
    shadow: "yellow",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['calendar', e.date], ['clock', e.time], ['map-pin', e.place], ['users', e.seats]].map(([ic, v]) => /*#__PURE__*/React.createElement("div", {
    key: ic,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--yeah-pink)"
  }), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--border-subtle)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    onClick: () => setOpen(true),
    disabled: e.state === 'Sold out'
  }, e.state === 'Sold out' ? 'Sold out' : 'Register — free'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, "Members and non-members welcome.")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 'var(--space-12)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Run of the evening"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0,
      borderTop: '2px solid var(--border-strong)'
    }
  }, [['18:00', 'Doors, food, name tags'], ['18:30', 'Six pitches, five minutes each'], ['19:45', 'Feedback round with mentors'], ['20:30', 'Open floor']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      gap: 'var(--space-6)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-accent)',
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, d)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Who's pitching"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, window.YEAH_DATA.members.slice(0, 3).map(m => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    padding: "var(--space-4)",
    shadow: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--yeah-yellow)',
      border: '2px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700
    }
  }, m.name[0]), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 'var(--text-sm)'
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, m.role))))), /*#__PURE__*/React.createElement(Card, {
    tone: "sunken",
    shadow: "none",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Bring"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: '1.1em',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("li", null, "A deck, if you have one"), /*#__PURE__*/React.createElement("li", null, "A student ID"), /*#__PURE__*/React.createElement("li", null, "Questions for the mentors")))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: 'Register for ' + e.title,
    description: e.date + ' · ' + e.time + ' · ' + e.place,
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setOpen(false);
        setDone(true);
      }
    }, "Confirm"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your full name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@yeah.co.th"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "I'm coming as",
    options: ['A founder', 'A curious student', 'A mentor'],
    placeholder: "Choose one"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remind me the day before",
    defaultChecked: true
  }))), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 'var(--space-6)',
      bottom: 'var(--space-6)',
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "You're in",
    message: "QR code sent to your email.",
    onDismiss: () => setDone(false)
  })) : null);
}
Object.assign(window, {
  EventDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EventsScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Card,
  Tag,
  Tabs,
  Input
} = window.YEAHDesignSystem_b0ca81;
function EventsScreen({
  go
}) {
  const D = window.YEAH_DATA;
  const [scope, setScope] = React.useState('all');
  const [tags, setTags] = React.useState(['Pitch']);
  const toggle = t => setTags(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t]);
  const list = D.events.filter(e => tags.length === 0 || tags.includes(e.tag));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yeah-yellow)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, "Programme \xB7 September 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Everything we're running"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-8) var(--space-20)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search",
    placeholder: "Pitch, pricing\u2026",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, "Format"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, ['Pitch', 'Workshop', 'Clinic', 'Social'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: tags.includes(t),
    onSelect: () => toggle(t)
  }, t)))), /*#__PURE__*/React.createElement(Card, {
    tone: "dark",
    shadow: "yellow",
    padding: "var(--space-5)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 600
    }
  }, "Want to host?"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-400)'
    }
  }, "Members can propose a workshop any time."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    block: true
  }, "Propose a session"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'wk',
      label: 'This week'
    }, {
      value: 'mo',
      label: 'This month'
    }],
    value: scope,
    onChange: setScope
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, list.map(ev => /*#__PURE__*/React.createElement(Card, {
    key: ev.id,
    interactive: true,
    onClick: () => go('event', ev),
    padding: "var(--space-5)",
    style: {
      display: 'grid',
      gridTemplateColumns: '96px 1fr auto',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: ev.tone === 'pink' ? 'var(--yeah-pink)' : 'var(--yeah-yellow)',
      color: ev.tone === 'pink' ? 'var(--yeah-white)' : 'var(--yeah-black)',
      border: '2px solid var(--border-strong)',
      padding: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, ev.date.split(' ')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 700,
      lineHeight: 1
    }
  }, ev.date.split(' ')[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      textTransform: 'uppercase'
    }
  }, ev.date.split(' ')[2])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "white",
    style: {
      background: 'var(--yeah-white)',
      color: 'var(--text-heading)'
    }
  }, ev.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: ev.state === 'Sold out' ? 'var(--text-muted)' : 'var(--text-accent)'
    }
  }, ev.state)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, ev.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), ev.time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), ev.place))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: ev.state === 'Sold out' ? 'outline' : 'primary',
    disabled: ev.state === 'Sold out'
  }, ev.state === 'Sold out' ? 'Sold out' : 'Register')))))));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Card,
  Tag,
  Logo
} = window.YEAHDesignSystem_b0ca81;
function EventCard({
  ev,
  go
}) {
  return /*#__PURE__*/React.createElement(Card, {
    tone: ev.tone,
    interactive: true,
    shadow: ev.tone === 'white' ? 'block' : 'block',
    onClick: () => go('event', ev),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: ev.tone === 'yellow' ? 'dark' : ev.tone === 'pink' ? 'dark' : 'pink'
  }, ev.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      opacity: .75
    }
  }, ev.state)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, ev.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      opacity: .85,
      flex: 1
    }
  }, ev.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 16
  }), /*#__PURE__*/React.createElement("span", null, ev.date), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, ev.time.split(' – ')[0])));
}
function HomeScreen({
  go
}) {
  const D = window.YEAH_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '2px solid var(--border-strong)',
      background: 'var(--yeah-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-24) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Young Entrepreneur Assembly Hub"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, "Come with an idea.", /*#__PURE__*/React.createElement("br", null), "Leave with a team."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)',
      maxWidth: '44ch'
    }
  }, "A student-run hub where young founders meet, pitch and build. Free to join, open every week."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('join')
  }, "Become a member"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 20
    }),
    onClick: () => go('events')
  }, "See what's on"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--yeah-black)',
      border: '2px solid var(--border-strong)',
      boxShadow: 'var(--shadow-block-pink)',
      padding: 'var(--space-10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "knockout",
    height: 120,
    basePath: "../../assets/"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yeah-yellow)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-8)'
    }
  }, D.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display-alt)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      lineHeight: 1,
      color: 'var(--yeah-black)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--yeah-black)',
      opacity: .7
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)'
    }
  }, "What's on"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderBottom: '2px solid var(--border-strong)',
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }),
    onClick: () => go('events')
  }, "All events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, D.events.slice(0, 3).map(ev => /*#__PURE__*/React.createElement(EventCard, {
    key: ev.id,
    ev: ev,
    go: go
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yeah-black)',
      color: 'var(--text-on-dark)',
      borderTop: '2px solid var(--border-strong)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-10)'
    }
  }, [['users', 'Show up', 'Weekly mixers and clinics. No application, no fee, no pitch required.'], ['presentation', 'Pitch it', 'Five minutes on stage at Pitch Night, then honest feedback from people who have shipped.'], ['rocket', 'Build it', 'Mentors, a co-working floor and a small grant for teams that keep going.']].map(([ic, h, b], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: i === 1 ? 'var(--yeah-pink)' : 'var(--yeah-yellow)',
      border: '2px solid var(--yeah-white)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: i === 1 ? 'var(--yeah-white)' : 'var(--yeah-black)'
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-display)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--neutral-400)'
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-20) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "pink",
    shadow: "lg",
    padding: "var(--space-16)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Membership is free.", /*#__PURE__*/React.createElement("br", null), "The room is not empty."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      opacity: .9,
      maxWidth: '40ch'
    }
  }, "320 members, 48 events run, and a Pitch Night every month.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('join')
  }, "Join YEAH"))));
}
Object.assign(window, {
  HomeScreen,
  EventCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/JoinScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Tabs,
  Toast,
  Badge
} = window.YEAHDesignSystem_b0ca81;
function JoinScreen({
  go
}) {
  const [step, setStep] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  const steps = ['You', 'Your idea', 'Confirm'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      minHeight: '70vh'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-20)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, "Membership \xB7 Free"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-heading)'
    }
  }, "Join YEAH"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--text-body)'
    }
  }, "Three short steps. We reply within a week, and there is no interview.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: i <= step ? 'var(--yeah-pink)' : 'var(--neutral-200)',
      border: '2px solid var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: i <= step ? 'var(--text-heading)' : 'var(--text-muted)'
    }
  }, s)))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-8)",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, step === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Phantakarn Mangkornngam"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@yeah.co.th"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Faculty",
    placeholder: "Choose one",
    options: ['Business', 'Engineering', 'Law', 'Design', 'Alumni']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase'
    }
  }, "I'm joining as"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "as",
    label: "A founder",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "as",
    label: "A curious student"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "as",
    label: "A mentor"
  })))) : step === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    label: "Working title",
    placeholder: "CropTech"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "What are you building?",
    rows: 4,
    placeholder: "Two or three sentences is plenty."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I have a team already",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'm looking for a co-founder"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I'd like a mentor match"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, [['Name', 'Phantakarn Mangkornngam'], ['Email', 'phantakarn@yeah.co.th'], ['Faculty', 'Business'], ['Joining as', 'A founder'], ['Project', 'CropTech']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-3)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)'
    }
  }, v)))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "I agree to the community code of conduct",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      paddingTop: 'var(--space-2)'
    }
  }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setStep(step - 1),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 18
    })
  }, "Back") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    onClick: () => setStep(step + 1),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(true);
      go('home');
    }
  }, "Send application"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, [['gift', 'Free forever'], ['calendar', 'Weekly events'], ['users', 'Mentor matching']].map(([ic, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: 'var(--yeah-white)',
      border: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--yeah-pink)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600
    }
  }, l))))), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 'var(--space-6)',
      bottom: 'var(--space-6)',
      zIndex: 120
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Application sent",
    message: "We reply within a week.",
    onDismiss: () => setSent(false)
  })) : null);
}
Object.assign(window, {
  JoinScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MembersScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge,
  Card,
  Tag,
  Input,
  Select,
  Switch
} = window.YEAHDesignSystem_b0ca81;
function MembersScreen({
  go
}) {
  const D = window.YEAH_DATA;
  const [q, setQ] = React.useState('');
  const list = D.members.filter(m => m.name.toLowerCase().includes(q.toLowerCase()) || m.role.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--yeah-pink)',
      color: 'var(--text-on-pink)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      opacity: .8
    }
  }, "320 members \xB7 41 mentors"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 700,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "The room"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-8) var(--space-20)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 200px 200px auto',
      gap: 'var(--space-4)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search members",
    placeholder: "Name, company, skill",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Faculty",
    options: ['All', 'Business', 'Engineering', 'Design', 'Alumni']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    options: ['All', 'Founder', 'Mentor', 'Designer']
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Looking for a co-founder",
    style: {
      paddingBottom: 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, list.map((m, i) => /*#__PURE__*/React.createElement(Card, {
    key: m.name,
    interactive: true,
    shadow: i % 3 === 1 ? 'pink' : 'block',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      flex: 'none',
      borderRadius: 'var(--radius-circle)',
      background: i % 2 ? 'var(--yeah-pink)' : 'var(--yeah-yellow)',
      color: i % 2 ? 'var(--yeah-white)' : 'var(--yeah-black)',
      border: '2px solid var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 700
    }
  }, m.name[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      fontWeight: 600
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, m.role))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, m.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-1)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "white",
    style: {
      background: 'var(--surface-sunken)'
    }
  }, m.faculty), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 14
    })
  }, "Message")))))));
}
Object.assign(window, {
  MembersScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MembersScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Badge
} = window.YEAHDesignSystem_b0ca81;
const NAV = [['home', 'Home'], ['events', 'Events'], ['members', 'Members'], ['join', 'Join']];
function SiteHeader({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'var(--yeah-white)',
      borderBottom: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 30,
    basePath: "../../assets/"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginLeft: 'var(--space-4)'
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: route === k ? 700 : 500,
      color: route === k ? 'var(--text-heading)' : 'var(--text-muted)',
      textDecoration: 'none',
      borderBottom: route === k ? '3px solid var(--yeah-pink)' : '3px solid transparent',
      paddingBottom: 4
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    variant: "ghost",
    size: "sm",
    label: "Search"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "dark",
    onClick: () => go('join')
  }, "Become a member")));
}
function SiteFooter({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--yeah-black)',
      color: 'var(--text-on-dark)',
      borderTop: '2px solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-10)',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "knockout",
    height: 56,
    basePath: "../../assets/"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-normal)',
      color: 'var(--neutral-400)',
      maxWidth: '34ch'
    }
  }, "A student-run hub for young founders. Come with an idea, leave with a team.")), [['Community', ['Events', 'Members', 'Mentors', 'Startups']], ['Programmes', ['Pitch Night', 'Workshops', 'Clinics', 'Incubation']], ['About', ['Our story', 'Partners', 'Contact', 'Instagram']]].map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-2xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--yeah-yellow)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--neutral-200)',
      textDecoration: 'none'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-8)',
      borderTop: '1px solid var(--neutral-800)',
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--neutral-600)'
    }
  }, "\xA9 2026 Young Entrepreneur Assembly Hub"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), ['instagram', 'facebook', 'linkedin'].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: n,
    size: 18,
    color: "var(--neutral-400)"
  }))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.YEAH_DATA = {
  events: [{
    id: 'pn04',
    title: 'Pitch Night #04',
    date: 'Thu 12 Sep',
    time: '18:00 – 21:00',
    place: 'Room 402, Business Bldg',
    tag: 'Pitch',
    tone: 'yellow',
    seats: '12 seats left',
    state: 'Open now',
    blurb: 'Six teams, five minutes each, one room full of people who can actually help.'
  }, {
    id: 'ws11',
    title: 'Workshop: Pricing your first product',
    date: 'Sat 21 Sep',
    time: '13:00 – 16:00',
    place: 'Co-working Floor 3',
    tag: 'Workshop',
    tone: 'pink',
    seats: 'Waitlist',
    state: 'Waitlist',
    blurb: 'Bring a product and a spreadsheet. Leave with a price you can defend.'
  }, {
    id: 'mx02',
    title: 'Founder Mixer',
    date: 'Fri 27 Sep',
    time: '19:00 – 22:00',
    place: 'YEAH Hub, Ground Floor',
    tag: 'Social',
    tone: 'white',
    seats: '40 seats left',
    state: 'Open now',
    blurb: 'No slides. No panel. Just the people building things nearby.'
  }, {
    id: 'cl01',
    title: 'Clinic: Talking to your first 20 users',
    date: 'Wed 2 Oct',
    time: '17:30 – 19:00',
    place: 'Online',
    tag: 'Clinic',
    tone: 'white',
    seats: 'Sold out',
    state: 'Sold out',
    blurb: 'A working session on interviews, not a lecture about them.'
  }],
  members: [{
    name: 'Phantakarn M.',
    role: 'Founder · CropTech',
    faculty: 'Business',
    tags: ['Agritech', 'Hardware']
  }, {
    name: 'Nichada S.',
    role: 'Founder · Rider',
    faculty: 'Engineering',
    tags: ['Logistics']
  }, {
    name: 'Arthit P.',
    role: 'Mentor · Ex-Grab',
    faculty: 'Alumni',
    tags: ['Growth', 'Pricing']
  }, {
    name: 'Kwan L.',
    role: 'Designer · Freelance',
    faculty: 'Design',
    tags: ['Brand', 'Product']
  }, {
    name: 'Tanawat R.',
    role: 'Founder · Studybuddy',
    faculty: 'Business',
    tags: ['Edtech']
  }, {
    name: 'Mint C.',
    role: 'Mentor · VC Analyst',
    faculty: 'Alumni',
    tags: ['Fundraising']
  }],
  stats: [['320', 'members'], ['48', 'events run'], ['19', 'startups launched'], ['฿4.2M', 'raised by alumni']]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
