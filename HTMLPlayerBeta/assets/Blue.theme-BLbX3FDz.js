const r=`/* Blue */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #00bfff, #1e3a8a);
  --themecolor: hsl(195, 100%, 50%);
  --themecolor2: hsl(224, 64%, 33%);
  --themecolor3: hsl(199, 89%, 48%);
  --themecolor4: hsl(226, 71%, 40%);
  --themecolor1-transparent: hsla(195, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(224, 64%, 33%, 0.5);
  --themecolor3-transparent: hsla(199, 89%, 48%, 0.5);
  --menu-background: hsla(203, 60%, 45%, 0.575);

  /* Foreground */
  --foreground: hsl(220, 15%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(210, 20%, 98%);

  /* Surface */
  --surface: hsl(210, 15%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(215, 70%, 50%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(195, 100%, 50%, 0.25);
  --primary-transparent-1: hsla(195, 100%, 50%, 0.1);
  --primary-transparent-2: hsla(195, 100%, 50%, 0.15);
  --primary-transparent-3: hsla(195, 100%, 50%, 0.2);
  --primary-transparent-4: hsla(195, 100%, 50%, 0.3);
  --primary-transparent-5: hsla(195, 100%, 50%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(195, 100%, 50%, 0.3);
  --primary-border-strong: hsla(195, 100%, 50%, 0.4);
  --primary-border-stronger: hsla(195, 100%, 50%, 0.5);
  --primary-border-active: hsla(195, 100%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(250, 65%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(215, 25%, 27%);
  --sidebar-foreground: hsl(210, 15%, 95%);
  --sidebar-bg-transparent: hsla(224, 64%, 33%, 0.4);
  --sidebar-bg-hover: hsla(224, 64%, 33%, 0.6);

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
  --card-rgb: 85, 146, 203;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(220, 15%, 85%);
  --muted-foreground: hsl(220, 10%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(220, 15%, 90%);
  --shadow: 0 1px 2px hsla(220, 15%, 5%, 0.05),
    0 3px 6px hsla(220, 15%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(220, 15%, 5%, 0.05),
    0 10px 15px -5px hsla(220, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(220, 15%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(220, 15%, 5%, 0.05),
    0 20px 25px -5px hsla(220, 15%, 5%, 0.07),
    0 30px 40px -5px hsla(220, 15%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(215, 70%, 50%, 0.25),
    0 1px 2px hsla(220, 15%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #0a192f 0%, #1f2937 100%);
  --themecolor: hsl(217, 66%, 19%);
  --themecolor2: hsl(216, 33%, 22%);
  --themecolor3: hsl(199, 100%, 12%);
  --themecolor4: hsl(226, 71%, 25%);
  --themecolor1-transparent: hsla(195, 100%, 25%, 0.5);
  --themecolor2-transparent: hsla(224, 64%, 20%, 0.5);
  --themecolor3-transparent: hsla(199, 89%, 18%, 0.5);
  --menu-background: hsla(224, 64%, 33%, 0.25);

  /* Foreground */
  --foreground: hsl(210, 15%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(220, 15%, 10%);

  /* Surface */
  --surface: hsl(220, 15%, 13%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(215, 70%, 60%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(195, 100%, 50%, 0.25);
  --primary-transparent-2: hsla(195, 100%, 50%, 0.15);
  --primary-transparent-3: hsla(195, 100%, 50%, 0.2);
  --primary-transparent-4: hsla(195, 100%, 50%, 0.25);
  --primary-transparent-5: hsla(195, 100%, 50%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(195, 100%, 50%, 0.3);
  --primary-border-strong: hsla(195, 100%, 50%, 0.4);
  --primary-border-stronger: hsla(195, 100%, 50%, 0.5);
  --primary-border-active: hsla(195, 100%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(250, 65%, 65%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(215, 25%, 15%);
  --sidebar-foreground: hsl(210, 15%, 90%);
  --sidebar-bg-transparent: hsla(224, 64%, 33%, 0.3);
  --sidebar-bg-hover: hsla(224, 64%, 33%, 0.5);

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
  --card: hsl(220, 15%, 15%);
  --card-rgb: 40, 117, 189;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(220, 15%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(220, 15%, 25%);
  --muted-foreground: hsl(220, 10%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(195, 100%, 50%);
  --albumart-gradient: linear-gradient(135deg, #0a192f 0%, #1f2937 100%);

  /* Shadows */
  --border: hsl(220, 15%, 20%);
  --shadow: 0 1px 2px hsla(220, 15%, 0%, 0.1),
    0 3px 6px hsla(220, 15%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(220, 15%, 0%, 0.1),
    0 10px 15px -5px hsla(220, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 15%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(220, 15%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 15%, 0%, 0.15),
    0 30px 40px -5px hsla(220, 15%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(215, 70%, 60%, 0.25),
    0 1px 2px hsla(220, 15%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Blue.theme-BLbX3FDz.js.map
