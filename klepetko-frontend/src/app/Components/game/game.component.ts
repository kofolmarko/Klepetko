import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { AppService } from "src/app/Services/app.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  welcomeString: any;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void { }

  getHomepage() {
    this.appService.getHomepage().subscribe((res) => {
      this.welcomeString = res;
    });
  }

}
