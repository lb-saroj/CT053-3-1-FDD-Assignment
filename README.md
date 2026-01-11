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
├── css/                  # Global Styles (style.css)
├── js/                   # Global Scripts (main.js)
├── images/               # Shared assets
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
- From root (`index.html`): use `./`
  - Example: `href="./css/style.css"`
- From sub-pages (e.g., `pages/general/about.html`): use `../../`
  - Example: `href="../../css/style.css"`

### 2. Navigation
- The `setup_project.sh` script automatically generates correct relative paths for the navigation bar in each HTML file.
- If you add new pages, update navigation links in every affected file or implement a shared header (load via JavaScript) to avoid inconsistencies.

### 3. CSS & Styling
- All pages use `css/style.css` for global styles.
- Global colors:
  - **LBEF Blue:** `#115DA8`
  - **LBEF Gold:** `#F7941D`

---

## 👥 Team Roles
- **Member 1 (General):** Site architecture, Home page, About section.
- **Member 2 (Membership):** Forms, Contact pages, Interaction logic.
- **Member 3 (Events):** Multimedia, Image galleries, Event calendar.
- **Member 4 (Academic):** Data tables, Partnership info, Student resources.

---

## Contributing ✅
- Follow the file ownership reflected in the project structure.
- Commit small, focused changes with clear messages.
- For shared components (navigation/header/footer), prefer a single source (either generated via the setup script or loaded dynamically) to prevent merge conflicts.
