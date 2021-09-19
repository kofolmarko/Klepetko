import { GameData } from '../data/GameData';
import { GameUtil } from "../util/GameUtil";
import Player from '../Classes/Player';

export class SchoolyardScene extends Phaser.Scene {
  constructor() {
    super('SchoolyardScene');
  }

  init(data: any) {
    GameData.initPlayerData(data);
  }

  preload() {
    GameUtil.loadingAnim(this);
    Player.preload(this);
    this.load.image('Outside', 'assets/Rooms/Outside.png');
    GameUtil.preloadHUD(this);
    // setSocketEvents(this);
  }

  create() {
    GameUtil.createHUD(this);
    GameUtil.setBounds(this);
    this.createBackground();
    GameUtil.spawnPlayer(this);
    // if (GameData.PlayerDataObject.chatBool) {
    //   GameData.PlayerDataObject.chat.style.display = 'block';
    //   GameData.PlayerDataObject.chatBool = false;
    // }
  }

  createBackground() {
    this.add.image(GameData.GameDataObject.width / 2 - 0.5, 490, 'Outside');

    // this.schoolEntrance = this.matter.add.rectangle(
    //   GameData.GameDataObject.width / 2,
    //   200,
    //   100,
    //   50,
    //   0xff0000,
    //   1
    // );
    // this.schoolEntrance.isStatic = true;
    // this.schoolEntranceBorder = this.matter.add.rectangle(
    //   gameData.width / 2,
    //   200,
    //   120,
    //   70,
    //   0xff0000,
    //   1
    // );
    // this.schoolEntranceBorder.isStatic = true;
  }

  // createHitboxes() {
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2,
  //     140,
  //     550,
  //     300,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 222,
  //     358,
  //     198,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 222,
  //     538,
  //     198,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 222,
  //     358,
  //     198,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 232,
  //     538,
  //     198,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 832,
  //     358,
  //     300,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 832,
  //     538,
  //     300,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 832,
  //     358,
  //     300,
  //     10,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 832,
  //     538,
  //     300,
  //     10,
  //     0xff0000
  //   ).isStatic = true;

  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 545,
  //     781,
  //     270,
  //     105,
  //     0xff0000
  //   ).isStatic = true;

  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 235,
  //     771,
  //     120,
  //     220,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 185,
  //     775,
  //     120,
  //     220,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 780,
  //     630,
  //     120,
  //     220,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 + 770,
  //     195,
  //     120,
  //     220,
  //     0xff0000
  //   ).isStatic = true;
  //   this.matter.add.rectangle(
  //     GameData.GameDataObject.width / 2 - 790,
  //     660,
  //     120,
  //     220,
  //     0xff0000
  //   ).isStatic = true;
  // }

  // createCollisionEvents() {
  //   this.schoolEntrance.onCollideCallback = (pair) => {
  //     if (pair.bodyB.gameObject.id == playerData.id) {
  //       this.enterText = this.add.image(
  //         gameData.width / 2,
  //         gameData.height / 2 - 90,
  //         'EnterText'
  //       );
  //       // this.enterText.scale = 0.3;
  //       this.input.keyboard.on('keydown_E', () => this.enterSchool(), this);
  //     }
  //   };

  //   this.schoolEntrance.onCollideEndCallback = (pair) => {
  //     if (this.enterText && pair.bodyB.gameObject.id == playerData.id) {
  //       this.enterText.destroy();
  //     }
  //     this.input.keyboard.removeAllListeners('keydown_E');
  //   };
  // }

  update() {
    // this.player.update();

    // Disable movement while typing (may get removed for efficency)
    // if (this.message.input === document.activeElement) {
    //   this.input.keyboard.enabled = false;
    // } else {
    //   this.input.keyboard.enabled = true;
    // }
  }

  // Spawn other users
  // spawnUser(user, user_id) {
  //   spawnOtherUser(user, user_id, this);
  // }

  // enterSchool() {
  //   changeRoom(1, 2, this);
  // }
}
