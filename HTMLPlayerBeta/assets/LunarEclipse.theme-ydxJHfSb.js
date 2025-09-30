const r=`/* Lunar Eclipse Theme */
:root {
  /* Theme */
  --themegradient: radial-gradient(circle at center, #2c1810 20%, #5a2c1a 40%, #8b3a3a 60%, #cc6666 80%);
  --themecolor: hsl(15, 45%, 25%);
  --themecolor2: hsl(15, 55%, 35%);
  --themecolor3: hsl(0, 35%, 45%);
  --themecolor4: hsl(0, 50%, 60%);
  --themecolor1-transparent: hsla(15, 45%, 25%, 0.5);
  --themecolor2-transparent: hsla(15, 55%, 35%, 0.5);
  --themecolor3-transparent: hsla(0, 35%, 45%, 0.5);
  --menu-background: hsla(15, 55%, 35%, 0.35);

  /* Foreground */
  --foreground: hsl(15, 25%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(15, 10%, 96%);

  /* Surface */
  --surface: hsl(15, 15%, 93%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(15, 30%, 80%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(15, 55%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(15, 55%, 35%, 0.25);
  --primary-transparent-1: hsla(15, 55%, 35%, 0.1);
  --primary-transparent-2: hsla(15, 55%, 35%, 0.15);
  --primary-transparent-3: hsla(15, 55%, 35%, 0.2);
  --primary-transparent-4: hsla(15, 55%, 35%, 0.3);
  --primary-transparent-5: hsla(15, 55%, 35%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(15, 55%, 35%, 0.3);
  --primary-border-strong: hsla(15, 55%, 35%, 0.4);
  --primary-border-stronger: hsla(15, 55%, 35%, 0.5);
  --primary-border-active: hsla(15, 55%, 35%, 0.6);

  /* Secondary */
  --secondary: hsl(0, 50%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(15, 40%, 25%);
  --sidebar-foreground: hsl(15, 20%, 90%);
  --sidebar-bg-transparent: hsla(15, 40%, 25%, 0.4);
  --sidebar-bg-hover: hsla(15, 40%, 25%, 0.6);

  /* Favorites */
  --favorite: hsl(0, 50%, 60%);
  --favorite-transparent-1: hsla(0, 50%, 60%, 0.15);
  --favorite-transparent-2: hsla(0, 50%, 60%, 0.25);
  --favorite-border: hsla(0, 50%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 70%, 55%);
  --danger-transparent-1: hsla(0, 70%, 55%, 0.15);
  --danger-transparent-2: hsla(0, 70%, 55%, 0.25);
  --danger-border: hsla(0, 70%, 55%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 139, 58, 58;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(15, 20%, 82%);
  --muted-foreground: hsl(15, 15%, 35%);

  /* Error */
  --error: hsl(0, 70%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor2);
  --albumart-gradient: radial-gradient(circle at center, var(--themecolor) 25%, var(--themecolor2) 50%, var(--themecolor3) 75%, var(--themecolor4) 100%);

  /* Shadows */
  --border: hsl(15, 20%, 85%);
  --shadow: 0 1px 2px hsla(15, 45%, 25%, 0.08),
    0 3px 6px hsla(0, 35%, 45%, 0.1);
  --shadow-md: 0 1px 3px hsla(15, 45%, 25%, 0.08),
    0 10px 15px -5px hsla(0, 35%, 45%, 0.08),
    0 20px 25px -5px hsla(0, 50%, 60%, 0.06);
  --shadow-lg: 0 1px 3px hsla(15, 45%, 25%, 0.08),
    0 20px 25px -5px hsla(0, 35%, 45%, 0.1),
    0 30px 40px -5px hsla(0, 50%, 60%, 0.08);
  --shadow-focus: 0 0 0 2px hsla(15, 55%, 35%, 0.3),
    0 0 8px hsla(0, 50%, 60%, 0.2);
}

.dark {
  /* Theme */
  --themegradient: radial-gradient(circle at center, #0a0a0a 15%, #1a0f0a 30%, #2c1810 45%, #5a2c1a 65%, #8b3a3a 85%);
  --themecolor: hsl(15, 60%, 40%);
  --themecolor2: hsl(15, 70%, 50%);
  --themecolor3: hsl(0, 60%, 55%);
  --themecolor4: hsl(0, 70%, 65%);
  --themecolor1-transparent: hsla(15, 60%, 40%, 0.5);
  --themecolor2-transparent: hsla(15, 70%, 50%, 0.5);
  --themecolor3-transparent: hsla(0, 60%, 55%, 0.5);
  --menu-background: hsla(15, 70%, 50%, 0.25);

  /* Foreground */
  --foreground: hsl(15, 30%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(15, 20%, 5%);

  /* Surface */
  --surface: hsl(15, 25%, 8%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(15, 60%, 40%, 0.05);
  --surface-transparent-1: hsla(15, 70%, 50%, 0.1);
  --surface-transparent-2: hsla(0, 60%, 55%, 0.15);

  /* Primary */
  --primary: hsl(15, 70%, 50%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(15, 70%, 50%, 0.25);
  --primary-transparent-2: hsla(15, 70%, 50%, 0.15);
  --primary-transparent-3: hsla(15, 70%, 50%, 0.2);
  --primary-transparent-4: hsla(15, 70%, 50%, 0.25);
  --primary-transparent-5: hsla(15, 70%, 50%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(15, 70%, 50%, 0.3);
  --primary-border-strong: hsla(15, 70%, 50%, 0.4);
  --primary-border-stronger: hsla(15, 70%, 50%, 0.5);
  --primary-border-active: hsla(15, 70%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(0, 70%, 65%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(15, 40%, 6%);
  --sidebar-foreground: hsl(15, 30%, 80%);
  --sidebar-bg-transparent: hsla(15, 40%, 6%, 0.3);
  --sidebar-bg-hover: hsla(15, 40%, 6%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 70%, 65%);
  --favorite-transparent-1: hsla(0, 70%, 65%, 0.15);
  --favorite-transparent-2: hsla(0, 70%, 65%, 0.25);
  --favorite-border: hsla(0, 70%, 65%, 0.3);

  /* Danger */
  --danger: hsl(0, 80%, 60%);
  --danger-transparent-1: hsla(0, 80%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 80%, 60%, 0.25);
  --danger-border: hsla(0, 80%, 60%, 0.3);

  /* Cards */
  --card: hsl(15, 25%, 10%);
  --card-rgb: 139, 58, 58;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(15, 25%, 10%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(15, 20%, 15%);
  --muted-foreground: hsl(15, 20%, 65%);

  /* Error */
  --error: hsl(0, 80%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(15, 70%, 50%);
  --albumart-gradient: radial-gradient(circle at center, hsl(15, 20%, 8%) 10%, hsl(15, 60%, 40%) 30%, hsl(15, 70%, 50%) 60%, hsl(0, 70%, 65%) 90%);

  /* Shadows */
  --border: hsl(15, 20%, 12%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.3),
    0 3px 6px hsla(15, 60%, 40%, 0.15);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.3),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.2),
    0 20px 25px -5px hsla(0, 60%, 55%, 0.1);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.3),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.25),
    0 30px 40px -5px hsla(0, 70%, 65%, 0.12);
  --shadow-focus: 0 0 0 2px hsla(15, 70%, 50%, 0.4),
    0 0 10px hsla(0, 70%, 65%, 0.3);
}`;export{r as default};
//# sourceMappingURL=LunarEclipse.theme-ydxJHfSb.js.map
