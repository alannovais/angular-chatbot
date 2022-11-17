import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyScreenComponent } from './components/lobby-screen/lobby-screen.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LobbyScreenComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
