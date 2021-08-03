const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})



/* ----------------------------
Compile Gramateria script
------------------------------ */

// Template related global css
.copy('gramateria/develop/css/global.css','build/gramateria/dist/global.css')

// Gramateria builder css
.sass('gramateria/develop/sass/gramateria.scss','build/gramateria/dist/gram.min.css')

// Template related global js
.copy('gramateria/develop/js/global.js','build/gramateria/dist/global.js')

// Gramateria builder js
.js('gramateria/develop/js/gramateria.js','build/gramateria/dist/gram.min.js')


// Comment this off when there is no change for Gramateria fonts and svg.
// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`gramateria/develop/${asset}`,`gramateria/dist/${asset}`)
// }