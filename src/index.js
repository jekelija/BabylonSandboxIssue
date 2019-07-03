import { Scene, Engine, MeshBuilder, ArcRotateCamera, Vector3, HemisphericLight, PointLight } from '@babylonjs/core';
import "@babylonjs/core/Debug/debugLayer"; // Augments the scene with the debug methods
import "@babylonjs/inspector"; // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version

var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new Scene(engine);
    scene.debugLayer.show();


    // Add a camera to the scene and attach it to the canvas
    var camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new Vector3(0,0,5), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
    var light2 = new PointLight("light2", new Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    var sphere = MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);

    return scene;
};
/******* End of the create scene function ******/    

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
        scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () { 
        engine.resize();
});