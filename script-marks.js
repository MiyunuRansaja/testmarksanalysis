// Sample JavaScript code for marks page (modify as needed)
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    class Particle {
        constructor(x, y) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.baseSize = this.size;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
            if (this.size <= 0.2) {
                this.size = this.baseSize;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    init();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

    canvas.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        for (let i = 0; i < particles.length; i++) {
            const dx = particles[i].x - mouseX;
            const dy = particles[i].y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                particles[i].size = 10;
                particles[i].color = "hsl(" + Math.random() * 360 + ", 50%, 50%)";
                particles[i].speedX = dx * 0.05;
                particles[i].speedY = dy * 0.05;
            }
        }
    });
});
