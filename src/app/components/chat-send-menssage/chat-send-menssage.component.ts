import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat-send-menssage',
  templateUrl: './chat-send-menssage.component.html',
  styleUrls: ['./chat-send-menssage.component.scss'],
})

export class ChatSendMenssageComponent implements OnInit {
  @Input() text: String = '';
  @Output() eventSendMessage: EventEmitter<any> = new EventEmitter();

  message: any = {
    text: '',
    sender: '',
  };

  constructor() {
  }
  
  ngOnInit(): void {}
  
  action(): void {
    this.text = 'teste';
    this.message.text = this.text;
    this.message.sender = 'Alan';
    this.eventSendMessage.emit(this.message);
  }
}
