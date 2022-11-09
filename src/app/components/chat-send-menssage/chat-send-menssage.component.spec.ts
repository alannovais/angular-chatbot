import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSendMenssageComponent } from './chat-send-menssage.component';

describe('ChatSendMenssageComponent', () => {
  let component: ChatSendMenssageComponent;
  let fixture: ComponentFixture<ChatSendMenssageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSendMenssageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSendMenssageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
