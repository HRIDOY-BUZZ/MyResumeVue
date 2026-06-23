The jQuery dependencies in this project are:

1.  `jquery.js`: The core jQuery library.
2.  `bootstrap.bundle.js`: This is a Bootstrap JavaScript bundle which, in older versions (as implied by the project's setup), often relies on jQuery for its interactive components (e.g., modals, carousels, dropdowns).

## `primary.js` Analysis

The `primary.js` file is a custom script that uses jQuery. Here's a breakdown of its current jQuery code:

*   **jQuery Wrapper**: The entire file is wrapped in `(function($){...}(jQuery))`. This is a standard practice to avoid conflicts with other libraries that might use the `$` symbol.
*   **`$.fn.andSelf`**: This is a small function that adds a `andSelf` method to jQuery objects for compatibility with older jQuery versions. This is likely unnecessary with the version of jQuery in this project, as `andSelf` was replaced by `addBack` in jQuery 1.8.

The rest of the code in `primary.js` initializes the `WOW.js` animation library, which is not a jQuery plugin itself but is located within the jQuery wrapper in this file.

Therefore, most of the jQuery-specific code in `primary.js` is either a compatibility fallback (`$.fn.andSelf`) or a structural wrapper. The core functionality of the file is the `WOW.js` initialization.

## `wow.js` Usage

The `wow.js` animation library is used extensively throughout the project to provide scroll-based animations. The `wow` class (e.g., `wow fadeInUp`) is used in the following components:

*   `src/components/Footer.vue`
*   `src/components/Header.vue`
*   `src/sections/About.vue`
*   `src/sections/Contact.vue`
*   `src/sections/Education.vue`
*   `src/sections/Experiences.vue`
*   `src/sections/Home.vue`
*   `src/sections/Interests.vue`
*   `src/sections/Services.vue`
*   `src/sections/Skills.vue`
