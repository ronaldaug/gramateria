const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})

// Template related global css
.copy('gramateria/develop/css/global.css','gramateria/dist/global.css')

// Gramateria builder css
.sass('gramateria/develop/sass/gramateria.scss','gramateria/dist/gram.min.css')

// Template related global js
.copy('gramateria/develop/js/global.js','gramateria/dist/global.js')

// Gramateria builder js
.js('gramateria/develop/js/gramateria.js','gramateria/dist/gram.min.js')



// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`gramateria/develop/${asset}`,`gramateria/dist/${asset}`)
// }