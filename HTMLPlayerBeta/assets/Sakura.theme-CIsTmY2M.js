const r=`/* Sakura */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #ffb7c5, #9cd7c5);
  --themecolor: hsl(340, 80%, 72%);
  --themecolor2: hsl(160, 45%, 78%);
  --themecolor3: hsl(340, 85%, 65%);
  --themecolor4: hsl(160, 50%, 45%);
  --themecolor1-transparent: hsla(340, 80%, 72%, 0.5);
  --themecolor2-transparent: hsla(160, 45%, 78%, 0.5);
  --themecolor3-transparent: hsla(340, 85%, 65%, 0.5);
  --menu-background: hsla(340, 85%, 65%, 0.25);

  /* Foreground */
  --foreground: hsl(330, 20%, 20%);
  --foreground-strong: hsla(0, 0%, 0%, 0.8);
  --foreground-stronger: hsla(0, 0%, 0%, 0.9);
  --foreground-muted: hsla(330, 20%, 30%, 0.7);
  --foreground-subtle: hsla(330, 20%, 30%, 0.5);

  /* Background */
  --background: hsl(340, 40%, 98%);

  /* Surface */
  --surface: hsl(340, 40%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(340, 40%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(340, 80%, 65%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(340, 80%, 65%, 0.25);
  --primary-transparent-1: hsla(340, 80%, 65%, 0.1);
  --primary-transparent-2: hsla(340, 80%, 65%, 0.15);
  --primary-transparent-3: hsla(340, 80%, 65%, 0.2);
  --primary-transparent-4: hsla(340, 80%, 65%, 0.3);
  --primary-transparent-5: hsla(340, 80%, 65%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(340, 80%, 65%, 0.3);
  --primary-border-strong: hsla(340, 80%, 65%, 0.4);
  --primary-border-stronger: hsla(340, 80%, 65%, 0.5);
  --primary-border-active: hsla(340, 80%, 65%, 0.6);

  /* Secondary */
  --secondary: hsl(160, 45%, 45%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(330, 30%, 92%);
  --sidebar-foreground: hsl(330, 20%, 25%);
  --sidebar-bg-transparent: hsla(340, 80%, 65%, 0.3);
  --sidebar-bg-hover: hsla(340, 80%, 65%, 0.45);

  /* Favorites */
  --favorite: hsl(0, 75%, 60%);
  --favorite-transparent-1: hsla(0, 75%, 60%, 0.15);
  --favorite-transparent-2: hsla(0, 75%, 60%, 0.25);
  --favorite-border: hsla(0, 75%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 80%, 55%);
  --danger-transparent-1: hsla(0, 80%, 55%, 0.15);
  --danger-transparent-2: hsla(0, 80%, 55%, 0.25);
  --danger-border: hsla(0, 80%, 55%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 255, 183, 197;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(330, 30%, 85%);
  --muted-foreground: hsl(330, 20%, 35%);

  /* Error */
  --error: hsl(350, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --border: hsl(330, 30%, 88%);
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(
    135deg,
    var(--themecolor2) 0%,
    var(--themecolor3) 100%
  );

  /* Shadows */
  --shadow: 0 1px 2px hsla(330, 15%, 20%, 0.05),
    0 3px 6px hsla(330, 15%, 20%, 0.07);
  --shadow-md: 0 1px 3px hsla(330, 15%, 20%, 0.05),
    0 10px 15px -5px hsla(330, 15%, 20%, 0.05),
    0 20px 25px -5px hsla(330, 15%, 20%, 0.04);
  --shadow-lg: 0 1px 3px hsla(330, 15%, 20%, 0.05),
    0 20px 25px -5px hsla(330, 15%, 20%, 0.07),
    0 30px 40px -5px hsla(330, 15%, 20%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(340, 80%, 65%, 0.25),
    0 1px 2px hsla(330, 15%, 20%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #1f0a13, #16332b);
  --themecolor: hsl(340, 60%, 45%);
  --themecolor2: hsl(160, 35%, 35%);
  --themecolor3: hsl(340, 70%, 40%);
  --themecolor4: hsl(160, 45%, 30%);
  --themecolor1-transparent: hsla(340, 60%, 45%, 0.5);
  --themecolor2-transparent: hsla(160, 35%, 35%, 0.5);
  --themecolor3-transparent: hsla(340, 70%, 40%, 0.5);
  --menu-background: hsla(340, 70%, 40%, 0.25);

  /* Foreground */
  --foreground: hsl(330, 30%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.85);
  --foreground-stronger: hsla(0, 0%, 100%, 0.95);
  --foreground-muted: hsla(330, 30%, 80%, 0.75);
  --foreground-subtle: hsla(330, 30%, 80%, 0.55);

  /* Background */
  --background: hsl(330, 25%, 10%);

  /* Surface */
  --surface: hsl(330, 25%, 13%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(340, 65%, 55%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(340, 65%, 55%, 0.25);
  --primary-transparent-2: hsla(340, 65%, 55%, 0.15);
  --primary-transparent-3: hsla(340, 65%, 55%, 0.2);
  --primary-transparent-4: hsla(340, 65%, 55%, 0.25);
  --primary-transparent-5: hsla(340, 65%, 55%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(340, 65%, 55%, 0.3);
  --primary-border-strong: hsla(340, 65%, 55%, 0.4);
  --primary-border-stronger: hsla(340, 65%, 55%, 0.5);
  --primary-border-active: hsla(340, 65%, 55%, 0.6);

  /* Secondary */
  --secondary: hsl(160, 35%, 50%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(330, 20%, 15%);
  --sidebar-foreground: hsl(330, 30%, 85%);
  --sidebar-bg-transparent: hsla(340, 65%, 55%, 0.3);
  --sidebar-bg-hover: hsla(340, 65%, 55%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 70%, 60%);
  --favorite-transparent-1: hsla(0, 70%, 60%, 0.15);
  --favorite-transparent-2: hsla(0, 70%, 60%, 0.25);
  --favorite-border: hsla(0, 70%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 75%, 55%);
  --danger-transparent-1: hsla(0, 75%, 55%, 0.15);
  --danger-transparent-2: hsla(0, 75%, 55%, 0.25);
  --danger-border: hsla(0, 75%, 55%, 0.3);

  /* Cards */
  --card: hsl(330, 20%, 13%);
  --card-rgb: 220, 120, 150;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(330, 20%, 13%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(330, 20%, 25%);
  --muted-foreground: hsl(330, 20%, 70%);

  /* Error */
  --error: hsl(350, 70%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(340, 65%, 55%);
  --albumart-gradient: linear-gradient(135deg, #1f0a13 0%, #16332b 100%);

  /* Shadows */
  --border: hsl(330, 20%, 20%);
  --shadow: 0 1px 2px hsla(330, 15%, 0%, 0.1),
    0 3px 6px hsla(330, 15%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(330, 15%, 0%, 0.1),
    0 10px 15px -5px hsla(330, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(330, 15%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(330, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(330, 15%, 0%, 0.15),
    0 30px 40px -5px hsla(330, 15%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(340, 65%, 55%, 0.25),
    0 1px 2px hsla(330, 15%, 0%, 0.1);
}
`;export{r as default};
//# sourceMappingURL=Sakura.theme-CIsTmY2M.js.map
