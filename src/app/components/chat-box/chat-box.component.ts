import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { PayloadMessage } from 'src/app/interfaces/payload-message';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  payloadMessages: PayloadMessage[] = [];
  userActual: User = {
    id: 0,
    name: '',
  };
  textMessage: string = '';

  constructor() {
    this.userActual.name = 'Olá, fulano';
    this.payloadMessages.push({
      id: this.userActual.id++,
      text: this.userActual.name,
      sender: this.userActual,
    });
  }

  ngOnInit(): void {}

  onSendMessage(_emit: any): any {
    this.textMessage = _emit.text;
    this.payloadMessages.push({
      id: this.userActual.id++,
      text: _emit.text,
      sender: _emit.sender,
    });
  }
}
