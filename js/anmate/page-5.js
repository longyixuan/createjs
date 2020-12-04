(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{
        name: "page-5",
        frames: [
            [0, 0, 243, 560],
            [245, 0, 243, 560],
            [0, 562, 551, 144],
            [490, 154, 82, 82],
            [490, 0, 127, 152],
            [490, 238, 80, 62],
            [496, 302, 18, 4],
            [490, 302, 4, 22]
        ]
    }];


    // symbols:



    (lib.bc1 = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();



    (lib.bc2 = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();



    (lib.bg = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();



    (lib.biao = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();



    (lib.datou = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();



    (lib.luan = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();



    (lib.z1 = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();



    (lib.z2 = function () {
        this.initialize(ss["page-5"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();



    (lib.元件4 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.datou();
        this.instance.setTransform(-63.5, -76);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63.5, -76, 127, 152);


    (lib.元件2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.z1();
        this.instance.setTransform(-9, -2);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-9, -2, 18, 4);


    (lib.元件1 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.z2();
        this.instance.setTransform(-2, -11);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-2, -11, 4, 22);


    (lib.元件6 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.元件4("synched", 0);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-63.5, -76, 127, 152);


    (lib.元件5 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_1
        this.instance = new lib.元件6("synched", 0);
        this.instance.setTransform(5.2, 54.9, 0.5426, 0.5426, 0, 0, 0, 5.2, 54.9);

        this.timeline.addTween(cjs.Tween.get(this.instance).to({
            regX: 5.3,
            regY: 55,
            scaleX: 0.9297,
            scaleY: 0.9297,
            x: 5.3,
            y: 55
        }, 7).to({
            regX: 5.2,
            regY: 54.9,
            scaleX: 0.5426,
            scaleY: 0.5426,
            x: 5.2,
            y: 54.9
        }, 8).wait(1));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-58.6, -66.8, 118, 141.3);


    // stage content:
    (lib.page = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // 图层_9
        this.instance = new lib.元件5("synched", 0);
        this.instance.setTransform(353.3, 208.85);
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({
            _off: false
        }, 0).wait(31).to({
            mode: "single"
        }, 0).wait(14));

        // 图层_7
        this.instance_1 = new lib.luan();
        this.instance_1.setTransform(224, 182);
        this.instance_1._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({
            _off: false
        }, 0).wait(54));

        // 图层_6
        this.instance_2 = new lib.bc2();
        this.instance_2.setTransform(207, 182);
        this.instance_2._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(10).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(66));

        // 图层_5
        this.instance_3 = new lib.bc1();
        this.instance_3.setTransform(207, 182);

        this.timeline.addTween(cjs.Tween.get(this.instance_3).to({
            _off: true
        }, 9).wait(10).to({
            _off: false
        }, 0).to({
            _off: true
        }, 10).wait(10).to({
            _off: false
        }, 0).wait(66));

        // 图层_4
        this.instance_4 = new lib.元件1("synched", 0);
        this.instance_4.setTransform(552, 405.5, 1, 1, 0, 0, 0, 0, 9.5);

        this.timeline.addTween(cjs.Tween.get(this.instance_4).to({
            rotation: 2160
        }, 104).wait(1));

        // 图层_3
        this.instance_5 = new lib.元件2("synched", 0);
        this.instance_5.setTransform(552, 405, 1, 1, 0, 0, 0, -7, 0);

        this.timeline.addTween(cjs.Tween.get(this.instance_5).to({
            rotation: 201.4942,
            x: 551.95
        }, 104).wait(1));

        // 图层_2
        this.instance_6 = new lib.biao();
        this.instance_6.setTransform(511, 364);

        this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105));

        // 图层_1
        this.instance_7 = new lib.bg();
        this.instance_7.setTransform(63, 103);

        this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(105));

        this._renderFirstFrame();

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(390, 495, 224, 247);
    // library properties:
    lib.properties = {
        id: '2C776BB00C5E453DB8154CC605C8134D',
        width: 654,
        height: 784,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0.00,
        manifest: [{
            src: "images/page-5.png",
            id: "page-5"
        }],
        preloads: []
    };



    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.StageGL();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    }
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    }
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
    }
    p.getDuration = function () {
        return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
    }

    p.getTimelinePosition = function () {
        return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
    }

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions['2C776BB00C5E453DB8154CC605C8134D'] = {
        getStage: function () {
            return exportRoot.stage;
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        }
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    }

    an.getComposition = function (id) {
        return an.compositions[id];
    }


    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + 'px';
                container.style.height = h * sRatio + 'px';
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }


})(createjs = createjs || {}, AdobeAn5 = AdobeAn5 || {});
var createjs, AdobeAn5;