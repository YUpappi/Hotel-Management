import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {




&,&.light-mode{
    /* Grey */
  --color-grey-0: #f3f4f6;
  --color-grey-50: #fafaf9;
  --color-grey-100: #f5f5f4;
  --color-grey-200: #e7e5e4;
  --color-grey-300: #d6d3d1;
  --color-grey-400: #a8a29e;
  --color-grey-500: #78716b;
  --color-grey-600: #57534e;
  --color-grey-700: #44403c;
  --color-grey-800: #292522;
  --color-grey-900: #1c1917;

  --color-blue-100: #d4f1f4;
  --color-blue-700: #0f5f7a;
  --color-green-100: #d4f1dc;
  --color-green-700: #0d7a3a;
  --color-yellow-100: #fef9e3;
  --color-yellow-700: #b8860b;
  --color-silver-100: #f5f5f4;
  --color-silver-700: #44403c;
  --color-indigo-100: #d4e1f7;
  --color-indigo-700: #1f3a8a;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  /* Brand/Button Colors - Light Mode */
  --color-brand-50: #fef3c7;
  --color-brand-100: #fde68a;
  --color-brand-200: #fcd34d;
  --color-brand-500: #d97706;
  --color-brand-600: #b8860b;
  --color-brand-700: #92400e;
  --color-brand-800: #78350f;
  --color-brand-900: #451a03;

  --backdrop-color: rgba(0, 0, 0, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    /* For light mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}





  &.dark-mode{
  //FOR DARK MODE

--color-grey-0: #1f2937;
--color-grey-50: #111827;
--color-grey-100: #1a2332;
--color-grey-200: #2d3e4f;
--color-grey-300: #3d4e5f;
--color-grey-400: #4d5e6f;
--color-grey-500: #6b7d8f;
--color-grey-600: #8b9daf;
--color-grey-700: #b0bcc9;
--color-grey-800: #d0d8e0;
--color-grey-900: #e8ecf0;

--color-blue-100: #0f3a52;
--color-blue-700: #7dbcc4;
--color-green-100: #0d4a2a;
--color-green-700: #68d394;
--color-yellow-100: #8b6f47;
--color-yellow-700: #daa520;
--color-silver-100: #2d3e4f;
--color-silver-700: #b0bcc9;
--color-indigo-100: #1a2a52;
--color-indigo-700: #a4c4e0;

--color-red-100: #7a1a1a;
--color-red-700: #f8cdcd;
--color-red-800: #fde0e0;

/* Brand/Button Colors - Dark Mode */
--color-brand-50: #1a1410;
--color-brand-100: #2d1f0f;
--color-brand-200: #3d2817;
--color-brand-500: #daa520;
--color-brand-600: #f0ad4e;
--color-brand-700: #ffc966;
--color-brand-800: #ffd966;
--color-brand-900: #ffe680;
}



  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

  @media (max-width: 1024px) {
    font-size: 56.25%;
  }

  @media (max-width: 768px) {
    font-size: 50%;
  }

  @media (max-width: 480px) {
    font-size: 43.75%;
  }
}

body {
  font-family: "Poppins", sans-serif;
  color: #1c1917;
  background: #f3f4f6;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  &.dark-mode {
    color: #e8ecf0;
    background: #111827;
  }
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;
export default GlobalStyles;
