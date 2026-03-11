# BrillSign Website

This repository contains the source code for the BrillSign website.

## 🚀 Key Architecture: Absolute Pathing (v5)

To prevent 404 errors and "URL doubling" (e.g., `role-solutions/role-solutions/`) when navigating subfolders on GitHub Pages, we use a robust **Absolute Pathing** strategy in `shared-components.js`.

### 1. Root Detection
`shared-components.js` automatically detects the site root (e.g., `https://harshika-web.github.io/BrillSign/`) the moment it is loaded. It uses `document.currentScript` to ensure perfection regardless of the folder depth.

### 2. Cache Busting
Whenever you modify `shared-components.js`, **you must increment the version string** in all HTML files that reference it.
*   **Current Version**: `v=20260311_v5`
*   **Usage**: `<script src="../shared-components.js?v=20260311_v5"></script>`

### 3. Adding New Pages
When adding a new page in a subfolder (like `role-solutions/` or `industry-solutions/`):
1.  Reference the CSS as `<link rel="stylesheet" href="../index.css">`.
2.  Reference the script as `<script src="../shared-components.js?v=20260311_v5"></script>`.
3.  **Do not** use absolute hardcoded paths (like `/BrillSign/`) as these break on local development. Let `shared-components.js` handle it.

---
Live: [BrillSign Site](https://harshika-web.github.io/BrillSign/)
