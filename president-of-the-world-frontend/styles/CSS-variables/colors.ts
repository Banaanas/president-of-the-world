import { css } from "@emotion/react";

const colors = css`
  /* Primary Color */
  --color-primary-100: hsl(0, 0%, 100%);
  --color-primary-200: hsl(0, 0%, 100%);
  --color-primary-300: hsl(0, 0%, 100%);
  --color-primary-400: hsl(60, 100%, 100%);
  --color-primary-500: hsl(60, 100%, 100%);
  --color-primary-600: hsl(60, 100%, 100%);
  --color-primary-700: hsl(60, 1%, 75%);

  /* Secondary Color */
  --color-secondary-100: hsl(0, 0%, 95%);
  --color-secondary-200: hsl(0, 0%, 95%);
  --color-secondary-300: hsl(240, 2%, 77%);
  --color-secondary-400: hsl(252, 2%, 54%);
  --color-secondary-500: hsl(247, 24%, 7%);
  --color-secondary-600: hsl(249, 26%, 5%);
  --color-secondary-700: hsl(252, 26%, 4%);

  /* Tertiary Color */
  --color-tertiary-100: hsl(336, 84%, 98%);
  --color-tertiary-200: hsl(340, 75%, 95%);
  --color-tertiary-300: hsl(339, 76%, 89%);
  --color-tertiary-400: hsl(339, 78%, 77%);
  --color-tertiary-500: hsl(339, 78%, 55%);
  --color-tertiary-600: hsl(339, 78%, 55%);
  --color-tertiary-700: hsl(339, 65%, 41%);

  /* Gray */
  --color-gray-100: hsl(240, 20%, 99%);
  --color-gray-200: hsl(240, 9%, 98%);
  --color-gray-300: hsl(220, 11%, 95%);
  --color-gray-400: hsl(210, 15%, 89%);
  --color-gray-500: hsl(212, 14%, 79%);
  --color-gray-600: hsl(210, 6%, 59%);
  --color-gray-700: hsl(210, 4%, 40%);

  /* Success Color */
  --color-success-100: hsl(120, 54%, 98%);
  --color-success-200: hsl(120, 51%, 87%);
  --color-success-300: hsl(120, 52%, 75%);
  --color-success-400: hsl(120, 53%, 49%);
  --color-success-500: hsl(120, 53%, 49%);
  --color-success-600: hsl(120, 53%, 49%);
  --color-success-700: hsl(120, 53%, 25%);

  /* Warning Color */
  --color-warning-100: hsl(49, 85%, 98%);
  --color-warning-200: hsl(44, 92%, 95%);
  --color-warning-300: hsl(44, 90%, 76%);
  --color-warning-400: hsl(44, 90%, 76%);
  --color-warning-500: hsl(44, 90%, 53%);
  --color-warning-600: hsl(44, 79%, 40%);
  --color-warning-700: hsl(44, 80%, 27%);

  /* Error Color */
  --color-error-100: hsl(0, 82%, 98%);
  --color-error-200: hsl(0, 82%, 96%);
  --color-error-300: hsl(0, 85%, 89%);
  --color-error-400: hsl(0, 85%, 79%);
  --color-error-500: hsl(360, 86%, 58%);
  --color-error-600: hsl(360, 63%, 44%);
  --color-error-700: hsl(0, 62%, 29%);

  /* Black */
  --color-black-default: hsl(216, 18%, 16%);

  /* White */
  --color-white-default: hsl(0, 0%, 100%);

  /* Text Color */
  --color-text-default: var(--color-primary-500);

  /* Selection */
  --color-selection: var(--color-secondary-700);
  --color-selection-background: var(--color-tertiary-500);

  /* Scrollbar */
  --color-scrollbar: var(--color-tertiary-500);
  --color-scrollbar-background: var(--color-secondary-400);
`;

export default colors;
