const n=`/* 50 Shades of Blue */
:root {
  /* Theme */
  --themegradient: linear-gradient(
    to right,
    #000033, #000066, #000099, #0000cc, #0000ff,
    #0011ff, #0022ff, #0033ff, #0044ff, #0055ff,
    #0066ff, #0077ff, #0088ff, #0099ff, #00aaff,
    #00bbff, #00ccff, #00ddff, #00eeff, #00ffff,
    #11f5ff, #22ebff, #33e1ff, #44d7ff, #55cdff,
    #66c3ff, #77b9ff, #88afff, #999fff, #aaaaff,
    #bbbbff, #ccccff, #ddddff, #eeeeff, #f0f0ff,
    #d0e0ff, #a0c0ff, #70a0ff, #4080ff, #1060ff,
    #003fff, #002fff, #001fff, #0010ff, #0008ff,
    #0000ff, #0000ee, #0000dd, #0000cc, #0000bb
  );
  --themecolor: hsl(200, 100%, 60%);
  --themecolor2: hsl(220, 100%, 40%);
  --themecolor3: hsl(195, 100%, 65%);
  --themecolor4: hsl(220, 80%, 35%);
  --themecolor1-transparent: hsla(200, 100%, 60%, 0.5);
  --themecolor2-transparent: hsla(220, 100%, 40%, 0.5);
  --themecolor3-transparent: hsla(195, 100%, 65%, 0.5);
  --menu-background: hsla(220, 100%, 40%, 0.35);

  /* Foreground */
  --foreground: hsl(220, 20%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(220, 30%, 95%);

  /* Surface */
  --surface: hsl(220, 25%, 93%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(220, 25%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(200, 100%, 60%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(200, 100%, 60%, 0.25);
  --primary-transparent-1: hsla(200, 100%, 60%, 0.1);
  --primary-transparent-2: hsla(200, 100%, 60%, 0.15);
  --primary-transparent-3: hsla(200, 100%, 60%, 0.2);
  --primary-transparent-4: hsla(200, 100%, 60%, 0.3);
  --primary-transparent-5: hsla(200, 100%, 60%, 0.35);
  /* Primary Borders */
  --primary-border: hsla(200, 100%, 60%, 0.3);
  --primary-border-strong: hsla(200, 100%, 60%, 0.4);
  --primary-border-stronger: hsla(200, 100%, 60%, 0.5);
  --primary-border-active: hsla(200, 100%, 60%, 0.6);

  /* Secondary */
  --secondary: hsl(220, 100%, 40%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(220, 60%, 30%);
  --sidebar-foreground: hsl(220, 20%, 95%);
  --sidebar-bg-transparent: hsla(220, 100%, 40%, 0.4);
  --sidebar-bg-hover: hsla(220, 100%, 40%, 0.6);

  /* Favorites */
  --favorite: hsl(240, 20%, 80%);
  --favorite-transparent-1: hsla(240, 20%, 80%, 0.15);
  --favorite-transparent-2: hsla(240, 20%, 80%, 0.25);
  --favorite-border: hsla(240, 20%, 80%, 0.3);

  /* Danger */
  --danger: hsl(0, 80%, 60%);
  --danger-transparent-1: hsla(0, 80%, 60%, 0.15);
  --danger-transparent-2: hsla(0, 80%, 60%, 0.25);
  --danger-border: hsla(0, 80%, 60%, 0.3);

  /* Cards */
  --card: hsl(0, 0%, 100%);
  --card-rgb: 204, 204, 255;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(0, 0%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(220, 20%, 80%);
  --muted-foreground: hsl(220, 15%, 35%);

  /* Error */
  --error: hsl(0, 70%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(
    to right,
    #000033, #000066, #000099, #0000cc, #0000ff,
    #0011ff, #0022ff, #0033ff, #0044ff, #0055ff,
    #0066ff, #0077ff, #0088ff, #0099ff, #00aaff,
    #00bbff, #00ccff, #00ddff, #00eeff, #00ffff,
    #11f5ff, #22ebff, #33e1ff, #44d7ff, #55cdff,
    #66c3ff, #77b9ff, #88afff, #999fff, #aaaaff,
    #bbbbff, #ccccff, #ddddff, #eeeeff, #f0f0ff,
    #d0e0ff, #a0c0ff, #70a0ff, #4080ff, #1060ff,
    #003fff, #002fff, #001fff, #0010ff, #0008ff,
    #0000ff, #0000ee, #0000dd, #0000cc, #0000bb
  );

  /* Shadows */
  --border: hsl(220, 20%, 85%);
  --shadow: 0 1px 2px hsla(220, 20%, 5%, 0.05),
    0 3px 6px hsla(220, 20%, 5%, 0.07);
  --shadow-md: 0 1px 3px hsla(220, 20%, 5%, 0.05),
    0 10px 15px -5px hsla(220, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(220, 20%, 5%, 0.04);
  --shadow-lg: 0 1px 3px hsla(220, 20%, 5%, 0.05),
    0 20px 25px -5px hsla(220, 20%, 5%, 0.07),
    0 30px 40px -5px hsla(220, 20%, 5%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(200, 100%, 60%, 0.25),
    0 1px 2px hsla(220, 20%, 5%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(
    to right,
    #000033, #000044, #000055, #000066, #000077,
    #000088, #000099, #0000aa, #0000bb, #0000cc,
    #0010dd, #0011ee, #0022ff, #0033ff, #0044ff,
    #0055ff, #0066ff, #0077ff, #0088ff, #0099ff,
    #00aaff, #00bbff, #00ccff, #00ddff, #00eeff,
    #00f5ff, #00ebff, #00e1ff, #00d7ff, #00cdff,
    #00c3ff, #00b9ff, #00afff, #009fff, #008fff,
    #007fff, #006fff, #005fff, #004fff, #003fff,
    #002fff, #001fff, #0010ff, #0008ff, #0000ff,
    #0000ee, #0000dd, #0000cc, #0000bb, #0000aa
  );
  --themecolor: hsl(200, 80%, 35%);
  --themecolor2: hsl(220, 80%, 25%);
  --themecolor3: hsl(195, 80%, 40%);
  --themecolor4: hsl(220, 70%, 20%);
  --themecolor1-transparent: hsla(200, 80%, 35%, 0.5);
  --themecolor2-transparent: hsla(220, 80%, 25%, 0.5);
  --themecolor3-transparent: hsla(195, 80%, 40%, 0.5);
  --menu-background: hsla(220, 80%, 25%, 0.25);

  /* Foreground */
  --foreground: hsl(220, 20%, 85%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(220, 30%, 12%);

  /* Surface */
  --surface: hsl(220, 25%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(200, 80%, 35%);
  --primary-foreground: hsl(0, 0%, 100%);
  /* Primary Transparent */
  --primary-transparent: hsla(200, 80%, 35%, 0.25);
  --primary-transparent-2: hsla(200, 80%, 35%, 0.15);
  --primary-transparent-3: hsla(200, 80%, 35%, 0.2);
  --primary-transparent-4: hsla(200, 80%, 35%, 0.25);
  --primary-transparent-5: hsla(200, 80%, 35%, 0.3);
  /* Primary Borders */
  --primary-border: hsla(200, 80%, 35%, 0.3);
  --primary-border-strong: hsla(200, 80%, 35%, 0.4);
  --primary-border-stronger: hsla(200, 80%, 35%, 0.5);
  --primary-border-active: hsla(200, 80%, 35%, 0.6);

  /* Secondary */
  --secondary: hsl(220, 80%, 25%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(220, 50%, 15%);
  --sidebar-foreground: hsl(220, 20%, 90%);
  --sidebar-bg-transparent: hsla(220, 80%, 25%, 0.3);
  --sidebar-bg-hover: hsla(220, 80%, 25%, 0.5);

  /* Favorites */
  --favorite: hsl(240, 15%, 70%);
  --favorite-transparent-1: hsla(240, 15%, 70%, 0.15);
  --favorite-transparent-2: hsla(240, 15%, 70%, 0.25);
  --favorite-border: hsla(240, 15%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 70%, 50%);
  --danger-transparent-1: hsla(0, 70%, 50%, 0.15);
  --danger-transparent-2: hsla(0, 70%, 50%, 0.25);
  --danger-border: hsla(0, 70%, 50%, 0.3);

  /* Cards */
  --card: hsl(220, 25%, 15%);
  --card-rgb: 0, 0, 102;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(220, 25%, 15%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(220, 20%, 25%);
  --muted-foreground: hsl(220, 15%, 65%);

  /* Error */
  --error: hsl(0, 65%, 45%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(200, 80%, 35%);
  --albumart-gradient: linear-gradient(
    to right,
    #000033, #000044, #000055, #000066, #000077,
    #000088, #000099, #0000aa, #0000bb, #0000cc,
    #0010dd, #0011ee, #0022ff, #0033ff, #0044ff,
    #0055ff, #0066ff, #0077ff, #0088ff, #0099ff,
    #00aaff, #00bbff, #00ccff, #00ddff, #00eeff,
    #00f5ff, #00ebff, #00e1ff, #00d7ff, #00cdff,
    #00c3ff, #00b9ff, #00afff, #009fff, #008fff,
    #007fff, #006fff, #005fff, #004fff, #003fff,
    #002fff, #001fff, #0010ff, #0008ff, #0000ff,
    #0000ee, #0000dd, #0000cc, #0000bb, #0000aa
  );

  /* Shadows */
  --border: hsl(220, 20%, 20%);
  --shadow: 0 1px 2px hsla(220, 20%, 0%, 0.1),
    0 3px 6px hsla(220, 20%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(220, 20%, 0%, 0.1),
    0 10px 15px -5px hsla(220, 20%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 20%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(220, 20%, 0%, 0.1),
    0 20px 25px -5px hsla(220, 20%, 0%, 0.15),
    0 30px 40px -5px hsla(220, 20%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(200, 80%, 35%, 0.25),
    0 1px 2px hsla(220, 20%, 0%, 0.1);
}`;export{n as default};
//# sourceMappingURL=50Shades.theme-CZFrAgS4.js.map
