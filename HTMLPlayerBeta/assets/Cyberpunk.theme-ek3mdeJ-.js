const r=`/* Cyberpunk Theme */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #00ffff, #ff00ff, #ffff00);
  --themecolor: hsl(180, 100%, 50%);
  --themecolor2: hsl(300, 100%, 50%);
  --themecolor3: hsl(60, 100%, 50%);
  --themecolor4: hsl(240, 100%, 60%);
  --themecolor1-transparent: hsla(180, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(300, 100%, 50%, 0.5);
  --themecolor3-transparent: hsla(60, 100%, 50%, 0.5);
  --menu-background: hsla(300, 100%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(240, 15%, 15%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(240, 20%, 97%);

  /* Surface */
  --surface: hsl(240, 15%, 94%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(240, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(180, 100%, 40%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(180, 100%, 40%, 0.25);
  --primary-transparent-1: hsla(180, 100%, 40%, 0.1);
  --primary-transparent-2: hsla(180, 100%, 40%, 0.15);
  --primary-transparent-3: hsla(180, 100%, 40%, 0.2);
  --primary-transparent-4: hsla(180, 100%, 40%, 0.3);
  --primary-transparent-5: hsla(180, 100%, 40%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(180, 100%, 40%, 0.3);
  --primary-border-strong: hsla(180, 100%, 40%, 0.4);
  --primary-border-stronger: hsla(180, 100%, 40%, 0.5);
  --primary-border-active: hsla(180, 100%, 40%, 0.6);

  /* Secondary */
  --secondary: hsl(300, 100%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(240, 35%, 20%);
  --sidebar-foreground: hsl(180, 100%, 80%);
  --sidebar-bg-transparent: hsla(240, 35%, 20%, 0.4);
  --sidebar-bg-hover: hsla(240, 35%, 20%, 0.6);

  /* Favorites */
  --favorite: hsl(300, 100%, 60%);
  --favorite-transparent-1: hsla(300, 100%, 60%, 0.15);
  --favorite-transparent-2: hsla(300, 100%, 60%, 0.25);
  --favorite-border: hsla(300, 100%, 60%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 0, 255, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(240, 15%, 85%);
  --muted-foreground: hsl(240, 10%, 35%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor) 0%, var(--themecolor2) 50%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(240, 15%, 88%);
  --shadow: 0 1px 2px hsla(180, 100%, 50%, 0.1),
    0 3px 6px hsla(300, 100%, 50%, 0.07);
  --shadow-md: 0 1px 3px hsla(180, 100%, 50%, 0.1),
    0 10px 15px -5px hsla(300, 100%, 50%, 0.05),
    0 20px 25px -5px hsla(180, 100%, 50%, 0.04);
  --shadow-lg: 0 1px 3px hsla(180, 100%, 50%, 0.1),
    0 20px 25px -5px hsla(300, 100%, 50%, 0.07),
    0 30px 40px -5px hsla(180, 100%, 50%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(180, 100%, 50%, 0.4),
    0 1px 2px hsla(300, 100%, 50%, 0.1);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #003635 0%, #69005f 50%, #4b4200 100%);
  --themecolor: hsl(180, 100%, 60%);
  --themecolor2: hsl(300, 100%, 60%);
  --themecolor3: hsl(60, 100%, 70%);
  --themecolor4: hsl(240, 100%, 70%);
  --themecolor1-transparent: hsla(180, 100%, 60%, 0.5);
  --themecolor2-transparent: hsla(300, 100%, 60%, 0.5);
  --themecolor3-transparent: hsla(60, 100%, 70%, 0.5);
  --menu-background: hsla(300, 100%, 60%, 0.25);

  /* Foreground */
  --foreground: hsl(180, 100%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(240, 40%, 5%);

  /* Surface */
  --surface: hsl(240, 35%, 8%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(180, 100%, 60%, 0.05);
  --surface-transparent-1: hsla(300, 100%, 60%, 0.1);
  --surface-transparent-2: hsla(180, 100%, 60%, 0.2);

  /* Primary */
  --primary: hsl(180, 100%, 60%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(180, 100%, 60%, 0.25);
  --primary-transparent-2: hsla(180, 100%, 60%, 0.15);
  --primary-transparent-3: hsla(180, 100%, 60%, 0.2);
  --primary-transparent-4: hsla(180, 100%, 60%, 0.25);
  --primary-transparent-5: hsla(180, 100%, 60%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(180, 100%, 60%, 0.3);
  --primary-border-strong: hsla(180, 100%, 60%, 0.4);
  --primary-border-stronger: hsla(180, 100%, 60%, 0.5);
  --primary-border-active: hsla(180, 100%, 60%, 0.6);

  /* Secondary */
  --secondary: hsl(300, 100%, 70%);
  --secondary-foreground: hsl(0, 0%, 0%);

  /* Sidebar */
  --sidebar: hsl(240, 50%, 8%);
  --sidebar-foreground: hsl(180, 100%, 80%);
  --sidebar-bg-transparent: hsla(240, 50%, 8%, 0.3);
  --sidebar-bg-hover: hsla(240, 50%, 8%, 0.5);

  /* Favorites */
  --favorite: hsl(300, 100%, 70%);
  --favorite-transparent-1: hsla(300, 100%, 70%, 0.15);
  --favorite-transparent-2: hsla(300, 100%, 70%, 0.25);
  --favorite-border: hsla(300, 100%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(240, 35%, 10%);
  --card-rgb: 0, 255, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(240, 35%, 10%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(240, 20%, 15%);
  --muted-foreground: hsl(180, 50%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(180, 100%, 60%);
  --albumart-gradient: linear-gradient(135deg, #001122 0%, #220044 50%, #002211 100%);

  /* Shadows */
  --border: hsl(240, 30%, 15%);
  --shadow: 0 1px 2px hsla(180, 100%, 60%, 0.2),
    0 3px 6px hsla(300, 100%, 60%, 0.15);
  --shadow-md: 0 1px 3px hsla(180, 100%, 60%, 0.2),
    0 10px 15px -5px hsla(300, 100%, 60%, 0.1),
    0 20px 25px -5px hsla(180, 100%, 60%, 0.08);
  --shadow-lg: 0 1px 3px hsla(180, 100%, 60%, 0.2),
    0 20px 25px -5px hsla(300, 100%, 60%, 0.15),
    0 30px 40px -5px hsla(180, 100%, 60%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(180, 100%, 60%, 0.5),
    0 1px 2px hsla(300, 100%, 60%, 0.2);
}`;export{r as default};
//# sourceMappingURL=Cyberpunk.theme-ek3mdeJ-.js.map
