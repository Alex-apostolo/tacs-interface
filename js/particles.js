export default function () {
    let particles = Particles.init({
        selector: '.background',
        connectParticles: 'true',
        color: '#408ec6',
        maxParticles: 70
    });

    particles.pauseAnimation();
    let paused = false;
    const background = document.getElementsByClassName('background')[0];
    const toggle_btn = document.getElementById('easter-egg');
    toggle_btn.addEventListener('click', function () {
        if (paused) {
            particles.resumeAnimation();
        } else {
            particles.pauseAnimation();
        }
        paused = !paused;
    }, false);
}