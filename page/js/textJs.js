// JavaScript Document
window.onload=function(){
	//导航部分
	var oDivTop=document.getElementById('top_nav');
	var oUlTop=oDivTop.getElementsByTagName('ul')[0];
	var aLiTop=oUlTop.getElementsByTagName('li');
	
	var aDivTop=oDivTop.getElementsByClassName('hide_one');
	
	for(var i=2;i<aLiTop.length;i++){
		aLiTop[i].index=i-2;
		aLiTop[i].onmouseover=function(){
			aDivTop[this.index].style.display='block';	
		};
		aLiTop[i].onmouseout=function(){
			aDivTop[this.index].style.display='none';	
		};	
	}
	
	for(var i=0;i<aDivTop.length;i++){
		aDivTop[i].onmouseover=function(){
			this.style.display='block';	
		};
		aDivTop[i].onmouseout=function(){
			this.style.display='none';	
		};	
	}
}