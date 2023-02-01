/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'navbar-bg': '#2B0D34',
            'border': '#E05BFF',
            'bg' : '#3D054A',
            'circle-bg' : "#710190",
            'circle-border': "#A84EBA"
        },
        spacing: {
          '30': '7.25rem',
          '26' : '6.65rem',
          '27' : '6.80rem'
        },
        backgroundImage: {
          'our-blog': "url('http://localhost:3000/static/media/our-blog-bg.71c4656b317845f29896c62b52725a28.svg')",
        }
      },
    },
    plugins: [require('@tailwindcss/line-clamp')],
  }