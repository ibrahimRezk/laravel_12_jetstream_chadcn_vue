import { onMounted, ref } from "vue";

// Appearance can be: 'light' | 'dark' | 'system'

// export function updateTheme(value) {
//     if (typeof window === 'undefined') {
//         return;
//     }

//     if (value === 'system') {
//         const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
//         const systemTheme = mediaQueryList.matches ? 'dark' : 'light';

//         document.documentElement.classList.toggle('dark', systemTheme === 'dark');
//     } else {
//         document.documentElement.classList.toggle('dark', value === 'dark');
//     }
// }

// const setCookie = (name, value, days = 365) => {
//     if (typeof document === 'undefined') {
//         return;
//     }

//     const maxAge = days * 24 * 60 * 60;

//     document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
// };

// const mediaQuery = () => {
//     if (typeof window === 'undefined') {
//         return null;
//     }

//     return window.matchMedia('(prefers-color-scheme: dark)');
// };

// const getStoredAppearance = () => {
//     if (typeof window === 'undefined') {
//         return null;
//     }

//     return localStorage.getItem('appearance');
// };

// const handleSystemThemeChange = () => {
//     const currentAppearance = getStoredAppearance();

//     updateTheme(currentAppearance || 'system');
// };

// export function initializeTheme() {
//     if (typeof window === 'undefined') {
//         return;
//     }

//     // Initialize theme from saved preference or default to system...
//     const savedAppearance = getStoredAppearance();
//     updateTheme(savedAppearance || 'system');

//     // Set up system theme change listener...
//     mediaQuery()?.addEventListener('change', handleSystemThemeChange);
// }

// const appearance = ref('system');

// export function useAppearance() {
//     onMounted(() => {
//         const savedAppearance = localStorage.getItem('appearance');

//         if (savedAppearance) {
//             appearance.value = savedAppearance;
//         }
//     });

//     function updateAppearance(value) {
//         appearance.value = value;

//         // Store in localStorage for client-side persistence...
//         localStorage.setItem('appearance', value);

//         // Store in cookie for SSR...
//         setCookie('appearance', value);

//         updateTheme(value);
//     }

//     return {
//         appearance,
//         updateAppearance,
//     };
// }

// onMounted(() => {
//     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     if (
//         !("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//     ) {
//         document.documentElement.classList.add("dark");
//         appearance.value = "system";
//     } else if (
//         !("theme" in localStorage) &&
//         !window.matchMedia("(prefers-color-scheme: dark)").matches
//     ) {
//         document.documentElement.classList.remove("dark");
//         appearance.value = "system";
//     } else if (
//         localStorage.theme === "dark" ||
//         (!("theme" in localStorage) &&
//             window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//         document.documentElement.classList.add("dark");
//         appearance.value = "dark";
//     } else {
//         document.documentElement.classList.remove("dark");
//         appearance.value = "light";
//     }
// });

const appearance = ref("system");
export function useAppearance() {
    onMounted(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            !("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.add("dark");
            appearance.value = "system";
        } else if (
            !("theme" in localStorage) &&
            !window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.classList.remove("dark");
            appearance.value = "system";
        } else if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            appearance.value = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            appearance.value = "light";
        }
    });

    const updateAppearance = (value) => {
        if (value == "dark") {
            (localStorage.theme = "dark"),
                document.documentElement.classList.remove("light"),
                document.documentElement.classList.add("dark"),
                (appearance.value = "dark");
        } else if (value == "light") {
            (localStorage.theme = "light"),
                document.documentElement.classList.remove("dark"),
                document.documentElement.classList.add("light"),
                (appearance.value = "light");
        } else {
            localStorage.removeItem("theme");
            appearance.value = "system";
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    };

    return {
        appearance,
        updateAppearance,
    };
}
