class MainScene extends Phaser.Scene {

    constructor() {
        super({ key: "MainScene" });
    }

    preload() {
        this.load.image("earth", "https://cdn.phaser.io/sandbox/square-earth.png");
        this.load.image('star', 'star.png'); // Replace 'path/to/image.png' with the actual path
   
    }

    create() {

        const Camerashape = new Phaser.Geom.Rectangle(0,0,this.cameras.main.width,this.cameras.main.height);

        var starEmitter = this.add.particles(0, 0, 'star', {
              lifespan: { min: 1000, max: 20000 },
              scale: {values:[0,1,0,1,0],interpolation: 'linear'},
              alpha:{min:0.1, max:1},
              frequency: 4,
              blendMode: 'ADD'
          });
          this.camerastars = starEmitter.addEmitZone({source:Camerashape});
          

        this.earth = this.add.image(400, 350, "earth");



        
    }

    update(time) {
        this.earth.rotation += 0.005;
        this.earth.y = this.earth.y + Math.sin(time / 1000 * 2)
    }

}

new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-game',  // Attach the game to the div with id 'phaser-game'
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#111111',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [ MainScene ]
});
