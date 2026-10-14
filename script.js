
const progressBar = document.querySelector(
    ".reading-progress__bar"
);

function updateReadingProgress() {
    if (!progressBar) return;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener(
    "scroll",
    updateReadingProgress,
    { passive: true }
);

window.addEventListener(
    "resize",
    updateReadingProgress
);

updateReadingProgress();


const progressBar = document.querySelector(".reading-progress__bar");

function updateReadingProgress() {
    if (!progressBar) return;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = pageHeight > 0
        ? (window.scrollY / pageHeight) * 100
        : 0;

    progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateReadingProgress, {
    passive: true
});

window.addEventListener("resize", updateReadingProgress);

updateReadingProgress();

