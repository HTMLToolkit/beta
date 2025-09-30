const r=`/* Yellow */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #f1c40f, #f39c12);
  --themecolor: hsl(45, 90%, 50%);
  --themecolor2: hsl(45, 90%, 40%);
  --themecolor3: hsl(45, 80%, 55%);
  --themecolor4: hsl(45, 75%, 65%);
  --themecolor1-transparent: hsla(45, 90%, 40%, 0.5);
  --themecolor2-transparent: hsla(45, 90%, 60%, 0.5);
  --themecolor3-transparent: hsla(45, 80%, 55%, 0.5);
  --menu-background: hsla(45, 90%, 60%, 0.35);

  /* Foreground */
  --foreground: hsl(45, 20%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(45, 30%, 98%);

  /* Surface */
  --surface: hsl(45, 25%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(45, 90%, 50%);
  --primary-foreground: hsl(52, 100%, 17%);
  /* Primary Transparent */
  --primary-transparent: hsla(45, 90%, 50%, 0.25);
  --primary-transparent-1: hsla(45, 90%, 50%, 0.1);
  --primary-transparent-2: hsla(45, 90%, 50%, 0.15);
  --primary-transparent-3: hsla(45, 90%, 50%, 0.2);
  --primary-transparent-4: hsla(45, 90%, 50%, 0.3);
  --primary-transparent-5: hsla(45, 90%, 50%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(45, 90%, 50%, 0.3);
  --primary-border-strong: hsla(45, 90%, 50%, 0.4);
  --primary-border-stronger: hsla(45, 90%, 50%, 0.5);
  --primary-border-active: hsla(45, 90%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(50, 80%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(45, 40%, 92%);
  --sidebar-foreground: hsl(45, 20%, 20%);
  --sidebar-bg-transparent: hsla(45, 90%, 60%, 0.4);
  --sidebar-bg-hover: hsla(45, 90%, 60%, 0.6);

  /* Favorites */
  --favorite: hsl(50, 100%, 60%);
  --favorite-transparent-1: hsla(50, 100%, 60%, 0.15);
  --favorite-transparent-2: hsla(50, 100%, 60%, 0.25);
  --favorite-border: hsla(50, 100%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(45, 30%, 98%);
  --card-rgb: 241, 196, 15;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(45, 30%, 98%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(45, 20%, 85%);
  --muted-foreground: hsl(45, 15%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

  /* Shadows */
  --border: hsl(45, 20%, 90%);
  --shadow: 0 1px 2px hsla(45, 15%, 5%, 0.05),
    0 3px 6px hsla(45, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(45, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(45, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(45, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(45, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(45, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(45, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(45, 90%, 50%, 0.25),
    0 1px 2px hsla(45, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #8c6d1f, #d4af37);
  --themecolor: hsl(45, 70%, 25%);
  --themecolor2: hsl(45, 75%, 35%);
  --themecolor3: hsl(45, 60%, 30%);
  --themecolor4: hsl(45, 55%, 25%);
  --themecolor1-transparent: hsla(45, 75%, 20%, 0.5);
  --themecolor2-transparent: hsla(45, 75%, 35%, 0.5);
  --themecolor3-transparent: hsla(45, 60%, 30%, 0.5);
  --menu-background: hsla(45, 75%, 35%, 0.25);

  /* Foreground */
  --foreground: hsl(45, 15%, 95%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(45, 60%, 10%);

  /* Surface */
  --surface: hsl(45, 55%, 13%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(45, 75%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(45, 70%, 25%, 0.25);
  --primary-transparent-2: hsla(45, 70%, 25%, 0.15);
  --primary-transparent-3: hsla(45, 70%, 25%, 0.2);
  --primary-transparent-4: hsla(45, 70%, 25%, 0.25);
  --primary-transparent-5: hsla(45, 70%, 25%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(45, 70%, 25%, 0.3);
  --primary-border-strong: hsla(45, 70%, 25%, 0.4);
  --primary-border-stronger: hsla(45, 70%, 25%, 0.5);
  --primary-border-active: hsla(45, 70%, 25%, 0.6);

  /* Secondary */
  --secondary: hsl(50, 65%, 45%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(45, 50%, 15%);
  --sidebar-foreground: hsl(45, 15%, 95%);
  --sidebar-bg-transparent: hsla(45, 75%, 35%, 0.3);
  --sidebar-bg-hover: hsla(45, 75%, 35%, 0.5);

  /* Favorites */
  --favorite: hsl(50, 100%, 60%);
  --favorite-transparent-1: hsla(50, 100%, 60%, 0.15);
  --favorite-transparent-2: hsla(50, 100%, 60%, 0.25);
  --favorite-border: hsla(50, 100%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(45, 50%, 15%);
  --card-rgb: 140, 109, 31;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(45, 50%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(45, 45%, 25%);
  --muted-foreground: hsl(45, 40%, 70%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(45, 75%, 35%);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

  /* Shadows */
  --border: hsl(45, 55%, 20%);
  --shadow: 0 1px 2px hsla(45, 55%, 0%, 0.1),
    0 3px 6px hsla(45, 55%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(45, 55%, 0%, 0.1),
    0 10px 15px -5px hsla(45, 55%, 0%, 0.1),
    0 20px 25px -5px hsla(45, 55%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(45, 55%, 0%, 0.1),
    0 20px 25px -5px hsla(45, 55%, 0%, 0.15),
    0 30px 40px -5px hsla(45, 55%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(45, 70%, 25%, 0.25),
    0 1px 2px hsla(45, 55%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Yellow.theme-aTkwG5K4.js.map
