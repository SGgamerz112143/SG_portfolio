// ===== CURSOR + TRAIL =====
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    createTrail(x, y);
});

function createTrail(x, y) {
    const trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);

    trail.style.left = x + "px";
    trail.style.top = y + "px";

    setTimeout(() => {
        trail.remove();
    }, 200);
}

// ===== TYPING EFFECT =====
const text = "AI Developer | Game Creator | Gesture Control Enthusiast";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
    }
}
type();

// ===== 3D TILT EFFECT =====
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// ===== TERMINAL INTRO =====
const terminal = document.querySelector(".terminal");
const terminalText = document.querySelector(".terminal-text");
const loadingBar = document.querySelector(".loading-bar");

const lines = [
    "Accessing Blacklist Database...",
    "Decrypting Player Stats...",
    "Loading Rap Sheet...",
    "Police Heat Level: HIGH",
    "Status: WANTED"
];

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            terminalText.innerHTML += lines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 30);
        } else {
            terminalText.innerHTML += "\n";
            lineIndex++;
            charIndex = 0;
            loadingBar.style.width = (lineIndex * 20) + "%";
            setTimeout(typeTerminal, 300);
        }
    } else {
        terminalText.innerHTML += "\n";
        terminalText.innerHTML += "<span class='glitch'>ACCESS GRANTED</span>";
        setTimeout(() => {
            terminal.style.display = "none";
        }, 1500);
    }
}

typeTerminal();
// ===== SKILLS SCROLL ANIMATION =====

const skillsSection = document.querySelector(".skills");
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-width");
        bar.style.width = value;
    });
}

function hideProgress() {
    progressBars.forEach(bar => {
        bar.style.width = "0";
    });
}

window.addEventListener("scroll", () => {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
        showProgress();
    } else {
        hideProgress();
    }
});
