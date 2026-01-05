# Project Improvements Analysis

This document outlines identified bad practices in the project and provides recommendations for improvement. The core issue stems from a partial migration from a legacy jQuery/Bootstrap architecture to Vue 3, resulting in a conflicting and inefficient hybrid system.

## 1. Legacy Asset Loading

*   **Bad Practice:** The most critical issue is the manual loading of CSS and JavaScript (including jQuery) in `index.html`. This bypasses the Vite build process, preventing bundling, minification, and optimization. It also creates conflicts with Vue's DOM management.

*   **Solution:**
    *   **Embrace Vite for Asset Bundling:** All assets should be installed via npm (e.g., `npm install bootstrap`) and then imported into the `src` directory (e.g., in `src/main.js`). This allows Vite to handle them correctly.
    *   **Replace Legacy Scripts:** The jQuery-dependent scripts (`primary.js`, `wow.js`, `jquery.fancybox.min.js`) should be removed. Their functionality can be replaced with modern, Vue-native libraries or browser APIs (e.g., Vue's `<transition>` component, the Intersection Observer API for scroll effects).

## 2. Inefficient Data Fetching & State Management

*   **Bad Practice:** The root `App.vue` component fetches all application data from a single JSON file in one monolithic request. It then uses the `provide`/`inject` API to pass this data down the component tree. This is not scalable and can lead to performance bottlenecks. Additionally, an artificial 2-second loading delay is enforced via `setTimeout`, which harms user experience.

*   **Solution:**
    *   **Adopt a Proper State Management Library:** Replace the `provide`/`inject` pattern with a dedicated state management library like Pinia. This provides a more organized, maintainable, and scalable way to manage global application state.
    *   **Remove Artificial Delays:** The `setTimeout` loader in `App.vue` should be removed. Loading indicators should be tied to the actual data fetching process.
    *   **Consider Granular Data Fetching:** Instead of one large data fetch, consider fetching data on a per-route or per-component basis as needed.


## 4. Unused Dependencies & Dead Code

*   **Bad Practice:** The project contains unused dependencies and commented-out code. For example, the `http-proxy-middleware` package is listed in `package.json` but is not used.

*   **Solution:**
    *   **Clean Up `package.json`:** Remove any unused dependencies to reduce the project's size and complexity.
    *   **Remove Dead Code:** Remove any commented-out code and unused files from the project to improve readability and maintainability.

By addressing these issues, the project will be more robust, maintainable, performant, and aligned with modern web development best practices.