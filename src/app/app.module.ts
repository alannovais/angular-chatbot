import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyScreenComponent } from './components/lobby-screen/lobby-screen.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { ChatSendMenssageComponent } from './components/chat-send-menssage/chat-send-menssage.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyScreenComponent,
    ChatBoxComponent,
    ChatSendMenssageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
