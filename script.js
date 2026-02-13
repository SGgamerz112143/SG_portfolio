// MAIN CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    createTrail(x, y);
});

// TYPING EFFECT
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

// OPTIMIZED TRAIL
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

// 3D TILT EFFECT
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
