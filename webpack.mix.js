const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})
.sass('gramateria/develop/sass/gramateria.scss','gramateria/dist/gram.min.css')
.js('gramateria/develop/js/gramateria.js','gramateria/dist/gram.min.js')



// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`gramateria/develop/${asset}`,`gramateria/dist/${asset}`)
// }