const r=`/* Orange */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #ffd27f, #ff9c5e);
  --themecolor: hsl(25, 80%, 45%);
  --themecolor2: hsl(30, 90%, 50%);
  --themecolor3: hsl(35, 100%, 55%);
  --themecolor4: hsl(20, 70%, 40%);
  --themecolor1-transparent: hsla(35, 100%, 55%, 0.5);
  --themecolor2-transparent: hsla(30, 90%, 50%, 0.5);
  --themecolor3-transparent: hsla(25, 80%, 45%, 0.5);
  --menu-background: hsla(30, 90%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(30, 20%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(40, 80%, 98%);

  /* Surface */
  --surface: hsl(40, 70%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(40, 50%, 90%, 0.1);
  --surface-transparent-2: hsla(40, 70%, 96%, 0.2);

  /* Primary */
  --primary: hsl(30, 95%, 50%);
  --primary-foreground: hsl(35, 100%, 13%);
  /* Primary Transparent */
  --primary-transparent: hsla(35, 100%, 55%, 0.25);
  --primary-transparent-1: hsla(35, 100%, 55%, 0.1);
  --primary-transparent-2: hsla(35, 100%, 55%, 0.15);
  --primary-transparent-3: hsla(35, 100%, 55%, 0.2);
  --primary-transparent-4: hsla(35, 100%, 55%, 0.3);
  --primary-transparent-5: hsla(35, 100%, 55%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(35, 100%, 55%, 0.3);
  --primary-border-strong: hsla(35, 100%, 55%, 0.4);
  --primary-border-stronger: hsla(35, 100%, 55%, 0.5);
  --primary-border-active: hsla(35, 100%, 55%, 0.6);

  /* Secondary */
  --secondary: hsl(25, 80%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(35, 50%, 92%);
  --sidebar-foreground: hsl(30, 20%, 20%);
  --sidebar-bg-transparent: hsla(30, 90%, 50%, 0.4);
  --sidebar-bg-hover: hsla(30, 90%, 50%, 0.6);

  /* Favorites */
  --favorite: hsl(5, 90%, 65%);
  --favorite-transparent-1: hsla(5, 90%, 65%, 0.15);
  --favorite-transparent-2: hsla(5, 90%, 65%, 0.25);
  --favorite-border: hsla(5, 90%, 65%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(40, 95%, 98%);
  --card-rgb: 255, 210, 127;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(40, 95%, 98%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(30, 20%, 85%);
  --muted-foreground: hsl(30, 20%, 40%);

  /* Error */
  --error: hsl(0, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(30, 20%, 90%);
  --shadow: 0 1px 2px hsla(30, 20%, 5%, 0.05),
    0 3px 6px hsla(30, 20%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(30, 20%, 5%, 0.05),
    0 10px 15px -5px hsla(30, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(30, 20%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(30, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(30, 20%, 5%, 0.07),
    0 30px 40px -5px hsla(30, 20%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(35, 100%, 55%, 0.25),
    0 1px 2px hsla(30, 20%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #42210f, #7a3f11);
  --themecolor: hsl(15, 80%, 15%);
  --themecolor2: hsl(20, 60%, 20%);
  --themecolor3: hsl(25, 65%, 25%);
  --themecolor4: hsl(20, 70%, 20%);
  --themecolor1-transparent: hsla(25, 65%, 25%, 0.5);
  --themecolor2-transparent: hsla(20, 60%, 20%, 0.5);
  --themecolor3-transparent: hsla(15, 80%, 15%, 0.5);
  --menu-background: hsla(20, 60%, 20%, 0.25);

  /* Foreground */
  --foreground: hsl(40, 20%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(25, 50%, 10%);

  /* Surface */
  --surface: hsl(25, 50%, 13%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(30, 90%, 45%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(25, 65%, 25%, 0.25);
  --primary-transparent-2: hsla(25, 65%, 25%, 0.15);
  --primary-transparent-3: hsla(25, 65%, 25%, 0.2);
  --primary-transparent-4: hsla(25, 65%, 25%, 0.25);
  --primary-transparent-5: hsla(25, 65%, 25%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(25, 65%, 25%, 0.3);
  --primary-border-strong: hsla(25, 65%, 25%, 0.4);
  --primary-border-stronger: hsla(25, 65%, 25%, 0.5);
  --primary-border-active: hsla(25, 65%, 25%, 0.6);

  /* Secondary */
  --secondary: hsl(20, 70%, 40%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(25, 50%, 15%);
  --sidebar-foreground: hsl(40, 20%, 90%);
  --sidebar-bg-transparent: hsla(20, 60%, 20%, 0.3);
  --sidebar-bg-hover: hsla(20, 60%, 20%, 0.5);

  /* Favorites */
  --favorite: hsl(5, 90%, 65%);
  --favorite-transparent-1: hsla(5, 90%, 65%, 0.15);
  --favorite-transparent-2: hsla(5, 90%, 65%, 0.25);
  --favorite-border: hsla(5, 90%, 65%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(25, 60%, 15%);
  --card-rgb: 66, 33, 15;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(25, 60%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(25, 50%, 25%);
  --muted-foreground: hsl(25, 45%, 70%);

  /* Error */
  --error: hsl(0, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(35, 100%, 55%);
  --albumart-gradient: linear-gradient(135deg, #42210f 0%, #7a3f11 100%);

  /* Shadows */
  --border: hsl(25, 50%, 20%);
  --shadow: 0 1px 2px hsla(25, 50%, 0%, 0.1),
    0 3px 6px hsla(25, 50%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(25, 50%, 0%, 0.1),
    0 10px 15px -5px hsla(25, 50%, 0%, 0.1),
    0 20px 25px -5px hsla(25, 50%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(25, 50%, 0%, 0.1),
    0 20px 25px -5px hsla(25, 50%, 0%, 0.15),
    0 30px 40px -5px hsla(25, 50%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(30, 90%, 45%, 0.25),
    0 1px 2px hsla(25, 50%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Orange.theme-Bcainte4.js.map
