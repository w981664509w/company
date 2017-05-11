// JavaScript Document
window.onload=function(){
	//轮播图
	var oPic=document.getElementById('pic');
	var oUl=oPic.getElementsByTagName('ul')[0];
	var aLiUl=oUl.getElementsByTagName('li');
	
	var oOl=oPic.getElementsByTagName('ol')[0];
	var aLiOl=oOl.getElementsByTagName('li');
	
	var oMarkLeft=getByClass(oPic,'mark_left')[0];
	var oMarkRight=getByClass(oPic,'mark_right')[0];
	
	var oBtnPrev=getByClass(oPic,'prev')[0];
	var oBtnNext=getByClass(oPic,'next')[0];
	var i=0;
	var iMinZindex=2;
	var iNow=0;
	var timer=null;
	
	oPic.onmouseover=function(){
		clearInterval(timer);	
	};
	
	oPic.onmouseout=fnTab;
	
	function fnTab(){
		timer=setInterval(function(){
			iNow++;
			iNow%=aLiOl.length;
			tab();
		},2000);
	}
	
	//轮播图
	for(i=0;i<aLiOl.length;i++){
		aLiOl[i].index=i;
		aLiOl[i].onclick=function(){
			clearInterval(timer);
			if(this.index==iNow) return;
			iNow=this.index;
			tab();
		};	
	}	
	
	function tab(){
		for(var i=0;i<aLiOl.length;i++){
			aLiOl[i].className='';	
		}
		aLiOl[iNow].className='active';
		aLiUl[iNow].style.zIndex=iMinZindex++;
		aLiUl[iNow].style.height=0;
		startMove(aLiUl[iNow],'height',oUl.offsetHeight);	
	}
	
	oBtnPrev.onclick=function(){
		iNow--;
		if(iNow==-1){
			iNow=aLiOl.length-1;	
		}	
		tab();
	};
	oBtnNext.onclick=function(){
		iNow++;
		if(iNow==aLiOl.length){
			iNow=0;	
		}	
		tab();
	};
	
	//transform
	
	
	
};