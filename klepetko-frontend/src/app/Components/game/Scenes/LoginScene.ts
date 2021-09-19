import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext.js';
import { GameData } from "../data/GameData";

export class LoginScene extends Phaser.Scene {
  constructor() {
    super('LoginScene');
  }

  inputUsername: any;
  M: any;
  F: any;
  playBtn: any;
  isMale: boolean = false;
  isFemale: boolean = false;

  preload() {
    this.load.image('Background', '/assets/Login/Background.png');
    this.load.image('Form', '/assets/Login/Form.png');
    this.load.image('PlayBtn', '/assets/Login/PlayBtn.png');
    this.load.image('Input', '/assets/Login/Input.png');
    this.load.image('Male', '/assets/Login/Male.png');
    this.load.image('Female', '/assets/Login/Female.png');
    this.load.image('Help', '/assets/Login/Help.png');

    this.inputUsername = this.getInputUsername();
  }

  create() {
    this.add.rectangle(
      GameData.GameDataObject.width / 2,
      GameData.GameDataObject.height / 2,
      1920,
      1080,
      0xe8e9ec
    );

    this.add.image(
      GameData.GameDataObject.width / 2,
      GameData.GameDataObject.height / 2,
      'Background'
    );

    this.add.image(GameData.GameDataObject.width / 2, 540, 'Form');
    this.playBtn = this.add.image(GameData.GameDataObject.width / 2, 780, 'PlayBtn');
    this.add.image(GameData.GameDataObject.width / 2, 531, 'Input');
    this.M = this.add.sprite(902, 643, 'Male');
    this.F = this.add.sprite(1022, 643, 'Female');

    this.add.existing(this.inputUsername);
    console.log(this.inputUsername);

    this.setInteractivity();
  }

  setInteractivity(): void {
    this.playBtn
      .on('pointerover', () => {
        this.playBtn.scale *= 1.05;
      })
      .on('pointerout', () => {
        this.playBtn.scale /= 1.05;
      });

    this.playBtn
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        let username = this.inputUsername.text;

        if (username != '') {
          this.startGame(username);
        }
      });

    this.M.on('pointerover', () => {
      this.M.scale *= 1.05;
    }).on('pointerout', () => {
      this.M.scale /= 1.05;
    });

    this.F.on('pointerover', () => {
      this.F.scale *= 1.05;
    }).on('pointerout', () => {
      this.F.scale /= 1.05;
    });

    this.M.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      this.isMale = true;
      console.log('male', this.isMale);
      this.F.clearTint();
      this.M.setTint(0xf8a6ff, 0xf8a6ff, 0xf8a6ff, 0xf8a6ff);
    });

    this.F.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      this.isMale = false;
      console.log('female', this.isMale);
      this.M.clearTint();
      this.F.setTint(0xf8a6ff, 0xf8a6ff, 0xf8a6ff, 0xf8a6ff);
    });
  }

  getInputUsername(): InputTextPlugin {
    return new InputTextPlugin(this, 0, 0, 350, 70, {
      type: 'text',
      id: 'inputUsername',
      maxLength: 10,
      minLength: 3,
      placeholder: 'Vzdevek',
      readOnly: false,
      spellCheck: false,
      autoComplete: 'off',
      fontSize: '25pt',
      color: 'black',
      border: 0,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      outline: 'none',
      width: 350,
      height: 70,
      top: '530px',
      left: '960px',
      align: 'center',
      selectAll: false,
    });
  }

  startGame(username: string): void {
    this.scene.start('SchoolyardScene', { username: username, isMale: this.isMale });
  }
}
