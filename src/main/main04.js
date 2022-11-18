import * as THREE from 'three'

// 3D物体的移动

// 导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 基础内容
const scene = new THREE.Scene();  //创建场景
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);   //创建相机 (事业角度, 长宽比, 近端, 远端)
camera.position.set(0, 0, 10); // 设置相机位置(x, y, z)
scene.add(camera) //场景添加相机


// 添加物体
const box = new THREE.BoxGeometry()  // 创建几何体
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }) //设置材质
const cube = new THREE.Mesh(box, cubeMaterial) // 根据几何体和材质创建物体

// cube.position.set(5, 0, 0) // 修改物体的位置   === cube.position.x = 5
// cube.scale.set(3, 2, 1) // 修改物体的缩放  === cube.scale.x = 5
cube.rotation.set(Math.PI / 4, 0, 0, "YZX") // 物体的旋转(默认XYZ, order: 'YZX') === cube.rotation.x = 30
scene.add(cube) // 将物体添加到场景中


// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器的大小
document.body.appendChild(renderer.domElement); // 将渲染器添加到body里

// 使用渲染器 通过相机将场景渲染出来
// renderer.render(scene, camera);


// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 添加坐标轴辅助器  (size: 默认长度1)
const axesHelper = new THREE.AxesHelper(5)  
scene.add(axesHelper);

function render () {
    cube.position.x += 0.01; // 移动
    cube.rotation.x += 0.01; // 旋转
    if (cube.position.x > 5) cube.position.x = 0
    renderer.render(scene, camera);
    //  渲染下一帧的时候就会调用render函数
    requestAnimationFrame(render)
}

render()
 