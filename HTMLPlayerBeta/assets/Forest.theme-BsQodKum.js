const r=`/* Forest Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #4ade80, #166534);
  --themecolor: hsl(142, 76%, 36%);
  --themecolor2: hsl(120, 60%, 25%);
  --themecolor3: hsl(142, 69%, 58%);
  --themecolor4: hsl(125, 55%, 35%);
  --themecolor1-transparent: hsla(142, 76%, 36%, 0.5);
  --themecolor2-transparent: hsla(120, 60%, 25%, 0.5);
  --themecolor3-transparent: hsla(142, 69%, 58%, 0.5);
  --menu-background: hsla(120, 60%, 25%, 0.35);

  /* Foreground */
  --foreground: hsl(30, 25%, 15%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(60, 15%, 97%);

  /* Surface */
  --surface: hsl(45, 20%, 94%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(45, 30%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(142, 76%, 36%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(142, 76%, 36%, 0.25);
  --primary-transparent-1: hsla(142, 76%, 36%, 0.1);
  --primary-transparent-2: hsla(142, 76%, 36%, 0.15);
  --primary-transparent-3: hsla(142, 76%, 36%, 0.2);
  --primary-transparent-4: hsla(142, 76%, 36%, 0.3);
  --primary-transparent-5: hsla(142, 76%, 36%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(142, 76%, 36%, 0.3);
  --primary-border-strong: hsla(142, 76%, 36%, 0.4);
  --primary-border-stronger: hsla(142, 76%, 36%, 0.5);
  --primary-border-active: hsla(142, 76%, 36%, 0.6);

  /* Secondary */
  --secondary: hsl(25, 85%, 55%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(30, 35%, 20%);
  --sidebar-foreground: hsl(45, 15%, 92%);
  --sidebar-bg-transparent: hsla(30, 35%, 20%, 0.4);
  --sidebar-bg-hover: hsla(30, 35%, 20%, 0.6);

  /* Favorites */
  --favorite: hsl(0, 100%, 71%);
  --favorite-transparent-1: hsla(0, 100%, 71%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 71%, 0.25);
  --favorite-border: hsla(0, 100%, 71%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 34, 197, 94;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(45, 25%, 82%);
  --muted-foreground: hsl(30, 15%, 35%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(45, 20%, 85%);
  --shadow: 0 1px 2px hsla(120, 25%, 10%, 0.05),
    0 3px 6px hsla(120, 25%, 10%, 0.07);
  --shadow-md: 0 1px 3px hsla(120, 25%, 10%, 0.05),
    0 10px 15px -5px hsla(120, 25%, 10%, 0.05),
    0 20px 25px -5px hsla(120, 25%, 10%, 0.04);
  --shadow-lg: 0 1px 3px hsla(120, 25%, 10%, 0.05),
    0 20px 25px -5px hsla(120, 25%, 10%, 0.07),
    0 30px 40px -5px hsla(120, 25%, 10%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(142, 76%, 36%, 0.25),
    0 1px 2px hsla(120, 25%, 10%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #0f2f1f 0%, #1a2c1a 100%);
  --themecolor: hsl(140, 55%, 25%);
  --themecolor2: hsl(120, 40%, 15%);
  --themecolor3: hsl(142, 45%, 35%);
  --themecolor4: hsl(125, 50%, 20%);
  --themecolor1-transparent: hsla(140, 55%, 25%, 0.5);
  --themecolor2-transparent: hsla(120, 40%, 15%, 0.5);
  --themecolor3-transparent: hsla(142, 45%, 35%, 0.5);
  --menu-background: hsla(120, 40%, 15%, 0.25);

  /* Foreground */
  --foreground: hsl(45, 20%, 88%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(120, 15%, 8%);

  /* Surface */
  --surface: hsl(120, 12%, 12%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(142, 65%, 45%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(142, 65%, 45%, 0.25);
  --primary-transparent-2: hsla(142, 65%, 45%, 0.15);
  --primary-transparent-3: hsla(142, 65%, 45%, 0.2);
  --primary-transparent-4: hsla(142, 65%, 45%, 0.25);
  --primary-transparent-5: hsla(142, 65%, 45%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(142, 65%, 45%, 0.3);
  --primary-border-strong: hsla(142, 65%, 45%, 0.4);
  --primary-border-stronger: hsla(142, 65%, 45%, 0.5);
  --primary-border-active: hsla(142, 65%, 45%, 0.6);

  /* Secondary */
  --secondary: hsl(25, 75%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(30, 25%, 10%);
  --sidebar-foreground: hsl(45, 15%, 85%);
  --sidebar-bg-transparent: hsla(30, 25%, 10%, 0.3);
  --sidebar-bg-hover: hsla(30, 25%, 10%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 100%, 71%);
  --favorite-transparent-1: hsla(0, 100%, 71%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 71%, 0.25);
  --favorite-border: hsla(0, 100%, 71%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(120, 12%, 14%);
  --card-rgb: 34, 197, 94;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(120, 12%, 14%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(120, 10%, 20%);
  --muted-foreground: hsl(45, 10%, 65%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(142, 65%, 45%);
  --albumart-gradient: linear-gradient(135deg, #0f2f1f 0%, #1a2c1a 100%);

  /* Shadows */
  --border: hsl(120, 10%, 18%);
  --shadow: 0 1px 2px hsla(120, 25%, 0%, 0.1),
    0 3px 6px hsla(120, 25%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(120, 25%, 0%, 0.1),
    0 10px 15px -5px hsla(120, 25%, 0%, 0.1),
    0 20px 25px -5px hsla(120, 25%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(120, 25%, 0%, 0.1),
    0 20px 25px -5px hsla(120, 25%, 0%, 0.15),
    0 30px 40px -5px hsla(120, 25%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(142, 65%, 45%, 0.25),
    0 1px 2px hsla(120, 25%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Forest.theme-BsQodKum.js.map
