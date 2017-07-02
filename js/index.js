// ofでのmain.cppに相当
var init = function() {
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(800, 600);
    document.body.appendChild(renderer.domElement);

    var app = new glApp();
    app.setup(renderer);

    var update = function() {
        requestAnimationFrame(update);

        app.update();

        renderer.render(app.scene, app.camera);
    };

    update();
};

window.addEventListener('DOMContentLoaded', init);
