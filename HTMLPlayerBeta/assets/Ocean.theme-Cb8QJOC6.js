const r=`/* Mystical */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #a0e9fd, #74c0fc);
    --themecolor: hsl(190, 85%, 55%);
    --themecolor2: hsl(200, 75%, 45%);
    --themecolor3: hsl(180, 90%, 60%);
    --themecolor4: hsl(195, 80%, 50%);
    --themecolor1-transparent: hsla(190, 85%, 55%, 0.5);
    --themecolor2-transparent: hsla(200, 75%, 45%, 0.5);
    --themecolor3-transparent: hsla(180, 90%, 60%, 0.5);
    --menu-background: hsla(200, 75%, 45%, 0.35);

    /* Foreground */
    --foreground: hsl(220, 10%, 20%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.8);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(210, 20%, 97%);

    /* Surface */
    --surface: hsl(210, 15%, 95%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(190, 80%, 50%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(190, 80%, 50%, 0.25);
    --primary-transparent-1: hsla(190, 80%, 50%, 0.1);
    --primary-transparent-2: hsla(190, 80%, 50%, 0.15);
    --primary-transparent-3: hsla(190, 80%, 50%, 0.2);
    --primary-transparent-4: hsla(190, 80%, 50%, 0.3);
    --primary-transparent-5: hsla(190, 80%, 50%, 0.35);
    /* Primary Borders */
    --primary-border: hsla(190, 80%, 50%, 0.3);
    --primary-border-strong: hsla(190, 80%, 50%, 0.4);
    --primary-border-stronger: hsla(190, 80%, 50%, 0.5);
    --primary-border-active: hsla(190, 80%, 50%, 0.6);

    /* Secondary */
    --secondary: hsl(150, 70%, 55%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(190, 20%, 90%);
    --sidebar-foreground: hsl(210, 15%, 20%);
    --sidebar-bg-transparent: hsla(200, 75%, 45%, 0.4);
    --sidebar-bg-hover: hsla(200, 75%, 45%, 0.6);

    /* Favorites */
    --favorite: hsl(10, 90%, 60%);
    --favorite-transparent-1: hsla(10, 90%, 60%, 0.15);
    --favorite-transparent-2: hsla(10, 90%, 60%, 0.25);
    --favorite-border: hsla(10, 90%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 100%, 65%);
    --danger-transparent-1: hsla(0, 100%, 65%, 0.15);
    --danger-transparent-2: hsla(0, 100%, 65%, 0.25);
    --danger-border: hsla(0, 100%, 65%, 0.3);

    /* Cards */
    --card: hsl(0, 0%, 100%);
    --card-rgb: 160, 233, 253;
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
    --shadow-focus: 0 0 0 2px hsla(190, 80%, 50%, 0.25),
        0 1px 2px hsla(220, 15%, 5%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #0b1d2f 0%, #1a2c3f 100%);
    --themecolor: hsl(190, 85%, 25%);
    --themecolor2: hsl(200, 70%, 22%);
    --themecolor3: hsl(180, 90%, 18%);
    --themecolor4: hsl(195, 80%, 20%);
    --themecolor1-transparent: hsla(190, 85%, 25%, 0.5);
    --themecolor2-transparent: hsla(200, 70%, 22%, 0.5);
    --themecolor3-transparent: hsla(180, 90%, 18%, 0.5);
    --menu-background: hsla(200, 75%, 45%, 0.25);

    /* Foreground */
    --foreground: hsl(210, 15%, 90%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.9);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(210, 15%, 12%);

    /* Surface */
    --surface: hsl(210, 15%, 15%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(190, 80%, 45%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(190, 80%, 45%, 0.25);
    --primary-transparent-2: hsla(190, 80%, 45%, 0.15);
    --primary-transparent-3: hsla(190, 80%, 45%, 0.2);
    --primary-transparent-4: hsla(190, 80%, 45%, 0.25);
    --primary-transparent-5: hsla(190, 80%, 45%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(190, 80%, 45%, 0.3);
    --primary-border-strong: hsla(190, 80%, 45%, 0.4);
    --primary-border-stronger: hsla(190, 80%, 45%, 0.5);
    --primary-border-active: hsla(190, 80%, 45%, 0.6);

    /* Secondary */
    --secondary: hsl(150, 70%, 45%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(210, 15%, 15%);
    --sidebar-foreground: hsl(210, 15%, 90%);
    --sidebar-bg-transparent: hsla(200, 75%, 45%, 0.3);
    --sidebar-bg-hover: hsla(200, 75%, 45%, 0.5);

    /* Favorites */
    --favorite: hsl(10, 90%, 60%);
    --favorite-transparent-1: hsla(10, 90%, 60%, 0.15);
    --favorite-transparent-2: hsla(10, 90%, 60%, 0.25);
    --favorite-border: hsla(10, 90%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 100%, 65%);
    --danger-transparent-1: hsla(0, 100%, 65%, 0.15);
    --danger-transparent-2: hsla(0, 100%, 65%, 0.25);
    --danger-border: hsla(0, 100%, 65%, 0.3);

    /* Cards */
    --card: hsl(210, 15%, 18%);
    --card-rgb: 11, 233, 253;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(210, 15%, 18%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(210, 15%, 25%);
    --muted-foreground: hsl(210, 10%, 70%);

    /* Error */
    --error: hsl(358, 75%, 60%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(190, 85%, 25%);
    --albumart-gradient: linear-gradient(135deg, #0b1d2f 0%, #1a2c3f 100%);

    /* Shadows */
    --border: hsl(210, 15%, 20%);
    --shadow: 0 1px 2px hsla(210, 15%, 0%, 0.1),
        0 3px 6px hsla(210, 15%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(210, 15%, 0%, 0.1),
        0 10px 15px -5px hsla(210, 15%, 0%, 0.1),
        0 20px 25px -5px hsla(210, 15%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(210, 15%, 0%, 0.1),
        0 20px 25px -5px hsla(210, 15%, 0%, 0.15),
        0 30px 40px -5px hsla(210, 15%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(190, 80%, 45%, 0.25),
        0 1px 2px hsla(210, 15%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Ocean.theme-Cb8QJOC6.js.map
