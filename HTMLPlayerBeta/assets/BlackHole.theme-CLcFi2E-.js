const r=`/* BlackHole Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #000000, #1a1a1a, #333333, #4a4a4a, #666666);
  --themecolor: hsl(0, 0%, 15%);
  --themecolor2: hsl(0, 0%, 25%);
  --themecolor3: hsl(0, 0%, 35%);
  --themecolor4: hsl(210, 20%, 40%);
  --themecolor1-transparent: hsla(0, 0%, 15%, 0.5);
  --themecolor2-transparent: hsla(0, 0%, 25%, 0.5);
  --themecolor3-transparent: hsla(0, 0%, 35%, 0.5);
  --menu-background: hsla(0, 0%, 25%, 0.35);

  /* Foreground */
  --foreground: hsl(0, 0%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(0, 0%, 96%);

  /* Surface */
  --surface: hsl(0, 0%, 93%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 0%, 0.05);
  --surface-transparent-2: hsla(0, 0%, 0%, 0.1);

  /* Primary */
  --primary: hsl(0, 0%, 25%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(0, 0%, 25%, 0.25);
  --primary-transparent-1: hsla(0, 0%, 25%, 0.1);
  --primary-transparent-2: hsla(0, 0%, 25%, 0.15);
  --primary-transparent-3: hsla(0, 0%, 25%, 0.2);
  --primary-transparent-4: hsla(0, 0%, 25%, 0.3);
  --primary-transparent-5: hsla(0, 0%, 25%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(0, 0%, 25%, 0.3);
  --primary-border-strong: hsla(0, 0%, 25%, 0.4);
  --primary-border-stronger: hsla(0, 0%, 25%, 0.5);
  --primary-border-active: hsla(0, 0%, 25%, 0.6);

  /* Secondary */
  --secondary: hsl(210, 20%, 35%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(0, 0%, 30%);
  --sidebar-foreground: hsl(0, 0%, 95%);
  --sidebar-bg-transparent: hsla(0, 0%, 30%, 0.4);
  --sidebar-bg-hover: hsla(0, 0%, 30%, 0.6);

  /* Favorites */
  --favorite: hsl(210, 20%, 40%);
  --favorite-transparent-1: hsla(210, 20%, 40%, 0.15);
  --favorite-transparent-2: hsla(210, 20%, 40%, 0.25);
  --favorite-border: hsla(210, 20%, 40%, 0.3);

  /* Danger */
  --danger: hsl(0, 60%, 50%);
  --danger-transparent-1: hsla(0, 60%, 50%, 0.15);
  --danger-transparent-2: hsla(0, 60%, 50%, 0.25);
  --danger-border: hsla(0, 60%, 50%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 64, 64, 64;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(0, 0%, 85%);
  --muted-foreground: hsl(0, 0%, 35%);

  /* Error */
  --error: hsl(0, 60%, 50%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor2);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor) 0%, var(--themecolor2) 33%, var(--themecolor3) 66%, var(--themecolor4) 100%);

  /* Shadows */
  --border: hsl(0, 0%, 82%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1),
    0 3px 6px hsla(0, 0%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.1),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.1),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.1),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.15),
    0 30px 40px -5px hsla(0, 0%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(0, 0%, 25%, 0.3),
    0 1px 2px hsla(0, 0%, 0%, 0.1);
}

.dark {
  /* Theme */
  --themegradient: radial-gradient(circle at center, #000000 0%, #0a0a0a 20%, #1a1a2e 40%, #16213e 60%, #0f3460 80%, #e94560 100%);
  --themecolor: hsl(0, 0%, 5%);
  --themecolor2: hsl(225, 50%, 15%);
  --themecolor3: hsl(210, 60%, 25%);
  --themecolor4: hsl(350, 85%, 60%);
  --themecolor1-transparent: hsla(0, 0%, 5%, 0.5);
  --themecolor2-transparent: hsla(225, 50%, 15%, 0.5);
  --themecolor3-transparent: hsla(210, 60%, 25%, 0.5);
  --menu-background: hsla(225, 50%, 15%, 0.25);

  /* Foreground */
  --foreground: hsl(210, 20%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(0, 0%, 2%);

  /* Surface */
  --surface: hsl(225, 30%, 5%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(350, 85%, 60%, 0.02);
  --surface-transparent-1: hsla(210, 60%, 25%, 0.05);
  --surface-transparent-2: hsla(225, 50%, 15%, 0.1);

  /* Primary */
  --primary: hsl(210, 60%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(210, 60%, 35%, 0.25);
  --primary-transparent-2: hsla(210, 60%, 35%, 0.15);
  --primary-transparent-3: hsla(210, 60%, 35%, 0.2);
  --primary-transparent-4: hsla(210, 60%, 35%, 0.25);
  --primary-transparent-5: hsla(210, 60%, 35%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(210, 60%, 35%, 0.3);
  --primary-border-strong: hsla(210, 60%, 35%, 0.4);
  --primary-border-stronger: hsla(210, 60%, 35%, 0.5);
  --primary-border-active: hsla(210, 60%, 35%, 0.6);

  /* Secondary */
  --secondary: hsl(350, 85%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(225, 30%, 4%);
  --sidebar-foreground: hsl(210, 20%, 80%);
  --sidebar-bg-transparent: hsla(225, 30%, 4%, 0.3);
  --sidebar-bg-hover: hsla(225, 30%, 4%, 0.5);

  /* Favorites */
  --favorite: hsl(350, 85%, 60%);
  --favorite-transparent-1: hsla(350, 85%, 60%, 0.15);
  --favorite-transparent-2: hsla(350, 85%, 60%, 0.25);
  --favorite-border: hsla(350, 85%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(225, 25%, 7%);
  --card-rgb: 233, 69, 96;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(225, 25%, 7%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(225, 15%, 12%);
  --muted-foreground: hsl(210, 10%, 65%);

  /* Error */
  --error: hsl(0, 85%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(210, 60%, 35%);
  --albumart-gradient: radial-gradient(circle at center, hsl(0, 0%, 5%) 0%, hsl(225, 50%, 15%) 30%, hsl(210, 60%, 25%) 60%, hsl(350, 85%, 60%) 100%);

  /* Shadows */
  --border: hsl(225, 15%, 10%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.3),
    0 3px 6px hsla(350, 85%, 60%, 0.1);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.3),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.2),
    0 20px 25px -5px hsla(350, 85%, 60%, 0.05);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.3),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.25),
    0 30px 40px -5px hsla(350, 85%, 60%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(210, 60%, 35%, 0.4),
    0 0 8px hsla(350, 85%, 60%, 0.3);
}`;export{r as default};
//# sourceMappingURL=BlackHole.theme-CLcFi2E-.js.map
