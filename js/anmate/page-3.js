(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"page-3", frames: [[0,0,524,518],[526,0,103,134],[0,520,183,39]]}
    ];
    
    
    // symbols:
    
    
    
    (lib.bg = function() {
        this.initialize(ss["page-3"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.动1 = function() {
        this.initialize(ss["page-3"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.动2 = function() {
        this.initialize(ss["page-3"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.元件3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.动1();
        this.instance.setTransform(-51.5,-67);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-51.5,-67,103,134);
    
    
    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.动2();
        this.instance.setTransform(-91.5,-19.5);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-91.5,-19.5,183,39);
    
    
    (lib.元件1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_1
        this.instance = new lib.元件3("synched",0);
        this.instance.setTransform(-39.4,49.8,1,1,0,0,0,-39.4,49.8);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7195,x:-39.45,y:49.85},7).to({regX:-39.3,rotation:-14.9983,x:-39.3,y:49.8},16).to({regX:-39.4,rotation:0,x:-39.4},11).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-81.3,-86.4,151.2,168.60000000000002);
    
    
    // stage content:
    (lib.page3 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
    
        // 图层_3
        this.instance = new lib.元件1("synched",0);
        this.instance.setTransform(302.15,335.1,1,1,0,0,0,-37.6,52.1);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({mode:"single",startPosition:34},0).wait(16));
    
        // 图层_2
        this.instance_1 = new lib.元件2("synched",0);
        this.instance_1.setTransform(304.65,227.2);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).wait(6).to({startPosition:0},0).wait(12));
    
        // 图层_1
        this.instance_2 = new lib.bg();
        this.instance_2.setTransform(63,158);
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(390,550,197,126);
    // library properties:
    lib.properties = {
        id: '9E85485F2AA74C7B98789A73A48F115D',
        width: 654,
        height: 784,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [
            {src:"images/page-3.png", id:"page-3"}
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
    an.compositions['9E85485F2AA74C7B98789A73A48F115D'] = {
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