const r=`/* Obsidian */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #1e1e2f, #2a2a3c);
  --themecolor: hsl(260, 30%, 40%);
  --themecolor2: hsl(260, 30%, 55%);
  --themecolor3: hsl(260, 25%, 35%);
  --themecolor4: hsl(260, 25%, 25%);
  --themecolor1-transparent: hsla(260, 30%, 40%, 0.5);
  --themecolor2-transparent: hsla(260, 30%, 55%, 0.5);
  --themecolor3-transparent: hsla(260, 25%, 35%, 0.5);
  --menu-background: hsla(260, 25%, 35%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.85);
  --foreground-stronger: hsla(0, 0%, 100%, 0.95);
  --foreground-muted: hsla(0, 0%, 70%, 0.7);
  --foreground-subtle: hsla(0, 0%, 70%, 0.5);

  /* Background */
  --background: hsl(260, 15%, 12%);

  /* Surface */
  --surface: hsl(260, 15%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(260, 30%, 45%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(260, 30%, 45%, 0.25);
  --primary-transparent-1: hsla(260, 30%, 45%, 0.1);
  --primary-transparent-2: hsla(260, 30%, 45%, 0.15);
  --primary-transparent-3: hsla(260, 30%, 45%, 0.2);
  --primary-transparent-4: hsla(260, 30%, 45%, 0.3);
  --primary-transparent-5: hsla(260, 30%, 45%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(260, 30%, 45%, 0.3);
  --primary-border-strong: hsla(260, 30%, 45%, 0.4);
  --primary-border-stronger: hsla(260, 30%, 45%, 0.5);
  --primary-border-active: hsla(260, 30%, 45%, 0.6);

  /* Secondary */
  --secondary: hsl(270, 20%, 50%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(260, 15%, 14%);
  --sidebar-foreground: hsl(0, 0%, 85%);
  --sidebar-bg-transparent: hsla(260, 30%, 45%, 0.3);
  --sidebar-bg-hover: hsla(260, 30%, 45%, 0.45);

  /* Favorites */
  --favorite: hsl(340, 65%, 55%);
  --favorite-transparent-1: hsla(340, 65%, 55%, 0.15);
  --favorite-transparent-2: hsla(340, 65%, 55%, 0.25);
  --favorite-border: hsla(340, 65%, 55%, 0.3);

  /* Danger */
  --danger: hsl(0, 80%, 55%);
  --danger-transparent-1: hsla(0, 80%, 55%, 0.15);
  --danger-transparent-2: hsla(0, 80%, 55%, 0.25);
  --danger-border: hsla(0, 80%, 55%, 0.3);

  /* Cards */
  --card: hsl(260, 15%, 16%);
  --card-rgb: 30, 30, 45;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(260, 15%, 16%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(260, 15%, 25%);
  --muted-foreground: hsl(0, 0%, 60%);

  /* Error */
  --error: hsl(350, 70%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --border: hsl(260, 15%, 20%);
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 3px 6px hsla(0, 0%, 0%, 0.07);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.04);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.07),
    0 30px 40px -5px hsla(0, 0%, 0%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(260, 30%, 45%, 0.25),
    0 1px 2px hsla(0, 0%, 0%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #1b1b2a, #252535);
  --themecolor: hsl(260, 25%, 30%);
  --themecolor2: hsl(260, 25%, 40%);
  --themecolor3: hsl(260, 20%, 25%);
  --themecolor4: hsl(260, 20%, 18%);
  --themecolor1-transparent: hsla(260, 25%, 30%, 0.5);
  --themecolor2-transparent: hsla(260, 25%, 40%, 0.5);
  --themecolor3-transparent: hsla(260, 20%, 25%, 0.5);
  --menu-background: hsla(260, 20%, 25%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.85);
  --foreground-stronger: hsla(0, 0%, 100%, 0.95);
  --foreground-muted: hsla(0, 0%, 70%, 0.7);
  --foreground-subtle: hsla(0, 0%, 70%, 0.5);

  /* Background */
  --background: hsl(260, 20%, 10%);

  /* Surface */
  --surface: hsl(260, 20%, 14%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(260, 25%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(260, 25%, 35%, 0.25);
  --primary-transparent-2: hsla(260, 25%, 35%, 0.15);
  --primary-transparent-3: hsla(260, 25%, 35%, 0.2);
  --primary-transparent-4: hsla(260, 25%, 35%, 0.25);
  --primary-transparent-5: hsla(260, 25%, 35%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(260, 25%, 35%, 0.3);
  --primary-border-strong: hsla(260, 25%, 35%, 0.4);
  --primary-border-stronger: hsla(260, 25%, 35%, 0.5);
  --primary-border-active: hsla(260, 25%, 35%, 0.6);

  /* Secondary */
  --secondary: hsl(260, 20%, 30%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(260, 20%, 12%);
  --sidebar-foreground: hsl(0, 0%, 85%);
  --sidebar-bg-transparent: hsla(260, 25%, 35%, 0.3);
  --sidebar-bg-hover: hsla(260, 25%, 35%, 0.5);

  /* Favorites */
  --favorite: hsl(340, 60%, 55%);
  --favorite-transparent-1: hsla(340, 60%, 55%, 0.15);
  --favorite-transparent-2: hsla(340, 60%, 55%, 0.25);
  --favorite-border: hsla(340, 60%, 55%, 0.3);

  /* Danger */
  --danger: hsl(0, 75%, 55%);
  --danger-transparent-1: hsla(0, 75%, 55%, 0.15);
  --danger-transparent-2: hsla(0, 75%, 55%, 0.25);
  --danger-border: hsla(0, 75%, 55%, 0.3);

  /* Cards */
  --card: hsl(260, 20%, 14%);
  --card-rgb: 27, 27, 42;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(260, 20%, 14%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(260, 20%, 20%);
  --muted-foreground: hsl(0, 0%, 60%);

  /* Error */
  --error: hsl(350, 65%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(260, 25%, 35%);
  --albumart-gradient: linear-gradient(135deg, #1b1b2a 0%, #252535 100%);

  /* Shadows */
  --border: hsl(260, 20%, 20%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 3px 6px hsla(0, 0%, 0%, 0.07);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.04);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.07),
    0 30px 40px -5px hsla(0, 0%, 0%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(260, 25%, 35%, 0.25),
    0 1px 2px hsla(0, 0%, 0%, 0.05);
}
`;export{r as default};
//# sourceMappingURL=Obsidian.theme-6hkJgGyO.js.map
