function GameObject(position, rotation, scale, mesh, shader)
{
    this.transform = new Transform(position, rotation, scale);
    this.mesh = mesh;
    this.shader = shader;
}

GameObject.prototype.draw = function(camera)
{
    var mat = mult(camera.getMatrix(), this.transform.getMatrix());
	
    gl.uniformMatrix4fv(this.shader.mvpMatrix, false, flatten(mat));
 	gl.uniformMatrix4fv(this.shader.projectionMatrix, false, flatten(camera.perspectiveMatrix));

    this.mesh.draw(this.shader);
}

GameObject.prototype.update = function()
{
    this.transform.rotate(vec3(0, 0.4, 0));
}