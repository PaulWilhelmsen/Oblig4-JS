function Shader()
{
    this.program = initShaders(gl, "vertex-shader", "fragment-shader");

    gl.useProgram(this.program);

    this.vPosition = gl.getAttribLocation(this.program, "vPosition");
    this.vNormal = gl.getAttribLocation(this.program, "vNormal");

    this.mvpMatrix = gl.getUniformLocation(this.program, "mvpMatrix");
}