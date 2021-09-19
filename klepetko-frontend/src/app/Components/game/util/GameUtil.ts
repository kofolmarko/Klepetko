import { GameData } from '../data/GameData';
import Player from "../Classes/Player";

export class GameUtil {
  static loadingAnim(scene: Phaser.Scene) {
    var progressBG = scene.add.graphics();
    var progressBar = scene.add.graphics();
    var progressBox = scene.add.graphics();
    progressBG.fillStyle(0xef4288, 1);
    progressBox.fillStyle(0x222222, 0.2);
    progressBG.fillRect(
      0,
      0,
      GameData.GameDataObject.width,
      GameData.GameDataObject.height
    );
    progressBox.fillRoundedRect(
      GameData.GameDataObject.width / 2 - 160,
      GameData.GameDataObject.height / 2 - 25,
      320,
      50,
      25
    );

    scene.load.on('progress', (value: any) => {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRoundedRect(
        GameData.GameDataObject.width / 2 - 150,
        GameData.GameDataObject.height / 2 - 15,
        300 * value,
        30,
        15
      );
    });

    scene.load.on('fileprogress', function (file: any) {});

    scene.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
    });
  }

  static preloadHUD = (scene: Phaser.Scene) => {
    scene.load.image('HUD', '/assets/HUD/Background.png');
    scene.load.image('Coins', '/assets/HUD/Coins.png');
    scene.load.image('Map', '/assets/HUD/Map.png');
    scene.load.image('Chat', '/assets/HUD/Chat.png');
    scene.load.image('EmojiChat', '/assets/HUD/EmojiChat.png');
    scene.load.image('Help', '/assets/HUD/Help.png');
    scene.load.image('HelpClose', '/assets/HUD/HelpClose.png');
    scene.load.image('HelpPopup', '/assets/HUD/HelpPopup.png');
    scene.load.image('InputChat', '/assets/HUD/InputChat.png');
    scene.load.image('EnterText', '/assets/HUD/Enter.png');
    scene.load.image('ExitText', '/assets/HUD/Exit.png');
    scene.load.image('Play', '/assets/HUD/Play.png');
    scene.load.image('SLO', '/assets/HUD/SLO.png');
    scene.load.image('ANG', '/assets/HUD/ANG.png');
    scene.load.image('MAT', '/assets/HUD/MAT.png');
    scene.load.image('MapMain', '/assets/HUD/Map/Outside.png');
    scene.load.image('MapHallway', '/assets/HUD/Map/Hallway.png');
    scene.load.image('MapClassroom', '/assets/HUD/Map/Classroom.png');
    scene.load.image('MapLocker', '/assets/HUD/Map/Locker.png');
  };

  static createHUD = (scene: Phaser.Scene) => {
    scene.add.rectangle(
      GameData.GameDataObject.width / 2,
      GameData.GameDataObject.height / 2,
      1920,
      1080,
      0xffffff
    );
    scene.add.image(
      GameData.GameDataObject.width / 2,
      GameData.GameDataObject.height - 60,
      'HUD'
    );
    const map = scene.add.image(1758, 1030, 'Map');
    scene.add.image(204, 1030, 'Coins');
    scene.add.text(195, 1014, GameData.PlayerDataObject.coins, {
      fontFamily: 'Klepetko',
      fontSize: '30',
      color: '#DED7E9',
    });
    const chatbox = document.getElementById('chat-main');
    const chat = scene.add.image(70, 1030, 'Chat');
    map.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      GameUtil.showMap(scene);
    });
    // chat.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
    //   if (chatbox.style.display == 'none') {
    //     chatbox.style.display = 'block';
    //   } else {
    //     chatbox.style.display = 'none';
    //   }
    // });
    const help = scene.add.image(1850, 1030, 'Help');
    help.setInteractive({ useHandCursor: true }).on('pointerdown', () => {
      GameUtil.showHelp(scene);
    });
    scene.add.image(960, 1030, 'InputChat');
    const emojiPanel = document.getElementById('emoji_wrapper');
    const emojiBtn = scene.add.sprite(1512, 1030, 'EmojiChat');
    // emojiBtn.setInteractive({ cursor: 'pointer' }).on('pointerdown', () => {
    //   if (emojiPanel.style.display == 'none') {
    //     emojiPanel.style.display = 'block';
    //   } else {
    //     emojiPanel.style.display = 'none';
    //   }
    // });
    scene.add.image(80, 1030, 'Profile').scale = 0.28;
    GameUtil.showHelp(scene);
    GameUtil.showHelp(scene);
  };

  static showMap = (scene: any) => {
    let mapName = '';
    switch (GameData.GameDataObject.scene) {
      case 'SchoolyardScene': {
        mapName = 'MapMain';
        break;
      }
      case 'HallwayScene': {
        mapName = 'MapHallway';
        break;
      }
      case 'ClassroomScene': {
        mapName = 'MapClassroom';
        break;
      }
      case 'LockerScene': {
        mapName = 'MapLocker';
        break;
      }
    }
    if (!GameData.GameDataObject.isMapOpen) {
      scene.mapPopup = scene.add.image(
        GameData.GameDataObject.width / 2,
        GameData.GameDataObject.height / 2,
        mapName
      );
      GameData.GameDataObject.isMapOpen = true;
    } else {
      scene.mapPopup.destroy();
      GameData.GameDataObject.isMapOpen = false;
    }
  };

  static showHelp = (scene: any) => {
    if (!GameData.GameDataObject.isHelpOpen) {
      scene.helpPopup = scene.add.image(
        GameData.GameDataObject.width / 2,
        GameData.GameDataObject.height / 2 - 60,
        'HelpPopup'
      );
      scene.helpPopup.scale = 1.2;
      GameData.GameDataObject.isHelpOpen = true;
      scene.helpClose = scene.add.image(1400, 300 - 60, 'HelpClose');
      scene.helpClose
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
          scene.helpPopup.destroy();
          scene.helpClose.destroy();
          scene.helpText.destroy();
          scene.boldText.destroy();
          GameData.GameDataObject.isHelpOpen = false;
        });
      const boldText =
        'Živijo in dobrodošel v Klepetku!\n\n\n\n\n\n\n\n\n\n\n\nŽelim ti veliko lepih trenutkov!\nTvoj Klepetko';
      const helpText =
        'Tukaj se lahko pogovarjaš s\nsvojimi prijatelji, spoznaš nove\nsovrstnike ter se naučiš veliko novega.\n\nSvojega karakterja lahko premikaš s\ntipkami A, W, S in D.\nZa vstopanje v nove prostore in kvize,\nuporabi tipko E.\nZa pošiljanje sporočila pritisni tipko ENTER.';
      scene.helpText = scene.add.text(
        GameData.GameDataObject.width / 2 - 50,
        GameData.GameDataObject.height / 2 - 120 - 60,
        helpText,
        { fontFamily: 'Klepetko1', fontSize: 20, color: '#ED4599' }
      );
      scene.boldText = scene.add.text(
        GameData.GameDataObject.width / 2 - 50,
        GameData.GameDataObject.height / 2 - 155 - 60,
        boldText,
        { fontFamily: 'Klepetko', fontSize: 20, color: '#ED4599' }
      );
    } else {
      scene.helpPopup.destroy();
      scene.helpClose.destroy();
      scene.helpText.destroy();
      scene.boldText.destroy();
      GameData.GameDataObject.isHelpOpen = false;
    }
  };

