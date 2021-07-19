const mix = require('laravel-mix');
mix.disableNotifications();

mix
.sass('gramateria/develop/gramateria.scss','gramateria/dist/gram.min.css')
.js('gramateria/develop/gramateria.js','gramateria/dist/gram.min.js')