	var lightPosition = vec4(1.0, 1.0, 1.0, 0.0 );
	var lightAmbient = vec4(0.3, 0.3, 0.3, 1.0 );
	var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
	var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );
	
	var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
	var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
	var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
	var materialShininess = 100.0;

function Shader(color)
{
	
    this.program = initShaders(gl, "vertex-shader", "fragment-shader");

    gl.useProgram(this.program);
	

	
    this.vPosition = gl.getAttribLocation(this.program, "vPosition");
    this.vNormal = gl.getAttribLocation(this.program, "vNormal");

    this.mvpMatrix = gl.getUniformLocation(this.program, "mvpMatrix");
	
	this.ambientProduct = mult(lightAmbient, materialAmbient);
    this.diffuseProduct = mult(lightDiffuse, materialDiffuse);
    this.specularProduct = mult(lightSpecular, materialSpecular);
	
	gl.uniform4fv(gl.getUniformLocation(this.program, "ambientProduct"),
       flatten(this.ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(this.program, "diffuseProduct"),
       flatten(this.diffuseProduct) );
    gl.uniform4fv(gl.getUniformLocation(this.program, "specularProduct"), 
       flatten(this.specularProduct) );	
    gl.uniform4fv(gl.getUniformLocation(this.program, "lightPosition"), 
       flatten(lightPosition) );
	gl.uniform1f(gl.getUniformLocation(this.program, "shininess"),materialShininess);
}