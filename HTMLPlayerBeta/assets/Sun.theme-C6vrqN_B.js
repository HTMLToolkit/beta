const r=`/* Supernova Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #ff4500, #ff6b00, #ff8c00, #ffa500, #ffbf00, #ffd700, #ffeb3b, #fff176);
  --themecolor: hsl(16, 100%, 50%);
  --themecolor2: hsl(38, 100%, 50%);
  --themecolor3: hsl(45, 100%, 50%);
  --themecolor4: hsl(52, 100%, 60%);
  --themecolor1-transparent: hsla(16, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(38, 100%, 50%, 0.5);
  --themecolor3-transparent: hsla(45, 100%, 50%, 0.5);
  --menu-background: hsla(38, 100%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(25, 25%, 15%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(45, 15%, 98%);

  /* Surface */
  --surface: hsl(40, 20%, 95%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(40, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(16, 100%, 50%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(16, 100%, 50%, 0.25);
  --primary-transparent-1: hsla(16, 100%, 50%, 0.1);
  --primary-transparent-2: hsla(16, 100%, 50%, 0.15);
  --primary-transparent-3: hsla(16, 100%, 50%, 0.2);
  --primary-transparent-4: hsla(16, 100%, 50%, 0.3);
  --primary-transparent-5: hsla(16, 100%, 50%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(16, 100%, 50%, 0.3);
  --primary-border-strong: hsla(16, 100%, 50%, 0.4);
  --primary-border-stronger: hsla(16, 100%, 50%, 0.5);
  --primary-border-active: hsla(16, 100%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(45, 100%, 50%);
  --secondary-foreground: hsl(0, 0%, 0%);

  /* Sidebar */
  --sidebar: hsl(20, 40%, 20%);
  --sidebar-foreground: hsl(45, 100%, 95%);
  --sidebar-bg-transparent: hsla(20, 40%, 20%, 0.4);
  --sidebar-bg-hover: hsla(20, 40%, 20%, 0.6);

  /* Favorites */
  --favorite: hsl(16, 100%, 60%);
  --favorite-transparent-1: hsla(16, 100%, 60%, 0.15);
  --favorite-transparent-2: hsla(16, 100%, 60%, 0.25);
  --favorite-border: hsla(16, 100%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 255, 69, 0;
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
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor) 0%, var(--themecolor2) 25%, var(--themecolor3) 50%, var(--themecolor4) 75%, hsl(60, 100%, 70%) 100%);

  /* Shadows */
  --border: hsl(40, 20%, 85%);
  --shadow: 0 1px 2px hsla(16, 100%, 50%, 0.08),
    0 3px 6px hsla(38, 100%, 50%, 0.1);
  --shadow-md: 0 1px 3px hsla(16, 100%, 50%, 0.08),
    0 10px 15px -5px hsla(38, 100%, 50%, 0.08),
    0 20px 25px -5px hsla(45, 100%, 50%, 0.06);
  --shadow-lg: 0 1px 3px hsla(16, 100%, 50%, 0.08),
    0 20px 25px -5px hsla(38, 100%, 50%, 0.1),
    0 30px 40px -5px hsla(45, 100%, 50%, 0.08);
  --shadow-focus: 0 0 0 2px hsla(16, 100%, 50%, 0.3),
    0 0 8px hsla(45, 100%, 50%, 0.2);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #1a0a00 0%, #2d1400 25%, #401e00 50%, #532800 75%, #663200 100%);
  --themecolor: hsl(16, 100%, 65%);
  --themecolor2: hsl(38, 100%, 65%);
  --themecolor3: hsl(45, 100%, 70%);
  --themecolor4: hsl(52, 100%, 75%);
  --themecolor1-transparent: hsla(16, 100%, 65%, 0.5);
  --themecolor2-transparent: hsla(38, 100%, 65%, 0.5);
  --themecolor3-transparent: hsla(45, 100%, 70%, 0.5);
  --menu-background: hsla(38, 100%, 65%, 0.25);

  /* Foreground */
  --foreground: hsl(45, 30%, 88%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(20, 30%, 6%);

  /* Surface */
  --surface: hsl(20, 25%, 10%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(16, 100%, 65%, 0.05);
  --surface-transparent-1: hsla(38, 100%, 65%, 0.1);
  --surface-transparent-2: hsla(45, 100%, 70%, 0.15);

  /* Primary */
  --primary: hsl(16, 100%, 65%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(16, 100%, 65%, 0.25);
  --primary-transparent-2: hsla(16, 100%, 65%, 0.15);
  --primary-transparent-3: hsla(16, 100%, 65%, 0.2);
  --primary-transparent-4: hsla(16, 100%, 65%, 0.25);
  --primary-transparent-5: hsla(16, 100%, 65%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(16, 100%, 65%, 0.3);
  --primary-border-strong: hsla(16, 100%, 65%, 0.4);
  --primary-border-stronger: hsla(16, 100%, 65%, 0.5);
  --primary-border-active: hsla(16, 100%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(45, 100%, 70%);
  --secondary-foreground: hsl(0, 0%, 0%);

  /* Sidebar */
  --sidebar: hsl(20, 40%, 8%);
  --sidebar-foreground: hsl(45, 100%, 85%);
  --sidebar-bg-transparent: hsla(20, 40%, 8%, 0.3);
  --sidebar-bg-hover: hsla(20, 40%, 8%, 0.5);

  /* Favorites */
  --favorite: hsl(16, 100%, 70%);
  --favorite-transparent-1: hsla(16, 100%, 70%, 0.15);
  --favorite-transparent-2: hsla(16, 100%, 70%, 0.25);
  --favorite-border: hsla(16, 100%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(20, 25%, 12%);
  --card-rgb: 255, 69, 0;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(20, 25%, 12%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(20, 20%, 18%);
  --muted-foreground: hsl(45, 20%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(16, 100%, 65%);
  --albumart-gradient: linear-gradient(135deg, hsl(16, 100%, 65%) 0%, hsl(38, 100%, 65%) 25%, hsl(45, 100%, 70%) 50%, hsl(52, 100%, 75%) 75%, hsl(60, 100%, 80%) 100%);

  /* Shadows */
  --border: hsl(20, 20%, 16%);
  --shadow: 0 1px 2px hsla(16, 100%, 65%, 0.15),
    0 3px 6px hsla(38, 100%, 65%, 0.2);
  --shadow-md: 0 1px 3px hsla(16, 100%, 65%, 0.15),
    0 10px 15px -5px hsla(38, 100%, 65%, 0.15),
    0 20px 25px -5px hsla(45, 100%, 70%, 0.12);
  --shadow-lg: 0 1px 3px hsla(16, 100%, 65%, 0.15),
    0 20px 25px -5px hsla(38, 100%, 65%, 0.2),
    0 30px 40px -5px hsla(45, 100%, 70%, 0.15);
  --shadow-focus: 0 0 0 2px hsla(16, 100%, 65%, 0.4),
    0 0 12px hsla(45, 100%, 70%, 0.3);
}`;export{r as default};
//# sourceMappingURL=Sun.theme-C6vrqN_B.js.map
