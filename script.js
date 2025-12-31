// ===========================
// Youssef Gebaly Portfolio - Inspired by Henry Heffernan
// MIT Licensed - Based on https://github.com/henryjeff/portfolio-website
// ===========================

// Camera States
const CameraKey = {
    IDLE: 'IDLE',
    DESK: 'DESK',
    MONITOR: 'MONITOR',
    LOADING: 'LOADING',
    ORBIT_CONTROLS_START: 'ORBIT_CONTROLS_START'
};

// Camera Keyframes (in millimeters like Henry's original)
const keyframes = {
    [CameraKey.IDLE]: {
        position: { x: -20000, y: 12000, z: 20000 },
        target: { x: 0, y: -1000, z: 0 }
    },
    [CameraKey.MONITOR]: {
        position: { x: 0, y: 950, z: 2000 },
        target: { x: 0, y: 950, z: 0 }
    },
    [CameraKey.DESK]: {
        position: { x: 0, y: 1800, z: 5500 },
        target: { x: 0, y: 500, z: 0 }
    },
    [CameraKey.LOADING]: {
        position: { x: -35000, y: 35000, z: 35000 },
        target: { x: 0, y: -5000, z: 0 }
    },
    [CameraKey.ORBIT_CONTROLS_START]: {
        position: { x: -15000, y: 10000, z: 15000 },
        target: { x: -100, y: 350, z: 0 }
    }
};

// Application State
let scene, cssScene, camera, renderer, cssRenderer, controls;
let currentCameraState = CameraKey.LOADING;
let freeCameraMode = false;
let mouseX = 0, mouseY = 0;
let time = 0;

// Tween objects
let posTween = null;
let targetTween = null;
let cameraTarget = new THREE.Vector3(0, 0, 0);

// Scene Objects
let deskGroup, monitorScreen, monitorScreenCSS, occlusionPlane;

// ===========================
// Initialization
// ===========================

function init() {
    // WebGL Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // CSS3D Scene
    cssScene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000000
    );

    // Set initial LOADING position
    const loadingKey = keyframes[CameraKey.LOADING];
    camera.position.set(loadingKey.position.x, loadingKey.position.y, loadingKey.position.z);
    cameraTarget.set(loadingKey.target.x, loadingKey.target.y, loadingKey.target.z);
    camera.lookAt(cameraTarget);

    // WebGL Renderer
    const canvas = document.getElementById('webgl');
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // CSS3D Renderer
    cssRenderer = new THREE.CSS3DRenderer();
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.pointerEvents = 'none';
    document.getElementById('css').appendChild(cssRenderer.domElement);

    // Orbit Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enabled = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5000, 10000, 5000);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5000, 3000, -5000);
    scene.add(fillLight);

    // Create 3D Scene
    createScene();

    // Create CSS3D Monitor Screen
    createMonitorScreen();

    // Event Listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    // Transition to IDLE after short delay
    setTimeout(() => {
        transitionToState(CameraKey.IDLE, 2000);
    }, 1000);

    // Start animation loop
    animate();
}

// ===========================
// CSS3D Monitor Screen (Henry's approach)
// ===========================

function createMonitorScreen() {
    // Create HTML element for the monitor
    const element = document.createElement('div');
    element.style.width = '1280px';
    element.style.height = '1024px';
    element.style.backgroundColor = '#008080';
    element.style.border = 'none';

    // Create iframe inside the element
    const iframe = document.createElement('iframe');
    iframe.src = 'portfolio-inner.html';
    iframe.style.width = '1280px';
    iframe.style.height = '1024px';
    iframe.style.border = 'none';
    element.appendChild(iframe);

    // Create CSS3D Object
    monitorScreenCSS = new THREE.CSS3DObject(element);

    // Position at the monitor location (matching your monitor geometry)
    monitorScreenCSS.position.set(-500, 2300, -300 + 700); // monitor position + screen offset
    monitorScreenCSS.rotation.y = 0.15; // match monitor rotation

    // Scale to match the screen size (1.3m x 0.95m)
    const scaleX = 1300 / 1280;
    const scaleY = 950 / 1024;
    monitorScreenCSS.scale.set(scaleX, scaleY, 1);

    cssScene.add(monitorScreenCSS);

    // Create occlusion plane (WebGL plane that blocks rendering behind the CSS3D object)
    const occlusionGeometry = new THREE.PlaneGeometry(1300, 950);
    const occlusionMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        opacity: 0,
        blending: THREE.NoBlending
    });
    occlusionPlane = new THREE.Mesh(occlusionGeometry, occlusionMaterial);

    // Match position and rotation of CSS3D object
    occlusionPlane.position.copy(monitorScreenCSS.position);
    occlusionPlane.rotation.copy(monitorScreenCSS.rotation);

    scene.add(occlusionPlane);
}

