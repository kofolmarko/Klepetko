import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext.js';

export class LoginScene extends Phaser.Scene {
  constructor() {
    super('LoginScene');
  }

  inputText: any;

  gameData = {
    width: 1920,
    height: 1080,
  };

  preload() {
    this.load.image('Background', '/assets/Login/Background.png');
    this.load.image('Form', '/assets/Login/Form.png');
    this.load.image('PlayBtn', '/assets/Login/PlayBtn.png');
    this.load.image('Input', '/assets/Login/Input.png');
    this.load.image('Moski', '/assets/Login/Moski.png');
    this.load.image('Zenska', '/assets/Login/Zenska.png');
    this.load.image('Help', '/assets/Login/Help.png');

    this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);

    this.inputText = new InputTextPlugin(this, 0, 0, 350, 70, {
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

      selectAll: false
  });
  }

  create() {
    this.add.rectangle(
      this.gameData.width / 2,
      this.gameData.height / 2,
      1920,
      1080,
      0xe8e9ec
    );

    this.add.image(
      this.gameData.width / 2,
      this.gameData.height / 2,
      'Background'
    );

    this.add.image(this.gameData.width / 2, 540, 'Form');
    const playBtn = this.add.image(this.gameData.width / 2, 780, 'PlayBtn');
    this.add.image(this.gameData.width / 2, 531, 'Input');
    const M = this.add.sprite(902, 643, 'Moski');
    const F = this.add.sprite(1022, 643, 'Zenska');

    this.add.existing(this.inputText);
    console.log(this.inputText)
  }
}
