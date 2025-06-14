import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUserComponent } from './list-user/list-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListUserComponent,
    ListaProdutosComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }import { appRoutingModule } from './app.routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';

