const r=`/* Twilight */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg, #9b59b6, #e91e63);
    --themecolor: hsl(290, 60%, 55%);
    --themecolor1: hsl(290, 60%, 45%);
    /* darker than themecolor2 */
    --themecolor2: hsl(290, 60%, 65%);
    --themecolor3: hsl(300, 70%, 60%);
    --themecolor4: hsl(320, 70%, 65%);
    --themecolor1-transparent: hsla(290, 60%, 45%, 0.5);
    --themecolor2-transparent: hsla(290, 60%, 65%, 0.5);
    --themecolor3-transparent: hsla(300, 70%, 60%, 0.5);
    --menu-background: hsla(290, 60%, 65%, 0.35);

    /* Foreground */
    --foreground: hsl(290, 20%, 20%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.8);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(290, 25%, 98%);

    /* Surface */
    --surface: hsl(290, 20%, 96%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(290, 60%, 55%);
    --primary-foreground: hsl(0, 0%, 100%);
    --primary-transparent: hsla(290, 60%, 55%, 0.25);
    --primary-transparent-1: hsla(290, 60%, 55%, 0.1);
    --primary-transparent-2: hsla(290, 60%, 55%, 0.15);
    --primary-transparent-3: hsla(290, 60%, 55%, 0.2);
    --primary-transparent-4: hsla(290, 60%, 55%, 0.3);
    --primary-transparent-5: hsla(290, 60%, 55%, 0.35);
    --primary-border: hsla(290, 60%, 55%, 0.3);
    --primary-border-strong: hsla(290, 60%, 55%, 0.4);
    --primary-border-stronger: hsla(290, 60%, 55%, 0.5);
    --primary-border-active: hsla(290, 60%, 55%, 0.6);

    /* Secondary */
    --secondary: hsl(330, 60%, 65%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(290, 25%, 92%);
    --sidebar-foreground: hsl(290, 20%, 20%);
    --sidebar-bg-transparent: hsla(290, 60%, 65%, 0.4);
    --sidebar-bg-hover: hsla(290, 60%, 65%, 0.6);

    /* Favorites */
    --favorite: hsl(330, 70%, 70%);
    --favorite-transparent-1: hsla(330, 70%, 70%, 0.15);
    --favorite-transparent-2: hsla(330, 70%, 70%, 0.25);
    --favorite-border: hsla(330, 70%, 70%, 0.3);

    /* Danger */
    --danger: hsl(0, 85%, 60%);
    --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
    --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
    --danger-border: hsla(0, 85%, 60%, 0.3);

    /* Cards */
    --card: hsl(290, 25%, 98%);
    --card-rgb: 155, 89, 182;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(290, 25%, 98%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(290, 20%, 85%);
    --muted-foreground: hsl(290, 15%, 40%);

    /* Error */
    --error: hsl(358, 75%, 55%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: var(--themecolor);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

    /* Shadows */
    --border: hsl(290, 20%, 90%);
    --shadow: 0 1px 2px hsla(290, 15%, 5%, 0.05),
        0 3px 6px hsla(290, 15%, 5%, 0.07);
    --shadow-md: 0 1px 3px hsla(290, 15%, 5%, 0.05),
        0 10px 15px -5px hsla(290, 15%, 5%, 0.05),
        0 20px 25px -5px hsla(290, 15%, 5%, 0.04);
    --shadow-lg: 0 1px 3px hsla(290, 15%, 5%, 0.05),
        0 20px 25px -5px hsla(290, 15%, 5%, 0.07),
        0 30px 40px -5px hsla(290, 15%, 5%, 0.05);
    --shadow-focus: 0 0 0 2px hsla(290, 60%, 55%, 0.25),
        0 1px 2px hsla(290, 15%, 5%, 0.05);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg, #4b0082, #c71585);
    --themecolor: hsl(290, 70%, 30%);
    --themecolor1: hsl(290, 75%, 25%);
    /* darker than themecolor2 */
    --themecolor2: hsl(290, 75%, 40%);
    --themecolor3: hsl(300, 80%, 35%);
    --themecolor4: hsl(320, 80%, 40%);
    --themecolor1-transparent: hsla(290, 75%, 25%, 0.5);
    --themecolor2-transparent: hsla(290, 75%, 40%, 0.5);
    --themecolor3-transparent: hsla(300, 80%, 35%, 0.5);
    --menu-background: hsla(290, 75%, 40%, 0.25);

    /* Foreground */
    --foreground: hsl(290, 20%, 95%);
    --foreground-strong: hsla(0, 0%, 100%, 0.8);
    --foreground-stronger: hsla(0, 0%, 100%, 0.9);
    --foreground-muted: hsla(0, 0%, 100%, 0.9);
    --foreground-subtle: hsla(0, 0%, 100%, 0.6);

    /* Background */
    --background: hsl(290, 50%, 10%);

    /* Surface */
    --surface: hsl(290, 45%, 13%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
    --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
    --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

    /* Primary */
    --primary: hsl(290, 75%, 40%);
    --primary-foreground: hsl(0, 0%, 100%);
    --primary-transparent: hsla(290, 70%, 30%, 0.25);
    --primary-transparent-2: hsla(290, 70%, 30%, 0.15);
    --primary-transparent-3: hsla(290, 70%, 30%, 0.2);
    --primary-transparent-4: hsla(290, 70%, 30%, 0.25);
    --primary-transparent-5: hsla(290, 70%, 30%, 0.3);
    --primary-border: hsla(290, 70%, 30%, 0.3);
    --primary-border-strong: hsla(290, 70%, 30%, 0.4);
    --primary-border-stronger: hsla(290, 70%, 30%, 0.5);
    --primary-border-active: hsla(290, 70%, 30%, 0.6);

    /* Secondary */
    --secondary: hsl(330, 70%, 50%);
    --secondary-foreground: hsl(0, 0%, 100%);

    /* Sidebar */
    --sidebar: hsl(290, 40%, 15%);
    --sidebar-foreground: hsl(290, 20%, 95%);
    --sidebar-bg-transparent: hsla(290, 75%, 40%, 0.3);
    --sidebar-bg-hover: hsla(290, 75%, 40%, 0.5);

    /* Favorites */
    --favorite: hsl(330, 70%, 70%);
    --favorite-transparent-1: hsla(330, 70%, 70%, 0.15);
    --favorite-transparent-2: hsla(330, 70%, 70%, 0.25);
    --favorite-border: hsla(330, 70%, 70%, 0.3);

    /* Danger */
    --danger: hsl(0, 85%, 60%);
    --danger-transparent-1: hsla(0, 85%, 60%, 0.15);
    --danger-transparent-2: hsla(0, 85%, 60%, 0.25);
    --danger-border: hsla(0, 85%, 60%, 0.3);

    /* Cards */
    --card: hsl(290, 50%, 15%);
    --card-rgb: 75, 0, 130;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: hsl(290, 50%, 15%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: hsl(290, 40%, 25%);
    --muted-foreground: hsl(290, 35%, 70%);

    /* Error */
    --error: hsl(358, 75%, 55%);
    --error-foreground: hsl(0, 0%, 100%);

    /* Miscellaneous */
    --certain-icons: hsl(290, 75%, 40%);
    --albumart-gradient: linear-gradient(135deg, var(--themecolor1) 0%, var(--themecolor2) 100%);

    /* Shadows */
    --border: hsl(290, 45%, 20%);
    --shadow: 0 1px 2px hsla(290, 45%, 0%, 0.1),
        0 3px 6px hsla(290, 45%, 0%, 0.15);
    --shadow-md: 0 1px 3px hsla(290, 45%, 0%, 0.1),
        0 10px 15px -5px hsla(290, 45%, 0%, 0.1),
        0 20px 25px -5px hsla(290, 45%, 0%, 0.08);
    --shadow-lg: 0 1px 3px hsla(290, 45%, 0%, 0.1),
        0 20px 25px -5px hsla(290, 45%, 0%, 0.15),
        0 30px 40px -5px hsla(290, 45%, 0%, 0.1);
    --shadow-focus: 0 0 0 2px hsla(290, 70%, 25%, 0.25),
        0 1px 2px hsla(290, 45%, 0%, 0.1);
}`;export{r as default};
//# sourceMappingURL=Twilight.theme-BjGCat8L.js.map