static setBounds = (scene: any) => {
    scene.matter.add.rectangle(GameData.GameDataObject.width / 2, 0, 1920, 20, 0xff0000, 1).isStatic = true;
    scene.matter.add.rectangle(GameData.GameDataObject.width / 2, GameData.GameDataObject.height, 1920, 200, 0xff0000, 1).isStatic = true;
}

static spawnPlayer = (scene: any) => {
  // Create a player game object
  scene.player = new Player({
      scene: scene,
      x: GameData.PlayerDataObject.position.x,
      y: GameData.PlayerDataObject.position.y,
      texture: GameData.PlayerDataObject.skin,
      frame: GameData.PlayerDataObject.frame,
  }, null, GameData.PlayerDataObject.id, scene.playerName, scene.skinNUM);

  scene.player.inputKeys = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
  }, false);

  // Prevent rotation
  scene.matter.body.setInertia(scene.player.body, Infinity);
  scene.player.setFriction(0);

  // Disable collision between players
  scene.player.body.collisionFilter.group = -1;

  // Set objet name (helps with username)
  scene.player.name = scene.playerName;

  // Register new player to the server
  // if (!registered) {
  //     scene.player.server.register(scene.player);
  //     registered = true;
  // }

  // Create collision events
  // scene.createCollisionEvents();

  // Create hitboxes
  // scene.createHitboxes();

  // Enable messages
  // scene.message = message(scene);
}
}
