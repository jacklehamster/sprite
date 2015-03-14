(function() {

    var recyclingBin = [];  //  object pool
    
    function createSprite(asset,options) {
        if(!options) options = {};

        var div;
        if(recyclingBin.length) {
            div = recyclingBin.pop();
        }
        else {
            div = document.createElement("div");
            div.style.position = "absolute";
            div.style.posLeft = div.style.left = "0px";
            div.style.posTop = div.style.top = "0px";
            div.style.pointerEvents = "none";
        }
        
        
        var labels = [];
        div.asset = asset;
        div.index = 0;
        div.labels = labels;
        div.scale = 1;
        div.backgroundSizes = {};
        div.pos = {x:0,y:0};
        div.fps = 30;
        div.hotspotVisible = false;
        
        var imgsToLoad = {};
        var count = 0;

        for(var label in asset.animation) {
            if(!div.label) div.label = label;
            var sequence = asset.animation[label];
            labels.push(label);
            for(var i=0;i<sequence.length;i++) {
                var data = sequence[i];
                if(!imgsToLoad[data.src]) {
                    imgsToLoad[data.src] = true;
                    count++;
                    checkBackgroundSize(div,data,
                        function(src,img) {
                            count--;
                            if(!count) div.ready = true;
                        }
                    );
                }
            }
        }
        
        //  PUBLIC FUNCTIONS
        div.update = update;
        div.next = next;
        div.animate = animate;
        div.gotoAndPlay = gotoAndPlay;
        div.setScale = setScale;
        div.moveTo = moveTo;
        div.setHotspotVisible = setHotSpotVisible;

        div.update();
        div.animate(typeof(options.animate)=="undefined" || option.animate);
        
        return div;
    }
    
    //  This function checks the size of a background image used. When scaling, we need to adjust that size
    function checkBackgroundSize(div,data,callback) {
        var img = new Image();
        img.addEventListener("load",
            function(event) {
                div.backgroundSizes[data.src] = [img.naturalWidth,img.naturalHeight];
                callback();
            });
        img.src = data.src;
    }
    
    //  Change the label
    function gotoAndPlay(label) {
        var div = this;
        if(div.labels.indexOf(label)>=0 && div.label!=label) {
            div.index = 0;
            div.label = label;
            div.update();
        }
    }
    
    //  Remove and recycle the sprite
    function destroy() {
        var div = this;
        if(div.parentElement) {
            div.parentElement.removeChild(div);
        }
        if(recyclingBin.indexOf(div)<0) {
            recyclingBin.push(div);
        }
    }
    
    //  This is the refresh function, readjusting the parameters when something has changed
    function update() {
        var div = this;
        if(div.ready) {
            var sequence = div.asset.animation[div.label];
            var data = sequence[div.index%sequence.length];
            div.style.backgroundImage = "url("+data.src+")";
            var sourceCrop = data["source-crop"];
            div.style.backgroundPosition = -sourceCrop[0]*div.scale+"px "+ -sourceCrop[1]*div.scale+"px";
            div.style.width = sourceCrop[2]*div.scale+"px";
            div.style.height = sourceCrop[3]*div.scale+"px";
            var hotSpot = data.hotspot;
            div.style.marginLeft = -hotSpot[0]*div.scale+"px";
            div.style.marginTop = -hotSpot[1]*div.scale+"px";
            var backgroundSize = div.backgroundSizes[data.src];
            div.style.backgroundSize = div.scale*backgroundSize[0]+"px " +           
                div.scale*backgroundSize[1]+"px ";
            updateHotSpotPosition(div);
        }
    }
    
    //  Change the scale
    function setScale(value) {
        var div = this;
        div.scale = value;
        div.update();
    }
    
    //  Move the sprite
    function moveTo(x,y) {
        var div = this;
        div.pos.x = x;
        div.pos.y = y;
        div.style.transform = "translate("+x+"px,"+y+"px)";
    }
    
    function next() {
        var div = this;
        var sequence = div.asset.animation[div.label];
        div.index = (div.index+1)%sequence.length;
    }
    
    function animate(value) {
        var div = this;
        if(value!=div.animated) {
            div.animated = value;

            var lastAnimation = 0;
            function performAnimation(now) {
                var timeDiff = now-lastAnimation;
                if(timeDiff>1000/div.fps) {
                    div.next();
                    div.update();
                    lastAnimation = now;
                }
                
                if(div.animated)
                    requestAnimationFrame(performAnimation);
            }
            requestAnimationFrame(performAnimation);
        }
    }
    
    function updateHotSpotPosition(div) {
        if(hotspotDiv) {
            var sequence = div.asset.animation[div.label];
            var data = sequence[div.index%sequence.length];
            var hotSpot = data.hotspot;
            hotspotDiv.style.marginLeft = (hotSpot[0]*div.scale-10)+"px";
            hotspotDiv.style.marginTop = (hotSpot[1]*div.scale-10)+"px";
        }
    }
    
    var hotspotDiv = null;
    function setHotSpotVisible(value) {
        var div = this;
        if(value) {
            div.hotspotVisible = value;
            if(!hotspotDiv) {
                var cross = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAP0lEQVQ4je2TsQ0AMAzCrD6e0+nQA2JV7RYkNmQWAKlA2awFxuTW09YBDvASGKhAOsMZd2P/pnnKAD8CtexoN6jSK/Ocry2hAAAAAElFTkSuQmCC";
                var img = new Image();
                img.src = cross;
                div.appendChild(img);
                hotspotDiv = img;
                updateHotSpotPosition(div);
            }
        }
        else {
            if(hotspotDiv) {
                div.removeChild(hotspotDiv);
                hotspotDiv = null;
            }
        }
    }
    
    window.createSprite = createSprite;
})();
