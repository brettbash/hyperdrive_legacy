/* :: Import Dependencies
{+} ---------------------------------- */
import 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
global.ScrollMagic = ScrollMagic;

/* :: Import Local
{+} ---------------------------------- */
import Router from './util/Router';
import core from './bootstrap';

/* :: Router Setup
{+} ---------------------------------- */
const routes = new Router({
    core
});

/* :: Load!
{+} ---------------------------------- */
jQuery(document).ready(() => routes.loadEvents());
