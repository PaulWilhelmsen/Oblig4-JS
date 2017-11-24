function Camera(position, rotation, nearPlane, farPlane, fieldOfView) {
    this.position = position;
    this.rotation = rotation;
    this.nearPlane = nearPlane;
    this.farPlane = farPlane;
    this.fieldOfView = fieldOfView;
    this.perspectiveMatrix = perspective(this.fieldOfView, 1, this.nearPlane, this.farPlane);
}

Camera.prototype.getMatrix = function ()
{
    //View matrix
    var mat = mat4();
    mat = mult(mat, rotate(this.rotation[0], 1, 0, 0));
    mat = mult(mat, rotate(this.rotation[1], 0, 1, 0));
    mat = mult(mat, rotate(this.rotation[2], 0, 0, 1));
    mat = mult(mat, translate(this.position[0], this.position[1], this.position[2]));
    
	this.matrix = mat;
    
	return mat;
}