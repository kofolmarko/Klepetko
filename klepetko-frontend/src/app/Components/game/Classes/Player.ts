import { GameData } from '../data/GameData';
const Matter = (Phaser.Physics.Matter as Record<string, unknown>).Matter as typeof MatterJS;

// import Server from './Server.js';

export default class Player extends Phaser.Physics.Matter.Sprite {

  constructor(data: any, socket: any, id: string, username: string, skinNUM: number) {

    let { scene, x, y, texture, frame } = data;
    let options = { label: username };
    super(scene.matter.world, x, y, texture, frame, options);
    this.scene.add.existing(this);

    // this.server = new Server(socket);
    GameData.PlayerDataObject.id = id;
    // this.displayUsername(username);

    const { Body, Bodies } = Matter;
    let colliderY = this.y;
    let playerCollider = Bodies.circle(this.x, colliderY + 83, 30, {
      isSensor: false,
      label: 'playerCollider',
    });
    let playerSensor = Bodies.circle(this.x, colliderY + 50, 100, {
      isSensor: true,
      label: 'playerSensor',
    });
    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
    });
    this.setExistingBody(compoundBody as MatterJS.BodyType);

    // this.socket = socket;
    GameData.PlayerDataObject.username = username;
    GameData.PlayerDataObject.skinNum = skinNUM;
  }

  static preload(scene: Phaser.Scene) {
    scene.load.atlas(
      'boy_01',
      '../assets/character/Atlases/boy_01.png',
      '../assets/character/Atlases/boy_01_atlas.json'
    );
    scene.load.animation(
      'boy_01_anim',
      '../assets/character/Atlases/boy_01_anim.json'
    );
    scene.load.atlas(
      'boy_02',
      '../assets/character/Atlases/boy_02.png',
      '../assets/character/Atlases/boy_02_atlas.json'
    );
    scene.load.animation(
      'boy_02_anim',
      '../assets/character/Atlases/boy_02_anim.json'
    );
    scene.load.atlas(
      'boy_03',
      '../assets/character/Atlases/boy_03.png',
      '../assets/character/Atlases/boy_03_atlas.json'
    );
    scene.load.animation(
      'boy_03_anim',
      '../assets/character/Atlases/boy_03_anim.json'
    );
    scene.load.atlas(
      'boy_04',
      '../assets/character/Atlases/boy_04.png',
      '../assets/character/Atlases/boy_04_atlas.json'
    );
    scene.load.animation(
      'boy_04_anim',
      '../assets/character/Atlases/boy_04_anim.json'
    );
    scene.load.atlas(
      'girl_01',
      '../assets/character/Atlases/girl_01.png',
      '../assets/character/Atlases/girl_01_atlas.json'
    );
    scene.load.animation(
      'girl_01_anim',
      '../assets/character/Atlases/girl_01_anim.json'
    );
    scene.load.atlas(
      'girl_02',
      '../assets/character/Atlases/girl_02.png',
      '../assets/character/Atlases/girl_02_atlas.json'
    );
    scene.load.animation(
      'girl_02_anim',
      '../assets/character/Atlases/girl_02_anim.json'
    );
    scene.load.atlas(
      'girl_03',
      '../assets/character/Atlases/girl_03.png',
      '../assets/character/Atlases/girl_03_atlas.json'
    );
    scene.load.animation(
      'girl_03_anim',
      '../assets/character/Atlases/girl_03_anim.json'
    );
    scene.load.atlas(
      'girl_04',
      '../assets/character/Atlases/girl_04.png',
      '../assets/character/Atlases/girl_04_atlas.json'
    );
    scene.load.animation(
      'girl_04_anim',
      '../assets/character/Atlases/girl_04_anim.json'
    );
    scene.load.image('SpeechBubble', '../assets/HUD/SpeechBubble.png');
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {

    // if (GameData.PlayerDataObject.username) {
    //   this.updateUsername();
    // }

  //   if (this.bubble && this.bubbleContent) {
  //     this.updateSpeechBubble();
  //   }

  //   const speed = 5;
  //   let playerVelocity = new Phaser.Math.Vector2();

  //   if (this.inputKeys.left.isDown && this.inputKeys.right.isUp) {
  //     playerVelocity.x = -1;
  //     if (this.inputKeys.up.isUp && this.inputKeys.down.isUp) {
  //       this.anims.play(playerData.animsNames[3], true);
  //     }
  //   } else if (this.inputKeys.right.isDown && this.inputKeys.left.isUp) {
  //     playerVelocity.x = 1;
  //     if (this.inputKeys.up.isUp && this.inputKeys.down.isUp) {
  //       this.anims.play(playerData.animsNames[2], true);
  //     }
  //   }

  //   if (this.inputKeys.up.isDown && this.inputKeys.down.isUp) {
  //     playerVelocity.y = -1;
  //     this.anims.play(playerData.animsNames[1], true);
  //   } else if (this.inputKeys.down.isDown && this.inputKeys.up.isUp) {
  //     playerVelocity.y = 1;
  //     this.anims.play(playerData.animsNames[0], true);
  //   }

  //   if (
  //     this.inputKeys.down.isUp &&
  //     this.inputKeys.up.isUp &&
  //     this.inputKeys.right.isUp &&
  //     this.inputKeys.left.isUp
  //   ) {
  //     this.anims.play(playerData.animsNames[4], false);
  //   }

  //   playerVelocity.normalize();
  //   playerVelocity.scale(speed);
  //   this.setVelocity(playerVelocity.x, playerVelocity.y);

  //   this.server.playerPosition(
  //     this.id,
  //     playerVelocity,
  //     this.x,
  //     this.y,
  //     this.skinNUM
  //   );
  // }

  // updateUser(user, userVelocity, x, y, skinNUM) {

  //   if (user) {
  //     user.x = x;
  //     user.y = y;

  //     if (userVelocity.y < 0) {
  //       user.anims.play(animsNames[skinNUM][1], true);
  //     } else if (userVelocity.y > 0) {
  //       user.anims.play(animsNames[skinNUM][0], true);
  //     } else if (userVelocity.x < 0) {
  //       user.anims.play(animsNames[skinNUM][3], true);
  //     } else if (userVelocity.x > 0) {
  //       user.anims.play(animsNames[skinNUM][2], true);
  //     } else {
  //       user.anims.play(animsNames[skinNUM][4], false);
  //     }
  //   }

  //   if (user.username) {
  //     user.username.y = y + 85;
  //     user.username.x = x;
  //   }

  //   if (user.bubble && user.bubbleContent) {
  //     user.bubble.x = user.x;
  //     user.bubble.y = user.y - 70;
  //     user.bubbleContent.x = user.x + 15;
  //     user.bubbleContent.y = user.y - 114;
  //   }

  // }

  // remove() {
  //   if (this.bubble) {
  //     this.bubble.destroy();
  //     this.bubbleContent.destroy();
  //   }
  //   this.username.destroy();
  //   this.destroy();
  // }

  // displayUsername(username) {
  //   this.username = this.scene.add
  //     .text(this.x, this.y + 85, username, {
  //       fontFamily: 'Klepetko',
  //       fontSize: '20pt',
  //       strokeThickness: 2,
  //       stroke: 'black',
  //     })
  //     .setOrigin(0.5, 0.5);
  // }

  // updateUsername() {
  //   this.username.setColor('aquamarine');
  //   this.username.y = this.y + 85;
  //   this.username.x = this.x;
  // }

  // createSpeechBubble(x, y, width, height, quote) {
  //   if (this.bubble) {
  //     this.bubble.destroy();
  //     this.bubbleContent.destroy();
  //   }

  //   this.bubble = this.scene.add.image(x, y, 'SpeechBubble').setOrigin(0, 0.8);
  //   this.bubble.scale = 0.1;

  //   this.bubbleContent = this.scene.add.text(0, 0, quote, {
  //     fontFamily: 'Klepetko',
  //     fontSize: 25,
  //     color: '#000000',
  //     align: 'center',
  //     maxLines: 1,
  //     fixedWidth: 135,
  //     wordWrap: { wordWrapWidth: 135, useAdvancedWrap: true },
  //   });
  //   this.bubbleContent.setPosition(this.bubble.x, this.bubble.y);
  // }

  // updateSpeechBubble() {
  //   if (this.bubble && this.bubbleContent) {
  //     this.bubble.x = this.x;
  //     this.bubble.y = this.y - 70;
  //     this.bubbleContent.x = this.x + 15;
  //     this.bubbleContent.y = this.y - 114;
  //   }
  }

}
