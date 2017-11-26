
this.lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
this.lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
this.lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

this.materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
this.materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
this.materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
this.materialShininess = 100.0;

function Light()
{	
   	this.program = initShaders(gl, "vertex-shader", "fragment-shader");

	
    gl.useProgram(this.program);

    this.vPosition = gl.getAttribLocation(this.program, "vPosition");
    this.vNormal = gl.getAttribLocation(this.program, "vNormal");

    this.mvpMatrix = gl.getUniformLocation(this.program, "mvpMatrix");
}