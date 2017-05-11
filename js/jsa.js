// JavaScript Document
function getByClass(oParent,sClass){
	var aRem=oParent.getElementsByTagName('*');
	var i=0;
	var aResult=[];
	for(i=0;i<aRem.length;i++){
		if(aRem[i].className==sClass){
			aResult.push(aRem[i]);	
		}	
	}	
	return aResult;
}

function getStyle(obj, attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];	
}


function startMove(obj,attr,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var iCur=0;
		if(attr=='opacity'){
			iCur=parseInt(parseFloat(getStyle(obj,attr))*100);	
		}else{
			iCur=parseInt(getStyle(obj,attr));
		}
		var iSpeed=(target-iCur)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		if(iCur==target){
			clearInterval(obj.timer);	
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}	
	},30);	
}