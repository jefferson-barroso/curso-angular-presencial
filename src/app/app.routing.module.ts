import { RouterModule, Routes } from "@angular/router";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";
import { NgModule } from "@angular/core";
import { CarrinhoComponent } from "./carrinho/carrinho.component";

const routes: Routes = [
   {path: '', component: ListUserComponent},
   {path: 'produtos', component: ListaProdutosComponent },
   {path: 'carrinho', component: CarrinhoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class appRoutingModule{};
