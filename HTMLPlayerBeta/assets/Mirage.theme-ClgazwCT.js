const r=`/* Mirage */
:root {
  /* Theme */
  --themegradient: linear-gradient(135deg, #ff9a8b, #ff6a88);
  --themecolor2: hsl(25, 90%, 50%);
  --themecolor2: hsl(15, 100%, 60%);
  --themecolor3: hsl(35, 85%, 55%);
  --themecolor4: hsl(45, 75%, 50%);
  --themecolor1-transparent: hsla(15, 100%, 60%, 0.5);
  --themecolor2-transparent: hsla(25, 90%, 50%, 0.5);
  --themecolor3-transparent: hsla(35, 85%, 55%, 0.5);
  --menu-background: hsla(25, 90%, 50%, 0.35);

  /* Foreground */
  --foreground: hsl(210, 15%, 20%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.8);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(30, 40%, 98%);

  /* Surface */
  --surface: hsl(30, 30%, 95%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 38%, 85%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary */
  --primary: hsl(20, 90%, 55%);
  --primary-foreground: hsl(0, 0%, 100%);
  --primary-transparent: hsla(15, 100%, 60%, 0.25);
  --primary-transparent-1: hsla(15, 100%, 60%, 0.1);
  --primary-transparent-2: hsla(15, 100%, 60%, 0.15);
  --primary-transparent-3: hsla(15, 100%, 60%, 0.2);
  --primary-transparent-4: hsla(15, 100%, 60%, 0.3);
  --primary-transparent-5: hsla(15, 100%, 60%, 0.35);
  --primary-border: hsla(15, 100%, 60%, 0.3);
  --primary-border-strong: hsla(15, 100%, 60%, 0.4);
  --primary-border-stronger: hsla(15, 100%, 60%, 0.5);
  --primary-border-active: hsla(15, 100%, 60%, 0.6);

  /* Secondary */
  --secondary: hsl(340, 70%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(30, 30%, 85%);
  --sidebar-foreground: hsl(210, 15%, 20%);
  --sidebar-bg-transparent: hsla(25, 90%, 50%, 0.4);
  --sidebar-bg-hover: hsla(25, 90%, 50%, 0.6);

  /* Favorites */
  --favorite: hsl(5, 100%, 70%);
  --favorite-transparent-1: hsla(5, 100%, 70%, 0.15);
  --favorite-transparent-2: hsla(5, 100%, 70%, 0.25);
  --favorite-border: hsla(5, 100%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(30, 35%, 100%);
  --card-rgb: 255, 154, 139;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(30, 35%, 100%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(30, 20%, 85%);
  --muted-foreground: hsl(30, 15%, 40%);

  /* Error */
  --error: hsl(358, 75%, 55%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --border: hsl(30, 15%, 90%);
  --certain-icons: var(--themecolor);
  --albumart-gradient: linear-gradient(135deg, var(--themecolor2) 0%, var(--themecolor3) 100%);

  /* Shadows */
  --shadow: 0 1px 2px hsla(15, 100%, 0%, 0.05),
    0 3px 6px hsla(15, 100%, 0%, 0.07);
  --shadow-md: 0 1px 3px hsla(15, 100%, 0%, 0.05),
    0 10px 15px -5px hsla(15, 100%, 0%, 0.05),
    0 20px 25px -5px hsla(15, 100%, 0%, 0.04);
  --shadow-lg: 0 1px 3px hsla(15, 100%, 0%, 0.05),
    0 20px 25px -5px hsla(15, 100%, 0%, 0.07),
    0 30px 40px -5px hsla(15, 100%, 0%, 0.05);
  --shadow-focus: 0 0 0 2px hsla(20, 90%, 55%, 0.25),
    0 1px 2px hsla(15, 100%, 0%, 0.05);
}

.dark {
  /* Theme */
  --themegradient: linear-gradient(135deg, #3b0a45, #6a0572);
  --themecolor: hsl(300, 50%, 22%);
  --themecolor4: hsl(310, 71%, 25%);
  --themecolor3: hsl(320, 85%, 18%);
  --themecolor4: hsl(290, 66%, 25%);
  --themecolor1-transparent: hsla(290, 66%, 25%, 0.5);
  --themecolor2-transparent: hsla(300, 50%, 22%, 0.5);
  --themecolor3-transparent: hsla(320, 85%, 18%, 0.5);
  --menu-background: hsla(300, 50%, 22%, 0.25);

  /* Foreground */
  --foreground: hsl(220, 15%, 90%);
  --foreground-strong: hsla(0, 0%, 100%, 0.8);
  --foreground-stronger: hsla(0, 0%, 100%, 0.9);
  --foreground-muted: hsla(0, 0%, 100%, 0.9);
  --foreground-subtle: hsla(0, 0%, 100%, 0.6);

  /* Background */
  --background: hsl(290, 50%, 12%);

  /* Surface */
  --surface: hsl(290, 50%, 15%);
  --surface-foreground: var(--foreground);
  --surface-transparent-05: hsla(0, 0%, 100%, 0.05);
  --surface-transparent-1: hsla(0, 0%, 100%, 0.1);
  --surface-transparent-2: hsla(0, 0%, 100%, 0.2);

  /* Primary system */
  --primary: hsl(290, 70%, 45%);
  --primary-foreground: hsl(0, 0%, 100%);
  --primary-transparent: hsla(290, 66%, 25%, 0.25);
  --primary-transparent-2: hsla(290, 66%, 25%, 0.15);
  --primary-transparent-3: hsla(290, 66%, 25%, 0.2);
  --primary-transparent-4: hsla(290, 66%, 25%, 0.25);
  --primary-transparent-5: hsla(290, 66%, 25%, 0.3);
  --primary-border: hsla(290, 66%, 25%, 0.3);
  --primary-border-strong: hsla(290, 66%, 25%, 0.4);
  --primary-border-stronger: hsla(290, 66%, 25%, 0.5);
  --primary-border-active: hsla(290, 66%, 25%, 0.6);

  /* Secondary */
  --secondary: hsl(330, 70%, 60%);
  --secondary-foreground: hsl(0, 0%, 100%);

  /* Sidebar */
  --sidebar: hsl(290, 50%, 20%);
  --sidebar-foreground: hsl(220, 15%, 90%);
  --sidebar-bg-transparent: hsla(300, 50%, 22%, 0.3);
  --sidebar-bg-hover: hsla(300, 50%, 22%, 0.5);

  /* Favorites */
  --favorite: hsl(5, 100%, 70%);
  --favorite-transparent-1: hsla(5, 100%, 70%, 0.15);
  --favorite-transparent-2: hsla(5, 100%, 70%, 0.25);
  --favorite-border: hsla(5, 100%, 70%, 0.3);

  /* Danger */
  --danger: hsl(0, 100%, 67%);
  --danger-transparent-1: hsla(0, 100%, 67%, 0.15);
  --danger-transparent-2: hsla(0, 100%, 67%, 0.25);
  --danger-border: hsla(0, 100%, 67%, 0.3);

  /* Cards */
  --card: hsl(290, 50%, 18%);
  --card-rgb: 59, 10, 69;
  --card-foreground: var(--foreground);

  /* Popups */
  --popup: hsl(290, 50%, 18%);
  --popup-foreground: var(--foreground);

  /* Muted */
  --muted: hsl(290, 50%, 25%);
  --muted-foreground: hsl(290, 45%, 70%);

  /* Error */
  --error: hsl(358, 75%, 60%);
  --error-foreground: hsl(0, 0%, 100%);

  /* Miscellaneous */
  --certain-icons: hsl(290, 66%, 25%);
  --albumart-gradient: linear-gradient(135deg, #3b0a45 0%, #6a0572 100%);

  /* Shadows */
  --border: hsl(290, 50%, 20%);
  --shadow: 0 1px 2px hsla(290, 50%, 0%, 0.1),
    0 3px 6px hsla(290, 50%, 0%, 0.15);
  --shadow-md: 0 1px 3px hsla(290, 50%, 0%, 0.1),
    0 10px 15px -5px hsla(290, 50%, 0%, 0.1),
    0 20px 25px -5px hsla(290, 50%, 0%, 0.08);
  --shadow-lg: 0 1px 3px hsla(290, 50%, 0%, 0.1),
    0 20px 25px -5px hsla(290, 50%, 0%, 0.15),
    0 30px 40px -5px hsla(290, 50%, 0%, 0.1);
  --shadow-focus: 0 0 0 2px hsla(290, 70%, 45%, 0.25),
    0 1px 2px hsla(290, 50%, 0%, 0.1);
}
`;export{r as default};
//# sourceMappingURL=Mirage.theme-ClgazwCT.js.map
