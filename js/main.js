var canHam=false;  // 滑动控制
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var agent = navigator.userAgent.toLowerCase();
var sences=[
	'E36E0F93595B46C9A1AD0AF43F80544B',
	'E2F9AC0D8000414A89CAC4F8F5D1FF99',
	'9E85485F2AA74C7B98789A73A48F115D',
	'CF12A6DAA7534C768BFBE725D0498B70',
	'2C776BB00C5E453DB8154CC605C8134D'
];
var senceload=[false,false,false,false];
var touchmove = mobile ? "touchmove" : "mousemove";
var canvas,
	 stage,mvBox,lib0;
var ww, hh, sc;
$(function () {
    init();
});
var exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var cf = 0;
cf1 = 24
cf2 = 48;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	ww = document.documentElement.clientWidth;
	hh = document.documentElement.clientHeight;
	sc = ww / 640;
	getLoad(sences[0],0);
	initSet();
	stage = new createjs.Stage(canvas);
	createjs.Touch.enable(stage);
	// createjs.Ticker.setFPS(40);
}
//设置加载；
function getLoad(tts,num){
	var comp = AdobeAn.getComposition(tts);
	var lib = comp.getLibrary();
	console.log('开始加载场景'+num);
	var loader = new createjs.LoadQueue(false);
	loader.setMaxConnections(5);
	loader.addEventListener("fileload", function (evt) {
		handleFileLoad(evt, comp,num);
	});
	loader.addEventListener("complete", function (evt) {
		handleComplete(evt, comp,num);
	});
	// lib.properties.manifest.push({src:"sounds/sea.mp3",id:"sea"});
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp, num) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
	var queue = evt.target;
	queue.addEventListener("progress", function(evt){
		handleOverallProgress(evt, comp,num);
	});	
}
//加载过程；
function handleOverallProgress(evt, comp,num) {
	var per = Math.ceil(evt.loaded * 100); //加载文件进度
}
function handleComplete(evt,comp,num) {
	senceload[num]=true;
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	console.log(ss[ssMetadata[0].name])
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	lib1 = new lib.page1();
	stage = new lib.Stage(canvas);
	AdobeAn.makeResponsive(true,'width',true,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	mvBox=new createjs.Container();
	mvBox.addChild(lib0)
	stage.addChild(mvBox);
	createjs.Ticker.framerate = lib.properties.fps;
	createjs.Ticker.addEventListener("tick", stage);
	getScence();
	stage.update();
}

function initSet() {
	//禁止双击缩放屏幕
	if (agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0) //检测是否是ios
	{
		document.body.addEventListener('touchend', function(event)
		{
			var iNow = new Date().getTime();
			iLastTouch = iLastTouch || iNow + 1 /** 第一次时将iLastTouch设为当前时间+1 */ ;
			var delta = iNow - iLastTouch;
			if (delta < 500 && delta > 0)
			{
				event.preventDefault();
				return false;
			}
			iLastTouch = iNow;
		}, false);
	}

	//在安卓中长按事件
	document.oncontextmenu = function (e) {
		e.preventDefault();
	};
}

function getScence(){
	var S=stage;
	S.on('tick',function(e){
	})
	S.addEventListener('stagemousedown',function(e){
		console.log(e)
	});
}