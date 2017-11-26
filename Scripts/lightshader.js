var lightPosition = vec4(1.0, 1.0, 1.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 100.0;

function Light()
{	
   	this.program = initShaders(gl, "vertex-shader", "fragment-shader");

	
    gl.useProgram(this.program);

    this.vPosition = gl.getAttribLocation(this.program, "vPosition");
    this.vNormal = gl.getAttribLocation(this.program, "vNormal");

    this.mvpMatrix = gl.getUniformLocation(this.program, "mvpMatrix");
}