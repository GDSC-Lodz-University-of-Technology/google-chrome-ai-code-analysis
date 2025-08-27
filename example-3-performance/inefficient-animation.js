const animationContainer = document.getElementById('animation-container');
const toggleAnimationBtn = document.getElementById('toggle-animation-btn');
const NUM_BALLS = 15;
let animationFrameId;
let isAnimationRunning = false;
const balls = [];

export function setupInefficientAnimation() {
    for (let i = 0; i < NUM_BALLS; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        ball.style.top = `${Math.random() * 180}px`;
        animationContainer.appendChild(ball);
        balls.push({
            element: ball,
            velocity: Math.random() * 4 + 1,
            position: Math.random() * 100
        });
    }
}

function animate() {
    balls.forEach(ball => {
        const containerWidth = animationContainer.offsetWidth; // READ

        ball.position += ball.velocity;
        if (ball.position > containerWidth - 20 || ball.position < 0) {
            ball.velocity *= -1; // Reverse direction
        }
        ball.element.style.left = `${ball.position}px`; // WRITE
    });

    animationFrameId = requestAnimationFrame(animate);
}

toggleAnimationBtn.addEventListener('click', () => {
    if (isAnimationRunning) {
        cancelAnimationFrame(animationFrameId);
        toggleAnimationBtn.textContent = 'Start Animation';
    } else {
        animate();
        toggleAnimationBtn.textContent = 'Stop Animation';
    }
    isAnimationRunning = !isAnimationRunning;
});
