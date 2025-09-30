const r=`/* Lumenis */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #ff7e5f, #6a11cb);
    --themecolor: hsl(15, 90%, 60%);
    --themecolor2: hsl(280, 65%, 50%);
    --themecolor3: hsl(340, 80%, 60%);
    --themecolor4: hsl(210, 70%, 45%);
    --themecolor1-transparent: hsla(15, 90%, 60%, 0.5);
    --themecolor2-transparent: hsla(280, 65%, 50%, 0.5);
    --themecolor3-transparent: hsla(340, 80%, 60%, 0.5);
    --menu-background: hsla(280, 65%, 50%, 0.35);

    /* Foreground */
    --foreground: hsl(230, 20%, 20%);
    --foreground-strong: hsla(0, 0%, 100%, 0.85);
    --foreground-stronger: hsla(0, 0%, 100%, 0.95);
    --foreground-muted: hsla(0, 0%, 100%, 0.75);
    --foreground-subtle: hsla(0, 0%, 100%, 0.55);

    /* Background */
    --background: hsl(25, 100%, 97%);

    /* Surface */
    --surface: hsl(20, 70%, 96%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(15, 38%, 85%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(15, 85%, 55%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(15, 85%, 55%, 0.25);
    --primary-transparent-1: hsla(15, 85%, 55%, 0.1);
    --primary-transparent-2: hsla(15, 85%, 55%, 0.15);
    --primary-transparent-3: hsla(15, 85%, 55%, 0.2);
    --primary-transparent-4: hsla(15, 85%, 55%, 0.3);
    --primary-transparent-5: hsla(15, 85%, 55%, 0.35);
    /* Primary Borders */
    --primary-border: hsla(15, 85%, 55%, 0.3);
    --primary-border-strong: hsla(15, 85%, 55%, 0.4);
    --primary-border-stronger: hsla(15, 85%, 55%, 0.5);
    --primary-border-active: hsla(15, 85%, 55%, 0.6);

    /* Secondary */
    --secondary: hsl(280, 65%, 55%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(280, 25%, 25%);
    --sidebar-foreground: hsl(25, 100%, 95%);
    --sidebar-bg-transparent: hsla(280, 65%, 50%, 0.4);
    --sidebar-bg-hover: hsla(280, 65%, 50%, 0.6);

    /* Favorites */
    --favorite: hsl(340, 80%, 60%);
    --favorite-transparent-1: hsla(340, 80%, 60%, 0.15);
    --favorite-transparent-2: hsla(340, 80%, 60%, 0.25);
    --favorite-border: hsla(340, 80%, 60%, 0.3);

    /* Danger */
    --danger: hsl(0, 100%, 67%);
    --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
    --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
    --danger-border: hsla(0, 100%, 67%, 0.3);

    /* Cards */
    --card: hsl(0, 0%, 100%);
    --card-rgb: 255, 174, 145;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(0, 0%, 100%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(25, 30%, 85%);
    --muted-foreground: hsl(25, 20%, 40%);

    /* Error */
    --error: hsl(358, 75%, 55%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: var(--themecolor);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

    /* Shadows */
    --border: hsl(25, 25%, 90%);
    --shadow: 0 1px 2px hsla(25, 15%, 5%, 0.05),
        0 3px 6px hsla(25, 15%, 5%, 0.07);
    --shadow-md: 0 1px 3px hsla(25, 15%, 5%, 0.05),
        0 10px 15px -5px hsla(25, 15%, 5%, 0.05),
        0 20px 25px -5px hsla(25, 15%, 5%, 0.04);
    --shadow-lg: 0 1px 3px hsla(25, 15%, 5%, 0.05),
        0 20px 25px -5px hsla(25, 15%, 5%, 0.07),
        0 30px 40px -5px hsla(25, 15%, 5%, 0.05);
    --shadow-focus: 0 0 0 2px hsla(15, 85%, 55%, 0.25),
        0 1px 2px hsla(25, 15%, 5%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #2c003e 0%, #32004b 100%);
    --themecolor: hsl(15, 85%, 35%);
    --themecolor2: hsl(280, 65%, 25%);
    --themecolor3: hsl(320, 65%, 30%);
    --themecolor4: hsl(200, 65%, 25%);
    --themecolor1-transparent: hsla(15, 85%, 35%, 0.5);
    --themecolor2-transparent: hsla(320, 65%, 30%, 0.5);
    --themecolor3-transparent: hsla(15, 85%, 35%, 0.5);
    --menu-background: hsla(280, 65%, 40%, 0.25);

    /* Foreground */
    --foreground: hsl(25, 15%, 90%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.9);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(280, 25%, 10%);

    /* Surface */
    --surface: hsl(280, 25%, 13%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary system */
    --primary: hsl(15, 85%, 60%);
    --primary-foreground: hsl(0, 0%, 100%);
    /* Primary Transparent */
    --primary-transparent: hsla(15, 85%, 60%, 0.25);
    --primary-transparent-2: hsla(15, 85%, 60%, 0.15);
    --primary-transparent-3: hsla(15, 85%, 60%, 0.2);
    --primary-transparent-4: hsla(15, 85%, 60%, 0.25);
    --primary-transparent-5: hsla(15, 85%, 60%, 0.3);
    /* Primary Borders */
    --primary-border: hsla(15, 85%, 60%, 0.3);
    --primary-border-strong: hsla(15, 85%, 60%, 0.4);
    --primary-border-stronger: hsla(15, 85%, 60%, 0.5);
    --primary-border-active: hsla(15, 85%, 60%, 0.6);

    /* Secondary */
    --secondary: hsl(320, 65%, 55%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(280, 25%, 15%);
    --sidebar-foreground: hsl(25, 15%, 90%);
    --sidebar-bg-transparent: hsla(320, 65%, 40%, 0.3);
    --sidebar-bg-hover: hsla(320, 65%, 40%, 0.5);

    /* Favorites */
    --favorite: hsl(340, 80%, 65%);
    --favorite-transparent-1: hsla(340, 80%, 65%, 0.15);
    --favorite-transparent-2: hsla(340, 80%, 65%, 0.25);
    --favorite-border: hsla(340, 80%, 65%, 0.3);

    /* Danger */
    --danger: hsl(0, 100%, 67%);
    --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
    --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
    --danger-border: hsla(0, 100%, 67%, 0.3);

    /* Cards */
    --card: hsl(280, 25%, 15%);
    --card-rgb: 189, 85, 146;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(280, 25%, 15%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(280, 20%, 25%);
    --muted-foreground: hsl(280, 10%, 70%);

    /* Error */
    --error: hsl(358, 75%, 60%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(15, 85%, 55%);
    --albumart-gradient: linear-gradient(135deg, #2c003e 0%, #32004b 100%);

    /* Shadows */
    --border: hsl(280, 20%, 20%);
    --shadow: 0 1px 2px hsla(280, 15%, 0%, 0.1),
        0 3px 6px hsla(280, 15%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(280, 15%, 0%, 0.1),
        0 10px 15px -5px hsla(280, 15%, 0%, 0.1),
        0 20px 25px -5px hsla(280, 15%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(280, 15%, 0%, 0.1),
        0 20px 25px -5px hsla(280, 15%, 0%, 0.15),
        0 30px 40px -5px hsla(280, 15%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(15, 85%, 60%, 0.25),
        0 1px 2px hsla(280, 15%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Lumenis.theme-KvkxCsbO.js.map
