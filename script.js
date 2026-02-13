// Custom cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Typing effect
const text = "AI Developer | Game Creator | Gesture Control Enthusiast";
let i = 0;
const typing = document.querySelector(".typing");

function type() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}
type();
