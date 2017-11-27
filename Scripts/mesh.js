function Mesh(vertices, indices, drawMode) {
	
//	this.normalArray = [];
//	for (var i = 0;i<indices; i+=3)
//		{
//			var t1 = subtract(vertices[i+1].xyz, vertices[i].xyz);
//    		var t2 = subtract(vertices[i+2].xyz, vertices[i+1].xyz);
//    		var normal = cross(t1, t2);
//    		var normal = vec3(normal);
//	
//			normalsArray.push(normal);
//		}
	

	
	
    this.vertexBuffer = gl.createBuffer();
	
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	
    this.indexBuffer = gl.createBuffer();
	
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
	
    this.indices = indices.length;
    this.drawMode = drawMode;
}
Mesh.prototype.draw = function (shader) {
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	
    if (shader.vPosition != -1) {
        gl.vertexAttribPointer(shader.vPosition, 3, gl.FLOAT, false, 8 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.enableVertexAttribArray(shader.vPosition);
    }
    var offset = 3 * Float32Array.BYTES_PER_ELEMENT;
    if (shader.vNormal != -1) {
        gl.vertexAttribPointer(shader.vNormal, 3, gl.FLOAT, false, 8 * Float32Array.BYTES_PER_ELEMENT, offset);
        gl.enableVertexAttribArray(shader.vNormal);
    }/*
    offset = 6 * Float32Array.BYTES_PER_ELEMENT;
    if (shader.vTexCoord != -1) {
        gl.vertexAttribPointer(shader.vTexCoord, 2, gl.FLOAT, false, 8 * Float32Array.BYTES_PER_ELEMENT, offset);
        gl.enableVertexAttribArray(shader.vTexCoord);
    }*/
    gl.drawElements(this.drawMode, this.indices, gl.UNSIGNED_SHORT, 0);
}
