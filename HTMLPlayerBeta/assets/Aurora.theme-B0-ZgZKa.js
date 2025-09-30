const r=`/* Aurora */
:root {
    /* Theme */
    --themegradient: linear-gradient(135deg in oklab, color-mix(in oklab, #00ff87 70%, #ff0080 30%), color-mix(in oklab, #0080ff 60%, #ff4000 40%));
    --themecolor: color-mix(in oklab, #00ff87 80%, #ffffff 20%);
    --themecolor2: color-mix(in oklab, #0080ff 75%, #000000 25%);
    --themecolor3: color-mix(in oklab, #00ffaa 70%, #0066ff 30%);
    --themecolor4: color-mix(in oklab, #0099ff 65%, #ff0066 35%);
    --themecolor1-transparent: color-mix(in oklab, transparent 50%, #00ff87);
    --themecolor2-transparent: color-mix(in oklab, transparent 50%, #0080ff);
    --themecolor3-transparent: color-mix(in oklab, transparent 50%, #00ffaa);
    --menu-background: color-mix(in oklab, transparent 65%, #0080ff);

    /* Foreground */
    --foreground: light-dark(color-mix(in oklab, #1a1a2e 90%, #00ff87 10%), color-mix(in oklab, #f0f8ff 95%, #00ff87 5%));
    --foreground-strong: color-mix(in oklch, #2a2a4e 80%, #ffffff 20%);
    --foreground-stronger: color-mix(in oklch, #3a3a6e 70%, #ffffff 30%);
    --foreground-muted: color-mix(in oklch, #4a4a8e 60%, #ffffff 40%);
    --foreground-subtle: color-mix(in oklch, #6a6aae 40%, #ffffff 60%);

    /* Background */
    --background: conic-gradient(from 0deg at 50% 100%, color-mix(in oklab, #fafcff 95%, #00ff87 5%), color-mix(in oklab, #f8faff 95%, #0080ff 5%));

    /* Surface */
    --surface: color-mix(in oklab, #f5f9ff 90%, #00ffaa 10%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: color-mix(in oklab, transparent 95%, #ffffff);
    --surface-transparent-1: color-mix(in oklab, transparent 90%, #f0f8ff);
    --surface-transparent-2: color-mix(in oklab, transparent 80%, #ffffff);

    /* Primary */
    --primary: oklch(70% 0.15 180);
    --primary-foreground: oklch(98% 0.02 180);
    /* Primary Transparent */
    --primary-transparent: color-mix(in oklab, transparent 75%, oklch(70% 0.15 180));
    --primary-transparent-1: color-mix(in oklab, transparent 90%, oklch(70% 0.15 180));
    --primary-transparent-2: color-mix(in oklab, transparent 85%, oklch(70% 0.15 180));
    --primary-transparent-3: color-mix(in oklab, transparent 80%, oklch(70% 0.15 180));
    --primary-transparent-4: color-mix(in oklab, transparent 70%, oklch(70% 0.15 180));
    --primary-transparent-5: color-mix(in oklab, transparent 65%, oklch(70% 0.15 180));
    /* Primary Borders */
    --primary-border: color-mix(in oklab, transparent 70%, oklch(70% 0.15 180));
    --primary-border-strong: color-mix(in oklab, transparent 60%, oklch(70% 0.15 180));
    --primary-border-stronger: color-mix(in oklab, transparent 50%, oklch(70% 0.15 180));
    --primary-border-active: color-mix(in oklab, transparent 40%, oklch(70% 0.15 180));

    /* Secondary */
    --secondary: oklch(65% 0.18 320);
    --secondary-foreground: oklch(98% 0.02 320);

    /* Sidebar */
    --sidebar: color-mix(in oklab, #e6f3ff 85%, #00ff87 15%);
    --sidebar-foreground: color-mix(in oklab, #1a1a2e 85%, #0080ff 15%);
    --sidebar-bg-transparent: color-mix(in oklab, transparent 60%, #00ff87);
    --sidebar-bg-hover: color-mix(in oklab, transparent 40%, #0080ff);

    /* Favorites */
    --favorite: oklch(70% 0.2 30);
    --favorite-transparent-1: color-mix(in oklab, transparent 85%, oklch(70% 0.2 30));
    --favorite-transparent-2: color-mix(in oklab, transparent 75%, oklch(70% 0.2 30));
    --favorite-border: color-mix(in oklab, transparent 70%, oklch(70% 0.2 30));

    /* Danger */
    --danger: oklch(65% 0.22 15);
    --danger-transparent-1: color-mix(in oklab, transparent 85%, oklch(65% 0.22 15));
    --danger-transparent-2: color-mix(in oklab, transparent 75%, oklch(65% 0.22 15));
    --danger-border: color-mix(in oklab, transparent 70%, oklch(65% 0.22 15));

    /* Cards */
    --card: hsl(210, 35%, 95%);
    --card-rgb: 120, 180, 220;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: color-mix(in oklab, #ffffff 90%, #00ffaa 10%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: color-mix(in oklab, #e8f4ff 80%, #00ff87 20%);
    --muted-foreground: color-mix(in oklab, #4a5568 70%, #0080ff 30%);

    /* Error */
    --error: oklch(62% 0.21 25);
    --error-foreground: oklch(98% 0.02 25);

    /* Miscellaneous */
    --border: color-mix(in oklab, #d1e7ff 70%, #00ff87 30%);
    --certain-icons: color-mix(in oklab, #00ff87 70%, #0080ff 30%);
    --albumart-gradient: conic-gradient(from 45deg, color-mix(in oklab, #00ff87 80%, #ffffff 20%) 0%, color-mix(in oklab, #0080ff 80%, #ffffff 20%) 100%);

    /* Shadows */
    --shadow: 0 1px 2px color-mix(in oklab, transparent 95%, #00ff87),
        0 3px 6px color-mix(in oklab, transparent 93%, #0080ff);
    --shadow-md: 0 1px 3px color-mix(in oklab, transparent 95%, #00ff87),
        0 10px 15px -5px color-mix(in oklab, transparent 95%, #0080ff),
        0 20px 25px -5px color-mix(in oklab, transparent 96%, #00ffaa);
    --shadow-lg: 0 1px 3px color-mix(in oklab, transparent 95%, #00ff87),
        0 20px 25px -5px color-mix(in oklab, transparent 93%, #0080ff),
        0 30px 40px -5px color-mix(in oklab, transparent 95%, #00ffaa);
    --shadow-focus: 0 0 0 2px color-mix(in oklab, transparent 75%, oklch(70% 0.15 180)),
        0 1px 2px color-mix(in oklab, transparent 95%, #00ff87);
}

.dark {
    /* Theme */
    --themegradient: linear-gradient(135deg in oklab, color-mix(in oklab, #003d1a 80%, #00ff87 20%), color-mix(in oklab, #001a33 80%, #0080ff 20%));
    --themecolor: color-mix(in oklab, #00cc6a 70%, #000000 30%);
    --themecolor2: color-mix(in oklab, #0066cc 70%, #ffffff 30%);
    --themecolor3: color-mix(in oklab, #00cc88 65%, #003366 35%);
    --themecolor4: color-mix(in oklab, #0077cc 65%, #cc0044 35%);
    --themecolor1-transparent: color-mix(in oklab, transparent 50%, #00cc6a);
    --themecolor2-transparent: color-mix(in oklab, transparent 50%, #0066cc);
    --themecolor3-transparent: color-mix(in oklab, transparent 50%, #00cc88);
    --menu-background: color-mix(in oklab, transparent 75%, #0066cc);

    /* Foreground */
    --foreground: light-dark(color-mix(in oklab, #f0f8ff 95%, #00ff87 5%), color-mix(in oklab, #1a1a2e 90%, #00ff87 10%));
    --foreground-strong: color-mix(in oklch, #e6f3ff 80%, #000000 20%);
    --foreground-stronger: color-mix(in oklch, #ddeeff 70%, #000000 30%);
    --foreground-muted: color-mix(in oklch, #ebf2ff 60%, #868686 40%);
    --foreground-subtle: color-mix(in oklch, #e5f0ff 40%, #888888 60%);

    /* Background */
    --background: conic-gradient(from 180deg at 50% 0%, color-mix(in oklab, #0a0f1a 95%, #00ff87 5%), color-mix(in oklab, #0f0a1a 95%, #0080ff 5%));

    /* Surface */
    --surface: color-mix(in oklab, #1a1f2a 90%, #00cc88 10%);
    --surface-foreground: var(--foreground);
    --surface-transparent-05: color-mix(in oklab, transparent 95%, #000000);
    --surface-transparent-1: color-mix(in oklab, transparent 90%, #0f1419);
    --surface-transparent-2: color-mix(in oklab, transparent 80%, #000000);

    /* Primary */
    --primary: oklch(75% 0.12 200);
    --primary-foreground: oklch(92.406% 0.03699 278.946);
    /* Primary Transparent */
    --primary-transparent: color-mix(in oklab, transparent 75%, oklch(75% 0.12 200));
    --primary-transparent-2: color-mix(in oklab, transparent 85%, oklch(75% 0.12 200));
    --primary-transparent-3: color-mix(in oklab, transparent 80%, oklch(75% 0.12 200));
    --primary-transparent-4: color-mix(in oklab, transparent 75%, oklch(75% 0.12 200));
    --primary-transparent-5: color-mix(in oklab, transparent 70%, oklch(75% 0.12 200));
    /* Primary Borders */
    --primary-border: color-mix(in oklab, transparent 70%, oklch(75% 0.12 200));
    --primary-border-strong: color-mix(in oklab, transparent 60%, oklch(75% 0.12 200));
    --primary-border-stronger: color-mix(in oklab, transparent 50%, oklch(75% 0.12 200));
    --primary-border-active: color-mix(in oklab, transparent 40%, oklch(75% 0.12 200));

    /* Secondary */
    --secondary: oklch(70% 0.16 340);
    --secondary-foreground: oklch(15% 0.02 340);

    /* Sidebar */
    --sidebar: color-mix(in oklab, #141922 85%, #00cc6a 15%);
    --sidebar-foreground: color-mix(in oklab, #e6f3ff 85%, #0066cc 15%);
    --sidebar-bg-transparent: color-mix(in oklab, transparent 70%, #00cc6a);
    --sidebar-bg-hover: color-mix(in oklab, transparent 50%, #0066cc);

    /* Favorites */
    --favorite: oklch(75% 0.18 35);
    --favorite-transparent-1: color-mix(in oklab, transparent 85%, oklch(75% 0.18 35));
    --favorite-transparent-2: color-mix(in oklab, transparent 75%, oklch(75% 0.18 35));
    --favorite-border: color-mix(in oklab, transparent 70%, oklch(75% 0.18 35));

    /* Danger */
    --danger: oklch(70% 0.20 20);
    --danger-transparent-1: color-mix(in oklab, transparent 85%, oklch(70% 0.20 20));
    --danger-transparent-2: color-mix(in oklab, transparent 75%, oklch(70% 0.20 20));
    --danger-border: color-mix(in oklab, transparent 70%, oklch(70% 0.20 20));

    /* Cards */
    --card: hsl(220, 25%, 18%);
    --card-rgb: 50, 120, 180;
    --card-foreground: var(--foreground);

    /* Popups */
    --popup: color-mix(in oklab, #1a1f2a 90%, #00cc88 10%);
    --popup-foreground: var(--foreground);

    /* Muted */
    --muted: color-mix(in oklab, #2a3341 80%, #00cc6a 20%);
    --muted-foreground: color-mix(in oklab, #a0b4cc 70%, #0066cc 30%);

    /* Error */
    --error: oklch(67% 0.19 30);
    --error-foreground: oklch(15% 0.02 30);

    /* Miscellaneous */
    --border: color-mix(in oklab, #2a3341 70%, #00cc6a 30%);
    --certain-icons: color-mix(in oklab, #00cc6a 70%, #0066cc 30%);
    --albumart-gradient: conic-gradient(from 225deg, color-mix(in oklab, #003d1a 80%, #000000 20%) 0%, color-mix(in oklab, #001a33 80%, #000000 20%) 100%);

    /* Shadows */
    --shadow: 0 1px 2px color-mix(in oklab, transparent 90%, #000000),
        0 3px 6px color-mix(in oklab, transparent 85%, #00cc6a);
    --shadow-md: 0 1px 3px color-mix(in oklab, transparent 90%, #000000),
        0 10px 15px -5px color-mix(in oklab, transparent 90%, #00cc6a),
        0 20px 25px -5px color-mix(in oklab, transparent 92%, #0066cc);
    --shadow-lg: 0 1px 3px color-mix(in oklab, transparent 90%, #000000),
        0 20px 25px -5px color-mix(in oklab, transparent 85%, #00cc6a),
        0 30px 40px -5px color-mix(in oklab, transparent 90%, #0066cc);
    --shadow-focus: 0 0 0 2px color-mix(in oklab, transparent 75%, oklch(75% 0.12 200)),
        0 1px 2px color-mix(in oklab, transparent 90%, #000000);
}`;export{r as default};
//# sourceMappingURL=Aurora.theme-B0-ZgZKa.js.map
