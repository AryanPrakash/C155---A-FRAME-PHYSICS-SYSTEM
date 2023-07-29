AFRAME.registerComponent('game-play', {
    schema: {
        elementid : {type: "string" , default : '#ring1'}
    },

    iscollided: function(elementid){
        const element = document.querySelector(elementid);
        element.adddEventListener('collide' , e=>{
        if(elementid.includes('#ring1')){
            console.log(elementid + 'collision')
        }
        else if(elementid.includes('#hurdle')){
            console.log(elementid + 'collision')
        }    
        }) 
    },
    update: function(){
        this.iscollided(this.data.elementid)
    }

})