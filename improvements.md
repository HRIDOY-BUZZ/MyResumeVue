# Project Improvements Analysis

This document outlines identified bad practices in the project and provides recommendations for improvement. The core issue stems from a partial migration from a legacy jQuery/Bootstrap architecture to Vue 3, resulting in a conflicting and inefficient hybrid system.

## 1. Legacy Architecture & jQuery Conflicts

*   **Bad Practice:** The project relies on a legacy jQuery script (`public/assets/js/primary.js`) that directly manipulates the DOM. This script's scroll handler for the navigation bar (`Header.vue`) conflicts with Vue's component-based rendering and state management.

*   **Solution:**
    *   **Eliminate jQuery:** Remove the dependency on jQuery entirely.
    *   **Refactor in Vue:** Re-implement the scroll-based navigation bar styling directly within `Header.vue`. Use Vue's `onMounted` lifecycle hook to add a scroll event listener and a reactive variable to toggle the necessary CSS classes.

## 2. Improper Asset Management

*   **Bad Practice:** All CSS and JavaScript assets, including Bootstrap and jQuery, are loaded directly in `index.html` via `<link>` and `<script>` tags. This completely bypasses the Vite build process, leading to a lack of bundling, code optimization, and proper dependency management.

*   **Solution:**
    *   **Embrace Vite:** Remove all asset-loading `<link>` and `<script>` tags from `index.html`.
    *   **Manage Dependencies with npm:** Install necessary libraries (e.g., Bootstrap CSS) via npm (`npm install bootstrap`).
    *   **Import in `main.js`:** Import the bundled assets in the application's entry point (`src/main.js`) to allow Vite to process and optimize them (e.g., `import 'bootstrap/dist/css/bootstrap.min.css';`).



## 4. Dead & Redundant Code

*   **Bad Practice:**
    1.  **Unused Dependency:** The `http-proxy-middleware` package is listed as a dependency but is not used in the Vite configuration or anywhere else.
    2.  **Dead jQuery Code:** The progress bar logic in `primary.js` is obsolete. The `Skills.vue` component correctly implements this feature using Vue's data binding.
    3.  **Artificial Loader:** `App.vue` contains an unnecessary `setTimeout` that artificially delays the application load time by 2 seconds, worsening the user experience.

*   **Solution:**
    *   **Clean Up `package.json`:** Remove the `http-proxy-middleware` dependency.
    *   **Remove Dead Code:** Delete the `public/assets/js/primary.js` file and the artificial loading logic from `App.vue`.

## 5. Lack of Code Quality Tooling

*   **Bad Practice:** The project lacks any automated tools for linting (like ESLint) or code formatting (like Prettier). This leads to inconsistent code style and makes it easier to introduce simple bugs.

*   **Solution:**
    *   **Integrate Tooling:** Add ESLint and Prettier to the project.
    *   **Configure Rules:** Configure them with standard Vue 3 style guides.
    *   **Automate:** Add npm scripts to run the linter and formatter automatically.

## 6. Inefficient Data Fetching

*   **Bad Practice:** Multiple components (`Home`, `About`, `Skills`, etc.) independently fetch and parse the same `public/data/data.json` file on their own. This results in redundant and repeated processing, increasing memory usage and making the application less efficient, especially as it grows.

*   **Solution:**
    *   **Centralize Data Fetching:** Create a simple, reactive store to handle the data. This store will fetch `data.json` only once and make the data available globally to any component that needs it.
    *   **Implement a Store:** A new file, `src/store.js`, can be created to manage this. It can export a reactive object that holds the portfolio data. An initialization function within the store can fetch the data and populate the state.
    *   **Use in Components:** Components can then import the store and access the data directly without re-fetching it, ensuring a single source of truth.

By addressing these issues, the project will be more robust, maintainable, performant, and aligned with modern web development best practices.
