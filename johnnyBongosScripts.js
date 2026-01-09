/* Code Speedy Method https://www.codespeedy.com/play-pause-button-for-html5-video-in-javascript */


/* Wes Bos Method */
/* Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle')
*/

/* Build out functions 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '▶' : '▮▮';
    console.log(icon);
    toggle.textContent = icon;
}

*/
/* Hook up event listeners 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

*/