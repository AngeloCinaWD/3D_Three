// Variables
let scene, camera, renderer, controls, model, hemilight, spotlight;

function init(){
    scene = new THREE.Scene();

    // Set camera and camera position(away from origin point)
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set(0, 50, 100);

    //set the WebGLRenderer as current window size
    renderer = new THREE.WebGLRenderer();
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 2;
    renderer.setSize( window.innerWidth, window.innerHeight );

    //Add scene to page as canvas element
    document.body.appendChild( renderer.domElement );

    //OrbitControls (rotate camera and renderer)
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Set lights
    hemilight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemilight);

    spotlight = new THREE.SpotLight(0xffa95c, 4);
    spotlight.position.set(20,0,100);
    scene.add(spotlight);

    //Update window size
    window.addEventListener('resize', function() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();
    });

    // create a GLTFLoader and load a GLTF file and callbak function when loading is finish
    new THREE.GLTFLoader().load('gltf/statue/scene.gltf', result => {
      model = result.scene.children[0];
      scene.add(model);
      //Animate
      animate();
    })

}

function animate() {
  // Use renderer to render scene using camera
  renderer.render(scene, camera);
  // recursive call to animate frame
  requestAnimationFrame(animate);
}

init();
