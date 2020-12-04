(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"page-4", frames: [[236,484,39,35],[102,519,39,35],[597,0,192,496],[102,425,132,92],[0,0,595,423],[236,425,63,57],[0,425,100,124]]}
    ];
    
    
    // symbols:
    
    
    
    (lib.h1 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.h2 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.ren = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.动2 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.图层41 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.形状20 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.组5 = function() {
        this.initialize(ss["page-4"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.组5();
        this.instance.setTransform(-50,-62);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-50,-62,100,124);
    
    
    (lib.元件1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.动2();
        this.instance.setTransform(-66,-46);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-66,-46,132,92);
    
    
    // stage content:
    (lib.page4 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_7
        this.instance = new lib.形状20();
        this.instance.setTransform(391,224);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).wait(31));
    
        // 图层_6
        this.instance_1 = new lib.h1();
        this.instance_1.setTransform(178,101);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},13).wait(24).to({_off:false,x:294,y:84},0).to({_off:true},10).wait(60));
    
        // 图层_5
        this.instance_2 = new lib.h2();
        this.instance_2.setTransform(196,66);
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({_off:true},14).wait(5).to({_off:false,x:475,y:93},0).to({_off:true},8).wait(10).to({_off:false,x:340,y:66},0).to({_off:true},10).wait(53));
    
        // 图层_4
        this.instance_3 = new lib.元件1("synched",0);
        this.instance_3.setTransform(312.5,333.4,1,1,0,0,0,-51.5,35.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({startPosition:0},0).to({regX:-51.4,regY:35.5,rotation:27.4597,x:312.6,y:333.5},8).wait(47));
    
        // 图层_3
        this.instance_4 = new lib.ren();
        this.instance_4.setTransform(267,192);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(110));
    
        // 图层_2
        this.instance_5 = new lib.元件2("synched",0);
        this.instance_5.setTransform(344,211);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({startPosition:0},0).to({rotation:9.9395},14).wait(35));
    
        // 图层_1
        this.instance_6 = new lib.图层41();
        this.instance_6.setTransform(33,101);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(360,458,268,230);
    // library properties:
    lib.properties = {
        id: 'CF12A6DAA7534C768BFBE725D0498B70',
        width: 654,
        height: 784,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [
            {src:"images/page-4.png", id:"page-4"}
        ],
        preloads: []
    };
    
    
    
    // bootstrap callback support:
    
    (lib.Stage = function(canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.StageGL();
    
    p.setAutoPlay = function(autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
    p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
    p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
    p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
    
    p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
    
    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if(!an.bootstrapListeners) {
        an.bootstrapListeners=[];
    }
    
    an.bootstrapCallback=function(fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if(an.bootcompsLoaded.length > 0) {
            for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };
    
    an.compositions = an.compositions || {};
    an.compositions['CF12A6DAA7534C768BFBE725D0498B70'] = {
        getStage: function() { return exportRoot.stage; },
        getLibrary: function() { return lib; },
        getSpriteSheet: function() { return ss; },
        getImages: function() { return img; }
    };
    
    an.compositionLoaded = function(id) {
        an.bootcompsLoaded.push(id);
        for(var j=0; j<an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }
    
    an.getComposition = function(id) {
        return an.compositions[id];
    }
    
    
    an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
        var lastW, lastH, lastS=1;		
        window.addEventListener('resize', resizeCanvas);		
        resizeCanvas();		
        function resizeCanvas() {			
            var w = lib.properties.width, h = lib.properties.height;			
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                }				
                else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }			
            domContainers[0].width = w * pRatio * sRatio;			
            domContainers[0].height = h * pRatio * sRatio;			
            domContainers.forEach(function(container) {				
                container.style.width = w * sRatio + 'px';				
                container.style.height = h * sRatio + 'px';			
            });			
            stage.scaleX = pRatio*sRatio;			
            stage.scaleY = pRatio*sRatio;			
            lastW = iw; lastH = ih; lastS = sRatio;            
            stage.tickOnUpdate = false;            
            stage.update();            
            stage.tickOnUpdate = true;		
        }
    }
    
    
    })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
    var createjs, AdobeAn;