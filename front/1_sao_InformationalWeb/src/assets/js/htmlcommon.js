// import  '@/components/CommonHeader.vue'

// JavaScript Document
// var bgMusic=document.getElementById('bgMusic');
// console.log('bgMusic',bgMusic);
// var audio_headerimg=document.getElementById("audio_headerImg");

//bgMusic.src=isAudio[0].src;togglebox
// var lis=document.getElementsByTagName("a");
// var btm=document.getElementsByClassName("btm")[0];
 /*方法一 */
// export function first()
// {	
// 	var bgMusic=document.getElementById('bgMusic');
// 	console.log('bgMusic',bgMusic);
// 	var audio_headerimg=document.getElementById("audio_headerImg");
// 	if(navigator.userAgent.indexOf("Chrome")>-1)
// 	{
// 		//bgMusic.currentTime=0;
// 		bgMusic.pause();
// 		audio_headerimg.src="../assets/images/mpause.png";
// 		audio_headerimg.classList.remove("controlIcon");//移除类名为img1的css属性
// 	}
// 	else
// 	{
// 		bgMusic.play();//准备就绪后自动播放
// 		audio_headerimg.classList.add("controlIcon");//使用类名为img1的css属性
// 	}	
// }
window.onload=function()
{	
	if(navigator.userAgent.indexOf("Chrome")>-1)
	{
		//bgMusic.currentTime=0;
		bgMusic.pause();
		audio_headerimg.src="../assets/images/mpause.png";
		audio_headerimg.classList.remove("controlIcon");//移除类名为img1的css属性
	}
	else
	{
		bgMusic.play();//准备就绪后自动播放
		audio_headerimg.classList.add("controlIcon");//使用类名为img1的css属性
	}	
}
export function isImg()
{	
	if(bgMusic.paused)	
	{
			bgMusic.play();
			audio_headerimg.src="../assets/images/mplay.png";
			//bgMusic.currentTime=0;重头开始
			audio_headerimg.classList.add("controlIcon");/*当播放时图片转动*/
	}
	else
	{
		bgMusic.pause();
		audio_headerimg.src="../assets/images/mpause.png";
		//bgMusic.currentTime=0;
		audio_headerimg.classList.remove("controlIcon");/*停止时图片不转动*/
	}
}	


for(var i=0;i<lis.length;i++)
{	
	lis[i].index=i;
}
for(var i=0;i<lis.length;i++)
{	
	lis[i].onmouseenter=function()
	{	
			btm.style.display="block";
			btm.style.left=155*this.index+"px";		
	}
	lis[i].onmouseleave=function()
	{	btm.style.display="none";
		btm.style.left="0px";
	}
}/**/

//  方法二 
/*var audio_headerimgSecond=document.getElementById("audio_headerimgSecond");
var audio_headerimgFirst=document.getElementById("audio_headerimgFirst");	
function img()
{
	if(bgMusic.muted)	
	{
			bgMusic.muted=false;
			audio_headerimgSecond.style.display="block";//显示播放图片
			audio_headerimgFirst.style.display="none";//隐藏静音图片
			bgMusic.play();
			//bgMusic.currentTime=0;//重头开始
			//audio_headerimg.className="controlIconSecond";当播放时图片转动
	}
	else
	{
		//bgMusic.pause();
		bgMusic.muted=true;
		audio_headerimgFirst.style.display="block";
		audio_headerimgSecond.style.display="none";
		//bgMusic.currentTime=0;
		//audio_headerimg.className="controlIconFirst";
	}
}*/
