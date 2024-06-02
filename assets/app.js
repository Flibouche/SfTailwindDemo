import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.css';

import 'tw-elements';

// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    initTWE
  } from "tw-elements";
  
  initTWE({ Collapse, Dropdown, Ripple }, { Carousel }, { allowReinits: true });

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
