/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const angles = [0, 45, 90, 135, 180, 225, 270, 315]
      const utilities = Object.fromEntries(
        angles.map((a) => [
          `.${`angle-${a}`}`,
          {
            ['--angle']: `${a}deg`
          }
        ])
      )
      addUtilities(utilities, { variants: ['responsive'] })
    }
  ]
}
