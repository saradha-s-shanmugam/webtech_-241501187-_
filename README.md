# JobPortal — Static Site

A modern, fully-responsive job portal with animated live backgrounds.
Pure HTML / CSS / JavaScript + Bootstrap 5 + Font Awesome.

## How to Run in VS Code
1. Unzip the folder.
2. Open the folder in VS Code.
3. Install the **Live Server** extension (Ritwick Dey).
4. Right-click `index.html` → **Open with Live Server**.
   (Or just double-click `index.html` to open in your browser.)

`index.html` redirects to `login.html` automatically.

## Pages
- `login.html` — Login + Sign Up + Forgot Password (inline validation, remember-me)
- `home.html`  — Hero, categories, stats, footer (auth-protected)
- `jobs.html`  — Job listings with category filter, sort, search, loading spinner
- `apply.html` — Extended application form with validation + resume preview
- `success.html` — Dynamic confirmation with applicant name + reference number

## Auth
Login state is stored in `localStorage` (`jp_user`). Visiting any protected
page without logging in redirects to `login.html`.

## Notes
- Job card images use vibrant gradient + icon tiles (no broken `images/` paths).
- All backgrounds are animated CSS gradients ("live background").
- 100% responsive — works on mobile, tablet, and desktop.
