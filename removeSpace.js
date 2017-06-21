//删除空白文本节点2
function removeSpace(node){ //node:接收的是父节点
	var childs = node.childNodes; //获取到指定父节点中所有的子节点
	for(var i = 0; i < childs.length;i ++){
		//找出空白文本节点
		if(childs[i].nodeType === 3 && /^\s+$/.test(childs[i].nodeValue)){
			node.removeChild(childs[i]);
		}
	}
	return node;
}