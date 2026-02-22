# CT053-3-1-FDD-Assignment - LBEF Global Connect

## Project Overview

**LBEF Global Connect** is a student-led web platform that bridges Lord Buddha Education Foundation (LBEF) students with the global academic community, highlighting the partnership with APU Malaysia. This project is for the CT053-3-1 Fundamentals of Web Design and Development group assignment.

[Display Link](https://lb-saroj.github.io/CT053-3-1-FDD-Assignment/index.html)

---

## 📂 Project Structure

The repository is structured so four team members can work concurrently without overwriting each other's files:

```
LBEF_Global_Connect/
│
├── index.html            # Main Landing Page (Member 1)
│
├── css/
│   ├── base.css          # Shared by all pages (variables, header, footer, hero, buttons…)
│   ├── general.css       # index, about, team, alumni (cards, news grid, team cards)
│   ├── events.css        # Events pages (event/blog grids, filter buttons)
│   ├── academic.css      # Academic pages (data tables)
│   └── membership.css    # Membership pages (forms, FAQ accordion, contact map)
├── js/                   # Global Scripts (main.js, components.js)
├── assets/               # Local images (downloaded from picsum)
│
└── pages/                # Sub-pages container
    ├── general/          # Member 1 Workspace (About, Team, Legal)
    ├── membership/       # Member 2 Workspace (Register, Contact, FAQ)
    ├── events/           # Member 3 Workspace (Gallery, Blog, Calendar)
    └── academic/         # Member 4 Workspace (Partnership, Transfer)
```

---

## 🛠 Development Guidelines

### 1. Linking Assets (CSS / JS / Images)
All pages use `<base href="/">` so all paths are root-relative regardless of depth:
- Example: `href="css/base.css"` works from any page

### 2. Navigation
- The `setup_project.sh` script automatically generates correct relative paths for the navigation bar in each HTML file.
- If you add new pages, update navigation links in every affected file or implement a shared header (load via JavaScript) to avoid inconsistencies.

### 3. CSS & Styling
The stylesheet is split into five focused files. Every page loads `base.css` plus its section file(s):

| Page(s) | CSS files |
|---|---|
| `index.html`, `about`, `team`, `alumni` | `base.css` + `general.css` |
| `events/home`, `calendar`, `blog`, `gallery` | `base.css` + `events.css` |
| `academic/housing` | `base.css` + `general.css` + `academic.css` |
| `academic/transfer`, `partnership` | `base.css` + `academic.css` |
| `membership/register`, `faq`, `contact` | `base.css` + `membership.css` |
| `legal` | `base.css` only |

Global colours (defined as CSS variables in `base.css`):
- **LBEF Blue:** `#115DA8`
- **LBEF Gold:** `#F7941D`

---

## 👥 Team Roles
- **Member 1 - Saroj (General):** Site architecture, Home page, About section.
- **Member 2 - Nishant (Membership):** Forms, Contact pages, Interaction logic.
- **Member 3 - Prasanna (Events):** Multimedia, Image galleries, Event calendar.
- **Member 4 - Avash (Academic):** Data tables, Partnership info, Student resources.

---

## Contributing ✅
- Follow the file ownership reflected in the project structure.
- Commit small, focused changes with clear messages.
- For shared components (navigation/header/footer), prefer a single source (either generated via the setup script or loaded dynamically) to prevent merge conflicts.
