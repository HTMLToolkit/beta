const r=`/* Terracotta */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #e07a5f, #3d8160);
  --themecolor: hsl(14, 68%, 65%);
  --themecolor2: hsl(160, 35%, 45%);
  --themecolor3: hsl(14, 60%, 60%);
  --themecolor4: hsl(160, 30%, 40%);
  --themecolor1-transparent: hsla(14, 68%, 65%, 0.5);
  --themecolor2-transparent: hsla(160, 35%, 45%, 0.5);
  --themecolor3-transparent: hsla(14, 60%, 60%, 0.5);
  --menu-background: hsla(160, 35%, 45%, 0.35);

  /* Foreground */
  --foreground: hsl(20, 20%, 25%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(20, 30%, 95%);

  /* Surface */
  --surface: hsl(20, 25%, 93%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(20, 25%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(14, 68%, 65%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(14, 68%, 65%, 0.25);
  --primary-transparent-1: hsla(14, 68%, 65%, 0.1);
  --primary-transparent-2: hsla(14, 68%, 65%, 0.15);
  --primary-transparent-3: hsla(14, 68%, 65%, 0.2);
  --primary-transparent-4: hsla(14, 68%, 65%, 0.3);
  --primary-transparent-5: hsla(14, 68%, 65%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(14, 68%, 65%, 0.3);
  --primary-border-strong: hsla(14, 68%, 65%, 0.4);
  --primary-border-stronger: hsla(14, 68%, 65%, 0.5);
  --primary-border-active: hsla(14, 68%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(160, 35%, 55%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(14, 30%, 35%);
  --sidebar-foreground: hsl(20, 20%, 95%);
  --sidebar-bg-transparent: hsla(160, 35%, 45%, 0.4);
  --sidebar-bg-hover: hsla(160, 35%, 45%, 0.6);

  /* Favorites */
  --favorite: hsl(40, 80%, 60%);
  --favorite-transparent-1: hsla(40, 80%, 60%, 0.15);
  --favorite-transparent-2: hsla(40, 80%, 60%, 0.25);
  --favorite-border: hsla(40, 80%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 80%, 60%);
  --danger-transparent-1: hsla(0, 80%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 80%, 60%, 0.25);
  --danger-border: hsla(0, 80%, 60%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 224, 122, 95;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(20, 15%, 80%);
  --muted-foreground: hsl(20, 10%, 35%);

  /* Error */
  --error: hsl(0, 70%, 50%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(20, 15%, 85%);
  --shadow: 0 1px 2px hsla(20, 15%, 5%, 0.05),
    0 3px 6px hsla(20, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(20, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(20, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(20, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(20, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(20, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(20, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(14, 68%, 65%, 0.25),
    0 1px 2px hsla(20, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #3d2f2b 0%, #2e3d33 100%);
  --themecolor: hsl(14, 50%, 35%);
  --themecolor2: hsl(160, 30%, 25%);
  --themecolor3: hsl(14, 45%, 30%);
  --themecolor4: hsl(160, 25%, 20%);
  --themecolor1-transparent: hsla(14, 50%, 35%, 0.5);
  --themecolor2-transparent: hsla(160, 30%, 25%, 0.5);
  --themecolor3-transparent: hsla(14, 45%, 30%, 0.5);
  --menu-background: hsla(160, 30%, 25%, 0.25);

  /* Foreground */
  --foreground: hsl(20, 15%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(20, 15%, 12%);

  /* Surface */
  --surface: hsl(20, 15%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(14, 50%, 45%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(14, 50%, 45%, 0.25);
  --primary-transparent-2: hsla(14, 50%, 45%, 0.15);
  --primary-transparent-3: hsla(14, 50%, 45%, 0.2);
  --primary-transparent-4: hsla(14, 50%, 45%, 0.25);
  --primary-transparent-5: hsla(14, 50%, 45%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(14, 50%, 45%, 0.3);
  --primary-border-strong: hsla(14, 50%, 45%, 0.4);
  --primary-border-stronger: hsla(14, 50%, 45%, 0.5);
  --primary-border-active: hsla(14, 50%, 45%, 0.6);

  /* Secondary */
  --secondary: hsl(160, 30%, 35%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(14, 25%, 20%);
  --sidebar-foreground: hsl(20, 15%, 90%);
  --sidebar-bg-transparent: hsla(160, 30%, 25%, 0.3);
  --sidebar-bg-hover: hsla(160, 30%, 25%, 0.5);

  /* Favorites */
  --favorite: hsl(40, 70%, 50%);
  --favorite-transparent-1: hsla(40, 70%, 50%, 0.15);
  --favorite-transparent-2: hsla(40, 70%, 50%, 0.25);
  --favorite-border: hsla(40, 70%, 50%, 0.3);

  /* Danger */
  --danger: hsl(0, 70%, 50%);
  --danger-transparent-1: hsla(0, 70%, 50%, 0.15);
  --danger-transparent-2: hsla(0, 70%, 50%, 0.25);
  --danger-border: hsla(0, 70%, 50%, 0.3);

  /* Cards */
  --card: hsl(20, 15%, 15%);
  --card-rgb: 61, 47, 43;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(20, 15%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(20, 15%, 25%);
  --muted-foreground: hsl(20, 10%, 65%);

  /* Error */
  --error: hsl(0, 65%, 45%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(14, 50%, 35%);
  --albumart-gradient: linear-gradient(135deg, #3d2f2b 0%, #2e3d33 100%);

  /* Shadows */
  --border: hsl(20, 15%, 20%);
  --shadow: 0 1px 2px hsla(20, 15%, 0%, 0.1),
    0 3px 6px hsla(20, 15%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(20, 15%, 0%, 0.1),
    0 10px 15px -5px hsla(20, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(20, 15%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(20, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(20, 15%, 0%, 0.15),
    0 30px 40px -5px hsla(20, 15%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(14, 50%, 45%, 0.25),
    0 1px 2px hsla(20, 15%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Terracotta.theme-DX_608l-.js.map
