var canvas;
var gl;
var kake;
var camera;
var shade;
var gameObjects = [];

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
	
    if (!gl) { alert("WebGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
	
	gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);


    var vertices = [
        0, 1, 0,     0, 1, 0, 0, 0, //0
        -1, -1, -1,   0, 1, 0, 0, 0,  //1
        -1,-1, 1,      0, 1, 0, 0, 0, //2
        1,-1, 1,      0, 1, 0, 0, 0, //3
		1,-1, -1,      0, 1, 0, 0, 0, //4
		
    ];

    var indices = [
        0,1,2,
        0,2,3,
        0,3,4,
		1,2,3,
		1,3,4
    ];
				//position, rotation, nearPlane, farPlane, fieldOfView
	camera = new Camera(vec3(0,-5,-5), vec3(20,0,0), 45, 1, 100);    
	shade = new Shader();
    
	tetramesh = new Mesh(vertices, indices, gl.TRIANGLES);
	var trepartAmount = 5;
	var size = 4;
	for(var i = 0; i < trepartAmount; i++)
		{
										//position, rotation, scale, mesh, shader
			tretop = new GameObject(vec3(0,trepartAmount - i, 0), vec3(0,0,0), vec3(0.2 + (i/size),1 - (i/size),0.2 + (i/size)), tetramesh, shade);
			gameObjects.push(tretop);
		}
    //tretop = new GameObject(vec3(0,0,0), vec3(0,0,0), vec3(1,1,1), kake, shade);
	//gameObjects.push(gameObject);
	Update();
    Render();
};

function Update(){
	
		gameObjects.forEach(function(gameObject){
	
		    gameObject.update();
	});
	
}
function Render() {
	
    gl.clear(gl.COLOR_BUFFER_BIT);
	Update();
	
	//gameObject.draw(camera);
	
	gameObjects.forEach(function(gameObject){
	
		    gameObject.draw(camera)
	});
	
    window.requestAnimFrame(Render);
}