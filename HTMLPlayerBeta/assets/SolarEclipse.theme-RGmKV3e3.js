const r=`/* Solar Eclipse Theme */
:root {
  /* Theme */
  --themegradient: radial-gradient(circle at center, #000000 15%, #1a1a1a 25%, #ff4500 45%, #ffa500 65%, #ffff00 85%);
  --themecolor: hsl(16, 100%, 50%);
  --themecolor2: hsl(38, 100%, 50%);
  --themecolor3: hsl(60, 100%, 50%);
  --themecolor4: hsl(0, 0%, 10%);
  --themecolor1-transparent: hsla(16, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(38, 100%, 50%, 0.5);
  --themecolor3-transparent: hsla(60, 100%, 50%, 0.5);
  --menu-background: hsla(38, 100%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(45, 25%, 15%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(45, 15%, 97%);

  /* Surface */
  --surface: hsl(40, 20%, 94%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(40, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(38, 100%, 50%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(38, 100%, 50%, 0.25);
  --primary-transparent-1: hsla(38, 100%, 50%, 0.1);
  --primary-transparent-2: hsla(38, 100%, 50%, 0.15);
  --primary-transparent-3: hsla(38, 100%, 50%, 0.2);
  --primary-transparent-4: hsla(38, 100%, 50%, 0.3);
  --primary-transparent-5: hsla(38, 100%, 50%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(38, 100%, 50%, 0.3);
  --primary-border-strong: hsla(38, 100%, 50%, 0.4);
  --primary-border-stronger: hsla(38, 100%, 50%, 0.5);
  --primary-border-active: hsla(38, 100%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(16, 100%, 50%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(20, 40%, 20%);
  --sidebar-foreground: hsl(60, 100%, 95%);
  --sidebar-bg-transparent: hsla(20, 40%, 20%, 0.4);
  --sidebar-bg-hover: hsla(20, 40%, 20%, 0.6);

  /* Favorites */
  --favorite: hsl(16, 100%, 50%);
  --favorite-transparent-1: hsla(16, 100%, 50%, 0.15);
  --favorite-transparent-2: hsla(16, 100%, 50%, 0.25);
  --favorite-border: hsla(16, 100%, 50%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 255, 165, 0;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(40, 25%, 82%);
  --muted-foreground: hsl(25, 15%, 35%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor2);
  --albumart-gradient: radial-gradient(circle at center, var(--themecolor4) 10%, var(--themecolor) 30%, var(--themecolor2) 60%, var(--themecolor3) 90%);

  /* Shadows */
  --border: hsl(40, 20%, 85%);
  --shadow: 0 1px 2px hsla(16, 100%, 50%, 0.1),
    0 3px 6px hsla(38, 100%, 50%, 0.12);
  --shadow-md: 0 1px 3px hsla(16, 100%, 50%, 0.1),
    0 10px 15px -5px hsla(38, 100%, 50%, 0.1),
    0 20px 25px -5px hsla(60, 100%, 50%, 0.08);
  --shadow-lg: 0 1px 3px hsla(16, 100%, 50%, 0.1),
    0 20px 25px -5px hsla(38, 100%, 50%, 0.12),
    0 30px 40px -5px hsla(60, 100%, 50%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(38, 100%, 50%, 0.4),
    0 0 12px hsla(60, 100%, 50%, 0.3);
}

.dark {
  /* Theme */
  --themegradient: radial-gradient(circle at center, #000000 20%, #0f0f0f 30%, #ff4500 50%, #ffa500 70%, #ffff00 90%);
  --themecolor: hsl(16, 100%, 60%);
  --themecolor2: hsl(38, 100%, 60%);
  --themecolor3: hsl(60, 100%, 70%);
  --themecolor4: hsl(0, 0%, 5%);
  --themecolor1-transparent: hsla(16, 100%, 60%, 0.5);
  --themecolor2-transparent: hsla(38, 100%, 60%, 0.5);
  --themecolor3-transparent: hsla(60, 100%, 70%, 0.5);
  --menu-background: hsla(38, 100%, 60%, 0.25);

  /* Foreground */
  --foreground: hsl(60, 100%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(0, 0%, 3%);

  /* Surface */
  --surface: hsl(20, 20%, 6%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(16, 100%, 60%, 0.05);
  --surface-transparent-1: hsla(38, 100%, 60%, 0.1);
  --surface-transparent-2: hsla(60, 100%, 70%, 0.15);

  /* Primary */
  --primary: hsl(38, 100%, 65%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(38, 100%, 65%, 0.25);
  --primary-transparent-2: hsla(38, 100%, 65%, 0.15);
  --primary-transparent-3: hsla(38, 100%, 65%, 0.2);
  --primary-transparent-4: hsla(38, 100%, 65%, 0.25);
  --primary-transparent-5: hsla(38, 100%, 65%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(38, 100%, 65%, 0.3);
  --primary-border-strong: hsla(38, 100%, 65%, 0.4);
  --primary-border-stronger: hsla(38, 100%, 65%, 0.5);
  --primary-border-active: hsla(38, 100%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(16, 100%, 65%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(20, 40%, 5%);
  --sidebar-foreground: hsl(60, 100%, 85%);
  --sidebar-bg-transparent: hsla(20, 40%, 5%, 0.3);
  --sidebar-bg-hover: hsla(20, 40%, 5%, 0.5);

  /* Favorites */
  --favorite: hsl(16, 100%, 65%);
  --favorite-transparent-1: hsla(16, 100%, 65%, 0.15);
  --favorite-transparent-2: hsla(16, 100%, 65%, 0.25);
  --favorite-border: hsla(16, 100%, 65%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(20, 20%, 8%);
  --card-rgb: 255, 165, 0;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(20, 20%, 8%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(20, 15%, 12%);
  --muted-foreground: hsl(60, 20%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(38, 100%, 65%);
  --albumart-gradient: radial-gradient(circle at center, hsl(0, 0%, 5%) 15%, hsl(16, 100%, 60%) 35%, hsl(38, 100%, 60%) 65%, hsl(60, 100%, 70%) 85%);

  /* Shadows */
  --border: hsl(20, 15%, 10%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.4),
    0 3px 6px hsla(16, 100%, 60%, 0.2);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.4),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.3),
    0 20px 25px -5px hsla(38, 100%, 60%, 0.1);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.4),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.35),
    0 30px 40px -5px hsla(60, 100%, 70%, 0.15);
  --shadow-focus: 0 0 0 2px hsla(38, 100%, 65%, 0.5),
    0 0 16px hsla(60, 100%, 70%, 0.4);
}`;export{r as default};
//# sourceMappingURL=SolarEclipse.theme-RGmKV3e3.js.map
