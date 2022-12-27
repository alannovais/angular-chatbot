import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PayloadMessage } from 'src/app/interfaces/payload-message';

@Component({
  selector: 'app-chat-send-menssage',
  templateUrl: './chat-send-menssage.component.html',
  styleUrls: ['./chat-send-menssage.component.scss'],
})
export class ChatSendMenssageComponent implements OnInit {
  @Input() text: string = '';
  @Output() eventSendMessage: EventEmitter<PayloadMessage> = new EventEmitter();
  textInput: string = '';

  message: any = {
    text: '',
    sender: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.textInput = this.text;
  }

  action(): void {
    if (this.textInput != '') {
      this.message.text = this.textInput;
      this.message.sender = 'Alan';
      this.text = this.textInput = '';
      this.eventSendMessage.emit(this.message);
    }
  }
}
