function isHover(e) {
    return (e.parentElement.querySelector(':hover') === e);
    }


    let myDiv = document.getElementById('single-prod');;
    document.addEventListener('mousemove', () => {
    let hovered = isHover(myDiv);
     if (hovered) {
         document.getElementById('buy-now').style.display='block';
    }
    if (!hovered){
        document.getElementById('buy-now').style.display='none';

    }
    });
    
    //three.js canvas
    const pickRando = arr => arr[Math.floor(Math.random() * arr.length)],
totesRando = (max, min) => Math.floor(Math.random() * (1 + max - min) + min),
simplex = new SimplexNoise(),
w = window.innerWidth,
h = window.innerHeight,
size = w > h ? w : h;

//RENDERER
const renderer = new THREE.WebGLRenderer({
canvas: document.getElementById('canvas'),
antialias: true });


renderer.setClearColor("#111", 1);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(size, size);

//CAMERA
const camera = new THREE.PerspectiveCamera(30, 1, 15, 50);
camera.position.set(-4, -4, -4);
camera.lookAt(new THREE.Vector3());

//SCENE
const scene = new THREE.Scene();
const shape = new THREE.SphereGeometry(1, 2, 2);
const palette = pickRando(palettes);
var mesh1;

const createGrid = () => {
const count = 15;
for (let x = 1; x < count; x++) {
for (let y = 1; y < count; y++) {
  for (let z = 1; z < count; z++) {
    const adjustedSize = Math.abs(simplex.noise3D(x, y, z) * 0.5);

    mesh1 = new THREE.Mesh(
    shape,
    new THREE.MeshPhysicalMaterial({
      color: pickRando(palette),
      roughness: 0.75,
      flatShading: true }));


    mesh1.position.set(x, y, z);

    mesh1.scale.set(
    Math.abs(adjustedSize),
    Math.abs(adjustedSize),
    Math.abs(adjustedSize));

    var sparkle = totesRando(0, 0.03);

    TweenMax.to(mesh1.scale, 1.5, {
      x: sparkle,
      y: sparkle,
      z: sparkle,
      repeat: -1,
      yoyo: true,
      ease: Bounce.easeOut,
      delay: z * 0.1 });


    scene.add(mesh1);
  }
}
}
};
createGrid();

//LIGHTS
// Specify an ambient/unlit colour
scene.add(new THREE.AmbientLight("white"));

// Add directional light
const light1 = new THREE.DirectionalLight('teal', 0.5);
light1.position.set(4, 4, 4);
scene.add(light1);

//RENDER LOOP
requestAnimationFrame(render);

function render() {
renderer.render(scene, camera);
requestAnimationFrame(render);
}

window.addEventListener('resize', () => {
camera.aspect = w / h;
camera.updateProjectionMatrix();
renderer.setSize(w, h);
}, false);

//ending
    