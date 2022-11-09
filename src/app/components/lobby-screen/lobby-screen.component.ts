import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby-screen',
  templateUrl: './lobby-screen.component.html',
  styleUrls: ['./lobby-screen.component.scss']
})
export class LobbyScreenComponent implements OnInit {

  constructor() { }
  userName: String = "";

  ngOnInit(): void {
    this.userName = "Alan";
  }

}
