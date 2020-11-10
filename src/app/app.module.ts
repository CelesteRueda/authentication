import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/button/button.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/user/user.component';
import { HeroComponent } from './components/hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    NavBarComponent,
    UserProfileComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-2dela79z.us.auth0.com',
      clientId: '0CvwWUCgQKpmJ1Yn7dh4dvGZ0t64Q5dj'
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
