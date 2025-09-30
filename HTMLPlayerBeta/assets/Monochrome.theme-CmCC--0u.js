const r=`/* Monochrome */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #ffffff, #cccccc);
    --themecolor: hsl(0, 0%, 50%);
    --themecolor2: hsl(0, 0%, 60%);
    --themecolor3: hsl(0, 0%, 70%);
    --themecolor4: hsl(0, 0%, 80%);
    --themecolor1-transparent: hsla(0, 0%, 40%, 0.5);
    --themecolor2-transparent: hsla(0, 0%, 60%, 0.5);
    --themecolor3-transparent: hsla(0, 0%, 70%, 0.5);
    --menu-background: hsla(0, 0%, 90%, 0.35);

    /* Foreground */
    --foreground: hsl(0, 0%, 10%);
    --foreground-strong: hsl(0, 0%, 0%);
    --foreground-stronger: hsl(0, 0%, 0%);
    --foreground-muted: hsl(0, 0%, 40%);
    --foreground-subtle: hsl(0, 0%, 25%);

    /* Background */
    --background: hsl(0, 0%, 100%);

    /* Surface */
    --surface: hsl(0, 0%, 98%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 0%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 0%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 0%, 0.2);

    /* Primary */
    --primary: hsl(0, 0%, 50%);
    --primary-foreground: hsl(0, 0%, 0%);
    /* Primary Transparent */
    --primary-transparent: hsla(0, 0%, 50%, 0.25);
    --primary-transparent-1: hsla(0, 0%, 50%, 0.1);
    --primary-transparent-2: hsla(0, 0%, 50%, 0.15);
    --primary-transparent-3: hsla(0, 0%, 50%, 0.2);
    --primary-transparent-4: hsla(0, 0%, 50%, 0.3);
    --primary-transparent-5: hsla(0, 0%, 50%, 0.35);
    /* Primary Borders */
    --primary-border: hsla(0, 0%, 50%, 0.3);
    --primary-border-strong: hsla(0, 0%, 50%, 0.4);
    --primary-border-stronger: hsla(0, 0%, 50%, 0.5);
    --primary-border-active: hsla(0, 0%, 50%, 0.6);

    /* Secondary */
    --secondary: hsl(0, 0%, 70%);
    --secondary-foreground: hsl(0, 0%, 0%);

    /* Sidebar */
    --sidebar: hsl(0, 0%, 95%);
    --sidebar-foreground: hsl(0, 0%, 10%);
    --sidebar-bg-transparent: hsla(0, 0%, 60%, 0.4);
    --sidebar-bg-hover: hsla(0, 0%, 60%, 0.6);

    /* Favorites */
    --favorite: hsl(0, 0%, 70%);
    --favorite-transparent-1: hsla(0, 0%, 70%, 0.15);
    --favorite-transparent-2: hsla(0, 0%, 70%, 0.25);
    --favorite-border: hsla(0, 0%, 70%, 0.3);

    /* Danger */
    --danger: hsl(0, 0%, 60%);
    --danger-transparent-1: hsla(0, 0%, 60%, 0.15);
    --danger-transparent-2: hsla(0, 0%, 60%, 0.25);
    --danger-border: hsla(0, 0%, 60%, 0.3);

    /* Cards */
    --card: hsl(0, 0%, 100%);
    --card-rgb: 128, 128, 128;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(0, 0%, 100%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(0, 0%, 85%);
    --muted-foreground: hsl(0, 0%, 40%);

    /* Error */
    --error: hsl(0, 100%, 50%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: var(--themecolor);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

    /* Shadows */
    --border: hsl(0, 0%, 90%);
    --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
        0 3px 6px hsla(0, 0%, 0%, 0.07);
    --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.05),
        0 10px 15px -5px hsla(0, 0%, 0%, 0.05),
        0 20px 25px -5px hsla(0, 0%, 0%, 0.04);
    --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.05),
        0 20px 25px -5px hsla(0, 0%, 0%, 0.07),
        0 30px 40px -5px hsla(0, 0%, 0%, 0.05);
    --shadow-focus: 0 0 0 2px hsla(0, 0%, 50%, 0.25),
        0 1px 2px hsla(0, 0%, 0%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #000000, #333333);
    --themecolor: hsl(0, 0%, 40%);
    --themecolor2: hsl(0, 0%, 50%);
    --themecolor3: hsl(0, 0%, 20%);
    --themecolor4: hsl(0, 0%, 10%);
    --themecolor1-transparent: hsla(0, 0%, 30%, 0.5);
    --themecolor2-transparent: hsla(0, 0%, 50%, 0.5);
    --themecolor3-transparent: hsla(0, 0%, 70%, 0.5);
    --menu-background: hsla(0, 0%, 20%, 0.25);

    /* Foreground */
    --foreground: hsl(0, 0%, 95%);
    --foreground-strong: hsl(0, 0%, 100%);
    --foreground-stronger: hsl(0, 0%, 100%);
    --foreground-muted: hsl(0, 0%, 80%);
    --foreground-subtle: hsl(0, 0%, 60%);

    /* Background */
    --background: hsl(0, 0%, 5%);

    /* Surface */
    --surface: hsl(0, 0%, 10%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(0, 0%, 40%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(0, 0%, 40%, 0.25);
    --primary-transparent-2: hsla(0, 0%, 40%, 0.15);
    --primary-transparent-3: hsla(0, 0%, 40%, 0.2);
    --primary-transparent-4: hsla(0, 0%, 40%, 0.25);
    --primary-transparent-5: hsla(0, 0%, 40%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(0, 0%, 40%, 0.3);
    --primary-border-strong: hsla(0, 0%, 40%, 0.4);
    --primary-border-stronger: hsla(0, 0%, 40%, 0.5);
    --primary-border-active: hsla(0, 0%, 40%, 0.6);

    /* Secondary */
    --secondary: hsl(0, 0%, 60%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(0, 0%, 15%);
    --sidebar-foreground: hsl(0, 0%, 95%);
    --sidebar-bg-transparent: hsla(0, 0%, 40%, 0.3);
    --sidebar-bg-hover: hsla(0, 0%, 40%, 0.5);

    /* Favorites */
    --favorite: hsl(0, 0%, 60%);
    --favorite-transparent-1: hsla(0, 0%, 60%, 0.15);
    --favorite-transparent-2: hsla(0, 0%, 60%, 0.25);
    --favorite-border: hsla(0, 0%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 0%, 70%);
    --danger-transparent-1: hsla(0, 0%, 70%, 0.15);
    --danger-transparent-2: hsla(0, 0%, 70%, 0.25);
    --danger-border: hsla(0, 0%, 70%, 0.3);

    /* Cards */
    --card: hsl(0, 0%, 15%);
    --card-rgb: 50, 50, 50;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(0, 0%, 15%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(0, 0%, 25%);
    --muted-foreground: hsl(0, 0%, 70%);

    /* Error */
    --error: hsl(0, 100%, 50%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(0, 0%, 40%);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

    /* Shadows */
    --border: hsl(0, 0%, 20%);
    --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.1),
        0 3px 6px hsla(0, 0%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.1),
        0 10px 15px -5px hsla(0, 0%, 0%, 0.1),
        0 20px 25px -5px hsla(0, 0%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.1),
        0 20px 25px -5px hsla(0, 0%, 0%, 0.15),
        0 30px 40px -5px hsla(0, 0%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(0, 0%, 40%, 0.25),
        0 1px 2px hsla(0, 0%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Monochrome.theme-CmCC--0u.js.map
