define(function(require,exports,module) {
	//导入require
	//导出exports
	//批量导出module
	
	var M=require('move');
	
	exports.play=function (id){
		var oPlay = document.getElementById(id);
		var oOl = oPlay.children[0];
		var oUl = oPlay.children[1];
		var aBtn = oOl.children;
		var aLi = oUl.children;
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onclick=function(){
					for(var i=0;i<aBtn.length;i++){
						aBtn[i].className='';
					}
					this.className='active';
					M.startMove(oUl,{top:-index*aLi[0].offsetHeight});
				};
			})(i);
		}
	};

});

