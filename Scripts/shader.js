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
	
	gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
       flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
       flatten(diffuseProduct) );
    gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"), 
       flatten(specularProduct) );	
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), 
       flatten(lightPosition) );
	    gl.uniform1f(gl.getUniformLocation(program, 
       "shininess"),materialShininess);
}