// JavaScript Document

/*var oMain=document.getElementById('main_product');
	var oDl=oMain.getElementsByTagName('dl')[0];
	var oDt=oDl.getElementsByTagName('dt')[0];
	var aDd=oDl.getElementsByTagName('dd');
	var aUl=[];
	var aSpan=[];
	var onOff=true;
	for(var i=0;i<aDd.length;i++){
		oUl=aDd[i].getElementsByTagName('ul')[0];
		aUl.push(oUl);	
	}
	for(var i=0;i<aDd.length;i++){
		var oSpan=aDd[i].getElementsByTagName('span')[0];
		aSpan.push(oSpan);	
	}
	
	for(var i=0;i<aDd.length;i++){
		var oH3=aDd[i].getElementsByTagName('h3')[0];
		var oSpan=oH3.getElementsByTagName('span')[0];
		oH3.index=i;
		oH3.onclick=function(){
			if(onOff){
				aSpan[this.index].style.backgroundPosition='0 -8px';
				aUl[this.index].style.display='block';
				onOff=false;
			}else{
				aSpan[this.index].style.backgroundPosition='0 0';
				aUl[this.index].style.display='none';
				onOff=true;	
			}
		};	
	}	*/
	
	var oBgUl=document.getElementById('bg_wrap');
	var oBgNav=oBgUl.getElementsByTagName('ul')[0];
	var aLiUl=oBgNav.getElementsByTagName('li');
	var oDiv=oBgUl.getElementsByTagName('div')[0];
	var aUlOdiv=oDiv.getElementsByTagName('ul');
	for(var i=0;i<aLiUl.length;i++){
		aLiUl[i].index=i;
		aLiUl[i].onclick=function(){
			for(var i=0;i<aLiUl.length;i++){
				aLiUl[i].className='';
				aUlOdiv[i].style.display='none';	
			}	
			this.className='bg_color1';
			aUlOdiv[this.index].style.display='block';
		};
	}
	
	
	
	