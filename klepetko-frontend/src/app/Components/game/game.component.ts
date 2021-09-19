import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { WebsocketService } from 'src/app/Services/websocket.service';
import { LoginScene } from './Scenes/LoginScene';
import InputTextPlugin from 'phaser3-rex-plugins/plugins/inputtext.js';
import { SchoolyardScene } from "./Scenes/SchoolyardScene";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  welcomeString: any;
  phaserGame: Phaser.Game | undefined;
  config: Phaser.Types.Core.GameConfig;
  pluginManager: Phaser.Plugins.PluginManager | undefined;

  constructor(private wsService: WebsocketService) {
    this.config = {
      type: Phaser.AUTO,
      scene: [LoginScene, SchoolyardScene],
      physics: {
        default: 'matter',
        matter: {
          debug: false,
          gravity: { y: 0 },
          setBounds: true,
        },
      },
      scale: {
        mode: Phaser.Scale.FIT,
        parent: 'game',
        width: 1920,
        height: 1080,
      },
      dom: {
        createContainer: true
      }
    };
  }

  ngOnInit(): void {
    this.wsService.listen('connect').subscribe((data) => {
      console.log(data);
    });

    this.phaserGame = new Phaser.Game(this.config);
    this.pluginManager = new Phaser.Plugins.PluginManager(this.phaserGame);
    // this.pluginManager.install('inputPlugin', PhaserInput.Plugin)

  }
}

// this.wsService.listen('connect')
//       .subscribe((data) => {
//         console.log(data);
//       });
