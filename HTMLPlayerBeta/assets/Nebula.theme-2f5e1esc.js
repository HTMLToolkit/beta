const r=`/* Nebula Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #8b5cf6, #06b6d4, #ec4899);
  --themecolor: hsl(262, 83%, 58%);
  --themecolor2: hsl(188, 94%, 43%);
  --themecolor3: hsl(322, 84%, 60%);
  --themecolor4: hsl(275, 70%, 45%);
  --themecolor1-transparent: hsla(262, 83%, 58%, 0.5);
  --themecolor2-transparent: hsla(188, 94%, 43%, 0.5);
  --themecolor3-transparent: hsla(322, 84%, 60%, 0.5);
  --menu-background: hsla(262, 83%, 58%, 0.35);

  /* Foreground */
  --foreground: hsl(220, 15%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(250, 20%, 98%);

  /* Surface */
  --surface: hsl(260, 15%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(260, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(262, 83%, 58%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(262, 83%, 58%, 0.25);
  --primary-transparent-1: hsla(262, 83%, 58%, 0.1);
  --primary-transparent-2: hsla(262, 83%, 58%, 0.15);
  --primary-transparent-3: hsla(262, 83%, 58%, 0.2);
  --primary-transparent-4: hsla(262, 83%, 58%, 0.3);
  --primary-transparent-5: hsla(262, 83%, 58%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(262, 83%, 58%, 0.3);
  --primary-border-strong: hsla(262, 83%, 58%, 0.4);
  --primary-border-stronger: hsla(262, 83%, 58%, 0.5);
  --primary-border-active: hsla(262, 83%, 58%, 0.6);

  /* Secondary */
  --secondary: hsl(322, 84%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(270, 35%, 25%);
  --sidebar-foreground: hsl(260, 15%, 95%);
  --sidebar-bg-transparent: hsla(270, 35%, 25%, 0.4);
  --sidebar-bg-hover: hsla(270, 35%, 25%, 0.6);

  /* Favorites */
  --favorite: hsl(322, 84%, 60%);
  --favorite-transparent-1: hsla(322, 84%, 60%, 0.15);
  --favorite-transparent-2: hsla(322, 84%, 60%, 0.25);
  --favorite-border: hsla(322, 84%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 139, 92, 246;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(260, 15%, 85%);
  --muted-foreground: hsl(260, 10%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor) 0%, var(--themecolor2) 50%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(260, 15%, 90%);
  --shadow: 0 1px 2px hsla(262, 15%, 5%, 0.05),
    0 3px 6px hsla(262, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(262, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(262, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(262, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(262, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(262, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(262, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(262, 83%, 58%, 0.25),
    0 1px 2px hsla(262, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #2e1065 0%, #0c4a6e 50%, #831843 100%);
  --themecolor: hsl(262, 83%, 45%);
  --themecolor2: hsl(188, 94%, 30%);
  --themecolor3: hsl(322, 84%, 45%);
  --themecolor4: hsl(275, 70%, 35%);
  --themecolor1-transparent: hsla(262, 83%, 45%, 0.5);
  --themecolor2-transparent: hsla(188, 94%, 30%, 0.5);
  --themecolor3-transparent: hsla(322, 84%, 45%, 0.5);
  --menu-background: hsla(262, 83%, 45%, 0.25);

  /* Foreground */
  --foreground: hsl(260, 15%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(262, 25%, 8%);

  /* Surface */
  --surface: hsl(262, 20%, 12%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(262, 83%, 65%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(262, 83%, 65%, 0.25);
  --primary-transparent-2: hsla(262, 83%, 65%, 0.15);
  --primary-transparent-3: hsla(262, 83%, 65%, 0.2);
  --primary-transparent-4: hsla(262, 83%, 65%, 0.25);
  --primary-transparent-5: hsla(262, 83%, 65%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(262, 83%, 65%, 0.3);
  --primary-border-strong: hsla(262, 83%, 65%, 0.4);
  --primary-border-stronger: hsla(262, 83%, 65%, 0.5);
  --primary-border-active: hsla(262, 83%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(322, 84%, 70%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(270, 35%, 12%);
  --sidebar-foreground: hsl(260, 15%, 90%);
  --sidebar-bg-transparent: hsla(270, 35%, 12%, 0.3);
  --sidebar-bg-hover: hsla(270, 35%, 12%, 0.5);

  /* Favorites */
  --favorite: hsl(322, 84%, 70%);
  --favorite-transparent-1: hsla(322, 84%, 70%, 0.15);
  --favorite-transparent-2: hsla(322, 84%, 70%, 0.25);
  --favorite-border: hsla(322, 84%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(262, 20%, 14%);
  --card-rgb: 139, 92, 246;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(262, 20%, 14%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(262, 15%, 20%);
  --muted-foreground: hsl(260, 10%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(262, 83%, 65%);
  --albumart-gradient: linear-gradient(135deg, #2e1065 0%, #0c4a6e 50%, #831843 100%);

  /* Shadows */
  --border: hsl(262, 15%, 18%);
  --shadow: 0 1px 2px hsla(262, 25%, 0%, 0.1),
    0 3px 6px hsla(262, 25%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(262, 25%, 0%, 0.1),
    0 10px 15px -5px hsla(262, 25%, 0%, 0.1),
    0 20px 25px -5px hsla(262, 25%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(262, 25%, 0%, 0.1),
    0 20px 25px -5px hsla(262, 25%, 0%, 0.15),
    0 30px 40px -5px hsla(262, 25%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(262, 83%, 65%, 0.25),
    0 1px 2px hsla(262, 25%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Nebula.theme-2f5e1esc.js.map
