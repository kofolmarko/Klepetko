
export class GameData {
  static Skins = {
    num: [
      'boy_01',
      'boy_02',
      'boy_03',
      'boy_04',
      'girl_01',
      'girl_02',
      'girl_03',
      'girl_04',
    ],
    frame: [
      'boy_m1-c2_front_',
      'boy_m1-c3_front_',
      'boy_m1-c4_front_',
      'boy_m1-c1_front_',
      'girl_m1-c1_front_',
      'girl_m1-c2_front_',
      'girl_m1-c3_front_',
      'girl_m1-c4_front_',
    ],
    path: [
      '../assets/character/Atlases/boy_01.png',
      '../assets/character/Atlases/boy_02.png',
      '../assets/character/Atlases/boy_03.png',
      '../assets/character/Atlases/boy_04.png',
      '../assets/character/Atlases/girl_01.png',
      '../assets/character/Atlases/girl_02.png',
      '../assets/character/Atlases/girl_03.png',
      '../assets/character/Atlases/girl_04.png',
    ],
    atlas: [
      '../assets/character/Atlases/boy_01_atlas.json',
      '../assets/character/Atlases/boy_02_atlas.json',
      '../assets/character/Atlases/boy_03_atlas.json',
      '../assets/character/Atlases/boy_04_atlas.json',
      '../assets/character/Atlases/girl_01_atlas.json',
      '../assets/character/Atlases/girl_02_atlas.json',
      '../assets/character/Atlases/girl_03_atlas.json',
      '../assets/character/Atlases/girl_04_atlas.json',
    ],
    anims: [
      '../assets/character/Atlases/boy_01_anim.json',
      '../assets/character/Atlases/boy_02_anim.json',
      '../assets/character/Atlases/boy_03_anim.json',
      '../assets/character/Atlases/boy_04_anim.json',
      '../assets/character/Atlases/girl_01_anim.json',
      '../assets/character/Atlases/girl_02_anim.json',
      '../assets/character/Atlases/girl_03_anim.json',
      '../assets/character/Atlases/girl_04_anim.json',
    ],
    animsNames: [
      [
        'walk_front_01',
        'walk_back_01',
        'walk_right_01',
        'walk_left_01',
        'idle_front_01',
      ],
      [
        'walk_front_02',
        'walk_back_02',
        'walk_right_02',
        'walk_left_02',
        'idle_front_02',
      ],
      [
        'walk_front_03',
        'walk_back_03',
        'walk_right_03',
        'walk_left_03',
        'idle_front_03',
      ],
      [
        'walk_front_04',
        'walk_back_04',
        'walk_right_04',
        'walk_left_04',
        'idle_front_04',
      ],
      [
        'walk_front_05',
        'walk_back_05',
        'walk_right_05',
        'walk_left_05',
        'idle_front_05',
      ],
      [
        'walk_front_06',
        'walk_back_06',
        'walk_right_06',
        'walk_left_06',
        'idle_front_06',
      ],
      [
        'walk_front_07',
        'walk_back_07',
        'walk_right_07',
        'walk_left_07',
        'idle_front_07',
      ],
      [
        'walk_front_08',
        'walk_back_08',
        'walk_right_08',
        'walk_left_08',
        'idle_front_08',
      ],
    ],
  };

  static GameDataObject = {
    width: 1920,
    height: 1080,
    scene: 'SchoolyardScene',
    isMapOpen: false,
    isHelpOpen: false
  };

  static PlayerDataObject = {
    id: '',
    username: '',
    isMale: true,
    position: {
      x: GameData.GameDataObject.width / 2,
      y: 700,
    },
    skinNum: 0,
    skin: GameData.Skins.num[0],
    frame: GameData.Skins.frame[0],
    framesPath: GameData.Skins.path[0],
    atlasPath: GameData.Skins.atlas[0],
    animsPath: GameData.Skins.anims[0],
    animsNames: GameData.Skins.animsNames[0],
    coins: '0'
  };

  static initPlayerData(data: any) {
    if (data.username) {
      GameData.PlayerDataObject.username = data.username;
      // GameData.PlayerDataObject.chat = document.getElementById('chat');
      // GameData.PlayerDataObject.chatBool = true;
      if (data.isMale == true) {
        GameData.PlayerDataObject.isMale = true;
        GameData.PlayerDataObject.skinNum = Math.floor(Math.random() * 3);
        GameData.PlayerDataObject.skin =
          GameData.Skins.num[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.frame =
          GameData.Skins.frame[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.framesPath =
          GameData.Skins.path[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.atlasPath =
          GameData.Skins.atlas[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.animsPath =
          GameData.Skins.anims[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.animsNames =
          GameData.Skins.animsNames[GameData.PlayerDataObject.skinNum];
      } else {
        GameData.PlayerDataObject.isMale = false;
        GameData.PlayerDataObject.skinNum = Math.floor(Math.random() * 3) + 4;
        GameData.PlayerDataObject.skin = GameData.Skins.num[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.frame = GameData.Skins.frame[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.framesPath =
          GameData.Skins.path[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.atlasPath =
          GameData.Skins.atlas[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.animsPath =
          GameData.Skins.anims[GameData.PlayerDataObject.skinNum];
        GameData.PlayerDataObject.animsNames =
          GameData.Skins.animsNames[GameData.PlayerDataObject.skinNum];
      }
    } else if (data.player) {
      GameData.PlayerDataObject.position = {
        x: this.GameDataObject.width / 2,
        y: 350,
      };
      GameData.PlayerDataObject.username = data.player.usernameText;
      data.player.server.changeRoom(GameData.PlayerDataObject.id, 1);
    }
  }
}
