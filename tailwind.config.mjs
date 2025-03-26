/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx,astro}", // Agregamos .astro
    ],
    theme: {
      extend: {
        colors: {
          'verde-oscuro': '#043927',
          'verde-medio': '#1D6F42',
          'verde-claro': '#71A375',
          'amarillo-mostaza': '#F4A900',
          'naranja-rojizo': '#D95B43',
          'marron-oscuro': '#8D3B26',
          'blanco-grisaceo': '#EFEFEF',
          'gris-oscuro': '#333333',
        },
      },
    },
    plugins: [],
  }