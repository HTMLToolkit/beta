const n=`/* Drones */
:root {
  /* Theme */
  --themegradient: url("MurderDrones.jpg");
  --themecolor: hsl(262, 90%, 68%);
  --themecolor2: hsl(280, 95%, 75%);
  --themecolor3: hsl(245, 85%, 65%);
  --themecolor4: hsl(290, 88%, 70%);
  --themecolor1-transparent: hsla(262, 90%, 68%, 0.5);
  --themecolor2-transparent: hsla(280, 95%, 75%, 0.5);
  --themecolor3-transparent: hsla(245, 85%, 65%, 0.5);
  --menu-background: hsla(262, 90%, 68%, 0.25);

  /* Foreground */
  --foreground: hsl(256, 20%, 15%);
  --foreground-strong: hsla(255, 25%, 15%, 0.9);
  --foreground-stronger: hsla(255, 25%, 10%, 0.95);
  --foreground-muted: hsla(0, 0%, 0%, 0.7);
  --foreground-subtle: hsla(0, 0%, 0%, 0.675);

  /* Background */
  --background: hsl(250, 20%, 98%);

  /* Surface */
  --surface: hsl(250, 15%, 96%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(255, 50%, 95%, 0.05);
  --surface-transparent-1: hsla(255, 45%, 90%, 0.1);
  --surface-transparent-2: hsla(255, 40%, 85%, 0.2);

  /* Primary */
  --primary: hsl(262, 85%, 58%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(262, 90%, 68%, 0.25);
  --primary-transparent-1: hsla(262, 90%, 68%, 0.1);
  --primary-transparent-2: hsla(262, 90%, 68%, 0.15);
  --primary-transparent-3: hsla(262, 90%, 68%, 0.2);
  --primary-transparent-4: hsla(262, 90%, 68%, 0.3);
  --primary-transparent-5: hsla(262, 90%, 68%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(262, 90%, 68%, 0.3);
  --primary-border-strong: hsla(262, 90%, 68%, 0.4);
  --primary-border-stronger: hsla(262, 90%, 68%, 0.5);
  --primary-border-active: hsla(262, 90%, 68%, 0.6);

  /* Secondary */
  --secondary: hsl(280, 85%, 65%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(255, 25%, 92%);
  --sidebar-foreground: hsl(255, 15%, 20%);
  --sidebar-bg-transparent: hsla(262, 90%, 68%, 0.3);
  --sidebar-bg-hover: hsla(262, 90%, 68%, 0.5);

  /* Favorites */
  --favorite: hsl(325, 85%, 65%);
  --favorite-transparent-1: hsla(325, 85%, 65%, 0.15);
  --favorite-transparent-2: hsla(325, 85%, 65%, 0.25);
  --favorite-border: hsla(325, 85%, 65%, 0.3);

  /* Danger */
  --danger: hsl(340, 75%, 60%);
  --danger-transparent-1: hsla(340, 75%, 60%, 0.15);
  --danger-transparent-2: hsla(340, 75%, 60%, 0.25);
  --danger-border: hsla(340, 75%, 60%, 0.3);

  /* Cards */
  --card: hsla(255, 80%, 98%, 0.8);
  --card-rgb: 245, 242, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsla(255, 80%, 98%, 0.95);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(255, 20%, 85%);
  --muted-foreground: hsl(255, 15%, 40%);

  /* Error */
  --error: hsl(0, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --border: hsl(255, 20%, 90%);
  --certain-icons: var(--themecolor);
  --albumart-gradient: radial-gradient(
    circle at center,
    var(--themecolor2) 0%,
    var(--themecolor3) 100%
  );

  /* Shadows */
  --shadow: 0 1px 2px hsla(255, 30%, 15%, 0.05),
    0 3px 6px hsla(255, 30%, 15%, 0.07);
  --shadow-md: 0 1px 3px hsla(255, 30%, 15%, 0.05),
    0 10px 15px -5px hsla(255, 30%, 15%, 0.05),
    0 20px 25px -5px hsla(255, 30%, 15%, 0.04);
  --shadow-lg: 0 1px 3px hsla(255, 30%, 15%, 0.05),
    0 20px 25px -5px hsla(255, 30%, 15%, 0.07),
    0 30px 40px -5px hsla(255, 30%, 15%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(262, 85%, 58%, 0.25),
    0 1px 2px hsla(255, 30%, 15%, 0.05);
  /* Animation */
  --themegradient-animation: rotate 20s linear infinite;
}

.dark {
  /* Theme */
  --themegradient: url("MurderDrones.jpg");
  --themecolor: hsl(262, 75%, 55%);
  --themecolor2: hsl(280, 80%, 60%);
  --themecolor3: hsl(245, 70%, 50%);
  --themecolor4: hsl(290, 75%, 55%);
  --themecolor1-transparent: hsla(262, 75%, 55%, 0.5);
  --themecolor2-transparent: hsla(280, 80%, 60%, 0.5);
  --themecolor3-transparent: hsla(245, 70%, 50%, 0.5);
  --menu-background: hsla(262, 75%, 55%, 0.25);

  /* Foreground */
  --foreground: hsl(255, 20%, 90%);
  --foreground-strong: hsla(255, 25%, 100%, 0.85);
  --foreground-stronger: hsla(255, 25%, 100%, 0.95);
  --foreground-muted: hsla(0, 0%, 100%, 0.953);
  --foreground-subtle: hsla(0, 0%, 100%, 0.877);

  /* Background */
  --background: hsl(255, 25%, 8%);

  /* Surface */
  --surface: hsl(255, 20%, 12%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(255, 50%, 100%, 0.05);
  --surface-transparent-1: hsla(255, 45%, 100%, 0.1);
  --surface-transparent-2: hsla(255, 40%, 100%, 0.2);

  /* Primary */
  --primary: hsl(262, 75%, 60%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(262, 75%, 55%, 0.25);
  --primary-transparent-1: hsla(262, 75%, 55%, 0.1);
  --primary-transparent-2: hsla(262, 75%, 55%, 0.15);
  --primary-transparent-3: hsla(262, 75%, 55%, 0.2);
  --primary-transparent-4: hsla(262, 75%, 55%, 0.25);
  --primary-transparent-5: hsla(262, 75%, 55%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(262, 75%, 55%, 0.3);
  --primary-border-strong: hsla(262, 75%, 55%, 0.4);
  --primary-border-stronger: hsla(262, 75%, 55%, 0.5);
  --primary-border-active: hsla(262, 75%, 55%, 0.6);

  /* Secondary */
  --secondary: hsl(280, 75%, 65%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(255, 25%, 10%);
  --sidebar-foreground: hsl(255, 20%, 90%);
  --sidebar-bg-transparent: hsla(262, 75%, 55%, 0.3);
  --sidebar-bg-hover: hsla(262, 75%, 55%, 0.5);

  /* Favorites */
  --favorite: hsl(325, 75%, 60%);
  --favorite-transparent-1: hsla(325, 75%, 60%, 0.15);
  --favorite-transparent-2: hsla(325, 75%, 60%, 0.25);
  --favorite-border: hsla(325, 75%, 60%, 0.3);

  /* Danger */
  --danger: hsl(340, 70%, 65%);
  --danger-transparent-1: hsla(340, 70%, 65%, 0.15);
  --danger-transparent-2: hsla(340, 70%, 65%, 0.25);
  --danger-border: hsla(340, 70%, 65%, 0.3);

  /* Cards */
  --card: hsla(255, 30%, 12%, 0.8);
  --card-rgb: 25, 20, 45;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsla(255, 30%, 12%, 0.95);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(255, 20%, 25%);
  --muted-foreground: hsl(255, 15%, 70%);

  /* Error */
  --error: hsl(0, 70%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(262, 75%, 55%);
  --albumart-gradient: radial-gradient(
    circle at center,
    var(--themecolor2) 0%,
    var(--themecolor3) 100%
  );

  /* Shadows */
  --border: hsl(255, 20%, 20%);
  --shadow: 0 1px 2px hsla(255, 30%, 0%, 0.1),
    0 3px 6px hsla(255, 30%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(255, 30%, 0%, 0.1),
    0 10px 15px -5px hsla(255, 30%, 0%, 0.1),
    0 20px 25px -5px hsla(255, 30%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(255, 30%, 0%, 0.1),
    0 20px 25px -5px hsla(255, 30%, 0%, 0.15),
    0 30px 40px -5px hsla(255, 30%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(262, 75%, 60%, 0.25),
    0 1px 2px hsla(255, 30%, 0%, 0.1);

  /* Animation */
  --themegradient-animation: rotate 20s linear infinite;
}

/* Rotation Keyframes */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

body::before {
  animation: var(--themegradient-animation) !important;
}
`;export{n as default};
//# sourceMappingURL=Drones.theme-DoGhqShd.js.map
