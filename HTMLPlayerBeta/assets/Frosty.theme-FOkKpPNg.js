const r=`/* Frosty */
:root {
  /* Theme */
  --themegradient: linear-gradient(90deg, #a1c4fd, #c2e9fb, #d4f0f8, #e0f7fa, #c2f0ff);
  --themecolor: hsl(195, 85%, 85%);
  --themecolor2: hsl(210, 60%, 70%);
  --themecolor3: hsl(190, 80%, 80%);
  --themecolor4: hsl(210, 55%, 65%);
  --themecolor1-transparent: hsla(195, 85%, 85%, 0.5);
  --themecolor2-transparent: hsla(210, 60%, 70%, 0.5);
  --themecolor3-transparent: hsla(190, 80%, 80%, 0.5);
  --menu-background: hsla(210, 60%, 70%, 0.35);

  /* Foreground */
  --foreground: hsl(210, 20%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(190, 50%, 95%);

  /* Surface */
  --surface: hsl(190, 45%, 93%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(190, 45%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(195, 85%, 85%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(195, 85%, 85%, 0.25);
  --primary-transparent-1: hsla(195, 85%, 85%, 0.1);
  --primary-transparent-2: hsla(195, 85%, 85%, 0.15);
  --primary-transparent-3: hsla(195, 85%, 85%, 0.2);
  --primary-transparent-4: hsla(195, 85%, 85%, 0.3);
  --primary-transparent-5: hsla(195, 85%, 85%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(195, 85%, 85%, 0.3);
  --primary-border-strong: hsla(195, 85%, 85%, 0.4);
  --primary-border-stronger: hsla(195, 85%, 85%, 0.5);
  --primary-border-active: hsla(195, 85%, 85%, 0.6);

  /* Secondary */
  --secondary: hsl(210, 60%, 70%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(195, 40%, 35%);
  --sidebar-foreground: hsl(190, 40%, 95%);
  --sidebar-bg-transparent: hsla(210, 60%, 70%, 0.4);
  --sidebar-bg-hover: hsla(210, 60%, 70%, 0.6);

  /* Favorites */
  --favorite: hsl(50, 60%, 70%);
  --favorite-transparent-1: hsla(50, 60%, 70%, 0.15);
  --favorite-transparent-2: hsla(50, 60%, 70%, 0.25);
  --favorite-border: hsla(50, 60%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 70%, 60%);
  --danger-transparent-1: hsla(0, 70%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 70%, 60%, 0.25);
  --danger-border: hsla(0, 70%, 60%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 161, 196, 253;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(190, 30%, 80%);
  --muted-foreground: hsl(190, 20%, 35%);

  /* Error */
  --error: hsl(0, 65%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(90deg, #a1c4fd, #c2e9fb, #d4f0f8, #e0f7fa, #c2f0ff);

  /* Shadows */
  --border: hsl(190, 30%, 85%);
  --shadow: 0 1px 2px hsla(190, 20%, 5%, 0.05),
    0 3px 6px hsla(190, 20%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(190, 20%, 5%, 0.05),
    0 10px 15px -5px hsla(190, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(190, 20%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(190, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(190, 20%, 5%, 0.07),
    0 30px 40px -5px hsla(190, 20%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(195, 85%, 85%, 0.25),
    0 1px 2px hsla(190, 20%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(90deg, #4a6db7, #6bb8d6, #8ac9d8, #a0d4e0, #6bb8e0);
  --themecolor: hsl(195, 60%, 40%);
  --themecolor2: hsl(210, 50%, 35%);
  --themecolor3: hsl(190, 55%, 35%);
  --themecolor4: hsl(210, 45%, 30%);
  --themecolor1-transparent: hsla(195, 60%, 40%, 0.5);
  --themecolor2-transparent: hsla(210, 50%, 35%, 0.5);
  --themecolor3-transparent: hsla(190, 55%, 35%, 0.5);
  --menu-background: hsla(210, 50%, 35%, 0.25);

  /* Foreground */
  --foreground: hsl(190, 20%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(190, 20%, 12%);

  /* Surface */
  --surface: hsl(190, 20%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(195, 60%, 40%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(195, 60%, 40%, 0.25);
  --primary-transparent-2: hsla(195, 60%, 40%, 0.15);
  --primary-transparent-3: hsla(195, 60%, 40%, 0.2);
  --primary-transparent-4: hsla(195, 60%, 40%, 0.25);
  --primary-transparent-5: hsla(195, 60%, 40%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(195, 60%, 40%, 0.3);
  --primary-border-strong: hsla(195, 60%, 40%, 0.4);
  --primary-border-stronger: hsla(195, 60%, 40%, 0.5);
  --primary-border-active: hsla(195, 60%, 40%, 0.6);

  /* Secondary */
  --secondary: hsl(210, 50%, 35%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(195, 35%, 20%);
  --sidebar-foreground: hsl(190, 20%, 90%);
  --sidebar-bg-transparent: hsla(210, 50%, 35%, 0.3);
  --sidebar-bg-hover: hsla(210, 50%, 35%, 0.5);

  /* Favorites */
  --favorite: hsl(50, 50%, 50%);
  --favorite-transparent-1: hsla(50, 50%, 50%, 0.15);
  --favorite-transparent-2: hsla(50, 50%, 50%, 0.25);
  --favorite-border: hsla(50, 50%, 50%, 0.3);

  /* Danger */
  --danger: hsl(0, 65%, 50%);
  --danger-transparent-1: hsla(0, 65%, 50%, 0.15);
  --danger-transparent-2: hsla(0, 65%, 50%, 0.25);
  --danger-border: hsla(0, 65%, 50%, 0.3);

  /* Cards */
  --card: hsl(190, 20%, 15%);
  --card-rgb: 74, 109, 183;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(190, 20%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(190, 20%, 25%);
  --muted-foreground: hsl(190, 15%, 65%);

  /* Error */
  --error: hsl(0, 60%, 45%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(195, 60%, 40%);
  --albumart-gradient: linear-gradient(90deg, #4a6db7, #6bb8d6, #8ac9d8, #a0d4e0, #6bb8e0);

  /* Shadows */
  --border: hsl(190, 20%, 20%);
  --shadow: 0 1px 2px hsla(190, 20%, 0%, 0.1),
    0 3px 6px hsla(190, 20%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(190, 20%, 0%, 0.1),
    0 10px 15px -5px hsla(190, 20%, 0%, 0.1),
    0 20px 25px -5px hsla(190, 20%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(190, 20%, 0%, 0.1),
    0 20px 25px -5px hsla(190, 20%, 0%, 0.15),
    0 30px 40px -5px hsla(190, 20%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(195, 60%, 40%, 0.25),
    0 1px 2px hsla(190, 20%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Frosty.theme-FOkKpPNg.js.map
