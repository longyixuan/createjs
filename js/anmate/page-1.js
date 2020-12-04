(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"page-1", frames: [[0,0,641,671],[0,673,145,140],[147,673,146,92],[295,673,92,137]]}
    ];
    // symbols:
    (lib.eee1 = function() {
        this.initialize(ss["page-1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    (lib.mao = function() {
        this.initialize(ss["page-1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    (lib.ss = function() {
        this.initialize(ss["page-1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    (lib.uuy2 = function() {
        this.initialize(ss["page-1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    // helper functions:
    function mc_symbol_clone() {
        var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
        clone.gotoAndStop(this.currentFrame);
        clone.paused = this.paused;
        clone.framerate = this.framerate;
        return clone;
    }
    function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
        var prototype = cjs.extend(symbol, cjs.MovieClip);
        prototype.clone = mc_symbol_clone;
        prototype.nominalBounds = nominalBounds;
        prototype.frameBounds = frameBounds;
        return prototype;
        }
    (lib.元件2 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // 图层_1
        this.instance = new lib.uuy2();
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,92,137), null);
    (lib.元件1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // 图层_1
        this.instance = new lib.ss();
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        this._renderFirstFrame();
    }).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,146,92), null);
    // stage content:
    (lib.page1 = function(mode,startPosition,loop) {
        this.initialize(mode,startPosition,loop,{});
        // 图层_3
        this.instance = new lib.元件2();
        this.instance.setTransform(113.7,358.35,1,1,-2.9845,0,0,80.9,117.4);
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({regX:80.8,rotation:-6.9265,x:113.8,y:358.45},6).to({rotation:-1.9387},7).wait(50));
        // 图层_2
        this.instance_1 = new lib.元件1();
        this.instance_1.setTransform(304.6,374.8,1,1,0,0,0,14.6,78.8);
        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:10.9584,x:304.55},9).to({rotation:0,x:304.6},10).to({rotation:10.9584,x:304.55},10).to({rotation:0,x:304.6},10).to({rotation:10.9584,x:304.55},9).wait(22));
        // 图层_4
        this.instance_2 = new lib.mao();
        this.instance_2.setTransform(389,276);
        this.instance_2._off = true;
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).wait(22));
        // 图层_1
        this.instance_3 = new lib.eee1();
        this.instance_3.setTransform(6,70);
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));
        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(333,462,314,279);
    // library properties:
    lib.properties = {
        id: 'E36E0F93595B46C9A1AD0AF43F80544B',
        width: 654,
        height: 784,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [
            {src:"images/page-1.png", id:"page-1"}
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
    an.compositions['E36E0F93595B46C9A1AD0AF43F80544B'] = {
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