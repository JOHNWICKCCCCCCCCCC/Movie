'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close')
const navbarSearchBtn = document.querySelector('.navbar-search-btn')

function navIsActive() {
    header.classList.toggle('active')
    nav.classList.toggle('active')
    navbarMenuBtn.classList.toggle('active')
}

navbarMenuBtn.addEventListener('click', navIsActive);


const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);

// ... existing code ...

document.addEventListener('DOMContentLoaded', function() {
    const redNoticeCard = document.getElementById('red-notice-card');
    const videoPlayer = document.getElementById('video-player');
    const movieVideo = document.getElementById('movie-video');
    const closeVideo = document.getElementById('close-video');

    redNoticeCard.addEventListener('click', function() {
        videoPlayer.style.display = 'flex';
        movieVideo.play();
    });

    closeVideo.addEventListener('click', function() {
        videoPlayer.style.display = 'none';
        movieVideo.pause();
        movieVideo.currentTime = 0;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const spiderManCard = document.getElementById('spider-man-card');
    const videoPlayer = document.getElementById('video-spider');
    const movieVideo = document.getElementById('movie-spider');
    const closeVideo = document.getElementById('close-skubi');

    if (!spiderManCard) {
        console.error('Spider-Man card not found');
        return;
    }

    if (!videoPlayer || !movieVideo || !closeVideo) {
        console.error('Video player elements not found');
        return;
    }

    spiderManCard.addEventListener('click', function() {
        const videoSource = this.getAttribute('data-video');
        if (videoSource) {
            console.log('Playing video:', videoSource);
            movieVideo.src = `./video/${videoSource}`;
            videoPlayer.style.display = 'flex';
            movieVideo.play().catch(e => console.error('Error playing video:', e));
        } else {
            console.error('No video source found');
        }
    });

    closeVideo.addEventListener('click', function() {
        console.log('Closing video');
        videoPlayer.style.display = 'none';
        movieVideo.pause();
        movieVideo.currentTime = 0;
    });
});