// ===========================
// 3D Scene Creation
// ===========================

function createScene() {
    deskGroup = new THREE.Group();

    // Desk surface
    const deskGeometry = new THREE.BoxGeometry(4000, 100, 2500);
    const deskMaterial = new THREE.MeshStandardMaterial({
        color: 0x4a4a4a,
        roughness: 0.7
    });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.y = 1000;
    desk.castShadow = true;
    desk.receiveShadow = true;
    deskGroup.add(desk);

    // Desk legs
    const legPositions = [
        [-1800, 500, -1000], [1800, 500, -1000],
        [-1800, 500, 1000], [1800, 500, 1000]
    ];
    legPositions.forEach(pos => {
        const leg = new THREE.Mesh(
            new THREE.BoxGeometry(100, 1000, 100),
            new THREE.MeshStandardMaterial({ color: 0x3a3a3a })
        );
        leg.position.set(...pos);
        leg.castShadow = true;
        deskGroup.add(leg);
    });

    scene.add(deskGroup);

    // CRT Monitor
    const monitorGroup = new THREE.Group();

    // Monitor body
    const monitorBody = new THREE.Mesh(
        new THREE.BoxGeometry(1800, 1500, 1500),
        new THREE.MeshStandardMaterial({ color: 0xc0c0c0 })
    );
    monitorBody.castShadow = true;
    monitorGroup.add(monitorBody);

    // Monitor screen (just for reference/bezel)
    monitorScreen = new THREE.Mesh(
        new THREE.BoxGeometry(1300, 950, 100),
        new THREE.MeshStandardMaterial({
            color: 0x000000,
            emissive: 0x7FCFD4,
            emissiveIntensity: 0.1
        })
    );
    monitorScreen.position.z = 700;
    monitorScreen.position.y = 100;
    monitorGroup.add(monitorScreen);

    // Monitor stand
    const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(150, 150, 300, 32),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    stand.position.y = -850;
    monitorGroup.add(stand);

    const standBase = new THREE.Mesh(
        new THREE.CylinderGeometry(300, 300, 100, 32),
        new THREE.MeshStandardMaterial({ color: 0x808080 })
    );
    standBase.position.y = -1050;
    monitorGroup.add(standBase);

    monitorGroup.position.set(-500, 2300, -300);
    monitorGroup.rotation.y = 0.15;
    scene.add(monitorGroup);

    // Keyboard
    const keyboard = new THREE.Mesh(
        new THREE.BoxGeometry(1000, 100, 400),
        new THREE.MeshStandardMaterial({ color: 0xe0e0e0 })
    );
    keyboard.position.set(300, 1150, 500);
    keyboard.rotation.y = -0.1;
    keyboard.castShadow = true;
    scene.add(keyboard);

    // Mouse
    const mouse = new THREE.Mesh(
        new THREE.BoxGeometry(150, 80, 200),
        new THREE.MeshStandardMaterial({ color: 0xd0d0d0 })
    );
    mouse.position.set(1200, 1140, 600);
    mouse.castShadow = true;
    scene.add(mouse);

    // Coffee Mug
    const mug = new THREE.Mesh(
        new THREE.CylinderGeometry(150, 150, 250, 32),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    mug.position.set(1500, 1250, -500);
    mug.castShadow = true;
    scene.add(mug);

    // Papers
    const papers = new THREE.Mesh(
        new THREE.BoxGeometry(600, 150, 800),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    papers.position.set(-1500, 1180, 800);
    papers.castShadow = true;
    scene.add(papers);

    // Printer
    const printer = new THREE.Mesh(
        new THREE.BoxGeometry(800, 400, 600),
        new THREE.MeshStandardMaterial({ color: 0x505050 })
    );
    printer.position.set(-1400, 1300, -800);
    printer.castShadow = true;
    scene.add(printer);

    // Office Chair
    const chairGroup = new THREE.Group();
    const seat = new THREE.Mesh(
        new THREE.CylinderGeometry(400, 400, 100, 32),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    seat.castShadow = true;
    chairGroup.add(seat);

    const backrest = new THREE.Mesh(
        new THREE.BoxGeometry(700, 800, 100),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    backrest.position.set(0, 400, -300);
    backrest.castShadow = true;
    chairGroup.add(backrest);

    chairGroup.position.set(1200, 1200, 2000);
    chairGroup.rotation.y = -0.5;
    scene.add(chairGroup);

    // Plant
    const pot = new THREE.Mesh(
        new THREE.CylinderGeometry(200, 150, 250, 32),
        new THREE.MeshStandardMaterial({ color: 0x8B4513 })
    );
    pot.position.set(1600, 1200, -1000);
    pot.castShadow = true;
    scene.add(pot);

    // Ground plane
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(50000, 50000),
        new THREE.ShadowMaterial({ opacity: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);
}

// ===========================
// Camera Transition System
// ===========================

function transitionToState(newState, duration = 1000) {
    if (currentCameraState === newState && !freeCameraMode) return;

    if (freeCameraMode) {
        freeCameraMode = false;
        controls.enabled = false;
    }

    currentCameraState = newState;
    const keyframe = keyframes[newState];

    // Cancel existing tweens
    if (posTween) posTween.stop();
    if (targetTween) targetTween.stop();

    // Create position tween
    posTween = new TWEEN.Tween(camera.position)
        .to(keyframe.position, duration)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();

    // Create target tween
    targetTween = new TWEEN.Tween(cameraTarget)
        .to(keyframe.target, duration)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
}

// ===========================
// Event Handlers
// ===========================

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onClick(event) {
    if (freeCameraMode) return;

    // Simple state progression
    if (currentCameraState === CameraKey.IDLE) {
        transitionToState(CameraKey.DESK, 1000);
    } else if (currentCameraState === CameraKey.DESK) {
        transitionToState(CameraKey.MONITOR, 1000);
    } else if (currentCameraState === CameraKey.MONITOR) {
        transitionToState(CameraKey.DESK, 1000);
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    cssRenderer.setSize(window.innerWidth, window.innerHeight);
}

// ===========================
// Animation Loop
// ===========================

function animate() {
    requestAnimationFrame(animate);
    time += 0.016;

    // Update TWEEN
    TWEEN.update();

    // Update camera based on state (Henry's behaviors)
    if (!freeCameraMode) {
        if (currentCameraState === CameraKey.IDLE) {
            // Orbital idle animation
            const radius = 28000;
            const speed = 0.1;
            camera.position.x = Math.sin(time * speed) * radius * 0.7;
            camera.position.z = Math.cos(time * speed) * radius;
            camera.position.y = 12000 + Math.sin(time * speed * 0.5) * 2000;
            cameraTarget.set(0, -1000, 0);
        } else if (currentCameraState === CameraKey.DESK) {
            // Mouse-following behavior
            const targetX = mouseX * 2000;
            const targetY = mouseY * 1000;
            cameraTarget.x += (targetX - cameraTarget.x) * 0.05;
            cameraTarget.y += (500 + targetY - cameraTarget.y) * 0.05;

            camera.position.x += (targetX * 0.5 - camera.position.x) * 0.025;
            camera.position.y += (1800 + targetY * 0.5 - camera.position.y) * 0.025;
        }

        camera.lookAt(cameraTarget);
    } else {
        controls.update();
    }

    // Render both scenes
    renderer.render(scene, camera);
    cssRenderer.render(cssScene, camera);
}

// ===========================
// Start Application
// ===========================

document.addEventListener('DOMContentLoaded', init);

// Free camera toggle
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        freeCameraMode = !freeCameraMode;
        controls.enabled = freeCameraMode;

        if (freeCameraMode) {
            currentCameraState = CameraKey.ORBIT_CONTROLS_START;
            const keyframe = keyframes[CameraKey.ORBIT_CONTROLS_START];
            controls.target.set(keyframe.target.x, keyframe.target.y, keyframe.target.z);
        }
    }
});
