const n=`/* Win95 */
:root {
  /* Theme */
    --themegradient: conic-gradient(
    from 0deg, 
    #00a2ff 0deg 88deg, 
    #4d4d4d 88deg 92deg, 
    #ff1a1a 92deg 178deg, 
    #4d4d4d 178deg 182deg, 
    #00ff00 182deg 268deg, 
    #4d4d4d 268deg 272deg, 
    #ffea00 272deg 358deg, 
    #4d4d4d 358deg 360deg
  );
  --themecolor: hsl(200, 100%, 50%);
  --themecolor2: hsl(50, 100%, 55%);
  --themecolor3: hsl(120, 100%, 40%);
  --themecolor4: hsl(0, 100%, 50%);
  --themecolor1-transparent: hsla(200, 100%, 50%, 0.5);
  --themecolor2-transparent: hsla(50, 100%, 55%, 0.5);
  --themecolor3-transparent: hsla(120, 100%, 40%, 0.5);
  --menu-background: hsla(200, 100%, 50%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 10%);
  --foreground-strong: hsla(0, 0%, 0%, 0.9);
  --foreground-stronger: hsla(0, 0%, 0%, 0.95);
  --foreground-muted: hsla(0, 0%, 16%, 0.824);
  --foreground-subtle: hsla(0, 0%, 4%, 0.871);

  /* Background */
  --background: hsl(0, 0%, 95%);

  /* Surface */
  --surface: hsl(0, 0%, 90%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 0%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 0%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 0%, 0.2);

  /* Primary */
  --primary: hsl(200, 100%, 50%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(200, 100%, 50%, 0.25);
  --primary-transparent-1: hsla(200, 100%, 50%, 0.1);
  --primary-transparent-2: hsla(200, 100%, 50%, 0.15);
  --primary-transparent-3: hsla(200, 100%, 50%, 0.2);
  --primary-transparent-4: hsla(200, 100%, 50%, 0.3);
  --primary-transparent-5: hsla(200, 100%, 50%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(200, 100%, 50%, 0.3);
  --primary-border-strong: hsla(200, 100%, 50%, 0.4);
  --primary-border-stronger: hsla(200, 100%, 50%, 0.5);
  --primary-border-active: hsla(200, 100%, 50%, 0.6);

  /* Secondary */
  --secondary: hsl(50, 100%, 55%);
  --secondary-foreground: hsl(0, 0%, 10%);

  /* Sidebar */
  --sidebar: hsl(0, 0%, 85%);
  --sidebar-foreground: hsl(0, 0%, 10%);
  --sidebar-bg-transparent: hsla(200, 100%, 50%, 0.3);
  --sidebar-bg-hover: hsla(200, 100%, 50%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 100%, 50%);
  --favorite-transparent-1: hsla(0, 100%, 50%, 0.15);
  --favorite-transparent-2: hsla(0, 100%, 50%, 0.25);
  --favorite-border: hsla(0, 100%, 50%, 0.3);

  /* Danger */
  --danger: hsl(340, 85%, 55%);
  --danger-transparent-1: hsla(340, 85%, 55%, 0.15);
  --danger-transparent-2: hsla(340, 85%, 55%, 0.25);
  --danger-border: hsla(340, 85%, 55%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 255, 255, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(0, 0%, 75%);
  --muted-foreground: hsl(0, 0%, 50%);

  /* Error */
  --error: hsl(0, 80%, 50%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --border: hsl(0, 0%, 80%);
  --certain-icons: var(--themecolor);
  --albumart-gradient: radial-gradient(circle at center, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 3px 6px hsla(0, 0%, 0%, 0.07);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.04);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.07),
    0 30px 40px -5px hsla(0, 0%, 0%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(200, 100%, 50%, 0.25),
    0 1px 2px hsla(0, 0%, 0%, 0.05);
  /* Animation */
  --themegradient-animation: rotate 20s linear infinite;
}

.dark {
  /* Theme */
    --themegradient: conic-gradient(
    from 0deg, 
    #0055aa 0deg 88deg, 
    #000 88deg 92deg, 
    #aa0000 92deg 178deg, 
    #000 178deg 182deg, 
    #00aa00 182deg 268deg, 
    #000 268deg 272deg, 
    #ffaa00 272deg 358deg, 
    #000 358deg 360deg
  );
  --themecolor: hsl(200, 80%, 40%);
  --themecolor2: hsl(50, 90%, 45%);
  --themecolor3: hsl(120, 80%, 35%);
  --themecolor4: hsl(0, 80%, 40%);
  --themecolor1-transparent: hsla(200, 80%, 40%, 0.5);
  --themecolor2-transparent: hsla(50, 90%, 45%, 0.5);
  --themecolor3-transparent: hsla(120, 80%, 35%, 0.5);
  --menu-background: hsla(200, 80%, 40%, 0.25);

  /* Foreground */
  --foreground: hsl(0, 0%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.85);
  --foreground-stronger: hsla(0, 0%, 100%, 0.95);
  --foreground-muted: hsla(0, 5%, 17%, 0.7);
  --foreground-subtle: hsla(0, 0%, 18%, 0.749);

  /* Background */
  --background: hsl(0, 0%, 12%);

  /* Surface */
  --surface: hsl(0, 0%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(200, 80%, 40%);
  --primary-foreground: hsl(0, 0%, 0%);
  /* Primary Transparent */
  --primary-transparent: hsla(200, 80%, 40%, 0.25);
  --primary-transparent-2: hsla(200, 80%, 40%, 0.15);
  --primary-transparent-3: hsla(200, 80%, 40%, 0.2);
  --primary-transparent-4: hsla(200, 80%, 40%, 0.25);
  --primary-transparent-5: hsla(200, 80%, 40%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(200, 80%, 40%, 0.3);
  --primary-border-strong: hsla(200, 80%, 40%, 0.4);
  --primary-border-stronger: hsla(200, 80%, 40%, 0.5);
  --primary-border-active: hsla(200, 80%, 40%, 0.6);

  /* Secondary */
  --secondary: hsl(50, 90%, 45%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(0, 0%, 15%);
  --sidebar-foreground: hsl(0, 0%, 90%);
  --sidebar-bg-transparent: hsla(200, 80%, 40%, 0.3);
  --sidebar-bg-hover: hsla(200, 80%, 40%, 0.5);

  /* Favorites */
  --favorite: hsl(0, 80%, 50%);
  --favorite-transparent-1: hsla(0, 80%, 50%, 0.15);
  --favorite-transparent-2: hsla(0, 80%, 50%, 0.25);
  --favorite-border: hsla(0, 80%, 50%, 0.3);

  /* Danger */
  --danger: hsl(340, 75%, 55%);
  --danger-transparent-1: hsla(340, 75%, 55%, 0.15);
  --danger-transparent-2: hsla(340, 75%, 55%, 0.25);
  --danger-border: hsla(340, 75%, 55%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 15%);
  --card-rgb: 25, 25, 25;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(0, 0%, 25%);
  --muted-foreground: hsl(0, 0%, 60%);

  /* Error */
  --error: hsl(0, 75%, 50%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(200, 80%, 40%);
  --albumart-gradient: radial-gradient(circle at center, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --border: hsl(0, 0%, 20%);
  --shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05),
    0 3px 6px hsla(0, 0%, 0%, 0.07);
  --shadow-md: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 10px 15px -5px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.04);
  --shadow-lg: 0 1px 3px hsla(0, 0%, 0%, 0.05),
    0 20px 25px -5px hsla(0, 0%, 0%, 0.07),
    0 30px 40px -5px hsla(0, 0%, 0%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(200, 80%, 40%, 0.25),
    0 1px 2px hsla(0, 0%, 0%, 0.05);

  /* Animation */
  --themegradient-animation: rotate 20s linear infinite;
}

/* Rotation Keyframes */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

body {
  position: relative; /* needed for stacking context */
  margin: 0;
}

body::before {
  content: "";
  position: fixed;
  inset: -50%; /* extend beyond viewport so edges don’t get cut */
  z-index: -1;
  background: var(--themegradient);
  background-blend-mode: normal;
  animation: rotate 20s linear infinite;
  transform-origin: center center;
}`;export{n as default};
//# sourceMappingURL=Win95.theme-BqrvYfBm.js.map
