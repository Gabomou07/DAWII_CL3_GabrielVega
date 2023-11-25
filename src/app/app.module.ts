import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './angular-material/material/material.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriaListaComponent } from './dashboard/categoria/categoria-lista/categoria-lista.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductoDetalleComponent } from './dashboard/producto/producto-detalle/producto-detalle.component';
import { ProductoListaComponent } from './dashboard/producto/producto-lista/producto-lista.component';
import { CursoListaComponent } from './dashboard/curso/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './dashboard/curso/curso-detalle/curso-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    CategoriaListaComponent,
    HomeComponent,
    ProductoDetalleComponent,
    ProductoListaComponent,
    CursoListaComponent,
    CursoDetalleComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path : 'login', component:LoginComponent},
      {path: 'dashboard', component: DashboardComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'curso', component: CursoListaComponent},
        {path: 'curso/:id', component: CursoDetalleComponent},
        {path: 'producto', component: ProductoListaComponent},
        {path: 'producto/:id', component: ProductoDetalleComponent},
        {path: 'categoria', component: CategoriaListaComponent},
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
