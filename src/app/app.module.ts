import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ResetComponent } from './modules/auth/reset/reset.component';
import { ExpiredComponent } from './modules/auth/expired/expired.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './modules/main/footer/footer.component';
import { GameComponent } from './modules/main/game/game.component';
import { SidebarComponent } from './modules/main/sidebar/sidebar.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    ExpiredComponent,
    HeaderComponent,
    FooterComponent,
    GameComponent,
    SidebarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
