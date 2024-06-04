import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroReservaComponent } from './cadastro-reserva/cadastro-reserva.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroQuadraComponent},
  { path: 'usuario', component: CadastroUsuarioComponent},
  { path: 'agendamento', component: CadastroReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
