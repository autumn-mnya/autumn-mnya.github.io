/* if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
=======
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} */

var $window = $(".wy-nav-side")

/* Restore scroll position 
window.scroll(0, localStorage.getItem('scrollPosition')|0)*/
$window.scrollTop(localStorage.getItem('scrollPosition'));

/* Save scroll position */
$window.scroll(function () {
	localStorage.setItem('scrollPosition', $window.scrollTop())
})