document.getElementById('back-icon').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    window.location.href = 'main_page.html';
});

document.addEventListener('DOMContentLoaded', function() {
    // Load profile photo animation
    lottie.loadAnimation({
        container: document.getElementById('profilePhotoAnimation'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animation - 1715985682906.json' // the path to your profile photo animation file
    });

    // Load time usage chart animation
    lottie.loadAnimation({
        container: document.getElementById('timeChartAnimation'), // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'Animation - 1715985128136.json' // the path to your time usage chart animation file
    });

    // Language switcher
    const langToggle = document.getElementById('lang-toggle');
    const texts = {
        en: {
            profileTitle: "User Profile",
            userName: "Ahmad Fahmid",
            userJob: "Frontend Web Developer",
            badgesTitle: "Badges",
            badgesCount: "12",
            likesTitle: "Likes",
            likesCount: "345",
            timeUsedTitle: "Time Used in App"
        },
        bn: {
            profileTitle: "ব্যবহারকারীর প্রোফাইল",
            userName: "আহমাদ ফাহমিদ",
            userJob: "ওয়েব ডেভেলপার",
            badgesTitle: "ব্যাজ",
            badgesCount: "১২",
            likesTitle: "লাইক",
            likesCount: "৩৪৫",
            timeUsedTitle: "অ্যাপে ব্যবহৃত সময়"
        }
    };

    function switchLanguage(lang) {
        document.getElementById('profileTitle').textContent = texts[lang].profileTitle;
        document.getElementById('userName').textContent = texts[lang].userName;
        document.getElementById('userJob').textContent = texts[lang].userJob;
        document.getElementById('badgesTitle').textContent = texts[lang].badgesTitle;
        document.getElementById('badgesCount').textContent = texts[lang].badgesCount;
        document.getElementById('likesTitle').textContent = texts[lang].likesTitle;
        document.getElementById('likesCount').textContent = texts[lang].likesCount;
        document.getElementById('timeUsedTitle').textContent = texts[lang].timeUsedTitle;
    }

    langToggle.addEventListener('change', function() {
        if (this.checked) {
            switchLanguage('bn');
        } else {
            switchLanguage('en');
        }
    });

    // Initialize with default language
    switchLanguage('en');
});