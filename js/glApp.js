// コンストラクタ
function glApp() {
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.light = null;
    this.box = null;
}

// setupメソッド
glApp.prototype.setup = function(renderer) {
    this.renderer = renderer;
    // シーンを作成
    this.scene = new THREE.Scene();

    // カメラを作成
    this.camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 1000);

    // 箱を作成
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
    this.box = new THREE.Mesh(geometry, material);
    this.box.position.z = -5;
    this.scene.add(this.box);

    // 平行光源を生成
    this.light = new THREE.DirectionalLight(0xffffff);
    this.light.position.set(1, 1, 1);
    this.scene.add(this.light);

    this.update();
};

// updateメソッド
glApp.prototype.update = function() {
    // 立方体を回転させる
    this.box.rotation.x += 0.01;
    this.box.rotation.y += 0.01;
};
