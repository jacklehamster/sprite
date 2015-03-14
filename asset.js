(function() {
    
    function getMeatlyAsset() {
        var src = "meatlyjam01spritesheet.png";
        var animation = {
            "dude1_walk_left": [
                {src:src,"source-crop":[512*0,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*1,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*2,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*3,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*4,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*5,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*6,0,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*7,0,512,512],hotspot:[256,498]}
            ],
            "dude1_walk_right": [
                {src:src,"source-crop":[512*7,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*6,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*5,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*4,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*3,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*2,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*1,512,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*0,512,512,512],hotspot:[256,498]}
            ],
            "dude1_stand_left": [
                {src:src,"source-crop":[512*0,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_stand_right": [
                {src:src,"source-crop":[512*1,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_smile_left": [
                {src:src,"source-crop":[512*2,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_smile_right": [
                {src:src,"source-crop":[512*3,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_frown_left": [
                {src:src,"source-crop":[512*4,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_frown_right": [
                {src:src,"source-crop":[512*5,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_look_left": [
                {src:src,"source-crop":[512*6,512*2,512,512],hotspot:[256,498]}
            ],
            "dude1_look_right": [
                {src:src,"source-crop":[512*7,512*2,512,512],hotspot:[256,498]}
            ],
            "dude2_walk_left": [
                {src:src,"source-crop":[512*0,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*1,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*2,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*3,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*4,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*5,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*6,512*3,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*7,512*3,512,512],hotspot:[256,498]}
            ],
            "dude2_walk_right": [
                {src:src,"source-crop":[512*7,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*6,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*5,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*4,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*3,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*2,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*1,512*4,512,512],hotspot:[256,498]},
                {src:src,"source-crop":[512*0,512*4,512,512],hotspot:[256,498]}
            ],
            "dude2_stand_left": [
                {src:src,"source-crop":[512*0,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_stand_right": [
                {src:src,"source-crop":[512*1,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_smile_left": [
                {src:src,"source-crop":[512*2,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_smile_right": [
                {src:src,"source-crop":[512*3,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_frown_left": [
                {src:src,"source-crop":[512*4,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_frown_right": [
                {src:src,"source-crop":[512*5,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_look_left": [
                {src:src,"source-crop":[512*6,512*5,512,512],hotspot:[256,498]}
            ],
            "dude2_look_right": [
                {src:src,"source-crop":[512*7,512*5,512,512],hotspot:[256,498]}
            ],
            "desk_left": [
                {src:src,"source-crop":[512*0,512*6,512,512],hotspot:[256,470]}
            ],
            "desk_right": [
                {src:src,"source-crop":[512*1,512*6,512,512],hotspot:[256,470]}
            ],
            "balldude_left": [
                {src:src,"source-crop":[512*2,512*6,512,512],hotspot:[256,498]}
            ],
            "balldude_right": [
                {src:src,"source-crop":[512*3,512*6,512,512],hotspot:[256,498]}
            ],
            "cloud_left": [
                {src:src,"source-crop":[512*4,512*6,512,512],hotspot:[256,498]}
            ],
            "cloud_right": [
                {src:src,"source-crop":[512*5,512*6,512,512],hotspot:[256,498]}
            ],
            "demon_right": [
                {src:src,"source-crop":[512*6,512*6,512,512],hotspot:[256,498]}
            ],
            "demon_left": [
                {src:src,"source-crop":[512*7,512*6,512,512],hotspot:[256,498]}
            ],
            "tablet": [
                {src:src,"source-crop":[512*0,512*7,512,512],hotspot:[256,484]}
            ],
            "burger": [
                {src:src,"source-crop":[512*1,512*7,512,512],hotspot:[256,410]}
            ],
            "NES": [
                {src:src,"source-crop":[512*2,512*7,512,512],hotspot:[256,410]}
            ],
            "hat": [
                {src:src,"source-crop":[512*3,512*7,512,512],hotspot:[256,463]}
            ],
            "torch": [
                {src:src,"source-crop":[512*4,512*7,512,512],hotspot:[256,493]}
            ],
            "title": [
                {src:src,"source-crop":[512*5,512*7,512,512],hotspot:[256,400]}
            ],
            "logo": [
                {src:src,"source-crop":[512*6,512*7,512,512],hotspot:[256,490]}
            ],
            "dildo": [
                {src:src,"source-crop":[512*7,512*7,512,512],hotspot:[256,318]}
            ]
        };
        return {animation:animation};
    }
    
    window.getMeatlyAsset = getMeatlyAsset;
    
})();
