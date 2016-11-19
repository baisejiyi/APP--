$('.goBtn').on('touchstart',function(){
	$(this).addClass('goBtnA');
})
$('.goBtn').on('touchend',function(){
	$(this).removeClass('goBtnA');
})

var swiper = new Swiper('.swiper-container', {
    nextButton: '.nextBtn',
    
});
$('.slid_ul li').addClass('swiper-slide');
// $('.touxiang_ul').addClass('swiper-pagination');
var swiper = new Swiper('.swiper-container2', {
    
});
// 第二页轮播图
function select(a){
	return document.querySelector(a);
}
function selectAll(a,b){
	return a.querySelectorAll(b);
}
var slid_ul=select('.slid_ul');
var lis=selectAll(slid_ul,'li');

var touxiang_ul=select('.touxiang_ul');
var btns=selectAll(touxiang_ul,'li');
slid_ul.style.width=lis[0].offsetWidth*lis.length+'px';

// 人物选择
var selectPerson=select('.select');
var persons=select('.persons');
var personImg=persons.querySelector('img');
console.log(personImg);
// selectPerson.onclick=function(){

// }
var arrPerson=['../img/人物白客.png','../img/人物韩雪.png','../img/人物明道.png','../img/人物刘语熙.png','../img/人物徐开骋.png']

for(var i=0;i<btns.length;i++){
	btns[i].index=i;
	btns[i].onclick=function(){
		indexs=this.index
		for(var j=0;j<lis.length;j++){

			lis[j].style.visibility='hidden';
		}
		lis[this.index].style.visibility='visible';
		slid_ul.style.left=-lis[0].offsetWidth*this.index+'px';
	}
	
}

var stick=select('.stick');
// console.log(stick);
selectPerson.onclick=function(){
	// console.log(indexs);
	if(indexs==1){
		persons.style.marginLeft=-104+'px';
		stick.style.top=16+'%';
		// left: 50%;
	// margin-left: -105px;
	}else if(indexs==2){
		persons.style.marginLeft=-106+'px';
		stick.style.top=17+'%';
	}else if(indexs==3){
		persons.style.marginLeft=-118+'px';
		stick.style.top=19+'%';
		// stick.style.transformOrigin='50+"%" 180+"px"';
	}
	else{
		persons.style.marginLeft=-105+'px';
		stick.style.top=17+'%';
	}
	personImg.src=arrPerson[indexs];
}


$('.select').on('touchstart',function(){
	$(this).addClass('selectA');
})
$('.select').on('touchend',function(){
	$(this).removeClass('selectA');
})


// 第三页 浮动的云朵
var divs=selectAll(document,'.cloud');
var imgs=document.querySelectorAll('.food');
var lights=document.querySelectorAll('.light');
// console.log(imgs.length);

// console.log(divs);
function round(min,max){
	return parseInt(Math.random()*(max-min)+min);
}
var cloudArr=['../img/云1.png','../img/云2.png','../img/云3.png','../img/云4.png','../img/云5.png','../img/云6.png','../img/云7.png']
function move(){
	for(var i=0;i<cloudArr.length;i++){
		 x=round(0,200);
		divs[i].style.backgroundImage="url("+cloudArr[i]+")";
		divs[i].style.left=x+'px';
	}
}
move();


var timer=null;
var speedArr=[round(2,5),round(2,6),round(3,5),round(3,7),round(3,4),round(2,5),round(3,6)]
timer=setInterval(function(){
	
	for(var i=0;i<cloudArr.length;i++){
		
		if(divs[i].offsetLeft+speedArr[i]>=640-divs[i].offsetWidth){
			speedArr[i]*=-1;	
		}
		if(divs[i].offsetLeft+speedArr[i]<=0){
			speedArr[i]*=-1;
		}
		divs[i].style.left=divs[i].offsetLeft+speedArr[i]+'px';
	}
	
},20)
var arrFood=['../img/乳酸.png','../img/宝箱.png','../img/蛋糕1.png','../img/蛋糕2.png','../img/蛋糕3.png','../img/checkcake1.png','../img/checkcake2.png','../img/checkcake3.png','../img/sugar1.png','../img/sugar2.png','../img/sugar3.png']
var arrFood1=[];
var arrLight=['../img/发光.png']
while(arrFood1.length<7){
	var srcs=round(0,10)
		for(var j=0;j<arrFood1.length;j++){
			if(srcs==arrFood1[j]){
				break;
			}
		}
	if(j==arrFood1.length){
		arrFood1.push(srcs)
	}
	// console.log(arrFood1.length);
	imgs[j].src=arrFood[arrFood1[j]];
	if(arrFood1[j]==1){
		lights[j].className='active';
		lights[j].src=arrLight[0];

	}	
}

// console.log(arrFood1);
// for(var i=0;i<arrFood1.length;i++){
// 	imgs[i].src=arrFood[arrFood1[i]];
// 	console.log(arrFood[arrFood1[i]])
// }
var startBtn=select('.startBtn');
var stick=select('.stick');
var stick1=select('.stick1');
var stickHead=select('.stickHead');
// console.log(stickImg);
// var speed=3;

var stickRotate=0;
var stickSpeed=2;

timer=setInterval(function(){
	stickRotate+=stickSpeed;
	if(stickRotate>=45){
		stickSpeed*=-1;
	}
	if(stickRotate<=-45){
		stickSpeed*=-1;
	}
	stick.style.transform='rotate('+stickRotate+'deg)';
},30)
 startBtn.onclick=function(){
 	if(stick1.offsetHeight==190){
 		stick1.className='stickChange';
 	}
	clearInterval(timer);
	var headT=stickHead.offsetTop+stickHead.offsetHeight;

	var headL=stick.offsetLeft+stickHead.offsetWidth/2;
	// console.log(stickHead.offsetLeft,stickHead.offsetWidth);
	console.log(headT,headL);
	// stick.style.animationName='none';
}




	


