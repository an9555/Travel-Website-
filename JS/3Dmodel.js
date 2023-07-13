import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setClearColor(0xFDF7C3);//更改背景顏色
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load(
  `3D_model/scene.gltf`,
  function (gltf) {
    const object = gltf.scene;
    object.scale.set(30,30,30); //將模型大小
    object.position.x = -4; //將模型向左右移動
    object.position.y = -2.5; //將模型向上下移動
    scene.add(object);
    animate(object);
  },
  function (test) {
    console.log((test.loaded / test.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

camera.position.z = 5;
const light = new THREE.DirectionalLight(); //光線
light.position.set(200, 100, 200); //光線位置在左上角
light.castShadow = true;
light.shadow.camera.left = -100;//new
light.shadow.camera.right = 100;
light.shadow.camera.top = 100;
light.shadow.camera.bottom = -100;
scene.add(light);

function animate(object) {
  requestAnimationFrame(() => animate(object));
  object.rotation.y += 0.006;//旋轉速度
//  object.rotation.x -= 0.004;//旋轉速度
  renderer.render(scene, camera);
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
