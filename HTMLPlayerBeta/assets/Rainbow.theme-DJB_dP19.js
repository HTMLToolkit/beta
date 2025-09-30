const r=`/* Rainbow */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080);
  --themecolor: hsl(0, 100%, 50%);
  --themecolor2: hsl(120, 100%, 50%);
  --themecolor3: hsl(240, 100%, 50%);
  --themecolor4: hsl(300, 100%, 50%);
  --themecolor1-transparent: hsla(0, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(120, 100%, 50%, 0.5);
  --themecolor3-transparent: hsla(240, 100%, 50%, 0.5);
  --menu-background: hsla(240, 100%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(220, 15%, 20%);
  --foreground-strong: hsla(0, 0%, 0%, 0.8);
  --foreground-stronger: hsla(0, 0%, 0%, 0.9);
  --foreground-muted: hsla(0, 0%, 0%, 0.8);
  --foreground-subtle: hsla(0, 0%, 0%, 0.6);

  /* Background */
  --background: hsl(0, 0%, 98%);

  /* Surface */
  --surface: hsl(0, 0%, 95%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(300, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(240, 100%, 55%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(240, 100%, 55%, 0.25);
  --primary-transparent-1: hsla(240, 100%, 55%, 0.1);
  --primary-transparent-2: hsla(240, 100%, 55%, 0.15);
  --primary-transparent-3: hsla(240, 100%, 55%, 0.2);
  --primary-transparent-4: hsla(240, 100%, 55%, 0.3);
  --primary-transparent-5: hsla(240, 100%, 55%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(240, 100%, 55%, 0.3);
  --primary-border-strong: hsla(240, 100%, 55%, 0.4);
  --primary-border-stronger: hsla(240, 100%, 55%, 0.5);
  --primary-border-active: hsla(240, 100%, 55%, 0.6);

  /* Secondary */
  --secondary: hsl(120, 100%, 40%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(260, 35%, 25%);
  --sidebar-foreground: hsl(60, 100%, 95%);
  --sidebar-bg-transparent: hsla(260, 35%, 25%, 0.4);
  --sidebar-bg-hover: hsla(260, 35%, 25%, 0.6);

  /* Favorites */
  --favorite: hsl(0, 100%, 60%);
  --favorite-transparent-1: hsla(0, 100%, 60%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 60%, 0.25);
  --favorite-border: hsla(0, 100%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 128, 0, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(300, 15%, 85%);
  --muted-foreground: hsl(260, 10%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor3);
  --albumart-gradient: linear-gradient(135deg, hsl(0, 100%, 50%) 0%, hsl(60, 100%, 50%) 16.66%, hsl(120, 100%, 50%) 33.33%, hsl(180, 100%, 50%) 50%, hsl(240, 100%, 50%) 66.66%, hsl(300, 100%, 50%) 83.33%, hsl(0, 100%, 50%) 100%);

  /* Shadows */
  --border: hsl(300, 15%, 88%);
  --shadow: 0 1px 2px hsla(240, 100%, 50%, 0.05),
    0 3px 6px hsla(0, 100%, 50%, 0.07);
  --shadow-md: 0 1px 3px hsla(240, 100%, 50%, 0.05),
    0 10px 15px -5px hsla(120, 100%, 50%, 0.05),
    0 20px 25px -5px hsla(300, 100%, 50%, 0.04);
  --shadow-lg: 0 1px 3px hsla(240, 100%, 50%, 0.05),
    0 20px 25px -5px hsla(120, 100%, 50%, 0.07),
    0 30px 40px -5px hsla(0, 100%, 50%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(240, 100%, 50%, 0.3),
    0 1px 2px hsla(300, 100%, 50%, 0.1);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #330000, #331a00, #333300, #1a3300, #003300, #00331a, #003333, #001a33, #000033, #1a0033, #330033, #33001a);
  --themecolor: hsl(0, 100%, 65%);
  --themecolor2: hsl(120, 100%, 65%);
  --themecolor3: hsl(240, 100%, 70%);
  --themecolor4: hsl(300, 100%, 65%);
  --themecolor1-transparent: hsla(0, 100%, 65%, 0.5);
  --themecolor2-transparent: hsla(120, 100%, 65%, 0.5);
  --themecolor3-transparent: hsla(240, 100%, 70%, 0.5);
  --menu-background: hsla(240, 100%, 70%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(260, 20%, 8%);

  /* Surface */
  --surface: hsl(260, 15%, 12%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(240, 100%, 70%, 0.05);
  --surface-transparent-1: hsla(300, 100%, 65%, 0.1);
  --surface-transparent-2: hsla(180, 100%, 65%, 0.2);

  /* Primary */
  --primary: hsl(240, 100%, 70%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(240, 100%, 70%, 0.25);
  --primary-transparent-2: hsla(240, 100%, 70%, 0.15);
  --primary-transparent-3: hsla(240, 100%, 70%, 0.2);
  --primary-transparent-4: hsla(240, 100%, 70%, 0.25);
  --primary-transparent-5: hsla(240, 100%, 70%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(240, 100%, 70%, 0.3);
  --primary-border-strong: hsla(240, 100%, 70%, 0.4);
  --primary-border-stronger: hsla(240, 100%, 70%, 0.5);
  --primary-border-active: hsla(240, 100%, 70%, 0.6);

  /* Secondary */
  --secondary: hsl(120, 100%, 60%);
  --secondary-foreground: hsl(0, 0%, 0%);

  /* Sidebar */
  --sidebar: hsl(260, 35%, 10%);
  --sidebar-foreground: hsl(60, 100%, 90%);
  --sidebar-bg-transparent: hsla(260, 35%, 10%, 0.3);
  --sidebar-bg-hover: hsla(260, 35%, 10%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 100%, 70%);
  --favorite-transparent-1: hsla(0, 100%, 70%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 70%, 0.25);
  --favorite-border: hsla(0, 100%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(260, 15%, 14%);
  --card-rgb: 128, 0, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(260, 15%, 14%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(260, 15%, 20%);
  --muted-foreground: hsl(0, 0%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(240, 100%, 70%);
  --albumart-gradient: linear-gradient(135deg, hsl(0, 100%, 60%) 0%, hsl(60, 100%, 60%) 16.66%, hsl(120, 100%, 60%) 33.33%, hsl(180, 100%, 60%) 50%, hsl(240, 100%, 70%) 66.66%, hsl(300, 100%, 60%) 83.33%, hsl(0, 100%, 60%) 100%);

  /* Shadows */
  --border: hsl(260, 15%, 18%);
  --shadow: 0 1px 2px hsla(240, 100%, 70%, 0.1),
    0 3px 6px hsla(0, 100%, 70%, 0.15);
  --shadow-md: 0 1px 3px hsla(240, 100%, 70%, 0.1),
    0 10px 15px -5px hsla(120, 100%, 60%, 0.1),
    0 20px 25px -5px hsla(300, 100%, 60%, 0.08);
  --shadow-lg: 0 1px 3px hsla(240, 100%, 70%, 0.1),
    0 20px 25px -5px hsla(120, 100%, 60%, 0.15),
    0 30px 40px -5px hsla(0, 100%, 60%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(240, 100%, 70%, 0.4),
    0 1px 2px hsla(300, 100%, 60%, 0.2);
}`;export{r as default};
//# sourceMappingURL=Rainbow.theme-DJB_dP19.js.map
