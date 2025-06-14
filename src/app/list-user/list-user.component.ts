import { Component } from '@angular/core';
import {IUsuario } from '../models/iusuario';
import { ListUsersService } from '../services/list-users.service';
import { appRoutingModule } from '../app.routing.module';
import { ListaProdutosComponent } from '../lista-produtos/lista-produtos.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(private userService: ListUsersService, private router: Router){}
  displayedColumns = ['id', 'first_name', 'last_name', 'email'];
  dataSource:IUsuario[] = [];


  listaUsuario: IUsuario[] = [
    {
      id: 1,
      first_name: 'Maria',
      last_name: 'Silva',
      email: 'maria@gmail.com'
    },
    {
      id: 2,
      first_name: 'Joao',
      last_name: 'Pedro',
      email: 'joao@joao.com'
    }
  ];


  public listarUsuarios(): void{

    this.userService.listarUsuarios().subscribe((dados)=>{ this.dataSource = dados;
});
  }

  ngOnit(): void{
    this.listarUsuarios;
  }

abrirProdutos(): void{
  this.router.navigate(['/produtos']);
}

irCarrinho(): void{
  this.router.navigate(['/carrinho']);
}

}

