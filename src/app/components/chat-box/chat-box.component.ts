import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PayloadMessage } from 'src/app/interfaces/payload-message';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  payloadMessages: PayloadMessage[] = [];
  userActual: User = {
    id: 0,
    name: 'bot',
  };
  textMessage: string = '';

  constructor() {
    this.payloadMessages.push({
      id: this.userActual.id++,
      text: 'Olá, fulano',
      sender: this.userActual,
    });
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onSendMessage(_emit: PayloadMessage): any {
    console.log(_emit, 'check');
    this.textMessage = _emit.text;
    this.payloadMessages.push({
      id: this.userActual.id++,
      text: _emit.text,
      sender: _emit.sender,
    });
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
