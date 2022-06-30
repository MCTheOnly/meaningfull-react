import * as THREE from 'three';
// import { initScrollTo } from "./components/scrollTo";
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper, Raycaster } from 'three'
// import { DragControls } from 'three/examples/jsm/controls/DragControls'
// import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
// import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
// import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'

export default class ViewGL {

	constructor(canvas) {

		// this.radius = 5
		// this.theta = 1
		// this.dTheta = Math.PI / 200

		this.scene = new THREE.Scene();

		this.sizes = {
			x: window.innerWidth,
			y: window.innerHeight
		}

		//CAMERA
		this.camera = new THREE.PerspectiveCamera(
			70,
			this.sizes.x / this.sizes.y,
			0.1,
			1000) // (field of view, aspect ratio, near plane, far plane)

		//set camera position and point it to the center of the scene
		this.camera.position.set(-10, 5, 10)
		this.camera.lookAt(0, 0, 0)

		//LIGHTS
		//Ambient Light
		this.ambientLight = new THREE.AmbientLight(0xfffffff) //color

		this.pointLight = new THREE.PointLight(0xffffff, 1)
		this.pointLight.position.set(5, 5, 10)
		this.pointLight.lookAt(0, 0, 0)

		//OBJECTS
		this.params = {
			color: 0x4a4a4a,
			metalness: 0.9,
			roughness: 0.9,
			wireframe: false,
			// receiveShadow: true,
			// castShadow: true
		}

		this.box = new THREE.Mesh(
			new THREE.BoxGeometry(2, 2, 2, 1, 1, 1),

			new THREE.MeshPhysicalMaterial({
				...this.params,
				side: THREE.DoubleSide
			}))

		//RENDERER
		this.renderer = new THREE.WebGLRenderer({
			canvas: canvas,
			alpha: false,
			antialias: false,
		});

		this.renderer.setSize(this.sizes.x, this.sizes.y);

		this.renderer.domElement.addEventListener('resize', this.onResize(), false)

		//HELPERS
		//Orbit Controls
		this.orbitControl = new OrbitControls(this.camera, this.renderer.domElement)
		// this.orbitControl.maxPolarAngle = 1.4
		// this.orbitControl.minDistance = 14
		// this.orbitControl.maxDistance = 18
		// this.orbitControl.screenSpacePanning = false


		//Grid Helper
		// this.gridHelper = new GridHelper(
		// 	100, //size
		// 	100, //divisions
		// 	0xff0000 //middle lines color
		// )

		// this.gridHelper.position.y = - 0.1

		//SCENE OBJECTS
		this.sceneObjects = [
			this.camera,
			this.ambientLight,
			this.pointLight,
			// this.gridHelper,
			this.box
		]

		this.scene.add(...this.sceneObjects);
		console.log(this.scene)
	}

	onResize() {
		this.sizes.x = window.innerWidth
		this.sizes.y = window.innerHeight
		this.camera.aspect = this.sizes.x / this.sizes.y
		this.camera.updateProjectionMatrix()
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		this.renderer.setSize(this.sizes.x, this.sizes.y)

		this.render()
	}

	// ******************* PUBLIC EVENTS ******************* //
	updateValue(value) {
		// Whatever you need to do with React props
	}

	onMouseMove() {
		// Mouse moves
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}


	// ******************* RENDER LOOP ******************* //
	animate(t) {
		console.log('animate')

		// this.theta += this.dTheta

		// this.box.position.set(-this.radius * Math.cos(this.theta), 0, this.radius * Math.sin(this.theta))



		requestAnimationFrame(this.animate.bind(this));
		this.render()
		// this.orbitControl.update()
	}


}
