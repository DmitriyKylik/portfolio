import './js/common';
import './css/main.css';
import './scss/main.scss';
// import './cv/resumeDmitriyKylik.pdf';

// Require all svg icons
const files = require.context('./icons/', true, /.*\.svg$/);
files.keys().forEach(files);
// function requireSvgIcons(r) {
//     r.keys().forEach(r);
// }
// requireSvgIcons(require.context('./icons', true, /.*\.svg$/));

// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import 'vue'
// import Vue from 'vue'
// window.Vue = require('vue')
