const r=`/* Aurora Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #10b981, #3b82f6, #8b5cf6, #ec4899);
  --themecolor: hsl(158, 64%, 52%);
  --themecolor2: hsl(217, 91%, 60%);
  --themecolor3: hsl(262, 83%, 58%);
  --themecolor4: hsl(322, 84%, 60%);
  --themecolor1-transparent: hsla(158, 64%, 52%, 0.5);
  --themecolor2-transparent: hsla(217, 91%, 60%, 0.5);
  --themecolor3-transparent: hsla(262, 83%, 58%, 0.5);
  --menu-background: hsla(217, 91%, 60%, 0.35);

  /* Foreground */
  --foreground: hsl(220, 15%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(210, 25%, 98%);

  /* Surface */
  --surface: hsl(215, 20%, 95%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(215, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(217, 91%, 60%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(217, 91%, 60%, 0.25);
  --primary-transparent-1: hsla(217, 91%, 60%, 0.1);
  --primary-transparent-2: hsla(217, 91%, 60%, 0.15);
  --primary-transparent-3: hsla(217, 91%, 60%, 0.2);
  --primary-transparent-4: hsla(217, 91%, 60%, 0.3);
  --primary-transparent-5: hsla(217, 91%, 60%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(217, 91%, 60%, 0.3);
  --primary-border-strong: hsla(217, 91%, 60%, 0.4);
  --primary-border-stronger: hsla(217, 91%, 60%, 0.5);
  --primary-border-active: hsla(217, 91%, 60%, 0.6);

  /* Secondary */
  --secondary: hsl(158, 64%, 52%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(225, 40%, 25%);
  --sidebar-foreground: hsl(215, 20%, 95%);
  --sidebar-bg-transparent: hsla(225, 40%, 25%, 0.4);
  --sidebar-bg-hover: hsla(225, 40%, 25%, 0.6);

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
  --card-rgb: 59, 130, 246;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(215, 20%, 85%);
  --muted-foreground: hsl(215, 15%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor2);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor) 0%, var(--themecolor2) 33%, var(--themecolor3) 66%, var(--themecolor4) 100%);

  /* Shadows */
  --border: hsl(215, 20%, 90%);
  --shadow: 0 1px 2px hsla(217, 15%, 5%, 0.05),
    0 3px 6px hsla(217, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(217, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(217, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(217, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(217, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(217, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(217, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(217, 91%, 60%, 0.25),
    0 1px 2px hsla(217, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #064e3b 0%, #1e3a8a 33%, #581c87 66%, #be185d 100%);
  --themecolor: hsl(158, 64%, 35%);
  --themecolor2: hsl(217, 91%, 45%);
  --themecolor3: hsl(262, 83%, 45%);
  --themecolor4: hsl(322, 84%, 45%);
  --themecolor1-transparent: hsla(158, 64%, 35%, 0.5);
  --themecolor2-transparent: hsla(217, 91%, 45%, 0.5);
  --themecolor3-transparent: hsla(262, 83%, 45%, 0.5);
  --menu-background: hsla(217, 91%, 45%, 0.25);

  /* Foreground */
  --foreground: hsl(215, 25%, 88%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(220, 30%, 6%);

  /* Surface */
  --surface: hsl(220, 25%, 10%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(217, 91%, 65%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(217, 91%, 65%, 0.25);
  --primary-transparent-2: hsla(217, 91%, 65%, 0.15);
  --primary-transparent-3: hsla(217, 91%, 65%, 0.2);
  --primary-transparent-4: hsla(217, 91%, 65%, 0.25);
  --primary-transparent-5: hsla(217, 91%, 65%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(217, 91%, 65%, 0.3);
  --primary-border-strong: hsla(217, 91%, 65%, 0.4);
  --primary-border-stronger: hsla(217, 91%, 65%, 0.5);
  --primary-border-active: hsla(217, 91%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(158, 64%, 55%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(225, 40%, 8%);
  --sidebar-foreground: hsl(215, 25%, 88%);
  --sidebar-bg-transparent: hsla(225, 40%, 8%, 0.3);
  --sidebar-bg-hover: hsla(225, 40%, 8%, 0.5);

  /* Favorites */
  --favorite: hsl(322, 84%, 65%);
  --favorite-transparent-1: hsla(322, 84%, 65%, 0.15);
  --favorite-transparent-2: hsla(322, 84%, 65%, 0.25);
  --favorite-border: hsla(322, 84%, 65%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(220, 25%, 12%);
  --card-rgb: 59, 130, 246;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(220, 25%, 12%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(220, 20%, 18%);
  --muted-foreground: hsl(215, 15%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(217, 91%, 65%);
  --albumart-gradient: linear-gradient(135deg, #064e3b 0%, #1e3a8a 33%, #581c87 66%, #be185d 100%);

  /* Shadows */
  --border: hsl(220, 20%, 16%);
  --shadow: 0 1px 2px hsla(220, 30%, 0%, 0.1),
    0 3px 6px hsla(220, 30%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(220, 30%, 0%, 0.1),
    0 10px 15px -5px hsla(220, 30%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 30%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(220, 30%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 30%, 0%, 0.15),
    0 30px 40px -5px hsla(220, 30%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(217, 91%, 65%, 0.25),
    0 1px 2px hsla(220, 30%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=NorthernLights.theme-DxE1tbxx.js.map
