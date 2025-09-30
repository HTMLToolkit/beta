const r=`/* Aurora */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #cfe4f9, #d3c5f2);
    --themecolor: hsl(250, 60%, 65%);
    --themecolor2: hsl(190, 50%, 60%);
    --themecolor3: hsl(300, 55%, 60%);
    --themecolor4: hsl(200, 40%, 55%);
    --themecolor1-transparent: hsla(250, 60%, 65%, 0.5);
    --themecolor2-transparent: hsla(190, 50%, 60%, 0.5);
    --themecolor3-transparent: hsla(300, 55%, 60%, 0.5);
    --menu-background: hsla(200, 40%, 55%, 0.25);

    /* Foreground */
    --foreground: hsl(220, 20%, 20%);
    --foreground-strong: hsla(0, 0%, 0%, 0.85);
    --foreground-stronger: hsla(0, 0%, 0%, 0.95);
    --foreground-muted: hsla(0, 0%, 0%, 0.7);
    --foreground-subtle: hsla(0, 0%, 0%, 0.55);

    /* Background */
    --background: hsl(210, 40%, 98%);

    /* Surface */
    --surface: hsl(210, 35%, 95%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 0%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 0%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 0%, 0.2);

    /* Primary system */
    --primary: hsl(250, 60%, 65%);
    --primary-foreground: hsl(0, 0%, 0%);
    /* Primary Transparent */
    --primary-transparent: hsla(250, 60%, 65%, 0.25);
    --primary-transparent-1: hsla(250, 60%, 65%, 0.1);
    --primary-transparent-2: hsla(250, 60%, 65%, 0.15);
    --primary-transparent-3: hsla(250, 60%, 65%, 0.2);
    --primary-transparent-4: hsla(250, 60%, 65%, 0.25);
    --primary-transparent-5: hsla(250, 60%, 65%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(250, 60%, 65%, 0.3);
    --primary-border-strong: hsla(250, 60%, 65%, 0.4);
    --primary-border-stronger: hsla(250, 60%, 65%, 0.5);
    --primary-border-active: hsla(250, 60%, 65%, 0.6);

    /* Secondary */
    --secondary: hsl(190, 50%, 60%);
    --secondary-foreground: hsl(0, 0%, 0%);

    /* Sidebar */
    --sidebar: hsl(210, 30%, 90%);
    --sidebar-foreground: hsl(220, 20%, 20%);
    --sidebar-bg-transparent: hsla(200, 40%, 55%, 0.4);
    --sidebar-bg-hover: hsla(200, 40%, 55%, 0.6);

    /* Favorites */
    --favorite: hsl(300, 55%, 65%);
    --favorite-transparent-1: hsla(300, 55%, 65%, 0.15);
    --favorite-transparent-2: hsla(300, 55%, 65%, 0.25);
    --favorite-border: hsla(300, 55%, 65%, 0.3);

    /* Danger */
    --danger: hsl(0, 85%, 65%);
    --danger-transparent-1: hsla(0, 85%, 65%, 0.15);
    --danger-transparent-2: hsla(0, 85%, 65%, 0.25);
    --danger-border: hsla(0, 85%, 65%, 0.3);

    /* Cards */
    --card: hsl(210, 35%, 95%);
    --card-rgb: 120, 180, 220;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(210, 35%, 95%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(210, 30%, 85%);
    --muted-foreground: hsl(210, 20%, 50%);

    /* Error */
    --error: hsl(358, 75%, 60%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(250, 60%, 65%);
    --albumart-gradient: linear-gradient(135deg, #cfe4f9 0%, #d3c5f2 100%);

    /* Shadows */
    --border: hsl(210, 35%, 85%);
    --shadow: 0 1px 2px hsla(210, 35%, 0%, 0.05),
        0 3px 6px hsla(210, 35%, 0%, 0.08);
    --shadow-md: 0 1px 3px hsla(210, 35%, 0%, 0.05),
        0 10px 15px -5px hsla(210, 35%, 0%, 0.05),
        0 20px 25px -5px hsla(210, 35%, 0%, 0.04);
    --shadow-lg: 0 1px 3px hsla(210, 35%, 0%, 0.05),
        0 20px 25px -5px hsla(210, 35%, 0%, 0.08),
        0 30px 40px -5px hsla(210, 35%, 0%, 0.05);
    --shadow-focus: 0 0 0 2px hsla(250, 60%, 65%, 0.25),
        0 1px 2px hsla(210, 35%, 0%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #1b1f3b, #2e2a55);
    --themecolor: hsl(250, 60%, 45%);
    --themecolor2: hsl(190, 50%, 40%);
    --themecolor3: hsl(300, 55%, 38%);
    --themecolor4: hsl(200, 40%, 30%);
    --themecolor1-transparent: hsla(250, 60%, 45%, 0.5);
    --themecolor2-transparent: hsla(190, 50%, 40%, 0.5);
    --themecolor3-transparent: hsla(300, 55%, 38%, 0.5);
    --menu-background: hsla(200, 40%, 30%, 0.35);

    /* Foreground */
    --foreground: hsl(220, 20%, 95%);
    --foreground-strong: hsla(0, 0%, 100%, 0.85);
    --foreground-stronger: hsla(0, 0%, 100%, 0.95);
    --foreground-muted: hsla(0, 0%, 100%, 0.7);
    --foreground-subtle: hsla(0, 0%, 100%, 0.55);

    /* Background */
    --background: hsl(220, 25%, 12%);

    /* Surface */
    --surface: hsl(220, 25%, 18%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary system */
    --primary: hsl(250, 60%, 50%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(250, 60%, 50%, 0.25);
    --primary-transparent-2: hsla(250, 60%, 50%, 0.15);
    --primary-transparent-3: hsla(250, 60%, 50%, 0.2);
    --primary-transparent-4: hsla(250, 60%, 50%, 0.25);
    --primary-transparent-5: hsla(250, 60%, 50%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(250, 60%, 50%, 0.3);
    --primary-border-strong: hsla(250, 60%, 50%, 0.4);
    --primary-border-stronger: hsla(250, 60%, 50%, 0.5);
    --primary-border-active: hsla(250, 60%, 50%, 0.6);

    /* Secondary */
    --secondary: hsl(190, 50%, 45%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(220, 20%, 15%);
    --sidebar-foreground: hsl(220, 20%, 90%);
    --sidebar-bg-transparent: hsla(200, 40%, 30%, 0.4);
    --sidebar-bg-hover: hsla(200, 40%, 30%, 0.6);

    /* Favorites */
    --favorite: hsl(300, 55%, 55%);
    --favorite-transparent-1: hsla(300, 55%, 55%, 0.15);
    --favorite-transparent-2: hsla(300, 55%, 55%, 0.25);
    --favorite-border: hsla(300, 55%, 55%, 0.3);

    /* Danger */
    --danger: hsl(0, 85%, 65%);
    --danger-transparent-1: hsla(0, 85%, 65%, 0.15);
    --danger-transparent-2: hsla(0, 85%, 65%, 0.25);
    --danger-border: hsla(0, 85%, 65%, 0.3);

    /* Cards */
    --card: hsl(220, 25%, 18%);
    --card-rgb: 50, 120, 180;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(220, 25%, 18%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(220, 25%, 35%);
    --muted-foreground: hsl(220, 10%, 70%);

    /* Error */
    --error: hsl(358, 75%, 60%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(250, 60%, 50%);
    --albumart-gradient: linear-gradient(135deg, #1b1f3b 0%, #2e2a55 100%);

    /* Shadows */
    --border: hsl(220, 25%, 22%);
    --shadow: 0 1px 2px hsla(220, 25%, 0%, 0.1),
        0 3px 6px hsla(220, 25%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(220, 25%, 0%, 0.1),
        0 10px 15px -5px hsla(220, 25%, 0%, 0.1),
        0 20px 25px -5px hsla(220, 25%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(220, 25%, 0%, 0.1),
        0 20px 25px -5px hsla(220, 25%, 0%, 0.15),
        0 30px 40px -5px hsla(220, 25%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(250, 60%, 50%, 0.25),
        0 1px 2px hsla(220, 25%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=CottonCandy.theme-CtW3Qsme.js.map
