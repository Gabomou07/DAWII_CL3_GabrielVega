import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './angular-material/material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './menu/home/home.component';
import { Menu1Component } from './menu/menu1/menu1.component';
import { Menu2Component } from './menu/menu2/menu2.component';

import { Menu3Component } from './menu/menu3/menu3.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MenuComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'login', component:LoginComponent},
      {path: 'Menu', component: MenuComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'menu1', component: Menu1Component},
        {path: 'menu2', component: Menu2Component},
        {path: 'menu3', component: Menu3Component},
      ]      
    },
      {path : '',redirectTo:'login',pathMatch:'full'},
      {path : '**', component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
