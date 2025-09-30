const r=`/* Verdant */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #a8e6cf, #37966f);
    --themecolor: hsl(135, 60%, 45%);
    --themecolor2: hsl(150, 40%, 35%);
    --themecolor3: hsl(145, 50%, 40%);
    --themecolor4: hsl(160, 45%, 30%);
    --themecolor1-transparent: hsla(145, 50%, 40%, 0.5);
    --themecolor2-transparent: hsla(150, 40%, 35%, 0.5);
    --themecolor3-transparent: hsla(135, 60%, 45%, 0.5);
    --menu-background: hsla(150, 40%, 35%, 0.35);

    /* Foreground */
    --foreground: hsl(120, 10%, 15%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.8);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(120, 25%, 95%);

    /* Surface */
    --surface: hsl(120, 20%, 90%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(120, 20%, 90%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(145, 50%, 40%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(145, 50%, 40%, 0.25);
    --primary-transparent-1: hsla(145, 50%, 40%, 0.1);
    --primary-transparent-2: hsla(145, 50%, 40%, 0.15);
    --primary-transparent-3: hsla(145, 50%, 40%, 0.2);
    --primary-transparent-4: hsla(145, 50%, 40%, 0.3);
    --primary-transparent-5: hsla(145, 50%, 40%, 0.35);
    /* Primary Borders */
    --primary-border: hsla(145, 50%, 40%, 0.3);
    --primary-border-strong: hsla(145, 50%, 40%, 0.4);
    --primary-border-stronger: hsla(145, 50%, 40%, 0.5);
    --primary-border-active: hsla(145, 50%, 40%, 0.6);

    /* Secondary */
    --secondary: hsl(30, 60%, 55%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(120, 25%, 75%);
    --sidebar-foreground: hsl(120, 15%, 20%);
    --sidebar-bg-transparent: hsla(150, 40%, 35%, 0.4);
    --sidebar-bg-hover: hsla(150, 40%, 35%, 0.6);

    /* Favorites */
    --favorite: hsl(30, 100%, 60%);
    --favorite-transparent-1: hsla(30, 100%, 60%, 0.15);
    --favorite-transparent-2: hsla(30, 100%, 60%, 0.25);
    --favorite-border: hsla(30, 100%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 75%, 60%);
    --danger-transparent-1: hsla(0, 75%, 60%, 0.15);
    --danger-transparent-2: hsla(0, 75%, 60%, 0.25);
    --danger-border: hsla(0, 75%, 60%, 0.3);

    /* Cards */
    --card: hsl(120, 25%, 100%);
    --card-rgb: 168, 230, 207;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(120, 25%, 100%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(120, 20%, 80%);
    --muted-foreground: hsl(120, 15%, 35%);

    /* Error */
    --error: hsl(0, 75%, 55%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: var(--themecolor);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

    /* Shadows */
    --border: hsl(120, 20%, 70%);
    --shadow: 0 1px 2px hsla(120, 20%, 5%, 0.05),
        0 3px 6px hsla(120, 20%, 5%, 0.07);
    --shadow-md: 0 1px 3px hsla(120, 20%, 5%, 0.05),
        0 10px 15px -5px hsla(120, 20%, 5%, 0.05),
        0 20px 25px -5px hsla(120, 20%, 5%, 0.04);
    --shadow-lg: 0 1px 3px hsla(120, 20%, 5%, 0.05),
        0 20px 25px -5px hsla(120, 20%, 5%, 0.07),
        0 30px 40px -5px hsla(120, 20%, 5%, 0.05);
    --shadow-focus: 0 0 0 2px hsla(145, 50%, 40%, 0.25),
        0 1px 2px hsla(120, 20%, 5%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #1a3b2a 0%, #0f2c1d 100%);
    --themecolor: hsl(145, 50%, 25%);
    --themecolor2: hsl(150, 40%, 22%);
    --themecolor3: hsl(135, 60%, 20%);
    --themecolor4: hsl(160, 45%, 18%);
    --themecolor1-transparent: hsla(145, 50%, 25%, 0.5);
    --themecolor2-transparent: hsla(150, 40%, 22%, 0.5);
    --themecolor3-transparent: hsla(135, 60%, 20%, 0.5);
    --menu-background: hsla(150, 40%, 22%, 0.25);

    /* Foreground */
    --foreground: hsl(120, 10%, 90%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.9);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(120, 15%, 10%);

    /* Surface */
    --surface: hsl(120, 15%, 13%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(145, 50%, 30%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(145, 50%, 30%, 0.25);
    --primary-transparent-2: hsla(145, 50%, 30%, 0.15);
    --primary-transparent-3: hsla(145, 50%, 30%, 0.2);
    --primary-transparent-4: hsla(145, 50%, 30%, 0.25);
    --primary-transparent-5: hsla(145, 50%, 30%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(145, 50%, 30%, 0.3);
    --primary-border-strong: hsla(145, 50%, 30%, 0.4);
    --primary-border-stronger: hsla(145, 50%, 30%, 0.5);
    --primary-border-active: hsla(145, 50%, 30%, 0.6);

    /* Secondary */
    --secondary: hsl(30, 60%, 50%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(120, 25%, 18%);
    --sidebar-foreground: hsl(120, 15%, 90%);
    --sidebar-bg-transparent: hsla(150, 40%, 22%, 0.3);
    --sidebar-bg-hover: hsla(150, 40%, 22%, 0.5);

    /* Favorites */
    --favorite: hsl(30, 100%, 60%);
    --favorite-transparent-1: hsla(30, 100%, 60%, 0.15);
    --favorite-transparent-2: hsla(30, 100%, 60%, 0.25);
    --favorite-border: hsla(30, 100%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 75%, 55%);
    --danger-transparent-1: hsla(0, 75%, 55%, 0.15);
    --danger-transparent-2: hsla(0, 75%, 55%, 0.25);
    --danger-border: hsla(0, 75%, 55%, 0.3);

    /* Cards */
    --card: hsl(120, 15%, 20%);
    --card-rgb: 26, 59, 42;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(120, 15%, 20%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(120, 15%, 25%);
    --muted-foreground: hsl(120, 10%, 70%);

    /* Error */
    --error: hsl(0, 75%, 55%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: var(--themecolor);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

    /* Shadows */
    --border: hsl(120, 20%, 20%);
    --shadow: 0 1px 2px hsla(120, 20%, 0%, 0.1),
        0 3px 6px hsla(120, 20%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(120, 20%, 0%, 0.1),
        0 10px 15px -5px hsla(120, 20%, 0%, 0.1),
        0 20px 25px -5px hsla(120, 20%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(120, 20%, 0%, 0.1),
        0 20px 25px -5px hsla(120, 20%, 0%, 0.15),
        0 30px 40px -5px hsla(120, 20%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(145, 50%, 30%, 0.25),
        0 1px 2px hsla(120, 20%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Verdant.theme-CQ1TDiy1.js.map
