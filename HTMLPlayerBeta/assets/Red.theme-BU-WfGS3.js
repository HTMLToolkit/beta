const r=`/* Red */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #b22222, #ff6347);
  --themecolor: hsl(0, 75%, 45%);
  --themecolor2: hsl(0, 80%, 50%);
  --themecolor3: hsl(0, 70%, 55%);
  --themecolor4: hsl(0, 65%, 60%);
  --themecolor1-transparent: hsla(0, 80%, 35%, 0.5);
  --themecolor2-transparent: hsla(0, 80%, 50%, 0.5);
  --themecolor3-transparent: hsla(0, 70%, 55%, 0.5);
  --menu-background: hsla(0, 80%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(0, 0%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(0, 20%, 98%);

  /* Surface */
  --surface: hsl(0, 15%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(0, 80%, 50%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(0, 75%, 45%, 0.25);
  --primary-transparent-1: hsla(0, 75%, 45%, 0.1);
  --primary-transparent-2: hsla(0, 75%, 45%, 0.15);
  --primary-transparent-3: hsla(0, 75%, 45%, 0.2);
  --primary-transparent-4: hsla(0, 75%, 45%, 0.3);
  --primary-transparent-5: hsla(0, 75%, 45%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(0, 75%, 45%, 0.3);
  --primary-border-strong: hsla(0, 75%, 45%, 0.4);
  --primary-border-stronger: hsla(0, 75%, 45%, 0.5);
  --primary-border-active: hsla(0, 75%, 45%, 0.6);

  /* Secondary */
  --secondary: hsl(350, 70%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(0, 25%, 92%);
  --sidebar-foreground: hsl(0, 0%, 20%);
  --sidebar-bg-transparent: hsla(0, 80%, 50%, 0.4);
  --sidebar-bg-hover: hsla(0, 80%, 50%, 0.6);

  /* Favorites */
  --favorite: hsl(0, 100%, 71%);
  --favorite-transparent-1: hsla(0, 100%, 71%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 71%, 0.25);
  --favorite-border: hsla(0, 100%, 71%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(0, 95%, 98%);
  --card-rgb: 178, 34, 34;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 95%, 98%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(0, 15%, 85%);
  --muted-foreground: hsl(0, 10%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(
    135deg,
    var(--themecolor1) 0%,
    var(--themecolor2) 100%
  );

  /* Shadows */
  --border: hsl(0, 15%, 90%);
  --shadow: 0 1px 2px hsla(0, 15%, 5%, 0.05), 0 3px 6px hsla(0, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(0, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(0, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(0, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(0, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(0, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(0, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(0, 75%, 45%, 0.25),
    0 1px 2px hsla(0, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #5c0b0b, #a83232);
  --themecolor: hsl(0, 70%, 25%);
  --themecolor2: hsl(0, 75%, 35%);
  --themecolor3: hsl(0, 60%, 30%);
  --themecolor4: hsl(0, 55%, 25%);
  --themecolor1-transparent: hsla(0, 75%, 20%, 0.5);
  --themecolor2-transparent: hsla(0, 75%, 35%, 0.5);
  --themecolor3-transparent: hsla(0, 60%, 30%, 0.5);
  --menu-background: hsla(0, 75%, 35%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 95%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(0, 60%, 10%);

  /* Surface */
  --surface: hsl(0, 55%, 13%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(0, 75%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(0, 70%, 25%, 0.25);
  --primary-transparent-2: hsla(0, 70%, 25%, 0.15);
  --primary-transparent-3: hsla(0, 70%, 25%, 0.2);
  --primary-transparent-4: hsla(0, 70%, 25%, 0.25);
  --primary-transparent-5: hsla(0, 70%, 25%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(0, 70%, 25%, 0.3);
  --primary-border-strong: hsla(0, 70%, 25%, 0.4);
  --primary-border-stronger: hsla(0, 70%, 25%, 0.5);
  --primary-border-active: hsla(0, 70%, 25%, 0.6);

  /* Secondary */
  --secondary: hsl(350, 65%, 45%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(0, 60%, 15%);
  --sidebar-foreground: hsl(0, 0%, 95%);
  --sidebar-bg-transparent: hsla(0, 75%, 35%, 0.3);
  --sidebar-bg-hover: hsla(0, 75%, 35%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 100%, 71%);
  --favorite-transparent-1: hsla(0, 100%, 71%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 71%, 0.25);
  --favorite-border: hsla(0, 100%, 71%, 0.3);

  /* Danger */
  --danger: hsl(0, 85%, 60%);
  --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
  --danger-border: hsla(0, 85%, 60%, 0.3);

  /* Cards */
  --card: hsl(0, 65%, 15%);
  --card-rgb: 92, 11, 11;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 65%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(0, 55%, 25%);
  --muted-foreground: hsl(0, 50%, 70%);

  /* Error */
  --error: hsl(0, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(0, 75%, 45%);
  --albumart-gradient: linear-gradient(
    135deg,
    var(--themecolor1) 0%,
    var(--themecolor2) 100%
  );

  /* Shadows */
  --border: hsl(0, 55%, 20%);
  --shadow: 0 1px 2px hsla(0, 55%, 0%, 0.1), 0 3px 6px hsla(0, 55%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(0, 55%, 0%, 0.1),
    0 10px 15px -5px hsla(0, 55%, 0%, 0.1),
    0 20px 25px -5px hsla(0, 55%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(0, 55%, 0%, 0.1),
    0 20px 25px -5px hsla(0, 55%, 0%, 0.15),
    0 30px 40px -5px hsla(0, 55%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(0, 75%, 35%, 0.25),
    0 1px 2px hsla(0, 55%, 0%, 0.1);
}
`;export{r as default};
//# sourceMappingURL=Red.theme-BU-WfGS3.js.map
